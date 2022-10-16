import React, { useEffect, useState, useContext } from "react"
import axios from "axios"
import DispatchContext from "../DispatchContext"
import StateContext from "../StateContext"
import { useImmerReducer } from "use-immer"
import { CSSTransition } from "react-transition-group"
import Preview2 from "./Preview2"
import OutputAddInfo from "./OutputAddInfo"
import * as bitcoin from "bitcoinjs-lib"
import ReactTooltip from "react-tooltip"
import * as base58 from "bs58"

function EnterOutputAddPage(props) {
  const appDispatch = useContext(DispatchContext)
  const appState = useContext(StateContext)

  const initialState = {
    outputAddField: {
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
      case "outputAddRules":
        function addressValidity(address) {
          try {
            bitcoin.address.toOutputScript(address, bitcoin.networks.bitcoin)
            return true
          } catch (error) {
            return false
          }
        }

        if (!action.value.trim() || !(action.value.startsWith("1") && action.value.length == 34 && Boolean(addressValidity(action.value)))) {
          draft.outputAddField.hasErrors = true
          draft.outputAddField.errorMessage = "You must provide a valid P2PKH address."
        }
        return
      case "outputAddChange":
        draft.outputAddField.hasErrors = false
        draft.outputAddField.value = action.value
        return
      case "triggerSubmitFlag":
        if (!draft.outputAddField.hasErrors) {
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

  function submitHandler(e) {
    e.preventDefault()
    dispatch({ type: "outputAddRules", value: state.outputAddField.value })
    dispatch({ type: "triggerSubmitFlag" })
  }

  function onChangeHandler(e) {
    dispatch({ type: "outputAddChange", value: e.target.value })
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
      async function buildSPK() {
        try {
          const bytes = base58.decode(state.outputAddField.value)
          const hash160 = bytes.slice(1, 21)
          appDispatch({ type: "setHash160", value: Buffer.from(hash160).toString("hex") })
          appDispatch({ type: "setINPUTTEDrecAdd", value: state.outputAddField.value })
          appDispatch({ type: "flashMessage", value: "Decoding base58 of output address..." })
          appDispatch({ type: "BuildScriptPubKeyPage" })
        } catch (error) {
          console.log(error)
        }
      }
      buildSPK()
    }
  }, [state.submitFlag])

  return (
    <div className="mainInterface text-dark">
      <CSSTransition timeout={330} in={state.isPreviewOpen} classNames="search-overlay" unmountOnExit>
        <Preview2 closePreview={closePreview} />
      </CSSTransition>
      <div className="row1">
        <div className="labelSection pt-1">
          <div className="mainLabel">DESCRIPTION</div>
          <div className="moreButton mt-2">
            <button onClick={infoPopHandler}>More Info</button>
            <CSSTransition timeout={330} in={state.isInfoPopOpen} classNames="search-overlay" unmountOnExit>
              <OutputAddInfo closeInfoPopHandler={closeInfoPopHandler} />
            </CSSTransition>
          </div>
        </div>
        <div className="descriptionSection">
          <div className="stepTitle">
            Step 4: <br /> Input Output Add
          </div>
          <div className="detailDescription">A ScriptPubKey lock needs to be formed from the hash160 of the receiving address. On the following page, you will see the 20 byte sized hash160 of the raw public key which will then be concatenated with a selection of OP codes to form the ScriptPubKey.</div>
        </div>
        <div className="panelLabel">Panel 1</div>
        <div className="bolts">..</div>
      </div>
      <div className="row2">
        <div className="labelSection pt-1">
          <div className="mainLabel">DATA FIELD</div>
          <div className="subLabel">Input the receiving BTC address (either a P2PKH or P2WPKH) to unstrip and reveal its public key hash160 format. A P2PKH burn address is also valid in this app.</div>
        </div>

        <div className="formSection">
          <form onSubmit={submitHandler} action="">
            <div className="form-group">
              <label className="mb-1 insert">
                <small>
                  <strong>Insert Output Address</strong>
                </small>
              </label>
              <input onBlur={e => dispatch({ type: "outputAddRules", value: e.target.value })} onChange={e => onChangeHandler(e)} className="form-control form-control-sm" type="text" />
              {state.outputAddField.hasErrors && <div className="alert alert-danger small liveValidateMessage">{state.outputAddField.errorMessage}</div>}
            </div>
          </form>
        </div>
        <div className="panelLabel">Panel 2</div>
        <div className="bolts">..</div>
      </div>

      <div className="row3">
        <div className="labelSection pt-1">
          <div className="mainLabel">TX BUILDER</div>
        </div>

        <div className="builderSection">
          <div className="TX-label-section">
            <div className="TXIN-label">TXIN</div>
            <div className="TXOUT-label">TXOUT</div>
          </div>
          <div className="TX-input-section">
            <div className="TXIN-inputs">
              <input className="form-control form-control-sm" type="text" placeholder={appState.TXIN.tx_id} data-for="txid" data-tip={appState.TXIN.tx_id} disabled />
              <ReactTooltip id="txid" className="custom-tooltip" />
              <input className="form-control form-control-sm" type="text" placeholder={appState.TXIN.output} data-for="output" data-tip={appState.TXIN.output} disabled />
              <ReactTooltip id="output" className="custom-tooltip" />
              <input className="form-control form-control-sm" type="text" placeholder={appState.TXIN.value} data-for="value" data-tip={appState.TXIN.value} disabled />
              <ReactTooltip id="value" className="custom-tooltip" />
              <input className="form-control form-control-sm" type="text" placeholder="ScriptSig" disabled />
            </div>
            <div className="TXOUT-inputs">
              <input className="form-control form-control-sm" type="text" placeholder="RecAdd" disabled />
              <input className="form-control form-control-sm" type="text" placeholder="Amount" disabled />
              <input className="form-control form-control-sm" type="text" placeholder="ScriptPubKey" disabled />
            </div>
          </div>
        </div>
        <div className="panelLabel">Panel 3</div>
        <div className="bolts">..</div>
      </div>
    </div>
  )
}

export default EnterOutputAddPage
