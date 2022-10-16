import React, { useState, useReducer, useEffect } from "react"
import ReactDOM from "react-dom/client"
import { useImmerReducer } from "use-immer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CSSTransition } from "react-transition-group"
import * as bitcoin from "bitcoinjs-lib"

import StateContext from "./StateContext"
import DispatchContext from "./DispatchContext"

// My Components
import Header from "./components/Header"
import Hero from "./components/Hero"
import Dashboard from "./components/Dashboard"
import Footer from "./components/Footer"
import FlashMessages from "./components/FlashMessages"

function Main() {
  const initialState = {
    senderData: {
      pubAdd: null,
      balance: null,
      numTxs: null,
      historicalRcvd: null,
      numofUTXOs: null,
      WIFkey: null
    },
    flashMessages: {
      statement: [],
      danger: false
    },
    PageNumber: 0,
    UTXO: {
      tx_hash: null,
      tx_output_n: null,
      script: null,
      value: null,
      confirmations: null,
      tx_index: null
    },
    TXIN: {
      tx_id: null,
      output: null,
      value: null,
      scriptSig: null
    },
    TXOUT: {
      recAdd: null,
      amount: null,
      scriptPubKey: null,
      hash160: null
    },
    TX: {
      transactionScript: null,
      transactionHex: null,
      txPreSigned: null,
      signature: null,
      senderPubKey: null,
      transactionHash: null,
      fee: null,
      broadcastError: null
    },
    ProgressStep: 1
  }

  function ourReducer(draft, action) {
    switch (action.type) {
      case "flashMessage":
        draft.flashMessages.statement.push(action.value)
        draft.flashMessages.danger = action.alert
        return
      case "setSenderDataPubAdd":
        draft.senderData.pubAdd = action.value
        return
      case "resetBuilder":
        draft.PageNumber = 0
        draft.ProgressStep = 1
        draft.senderData.pubAdd = null
        draft.senderData.balance = null
        draft.senderData.numTxs = null
        draft.senderData.historicalRcvd = null
        draft.senderData.numofUTXOs = null
        draft.senderData.WIFkey = null
        draft.UTXO.tx_hash = null
        draft.UTXO.tx_output_n = null
        draft.UTXO.script = null
        draft.UTXO.value = null
        draft.UTXO.confirmations = null
        draft.UTXO.tx_index = null
        draft.TXIN.tx_id = null
        draft.TXIN.output = null
        draft.TXIN.value = null
        draft.TXIN.scriptSig = null
        draft.TXOUT.recAdd = null
        draft.TXOUT.amount = null
        draft.TXOUT.scriptPubKey = null
        draft.TXOUT.hash160 = null
        ;(draft.TX.transactionScript = null), (draft.TX.transactionHex = null), (draft.TX.txPreSigned = null), (draft.TX.signature = null), (draft.TX.senderPubKey = null), (draft.TX.transactionHash = null), (draft.TX.fee = null), (draft.TX.broadcastError = null)
        window.scrollTo(0, 0)
        return
      case "AddDataPage":
        draft.PageNumber = 1
        draft.ProgressStep = 2
        return
      case "GetUTXOPage":
        draft.PageNumber = 2
        draft.ProgressStep = 3
        return
      case "EnterOutputAddPage":
        draft.PageNumber = 3
        draft.ProgressStep = 4
        return
      case "BuildScriptPubKeyPage":
        draft.PageNumber = 4
        draft.ProgressStep = 5
        return
      case "EnterWIFPage":
        draft.PageNumber = 5
        draft.ProgressStep = 6
        return
      case "SignTXPage":
        draft.PageNumber = 6
        draft.ProgressStep = 7
        return
      case "DisplaySigPage":
        draft.PageNumber = 7
        draft.ProgressStep = 8
        return
      case "DisplayTXHexPage":
        draft.PageNumber = 8
        draft.ProgressStep = 9
        return
      case "TXBroadcastPage":
        draft.PageNumber = 9
        draft.ProgressStep = 10
        return
      case "storeAddData":
        draft.senderData.balance = action.data["final_balance"]
        draft.senderData.numTxs = action.data["n_tx"]
        draft.senderData.historicalRcvd = action.data["total_received"]
        return
      case "storeUTXOdata":
        draft.senderData.numofUTXOs = action.data.length
        draft.UTXO.tx_hash = action.data[0]["tx_hash_big_endian"]
        draft.UTXO.tx_output_n = action.data[0]["tx_output_n"]
        draft.UTXO.script = action.data[0]["script"]
        draft.UTXO.value = action.data[0]["value"]
        draft.UTXO.confirmations = action.data[0]["confirmations"]
        draft.UTXO.tx_index = action.data[0]["tx_index"]
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
      case "setINPUTTEDscriptSig":
        draft.TXIN.scriptSig = action.value
        return
      case "setINPUTTEDrecAdd":
        draft.TXOUT.recAdd = action.value
        return
      case "setINPUTTEDamount":
        draft.TXOUT.amount = action.value
        return
      case "setINPUTTEDscriptPubKey":
        draft.TXOUT.scriptPubKey = action.value
        return
      case "setFee":
        draft.TX.fee = action.value
        return
      case "setHash160":
        draft.TXOUT.hash160 = action.value
        return
      case "setWIFkey":
        draft.senderData.WIFkey = action.value
        return
      case "createTXHash":
        let txb = new bitcoin.TransactionBuilder(bitcoin.networks.bitcoin)

        let PrivateKey = draft.senderData.WIFkey
        let keypairSpend = bitcoin.ECPair.fromWIF(PrivateKey, bitcoin.networks.bitcoin)

        txb.addInput(draft.TXIN.tx_id, +draft.TXIN.output)

        txb.addOutput(draft.TXOUT.recAdd, +draft.TXOUT.amount)
        txb.sign(0, keypairSpend, null, null, +draft.TXIN.value)

        let tx = txb.build()
        draft.TX.transactionScript = tx
        draft.TX.transactionHex = draft.TX.transactionScript.toHex()

        draft.TX.signature = tx["ins"][0]["script"].slice(1, 73).toString("hex")
        draft.TX.senderPubKey = tx["ins"][0]["script"].slice(74, 107).toString("hex")
        tx["ins"][0]["script"] = bitcoin.address.toOutputScript(draft.senderData.pubAdd, bitcoin.networks.bitcoin)
        draft.TX.txPreSigned = tx.toHex()

        draft.senderData.WIFkey = null

        return
      case "setTransactionHash":
        draft.TX.transactionHash = action.value
        return
      case "setBroadcastError":
        draft.TX.broadcastError = action.value
    }
  }

  const [state, dispatch] = useImmerReducer(ourReducer, initialState)

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <BrowserRouter>
          <FlashMessages messages={state.flashMessages.statement} danger={state.flashMessages.danger} />
          <Header />
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </DispatchContext.Provider>
    </StateContext.Provider>
  )
}

const root = ReactDOM.createRoot(document.querySelector("#app"))
root.render(<Main />)

if (module.hot) {
  module.hot.accept()
}
