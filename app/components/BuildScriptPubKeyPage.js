import React, { useEffect, useContext, useState } from "react"
import StateContext from "../StateContext"
import DispatchContext from "../DispatchContext"
import LoadingDotsIcon from "./LoadingDotsIcon"
import Page from "./Page"
import ScriptPubKeyPageInfo from "./ScriptPubKeyPageInfo"
import { useImmerReducer } from "use-immer"
import { CSSTransition } from "react-transition-group"
import ReactTooltip from "react-tooltip"
import * as bitcoin from "bitcoinjs-lib"

function BuildScriptPubKeyPage() {
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

  async function generateSPK(e) {
    e.preventDefault()
    if (document.querySelector("#dup").value == "OP_DUP" && document.querySelector("#hash160").value == "OP_HASH160" && document.querySelector("#equalVerify").value == "OP_EQUALVERIFY" && document.querySelector("#checkSig").value == "OP_CHECKSIG") {
      const SPK = bitcoin.address.toOutputScript(appState.TXOUT.recAdd, bitcoin.networks.bitcoin)
      appDispatch({ type: "setINPUTTEDscriptPubKey", value: Buffer.from(SPK).toString("hex") })
      document.querySelector(".generatedSPKbutton").style.display = "none"
      document.querySelector(".verifyRemainderbutton").style.display = "block"
    } else {
      window.scrollTo(0, 0)
      appDispatch({ type: "flashMessage", value: "One or more of the opcode inputs are incorrect. Please verify inputted opcodes.", alert: true })
    }
  }

  function verifyRemainder(e) {
    e.preventDefault()
    const fee = appState.TXIN.value - document.querySelector("#amount").value
    if (document.querySelector("#scriptPubKey").value == appState.TXOUT.scriptPubKey && document.querySelector("#amount").value.trim() && fee > 300) {
      appDispatch({ type: "setINPUTTEDamount", value: document.querySelector("#amount").value })
      appDispatch({ type: "EnterWIFPage" })
    } else {
      window.scrollTo(0, 0)
      appDispatch({ type: "flashMessage", value: "Error: Either the minimum transaction fee is not greater than 300 sats or the inputted ScriptPubKey is invalid.", alert: true })
    }
  }

  function feeHandler(e) {
    let fee = appState.TXIN.value - e.target.value
    if (fee == appState.TXIN.value) {
      fee = 0
    }
    appDispatch({ type: "setFee", value: fee })
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
              <ScriptPubKeyPageInfo closeInfoPopHandler={closeInfoPopHandler} />
            </CSSTransition>
          </div>
        </div>
        <div className="descriptionSection">
          <div className="stepTitle">
            Step 5: <br /> Build ScriptPubKey
          </div>
          <div className="detailDescription">Now with the hash160 of the receiving address revealed, package the necessary Script operators to generate the actual ScriptPubKey. Script is a programming language, and like most programming languages, it processes one command at a time. The Script Opcode commands operate on a stack of elements shown below.</div>
        </div>
        <div className="panelLabel">Panel 1</div>
        <div className="bolts">..</div>
      </div>
      <div className="row2">
        <div className="labelSection pt-1">
          <div className="mainLabel">DATA FIELD</div>
          <div className="subLabel">Input the correct Script operators in its corresponding field. For example, type 'OP_DUP' in the field labeled as 'OP_DUP'. Complete this for the other 3 fields and click on 'Compile ScriptPubKey'.</div>
        </div>

        <div className="formSection mt-3">
          <form action="">
            <div className="SPK">
              <div className="compileSPK mb-3">
                <div className="row-OP">
                  <input id="dup" className="form-control form-control-sm" type="text" placeholder="OP_DUP / 0x76" data-for="dup" data-tip="Type OP_DUP into this field." required />
                  <ReactTooltip id="dup" className="custom-tooltip" />
                </div>
                <div className="row-OP">
                  <input id="hash160" className="form-control form-control-sm" type="text" placeholder="OP_HASH160 / 0xa9" data-for="hash160" data-tip="Type OP_HASH160 into this field." required />
                  <ReactTooltip id="hash160" className="custom-tooltip" />
                </div>
                <div className="row-OP">
                  <input className="hash160" type="text" placeholder={appState.TXOUT.hash160} data-for="rawHash160" data-tip="The extracted public key hash160 from the receiving address." disabled />
                  <ReactTooltip id="rawHash160" className="custom-tooltip" />
                </div>
                <div className="row-OP">
                  <input id="equalVerify" className="form-control form-control-sm" type="text" placeholder="OP_EQUALVERIFY / 0x88" data-for="equalVerify" data-tip="Type OP_EQUALVERIFY into this field." required />
                  <ReactTooltip id="equalVerify" className="custom-tooltip" />
                </div>
                <div className="row-OP">
                  <input id="checkSig" className="form-control form-control-sm" type="text" placeholder="OP_CHECKSIG / 0xac" data-for="checkSig" data-tip="Type OP_CHECKSIG into this field." required />
                  <ReactTooltip id="checkSig" className="custom-tooltip" />
                </div>
              </div>
              <div className="generatedSPK">
                <div className="mb-1 generatedSPKbutton">
                  <button style={{ width: "100%" }} onClick={generateSPK}>
                    Generate ScriptPubKey
                  </button>
                </div>
                <div className="mb-1 text-break">
                  Generated ScriptPubKey:{" "}
                  <code>
                    <strong>{appState.TXOUT.scriptPubKey ? appState.TXOUT.scriptPubKey : "null"}</strong>
                  </code>
                </div>
                <div className="completedSPK mb-2">Once generated, copy/paste the generated ScriptPubKey hash into the ScriptPubKey field in the tx builder form below in panel 3. Lastly, input the amount intended to send out in sats excluding fees.</div>
                <div className="verifyRemainderbutton" style={{ display: "none" }}>
                  <button style={{ width: "100%" }} onClick={verifyRemainder}>
                    Input Private Key
                  </button>
                </div>
              </div>
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
            Transaction fees &#40;sats&#41;: <strong style={appState.TX.fee > 300 ? { color: "green" } : { color: "red" }}>{appState.TX.fee ? appState.TX.fee : 0}</strong>
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
              <input onChange={e => feeHandler(e)} id="amount" className="form-control form-control-sm" type="text" placeholder="Amount" data-for="amount" data-tip="Input the amount intended to send out excluding estimated transaction fees. The TXIN.value should be greater than this inputted amount by 300 sats." required />
              <ReactTooltip id="amount" className="custom-tooltip" />
              <input id="scriptPubKey" className="form-control form-control-sm" type="text" placeholder="ScriptPubKey" data-for="scriptPubKey" data-tip="Insert the ScriptPubKey value from Panel 2 here into this field." required />
              <ReactTooltip id="scriptPubKey" className="custom-tooltip" />
            </div>
          </div>
        </div>
        <div className="panelLabel">Panel 3</div>
        <div className="bolts">..</div>
      </div>
    </div>
  )
}

export default BuildScriptPubKeyPage
