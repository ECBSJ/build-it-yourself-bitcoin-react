import React, { useEffect, useContext, useState } from "react"
import axios from "axios"
import DispatchContext from "../DispatchContext"
import StateContext from "../StateContext"
import LoadingDotsIcon from "./LoadingDotsIcon"
import Page from "./Page"
import { useImmerReducer } from "use-immer"
import { CSSTransition } from "react-transition-group"
import SignTXPageInfo from "./SignTXPageInfo"

function SignTXPage(props) {
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

  function signTransaction() {
    appDispatch({ type: "flashMessage", value: "Signing & Generating signature..." })
    appDispatch({ type: "DisplaySigPage" })
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
              <SignTXPageInfo closeInfoPopHandler={closeInfoPopHandler} />
            </CSSTransition>
          </div>
        </div>
        <div className="descriptionSection">
          <div className="stepTitle">
            Step 7: <br /> Sign Transaction
          </div>
          <div className="detailDescription">With the Pre-Signed Transaction Hash, you will now need to take your WIF private key to sign the transaction.</div>
        </div>
        <div className="panelLabel">Panel 1</div>
        <div className="bolts">..</div>
      </div>
      <div className="row2">
        <div className="labelSection pt-1">
          <div className="mainLabel">DATA FIELD</div>
          <div className="subLabel">Click 'Sign transaction' to cryptographically sign the transaction hash.</div>
        </div>

        <div className="formSection mt-3 mb-2">
          <div style={{ display: "flex" }} className="">
            <div style={{ margin: "auto", width: "65%" }}>
              <p style={{ fontFamily: "Share Tech Mono", fontSize: "small" }} className="text-break">
                Pre-Signed Transaction Hash:{" "}
                <code>
                  <strong>{appState.TX.txPreSigned}</strong>
                </code>
              </p>
              <button onClick={signTransaction} style={{ width: "100%", fontFamily: "Share Tech Mono" }}>
                Sign Transaction
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

export default SignTXPage
