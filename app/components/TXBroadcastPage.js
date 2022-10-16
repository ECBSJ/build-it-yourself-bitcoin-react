import React, { useEffect, useContext, useState } from "react"
import DispatchContext from "../DispatchContext"
import StateContext from "../StateContext"
import LoadingDotsIcon from "./LoadingDotsIcon"
import Page from "./Page"
import { useImmerReducer } from "use-immer"
import { CSSTransition } from "react-transition-group"
import ReactTooltip from "react-tooltip"

function TXBroadcastPage(props) {
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
        </div>
        <div className="descriptionSection">
          <div className="stepTitle">
            Step 10: <br /> TX Broadcasted
          </div>
          <div className="detailDescription">Your transaction has now been broadcasted to the Bitcoin network. The result, whether it was successful or if there was an error associated with your transaction, will be shown in Panel 2 below.</div>
        </div>
        <div className="panelLabel">Panel 1</div>
        <div className="bolts">..</div>
      </div>
      <div className="row2">
        <div className="labelSection pt-1">
          <div className="mainLabel">DATA FIELD</div>
          <div className="subLabel">Congratulations! You have put together your own bitcoin transaction and have successfully broadcasted it to the network. With the given transaction hash string, you can go onto any public bitcoin explorer to see the status of the transaction.</div>
        </div>

        <div className="formSection mt-4 mb-4">
          <div style={{ display: "flex" }} className="">
            <div style={{ margin: "auto", width: "45%" }}>
              {appState.TX.transactionHash && (
                <>
                  <p style={{ fontFamily: "Share Tech Mono", fontSize: "small" }} className="text-break">
                    Final Transaction Hash &#40;id&#41;:{" "}
                    <code>
                      <strong>{appState.TX.transactionHash}</strong>
                    </code>
                  </p>
                  <form action={"https://mempool.space/tx/" + appState.TX.transactionHash} method="get" target="_blank">
                    <button style={{ width: "100%", fontFamily: "Share Tech Mono" }}>Transaction Status</button>
                  </form>
                </>
              )}

              {appState.TX.broadcastError && (
                <>
                  <p style={{ fontFamily: "Share Tech Mono", fontSize: "small" }} className="text-break">
                    Transaction Error:{" "}
                    <code>
                      <strong>{appState.TX.broadcastError}</strong>
                    </code>
                  </p>
                  <p style={{ fontFamily: "Share Tech Mono", fontSize: "small" }} className="text-break">
                    There was an error detected with your transaction hex used. Check to make sure your transaction does not have any errors and start over by click on 'Reset Builder' below the dashboard.
                  </p>
                </>
              )}
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
              <input className="form-control form-control-sm" type="text" placeholder={appState.TX.signature} disabled />
              <input style={{ marginRight: "0px" }} className="form-control form-control-sm" type="text" placeholder={appState.TX.senderPubKey} disabled />
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

export default TXBroadcastPage
