import axios from "axios"
import React, { useEffect, useState, useContext } from "react"
import Page from "./Page"
import InputAddPage from "./InputAddPage"
import AddDataPage from "./AddDataPage"
import StateContext from "../StateContext"
import GetUTXOPage from "./GetUTXOPage"
import EnterOutputAddPage from "./EnterOutputAddPage"
import BuildScriptPubKeyPage from "./BuildScriptPubKeyPage"
import DispatchContext from "../DispatchContext"
import ReactTooltip from "react-tooltip"
import EnterWIFPage from "./EnterWIFPage"
import SignTXPage from "./SignTXPage"
import DisplaySigPage from "./DisplaySigPage"
import DisplayTXHexPage from "./DisplayTXHexPage"
import TXBroadcastPage from "./TXBroadcastPage"

function Dashboard(props) {
  const appState = useContext(StateContext)
  const appDispatch = useContext(DispatchContext)

  const width = {
    width: `${(Number(appState.ProgressStep) / 10) * 100}%`
  }

  return (
    <Page title="Dashboard">
      <div className="superDash">
        <div className="dashTitle">
          <div className="dashMainTitle">
            <strong>
              DIY-BTC-TX <br /> Dashboard
            </strong>
          </div>
          <div className="dashSubTitle">An interactive P2PKH transaction builder</div>
          <div className="activeStatus fs-6">
            systems status <div data-tip="All systems and API operational." data-for="status" className="greenCircle"></div>
            <ReactTooltip id="status" className="custom-tooltip" />
          </div>
          <div className="userAdd">
            <strong>Current Build For:</strong> <br /> {appState.senderData.pubAdd ? appState.senderData.pubAdd : "N/A"}
          </div>
        </div>
        <div className="progressContainer">
          <div className="progressBarTitle">Current TX Building Progress:</div>
          <div className="progressBar">
            <div className="progressText">{appState.ProgressStep} of 10</div>
            <div className="progressFill a" style={width}></div>
          </div>
        </div>
      </div>
      <div style={{ marginBottom: "12vh" }}>
        <div className="dashboard my-3 text-light">{appState.PageNumber == 0 ? <InputAddPage /> : appState.PageNumber == 1 ? <AddDataPage /> : appState.PageNumber == 2 ? <GetUTXOPage /> : appState.PageNumber == 3 ? <EnterOutputAddPage /> : appState.PageNumber == 4 ? <BuildScriptPubKeyPage /> : appState.PageNumber == 5 ? <EnterWIFPage /> : appState.PageNumber == 6 ? <SignTXPage /> : appState.PageNumber == 7 ? <DisplaySigPage /> : appState.PageNumber == 8 ? <DisplayTXHexPage /> : <TXBroadcastPage />}</div>
        <button onClick={() => appDispatch({ type: "resetBuilder" })}>Reset Builder</button>
      </div>
    </Page>
  )
}

export default Dashboard
