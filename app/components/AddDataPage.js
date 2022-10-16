import React, { useEffect, useContext, useState } from "react"
import axios from "axios"
import DispatchContext from "../DispatchContext"
import StateContext from "../StateContext"
import LoadingDotsIcon from "./LoadingDotsIcon"
import Page from "./Page"
import { useImmerReducer } from "use-immer"
import { CSSTransition } from "react-transition-group"
import AddDataPageInfo from "./AddDataPageInfo"

function AddDataPage(props) {
  // function handleBack() {
  //   props.setAddSearched(false)
  //   localStorage.removeItem('addressData')
  // }

  const appDispatch = useContext(DispatchContext)
  const appState = useContext(StateContext)

  const queryUTXOurl = "https://blockchain.info/unspent?active="

  useEffect(() => {
    if (!appState.senderData.balance == 0) {
      axios.get(queryUTXOurl + appState.senderData.pubAdd).then(res => {
        appDispatch({ type: "storeUTXOdata", data: res.data["unspent_outputs"] })
        console.log(res.data["unspent_outputs"])
      })
    }
  }, [])

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

  async function queryUTXO(e) {
    e.preventDefault()

    try {
      // await axios.get(queryUTXOurl + appState.senderData.pubAdd).then(res => {
      //   appDispatch({ type: "storeUTXOdata", data: res.data["unspent_outputs"] })
      //   console.log(res.data["unspent_outputs"])
      // })
      appDispatch({ type: "flashMessage", value: "Querying UTXO data..." })
      appDispatch({ type: "GetUTXOPage" })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="mainInterface text-dark">
      <div className="row1">
        <div className="labelSection pt-1">
          <div className="mainLabel">DESCRIPTION</div>
          <div className="moreButton mt-2">
            <button onClick={infoPopHandler}>More Info</button>
            <CSSTransition timeout={330} in={state.isInfoPopOpen} classNames="search-overlay" unmountOnExit>
              <AddDataPageInfo closeInfoPopHandler={closeInfoPopHandler} />
            </CSSTransition>
          </div>
        </div>
        <div className="descriptionSection">
          <div className="stepTitle">
            Step 2: <br /> Retrieve UTXO
          </div>
          <div className="detailDescription">Metadata pertaining to your address is displayed in the Data Field. If the current balance is not zero, there are available UTXOs pertaining to your address. Click on 'Grab UTXO' in Panel 2's Data Field to query the single UTXO available.</div>
        </div>
        <div className="panelLabel">Panel 1</div>
        <div className="bolts">..</div>
      </div>
      <div className="row2">
        <div className="labelSection pt-1">
          <div className="mainLabel">DATA FIELD</div>
          <div className="subLabel">If there is more than 1 UTXO locked to this address, you will need to use another address with only one UTXO. This app only allows for 1 TXIN and does not supply you with a change address. Click 'Reset Builder' if needed.</div>
        </div>

        <div className="formSection mt-2">
          <form action="">
            <div className="form-group">
              <div className="row senderData-pubAdd mt-2">
                <label className="insert">
                  <small>
                    <strong>
                      Data for P2PKH Address: <code>// {appState.senderData.pubAdd}</code>
                    </strong>
                  </small>
                </label>
              </div>
              <div className="row senderData-rest mt-1">
                {!appState.senderData.balance == 0 ? (
                  <>
                    <div className="col rest-left">
                      <p className="mb-1 pb-0">
                        Current Balance &#40;sats&#41;:{" "}
                        <code>
                          <strong>{appState.senderData.balance}</strong>
                        </code>
                      </p>
                      <p className="">
                        # Of Historical TX's:{" "}
                        <code>
                          <strong>{appState.senderData.numTxs}</strong>
                        </code>
                      </p>
                    </div>
                    <div className="col rest-right">
                      <p className="mb-1 pb-0">
                        Historical Total Received &#40;sats&#41;:{" "}
                        <code>
                          <strong>{appState.senderData.historicalRcvd}</strong>
                        </code>
                      </p>
                      <button className="" onClick={queryUTXO} disabled={appState.senderData.numofUTXOs == 1 ? false : true}>
                        {appState.senderData.numofUTXOs > 1 ? "Invalid # UTXOs" : "Grab UTXO"}
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="mb-3">No UTXOs encumbered by the provided P2PKH address. Please click 'Reset Builder' below to use a different P2PKH address that currently has only 1 UTXO.</div>
                  </>
                )}
              </div>
            </div>
          </form>
          <div className="footer"># of UTXOs locked to this address: {appState.senderData.numofUTXOs ? appState.senderData.numofUTXOs : 0}</div>
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

export default AddDataPage
