import React, { useEffect, useState, useContext } from "react"
import axios from "axios"
import DispatchContext from "../DispatchContext"
import StateContext from "../StateContext"
import { useImmerReducer } from "use-immer"
import AddInfoPop from "./AddInfoPop"
import { CSSTransition } from "react-transition-group"
import * as bitcoin from "bitcoinjs-lib"
import Preview3 from "./Preview3"
import WIFPageInfo from "./WIFPageInfo"

function EnterWIFPage(props) {
  const appDispatch = useContext(DispatchContext)
  const appState = useContext(StateContext)

  const initialState = {
    inputKeyField: {
      value: null,
      hasErrors: false,
      errorMessage: null
    },
    submitFlag: false,
    isInfoPopOpen: false,
    isPreviewOpen: true
  }

  function ourReducer(draft, action) {
    switch (action.type) {
      case "inputKeyRules":
        function keyValidity(key) {
          try {
            bitcoin.ECPair.fromWIF(key, bitcoin.networks.bitcoin)
            return true
          } catch (error) {
            return false
          }
        }

        if (!action.value.trim() || !Boolean(keyValidity(action.value))) {
          draft.inputKeyField.hasErrors = true
          draft.inputKeyField.errorMessage = "You must provide a valid WIF private key."
        }
        return
      case "inputKeyChange":
        draft.inputKeyField.hasErrors = false
        draft.inputKeyField.value = action.value
        return
      case "triggerSubmitFlag":
        if (!draft.inputKeyField.hasErrors) {
          draft.submitFlag = true
        }
        return
      case "openInfoPop":
        draft.isInfoPopOpen = true
        return
      case "closeInfoPop":
        draft.isInfoPopOpen = false
        return
      case "closePreview":
        draft.isPreviewOpen = false
        return
    }
  }

  const [state, dispatch] = useImmerReducer(ourReducer, initialState)

  async function submitHandler(e) {
    e.preventDefault()
    dispatch({ type: "inputKeyRules", value: state.inputKeyField.value })
    await appDispatch({ type: "setWIFkey", value: state.inputKeyField.value })
    await appDispatch({ type: "createTXHash" })
    dispatch({ type: "triggerSubmitFlag" })
  }

  function onChangeHandler(e) {
    dispatch({ type: "inputKeyChange", value: e.target.value })
  }

  function infoPopHandler(e) {
    e.preventDefault()
    dispatch({ type: "openInfoPop" })
  }

  function closeInfoPopHandler() {
    dispatch({ type: "closeInfoPop" })
  }

  function closePreview() {
    dispatch({ type: "closePreview" })
  }

  useEffect(() => {
    if (state.submitFlag) {
      appDispatch({ type: "SignTXPage" })
      appDispatch({ type: "flashMessage", value: "Generating pre-signed transaction hash..." })
    }
  }, [state.submitFlag])

  return (
    <div className="mainInterface text-dark">
      <CSSTransition timeout={330} in={state.isPreviewOpen} classNames="search-overlay" unmountOnExit>
        <Preview3 closePreview={closePreview} />
      </CSSTransition>
      <div className="row1">
        <div className="labelSection pt-1">
          <div className="mainLabel">DESCRIPTION</div>
          <div className="moreButton mt-2">
            <button onClick={infoPopHandler}>More Info</button>
            <CSSTransition timeout={330} in={state.isInfoPopOpen} classNames="search-overlay" unmountOnExit>
              <WIFPageInfo closeInfoPopHandler={closeInfoPopHandler} />
            </CSSTransition>
          </div>
        </div>
        <div className="descriptionSection">
          <div className="stepTitle">
            Step 6: <br /> Enter WIF Key
          </div>
          <div className="detailDescription">Almost done! You will now need to enter the WIF formatted private key pertaining to your public address. Your private key will be used to sign and finalize the transaction.</div>
        </div>
        <div className="panelLabel">Panel 1</div>
        <div className="bolts">..</div>
      </div>
      <div className="row2">
        <div className="labelSection pt-1">
          <div className="mainLabel">DATA FIELD</div>
          <div className="subLabel">Input in your WIF formatted private key to complete the signing of the transaction process.</div>
        </div>

        <div className="formSection">
          <form onSubmit={e => submitHandler(e)} action="">
            <div className="form-group">
              <label className="mb-1 insert">
                <small>
                  <strong>Insert WIF Private Key</strong>
                </small>
              </label>
              <input onBlur={e => dispatch({ type: "inputKeyRules", value: e.target.value })} onChange={e => onChangeHandler(e)} className="form-control form-control-sm" type="text" />
              {state.inputKeyField.hasErrors && <div className="alert alert-danger small liveValidateMessage">{state.inputKeyField.errorMessage}</div>}
            </div>
          </form>
        </div>
        <div className="panelLabel">Panel 2</div>
        <div className="bolts">..</div>
      </div>

      <div className="row3">
        <div className="labelSection pt-1">
          <div className="mainLabel">TX BUILDER</div>
          <div className="subLabel" style={{ textAlign: "right", color: "darkGray", fontSize: "x-small" }}>
            Transaction fees &#40;sats&#41;: <strong>{appState.TX.fee}</strong>
          </div>
        </div>

        <div className="builderSection">
          <div className="TX-label-section">
            <div className="TXIN-label">TXIN</div>
            <div className="TXOUT-label">TXOUT</div>
          </div>
          <div className="TX-input-section">
            <div className="TXIN-inputs">
              <input className="form-control form-control-sm" type="text" placeholder={appState.TXIN.tx_id} disabled />
              <input className="form-control form-control-sm" type="text" placeholder={appState.TXIN.output} disabled />
              <input className="form-control form-control-sm" type="text" placeholder={appState.TXIN.value} disabled />
              <input className="form-control form-control-sm" type="text" placeholder="ScriptSig" disabled />
            </div>
            <div className="TXOUT-inputs">
              <input className="form-control form-control-sm" type="text" placeholder={appState.TXOUT.recAdd} disabled />
              <input className="form-control form-control-sm" type="text" placeholder={appState.TXOUT.amount} disabled />
              <input className="form-control form-control-sm" type="text" placeholder={appState.TXOUT.scriptPubKey} disabled />
            </div>
          </div>
        </div>
        <div className="panelLabel">Panel 3</div>
        <div className="bolts">..</div>
      </div>
    </div>
  )
}

export default EnterWIFPage
