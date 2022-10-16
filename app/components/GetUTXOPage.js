import React, { useEffect, useContext, useState } from "react"
import StateContext from "../StateContext"
import DispatchContext from "../DispatchContext"
import LoadingDotsIcon from "./LoadingDotsIcon"
import Page from "./Page"
import GetUTXOPageInfo from "./GetUTXOPageInfo"
import { useImmerReducer } from "use-immer"
import { CSSTransition } from "react-transition-group"
import ReactTooltip from "react-tooltip"

function GetUTXOPage() {
  const appState = useContext(StateContext)
  const appDispatch = useContext(DispatchContext)

  const initialState = {
    isInfoPopOpen: false,
    TXIN: {
      tx_id: null,
      output: null,
      value: null
    }
  }

  function ourReducer(draft, action) {
    switch (action.type) {
      case "openInfoPop":
        draft.isInfoPopOpen = true
        return
      case "closeInfoPop":
        draft.isInfoPopOpen = false
        return
      case "setINPUTTEDtx_id":
        draft.TXIN.tx_id = action.value
        return
      case "setINPUTTEDoutput":
        draft.TXIN.output = action.value
        return
      case "setINPUTTEDvalue":
        draft.TXIN.value = action.value
        return
    }
  }

  async function verifyINPUTTED(e) {
    e.preventDefault()
    if (state.TXIN.tx_id == appState.UTXO.tx_hash && state.TXIN.output == appState.UTXO.tx_output_n && state.TXIN.value == appState.UTXO.value) {
      await appDispatch({ type: "setINPUTTEDtx_id", value: state.TXIN.tx_id })
      await appDispatch({ type: "setINPUTTEDoutput", value: state.TXIN.output })
      await appDispatch({ type: "setINPUTTEDvalue", value: state.TXIN.value })
      appDispatch({ type: "EnterOutputAddPage" })
    } else {
      window.scrollTo(0, 0)
      appDispatch({ type: "flashMessage", value: "One or more of the TXIN inputs are incorrect. Please verify inputted values.", alert: true })
    }
  }

  const [state, dispatch] = useImmerReducer(ourReducer, initialState)

  function infoPopHandler(e) {
    e.preventDefault()
    dispatch({ type: "openInfoPop" })
  }

  function closeInfoPopHandler() {
    dispatch({ type: "closeInfoPop" })
  }

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loading = setTimeout(() => setIsLoading(false), 2000)
    return () => clearTimeout(loading)
  }, [])

  if (isLoading)
    return (
      <Page title="Dashboard">
        <LoadingDotsIcon />
      </Page>
    )

  return (
    <div className="mainInterface text-dark">
      <div className="row1">
        <div className="labelSection pt-1">
          <div className="mainLabel">DESCRIPTION</div>
          <div className="moreButton mt-2">
            <button onClick={infoPopHandler}>More Info</button>
            <CSSTransition timeout={330} in={state.isInfoPopOpen} classNames="search-overlay" unmountOnExit>
              <GetUTXOPageInfo closeInfoPopHandler={closeInfoPopHandler} />
            </CSSTransition>
          </div>
        </div>
        <div className="descriptionSection">
          <div className="stepTitle">
            Step 3: <br /> Start TX Builder
          </div>
          <div className="detailDescription">With your UTXO displaying, you can now start to build your transaction by inputting TXIn details. First start inputting the necessary details for TXIn: TX ID, Output, and Value.</div>
        </div>
        <div className="panelLabel">Panel 1</div>
        <div className="bolts">..</div>
      </div>
      <div className="row2">
        <div className="labelSection pt-1">
          <div className="mainLabel">DATA FIELD</div>
          <div className="subLabel">If there is more than 1 UTXO locked to this address, you will need to use another address with only one UTXO. This app only allows for 1 TXIN and does not supply you with a change address.</div>
        </div>

        <div className="formSection mt-3">
          <form action="">
            <div className="form-group UTXOdata">
              <div className="row">
                <div className="col">
                  <p className="text-break mb-2 pb-0">
                    script:{" "}
                    <code>
                      <strong>{appState.UTXO.script}</strong>
                    </code>
                  </p>
                </div>
                <div className="col">
                  <p className="text-break mb-2 pb-0">
                    tx_hash:{" "}
                    <code>
                      <strong>{appState.UTXO.tx_hash}</strong>
                    </code>
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <p className="text-break mb-2 pb-0">
                    tx_index:{" "}
                    <code>
                      <strong>{appState.UTXO.tx_index}</strong>
                    </code>
                  </p>
                </div>
                <div className="col">
                  <p className="text-break mb-2 pb-0">
                    tx_output_n:{" "}
                    <code>
                      <strong>{appState.UTXO.tx_output_n}</strong>
                    </code>
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <p className="text-break">
                    value &#40;sats&#41;:{" "}
                    <code>
                      <strong>{appState.UTXO.value}</strong>
                    </code>
                  </p>
                </div>
                <div className="col">
                  <p className="text-break">
                    confirmations:{" "}
                    <code>
                      <strong>{appState.UTXO.confirmations}</strong>
                    </code>
                  </p>
                </div>
              </div>
            </div>
          </form>
          <div className="nextButton">
            <button style={{ fontFamily: "Share Tech Mono" }} onClick={verifyINPUTTED}>
              Next
            </button>
          </div>
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
              <input onChange={e => dispatch({ type: "setINPUTTEDtx_id", value: e.target.value })} className="form-control form-control-sm" type="text" placeholder="TX ID" data-tip="Insert the tx_hash value from Panel 2 into this TX ID field." data-for="txid" required />
              <ReactTooltip id="txid" className="custom-tooltip" />
              <input onChange={e => dispatch({ type: "setINPUTTEDoutput", value: e.target.value })} className="form-control form-control-sm" type="text" placeholder="Output" data-tip="Insert the tx_output_n value from Panel 2 into this Output field." data-for="output" required />
              <ReactTooltip id="output" className="custom-tooltip" />
              <input onChange={e => dispatch({ type: "setINPUTTEDvalue", value: e.target.value })} className="form-control form-control-sm" type="text" placeholder="Value" data-tip="Insert the 'value' value from Panel 2 into this Value field. Then click NEXT." data-for="value" required />
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

export default GetUTXOPage
