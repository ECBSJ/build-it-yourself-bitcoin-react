import React, { useEffect, useContext, useState } from "react"
import DispatchContext from "../DispatchContext"
import StateContext from "../StateContext"
import LoadingDotsIcon from "./LoadingDotsIcon"
import Page from "./Page"
import { useImmerReducer } from "use-immer"
import { CSSTransition } from "react-transition-group"
import ReactTooltip from "react-tooltip"
import DisplaySigPageInfo from "./DisplaySigPageInfo"

function DisplaySigPage(props) {
  const appDispatch = useContext(DispatchContext)
  const appState = useContext(StateContext)

  const initialState = {
    isInfoPopOpen: false
  }

  function ourReducer(draft, action) {
    switch (action.type) {
      case "openInfoPop":
        draft.isInfoPopOpen = true
        return
      case "closeInfoPop":
        draft.isInfoPopOpen = false
        return
    }
  }

  const [state, dispatch] = useImmerReducer(ourReducer, initialState)
  const [isLoading, setIsLoading] = useState(true)

  function infoPopHandler(e) {
    e.preventDefault()
    dispatch({ type: "openInfoPop" })
  }

  function closeInfoPopHandler() {
    dispatch({ type: "closeInfoPop" })
  }

  function verifyRemainder(e) {
    e.preventDefault()
    if (document.querySelector("#signature").value == appState.TX.signature && document.querySelector("#publicKey").value == appState.TX.senderPubKey) {
      appDispatch({ type: "flashMessage", value: "Generating transaction hex..." })
      console.log(appState.TX.transactionScript)
      appDispatch({ type: "DisplayTXHexPage" })
    } else {
      window.scrollTo(0, 0)
      appDispatch({ type: "flashMessage", value: "Your inputted Signature and/or Public Key values are incorrect. Please verify.", alert: true })
    }
  }

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
              <DisplaySigPageInfo closeInfoPopHandler={closeInfoPopHandler} />
            </CSSTransition>
          </div>
        </div>
        <div className="descriptionSection">
          <div className="stepTitle">
            Step 8: <br /> Finalize ScriptSig
          </div>
          <div className="detailDescription">Finalize the ScriptSig by combining both the signature and public key.</div>
        </div>
        <div className="panelLabel">Panel 1</div>
        <div className="bolts">..</div>
      </div>
      <div className="row2">
        <div className="labelSection pt-1">
          <div className="mainLabel">DATA FIELD</div>
          <div className="subLabel">Input your signature and public key into its respective fields in panel 3 and then click 'Generate Transaction Hex'. Afterwards, with the given transaction hex formatted string, broadcast your transaction out to the p2p Bitcoin network.</div>
        </div>

        <div className="formSection mt-3 mb-2">
          <div style={{ display: "flex" }} className="">
            <div style={{ margin: "auto", width: "65%" }}>
              <p style={{ fontFamily: "Share Tech Mono", fontSize: "small" }} className="text-break">
                Signature:{" "}
                <code>
                  <strong>{appState.TX.signature}</strong>
                </code>
              </p>
              <p style={{ fontFamily: "Share Tech Mono", fontSize: "small" }} className="text-break">
                Public Key:{" "}
                <code>
                  <strong>{appState.TX.senderPubKey}</strong>
                </code>
              </p>
              <button onClick={verifyRemainder} style={{ width: "100%", fontFamily: "Share Tech Mono" }}>
                Generate Transaction Hex
              </button>
            </div>
          </div>
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
              <input id="signature" className="form-control form-control-sm" type="text" placeholder="Signature" data-for="signature" data-tip="Insert the Signature value from Panel 2 into this Signature field." required />
              <ReactTooltip id="signature" className="custom-tooltip" />
              <input style={{ marginRight: "0px" }} id="publicKey" className="form-control form-control-sm" type="text" placeholder="Public Key" data-for="publicKey" data-tip="Insert the Public Key value from Panel 2 into this Public Key field." required />
              <ReactTooltip id="publicKey" className="custom-tooltip" />
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

export default DisplaySigPage
