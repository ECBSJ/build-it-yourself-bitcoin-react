import React, { useEffect, useContext, useState } from "react"
import DispatchContext from "../DispatchContext"
import StateContext from "../StateContext"
import LoadingDotsIcon from "./LoadingDotsIcon"
import Page from "./Page"
import { useImmerReducer } from "use-immer"
import { CSSTransition } from "react-transition-group"
import ReactTooltip from "react-tooltip"
import DisplayTXHexPageInfo from "./DisplayTXHexPageInfo"
import fetch from "node-fetch"

function DisplayTXHexPage(props) {
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

  // async function broadcastTX() {
  //   const {
  //     bitcoin: { transactions }
  //   } = mempoolJS({
  //     hostname: "mempool.space"
  //   })

  //   const txHex = appState.TX.transactionHex

  //   try {
  //     const txid = await transactions.postTx({ txHex })
  //     console.log(txid)
  //     appDispatch({ type: "setTransactionHash", value: txid })
  //   } catch (error) {
  //     console.log(error.response.data)
  //     appDispatch({ type: "setBroadcastError", value: error.response.data })
  //   }
  // }

  async function broadcastTX() {
    var myHeaders = new fetch.Headers()
    myHeaders.append("Content-Type", "text/plain")

    const response = await fetch("https://mempool.space/api/tx", {
      method: "POST",
      headers: myHeaders,
      body: appState.TX.transactionHex,
      redirect: "follow"
    })
      .then(response => response.text())
      .then(result => {
        if (result.includes("error")) {
          appDispatch({ type: "setBroadcastError", value: result })
        } else {
          appDispatch({ type: "setTransactionHash", value: result })
        }
      })
      .catch(error => console.log("error", error))
  }

  async function broadcast(e) {
    e.preventDefault()
    await broadcastTX()
    appDispatch({ type: "flashMessage", value: "Broadcasting transaction..." })
    appDispatch({ type: "TXBroadcastPage" })
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
              <DisplayTXHexPageInfo closeInfoPopHandler={closeInfoPopHandler} />
            </CSSTransition>
          </div>
        </div>
        <div className="descriptionSection">
          <div className="stepTitle">
            Step 9: <br /> Broadcast TX
          </div>
          <div className="detailDescription">With the transaction hex finalized and signed, you can now proceed to take the transaction hex below and broadcast it to the p2p Bitcoin network.</div>
        </div>
        <div className="panelLabel">Panel 1</div>
        <div className="bolts">..</div>
      </div>
      <div className="row2">
        <div className="labelSection pt-1">
          <div className="mainLabel">DATA FIELD</div>
          <div className="subLabel">In Panel 2, click on 'Broadcast Transaction' to complete the transaction. The following page will display the final transaction id/hash, which you can then look up on a bitcoin block explorer to track it's status.</div>
        </div>

        <div className="formSection mt-3 mb-2">
          <div style={{ display: "flex" }} className="">
            <div style={{ margin: "auto", width: "65%" }}>
              <p style={{ fontFamily: "Share Tech Mono", fontSize: "small" }} className="text-break">
                Finalized Transaction Hex:{" "}
                <code>
                  <strong>{appState.TX.transactionHex}</strong>
                </code>
              </p>
              <button onClick={broadcast} style={{ width: "100%", fontFamily: "Share Tech Mono" }}>
                Broadcast Transaction
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

export default DisplayTXHexPage
