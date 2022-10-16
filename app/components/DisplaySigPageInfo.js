import React, { useEffect } from "react"

function DisplaySigPageInfo(props) {
  useEffect(() => {
    document.addEventListener("keyup", KeyPressHandler)
    return () => document.removeEventListener("keyup", KeyPressHandler)
  }, [])

  function KeyPressHandler(e) {
    if (e.keyCode == 27) {
      props.closeInfoPopHandler()
    }
  }

  return (
    <div className="search-overlay">
      <div className="infoBox">
        <div className="leftBox">
          <h1>What is a ScriptSig?</h1>
          <p className="lead">
            <p>An unlocking script is a script that “solves,” or satisfies, the conditions placed on an output by a locking script and allows the output to be spent. Unlocking scripts are part of every transaction input, and most of the time they contain a digital signature produced by the user&rsquo;s wallet from his or her private key. Historically, the unlocking script is called scriptSig, because it usually contained a digital signature. In most bitcoin applications, the source code refers to the unlocking script as scriptSig.</p>
          </p>
          <button onClick={props.closeInfoPopHandler} className="closePreviewButton">
            Continue
          </button>
        </div>
        <div className="rightBox">
          <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNzUycHQiIGhlaWdodD0iNzUycHQiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDc1MiA3NTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZGVmcz4KICA8Y2xpcFBhdGggaWQ9ImEiPgogICA8cGF0aCBkPSJtMTQ5IDEzOS4yMWg0NTZ2NDczLjU4aC00NTZ6Ii8+CiAgPC9jbGlwUGF0aD4KIDwvZGVmcz4KIDxnIGNsaXAtcGF0aD0idXJsKCNhKSI+CiAgPHBhdGggZD0ibTMzMy45NiAzNDkuNjloLTIuNjk1M2MtMjMuMjgxIDAtNDIuMDg2IDE4Ljg1OS00Mi4wODYgNDIuMTI1djE3OC44NWMwIDIzLjMwOSAxOC44NDQgNDIuMTI1IDQyLjA4NiA0Mi4xMjVoMjMxLjU0YzIzLjI4NSAwIDQyLjA5LTE4Ljg2MyA0Mi4wOS00Mi4xMjV2LTE3OC44NWMwLTIzLjMwOS0xOC44NDQtNDIuMTI1LTQyLjA5LTQyLjEyNWgtMTg2Ljc1di05Ny4yNjZjMC02Mi41MTItNTAuNjg0LTExMy4yMS0xMTMuMTktMTEzLjIxLTYyLjUyIDAtMTEzLjE5IDUwLjY4OC0xMTMuMTkgMTEzLjIxdjE0OC45M2MwIDExLjYyNSA5LjQyMTkgMjEuMDQ3IDIxLjA0NyAyMS4wNDdzMjEuMDQ3LTkuNDIxOSAyMS4wNDctMjEuMDQ3di0xNDguOTNjMC0zOS4yODEgMzEuODI0LTcxLjExNyA3MS4wOTQtNzEuMTE3IDM5LjI1OCAwIDcxLjA5NCAzMS44NDggNzEuMDk0IDcxLjExN3ptMTI3LjMxIDEyOC41NWM3LjI2NTYtNC42ODM2IDEyLjA3OC0xMi44NDQgMTIuMDc4LTIyLjEzMyAwLTE0LjUzMS0xMS43NzctMjYuMzA5LTI2LjMwOS0yNi4zMDlzLTI2LjMxMiAxMS43NzctMjYuMzEyIDI2LjMwOWMwIDkuMjg5MSA0LjgxNjQgMTcuNDUzIDEyLjA4NiAyMi4xMzdsLTExLjYyNSA0NC4wNTFjLTEuODA0NyA1LjczMDUgMS44NjMzIDEwLjM3OSA4LjM1MTYgMTAuMzc5aDM1LjAwOGM2LjQ0MTQgMCAxMC4xNDgtNC42NjggOC4zNDc3LTEwLjM3OXoiIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIvPgogPC9nPgo8L3N2Zz4K" alt="" />
        </div>
      </div>
      <div className="stepsOrder">LEARN</div>
    </div>
  )
}

export default DisplaySigPageInfo
