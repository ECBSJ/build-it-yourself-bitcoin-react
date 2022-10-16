import React, { useEffect } from "react"

function ScriptPubKeyPageInfo(props) {
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
          <h1>What is a ScriptPubKey?</h1>
          <p className="lead">
            <p>From Mastering Bitcoin by Andreas Antonopoulos: A locking script is an encumbrance placed on an output, and it specifies the conditions that must be met to spend the output in the future. Historically, the locking script was called a ScriptPubKey, because it usually contained a public key or bitcoin address.</p>
            <p>The receiving public address first needs to be stripped of its checksum and version prefix to reveal its hashed public key. This is essentially the fingerprint of a public key being hashed first by SHA256 and then by RIPEMD160.</p>
          </p>
          <button onClick={props.closeInfoPopHandler} className="closePreviewButton">
            Continue
          </button>
        </div>
        <div className="rightBox">
          <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNzUycHQiIGhlaWdodD0iNzUycHQiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDc1MiA3NTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8cGF0aCBkPSJtNDE4LjYyIDI3Ni41NXYtNTIuMDk0aC0xNDIuMDdjLTUuMjEwOSAwLTkuNDcyNyA0LjI2MTctOS40NzI3IDkuNDcyN3YyMDguMzhoNTIuMDk0YzIuMzY3MiAwIDQuNzM0NCAxLjg5NDUgNC43MzQ0IDQuNzM0NCAwIDIuODM5OC0yLjM2NzIgNC43MzQ0LTQuNzM0NCA0LjczNDRoLTUyLjA5NHY2Ni4zMDFjMCA1LjIxMDkgNC4yNjE3IDkuNDcyNyA5LjQ3MjcgOS40NzI3aDE5OC45YzUuMjEwOSAwIDkuNDcyNy00LjI2MTcgOS40NzI3LTkuNDcyN3YtNjYuMzAxaC0xMjMuMTNjLTIuMzY3MiAwLTQuNzM0NC0xLjg5NDUtNC43MzQ0LTQuNzM0NCAwLTIuODM5OCAyLjM2NzItNC43MzQ0IDQuNzM0NC00LjczNDRoMTIzLjEzdi0xNTEuNTVoLTUyLjA5NGMtOC4wNTA4IDAtMTQuMjA3LTYuNjMyOC0xNC4yMDctMTQuMjA3em0tMjAuODQgMTg5LjkxYzIuMzY3Mi0wLjk0MTQxIDUuMjE0OCAwIDYuMTYwMiAxLjg5NDVsNS4yMTA5IDEwLjQxOCA1LjIxMDktMTAuNDE4YzAuOTQ1MzEtMi4zNjcyIDMuNzkzLTMuMzE2NCA2LjE2MDItMS44OTQ1IDIuMzU5NCAwLjk0NTMxIDMuMzA0NyAzLjc4NTIgMS44ODY3IDYuMTU2MmwtOC41MjczIDE3Ljk5NnYxNy45OTZjMCAyLjgzOTgtMS44OTQ1IDQuNzM0NC00LjczNDQgNC43MzQ0cy00LjczNDQtMS44OTQ1LTQuNzM0NC00LjczNDR2LTE3Ljk5NmwtOC45OTYxLTE3Ljk5NmMtMC45NDkyMi0xLjg5NDUtMC4wMDM5MDYtNC43MzgzIDIuMzYzMy02LjE1NjJ6bS0zNS45OTIgNC4yNjE3YzAtMi44Mzk4IDEuODk0NS00LjczNDQgNC43MzQ0LTQuNzM0NGgxOC45NDFjMi44Mzk4IDAgNC43MzQ0IDEuODk0NSA0LjczNDQgNC43MzQ0cy0xLjg5NDUgNC43MzQ0LTQuNzM0NCA0LjczNDRoLTE0LjIwN3Y5LjQ3MjdoOS40NzI3YzIuODM5OCAwIDQuNzM0NCAxLjg5NDUgNC43MzQ0IDQuNzM0NHMtMS44OTQ1IDQuNzM0NC00LjczNDQgNC43MzQ0aC05LjQ3Mjd2OS40NzI3aDE0LjIwN2MyLjgzOTggMCA0LjczNDQgMS44OTQ1IDQuNzM0NCA0LjczNDQgMCAyLjgzOTgtMS44OTQ1IDQuNzM0NC00LjczNDQgNC43MzQ0aC0xOC45NDFjLTIuODM5OCAwLTQuNzM0NC0xLjg5NDUtNC43MzQ0LTQuNzM0NHptMTQuMjA3LTE3OS45NmMyMC44MzYgMCAzNy44ODcgMTcuMDUxIDM3Ljg4NyAzNy44ODcgMCAyMC44MzYtMTcuMDUxIDM3Ljg4Ny0zNy44ODcgMzcuODg3cy0zNy44ODctMTcuMDUxLTM3Ljg4Ny0zNy44ODdoMzcuODg3em0tOS40Njg4LTkuNDcyN3YzNy44ODdoLTM3Ljg4N2MwLTIwLjgzNiAxNy4wNDctMzcuODg3IDM3Ljg4Ny0zNy44ODd6bS0xMC40MjIgMjI0LjQ4YzEuNDIxOSAxLjg5MDYgMC45NDUzMSA1LjIxMDktMC45NDUzMSA2LjYyNS0zLjIwMzEgMS42MDk0LTUuMzY3MiAwLjk1NzAzLTYuNjI4OS0wLjk0NTMxbC0xMC40MjItMTMuNzN2MTAuODk1YzAgMi44Mzk4LTEuODk0NSA0LjczNDQtNC43MzQ0IDQuNzM0NHMtNC43MzQ0LTEuODk0NS00LjczNDQtNC43MzQ0di0zNy44ODdjMC0yLjgzOTggMS44OTQ1LTQuNzM0NCA0LjczNDQtNC43MzQ0czQuNzM0NCAxLjg5NDUgNC43MzQ0IDQuNzM0NHYxMC44OTFsMTAuNDE4LTEzLjczYzEuNDIxOS0xLjg5NDUgNC43MzQ0LTIuMzY3MiA2LjYyODktMC45NDUzMSAxLjg5NDUgMS40MjE5IDIuMzY3MiA0LjczNDQgMC45NDUzMSA2LjYyNWwtMTEuODMyIDE2LjEwMnptLTIyLjczLTU4LjcyM2MwLTIuODM5OCAyLjM2NzItNC43MzQ0IDQuNzM0NC00LjczNDRoNC43MzQ0YzIuMzY3MiAwIDQuNzM0NCAxLjg5NDUgNC43MzQ0IDQuNzM0NCAwIDIuODM5OC0yLjM2NzIgNC43MzQ0LTQuNzM0NCA0LjczNDRoLTQuNzM0NGMtMi4zNjcyIDAtNC43MzQ0LTEuODk0NS00LjczNDQtNC43MzQ0em04OS45OC0zNy44ODdoLTk0LjcxNWMtMi4zNjcyIDAtNC43MzQ0LTEuODk0NS00LjczNDQtNC43MzQ0IDAtMi44Mzk4IDIuMzY3Mi00LjczNDQgNC43MzQ0LTQuNzM0NGg5NC43MTVjMi4zNjcyIDAgNC43MzQ0IDEuODk0NSA0LjczNDQgNC43MzQ0IDAgMi44Mzk4LTIuMzY3MiA0LjczNDQtNC43MzQ0IDQuNzM0NHptMC0xOC45NDVoLTk0LjcxNWMtMi4zNjcyIDAtNC43MzQ0LTEuODk0NS00LjczNDQtNC43MzQ0czIuMzY3Mi00LjczNDQgNC43MzQ0LTQuNzM0NGg5NC43MTVjMi4zNjcyIDAgNC43MzQ0IDEuODk0NSA0LjczNDQgNC43MzQ0IDAgMi44NDM4LTIuMzY3MiA0LjczNDQtNC43MzQ0IDQuNzM0NHptNC43MzQ0LTExMy42NnYtNTIuMDk0bDU2LjgyOCA1Ni44MjhoLTUyLjA5Yy0yLjg0MzggMC00LjczODMtMS44OTQ1LTQuNzM4My00LjczNDR6IiBmaWxsPSIjZmZmIi8+Cjwvc3ZnPgo=" alt="" />
        </div>
      </div>
      <div className="stepsOrder">LEARN</div>
    </div>
  )
}

export default ScriptPubKeyPageInfo
