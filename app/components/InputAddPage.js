import React, { useEffect, useState, useContext } from "react"
import axios from "axios"
import DispatchContext from "../DispatchContext"
import StateContext from "../StateContext"
import { useImmerReducer } from "use-immer"
import AddInfoPop from "./AddInfoPop"
import { CSSTransition } from "react-transition-group"
import Preview1 from "./Preview1"
import * as bitcoin from "bitcoinjs-lib"

function InputAddPage(props) {
  const url = "https://blockchain.info/balance?active="
  const testAdd = "bc1q0u0vqc4mzj96nshd2yaamd7rssetl35adprmzm"

  const appDispatch = useContext(DispatchContext)
  const appState = useContext(StateContext)

  const initialState = {
    inputAddField: {
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
      case "inputAddRules":
        function addressValidity(address) {
          try {
            bitcoin.address.toOutputScript(address, bitcoin.networks.bitcoin)
            return true
          } catch (error) {
            return false
          }
        }

        if (!action.value.trim() || !(action.value.startsWith("1") && action.value.length == 34 && Boolean(addressValidity(action.value)))) {
          draft.inputAddField.hasErrors = true
          draft.inputAddField.errorMessage = "You must provide a valid P2PKH address."
        }
        return
      case "inputAddChange":
        draft.inputAddField.hasErrors = false
        draft.inputAddField.value = action.value
        return
      case "triggerSubmitFlag":
        if (!draft.inputAddField.hasErrors) {
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
    dispatch({ type: "inputAddRules", value: state.inputAddField.value })
    dispatch({ type: "triggerSubmitFlag" })
  }

  function onChangeHandler(e) {
    dispatch({ type: "inputAddChange", value: e.target.value })
    appDispatch({ type: "setSenderDataPubAdd", value: e.target.value })
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
    const ourRequest = axios.CancelToken.source()

    if (state.submitFlag) {
      async function queryAddress() {
        try {
          await axios.get(url + appState.senderData.pubAdd, { cancelToken: ourRequest.token }).then(res => {
            appDispatch({ type: "storeAddData", data: res.data[appState.senderData.pubAdd] })
          })
          // localStorage.setItem("addressData", res.data)
          appDispatch({ type: "flashMessage", value: "Retrieving address metadata..." })
          appDispatch({ type: "AddDataPage" })
        } catch (error) {
          console.log(error)
        }
      }
      queryAddress()
    }
    return () => {
      ourRequest.cancel()
    }
  }, [state.submitFlag])

  return (
    <div className="mainInterface text-dark">
      <CSSTransition timeout={330} in={state.isPreviewOpen} classNames="search-overlay" unmountOnExit>
        <Preview1 closePreview={closePreview} />
      </CSSTransition>
      <div className="row1">
        <div className="labelSection pt-1">
          <div className="mainLabel">DESCRIPTION</div>
          <div className="moreButton mt-2">
            <button onClick={infoPopHandler}>More Info</button>
            <CSSTransition timeout={330} in={state.isInfoPopOpen} classNames="search-overlay" unmountOnExit>
              <AddInfoPop closeInfoPopHandler={closeInfoPopHandler} />
            </CSSTransition>
          </div>
        </div>
        <div className="descriptionSection">
          <div className="stepTitle">
            Step 1: <br /> Address Lookup
          </div>
          <div className="detailDescription">This tutorial starts out with inputting an existing bitcoin address into the Data Field below. Enter in a P2PKH bitcoin address to retrieve necessary UTXO metadata. Highly advised to use a private key/public address pair that you don’t plan to use again for security purposes.</div>
        </div>
        <div className="panelLabel">Panel 1</div>
        <div className="bolts">..</div>
      </div>
      <div className="row2">
        <div className="labelSection pt-1">
          <div className="mainLabel">DATA FIELD</div>
          <div className="subLabel">If there is more than 1 UTXO locked to this address, you will need to use another address with only one UTXO. This app only allows for 1 TXIN and does not supply you with a change address. After inserting address, hit Enter.</div>
        </div>

        <div className="formSection">
          <form onSubmit={submitHandler} action="">
            <div className="form-group">
              <label className="mb-1 insert">
                <small>
                  <strong>Insert P2PKH Address</strong>
                </small>
              </label>
              <input onBlur={e => dispatch({ type: "inputAddRules", value: e.target.value })} onChange={e => onChangeHandler(e)} className="form-control form-control-sm" type="text" />
              {state.inputAddField.hasErrors && <div className="alert alert-danger small liveValidateMessage">{state.inputAddField.errorMessage}</div>}
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
              <input className="form-control form-control-sm" type="text" placeholder="TX ID" disabled />
              <input className="form-control form-control-sm" type="text" placeholder="Output" disabled />
              <input className="form-control form-control-sm" type="text" placeholder="Value" disabled />
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

export default InputAddPage
