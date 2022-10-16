import React, { useEffect } from "react"

function DisplayTXHexPageInfo(props) {
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
          <h1>Transaction Broadcasting</h1>
          <p className="lead">
            <p>From Mastering Bitcoin by Andreas Antonopoulos: First, a transaction needs to be delivered to the bitcoin network so that it can be propagated and included in the blockchain. In essence, a bitcoin transaction is just 300 to 400 bytes of data and has to reach any one of tens of thousands of bitcoin nodes. The senders do not need to trust the nodes they use to broadcast the transaction, as long as they use more than one to ensure that it propagates. The nodes don&rsquo;t need to trust the sender or establish the sender&rsquo;s “identity.” Because the transaction is signed and contains no con‐ fidential information, private keys, or credentials, it can be publicly broadcast using any underlying network transport that is convenient. Unlike credit card transactions, for example, which contain sensitive information and can only be transmitted on encrypted networks, a bitcoin transaction can be sent over any network. As long as the transaction can reach a bitcoin node that will propagate it into the bitcoin network, it doesn&rsquo;t matter how it is transported to the first node.</p>
          </p>
          <button onClick={props.closeInfoPopHandler} className="closePreviewButton">
            Continue
          </button>
        </div>
        <div className="rightBox">
          <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNzUycHQiIGhlaWdodD0iNzUycHQiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDc1MiA3NTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8cGF0aCBkPSJtMjM5Ljg1IDM4NC4zNmMwLTE0Ljk0MSAyMi43MTUtMTQuOTQxIDIyLjcxNSAwdjE2OC4zNmg2MS44MjR2LTExMy4xMmMwLTYuMjY5NSA1LjA4NTktMTEuMzU1IDExLjM1OS0xMS4zNTVoODAuNWM2LjI2OTUgMCAxMS4zNTkgNS4wODU5IDExLjM1OSAxMS4zNTV2MTEzLjEyaDYxLjgyNHYtMTY4LjM2YzAtMTQuOTQxIDIyLjcxNS0xNC45NDEgMjIuNzE1IDB2MTY4LjM2aDQ1LjUwNGMxNC45NDEgMCAxNC45NDEgMjIuNzE1IDAgMjIuNzE1aC0zNjMuMzFjLTE0Ljk0MSAwLTE0Ljk0MS0yMi43MTUgMC0yMi43MTVoNDUuNTA0di0xNjguMzZ6bS0xNi44NTIgMjIzLjIzYy0xNC45MzQgMC0xNC45MzQtMjIuNzE1IDAtMjIuNzE1aDE5My4yNmMxNC45NDEgMCAxNC45NDEgMjIuNzE1IDAgMjIuNzE1em0yNTAuMSAwYy0xNC45NDEgMC0xNC45NDEtMjIuNzE1IDAtMjIuNzE1aDU1LjkwNmMxNC45MzQgMCAxNC45MzQgMjIuNzE1IDAgMjIuNzE1em0tMjAuNTc0LTM3OC41MmMxNy41NTEgMCAzMS43ODEgMTQuMjIzIDMxLjc4MSAzMS43NyAwIDEzLjE5MS04LjI0NjEgMjUuMDI3LTIwLjQyMiAyOS42OTF2MTcuOTIybDk4LjUyMyA1OC4xNTZjMTIuODIgNy41NzQyIDEuMjkzIDI3LjEwMi0xMS41MzUgMTkuNTJsLTg2Ljk5Mi01MS4zNDh2NjQuNTY2YzAgMTQuOTM0LTIyLjcxNSAxNC45MzQtMjIuNzE1IDB2LTc3Ljk2OWwtNjUuMTcyLTM4LjQ2NS0xNzQuODggMTAzLjIyYy0xMi44MjQgNy41NzgxLTI0LjM1NS0xMS45NDktMTEuNTM1LTE5LjUybDE4MC42NC0xMDYuNjJjMy43MzgzLTIuMjEwOSA4LjIyNjYtMi4wMjM0IDExLjY5MSAwLjA4OTg0NGw1OS4yNDYgMzQuOTY1di00LjUxNTZjLTEyLjI3My00LjY5OTItMjAuNDIyLTE2LjQ4OC0yMC40MjItMjkuNjkxIDAtMTcuNTQ3IDE0LjIzLTMxLjc3IDMxLjc3Ny0zMS43N3ptMCAyMi43MTFjLTUgMC05LjA2MjUgNC4wNTQ3LTkuMDYyNSA5LjA2MjUgMCA1LjAwNzggNC4wNTQ3IDkuMDY2NCA5LjA2MjUgOS4wNjY0IDUuMDQ2OSAwIDkuMDY2NC00LjAyMzQgOS4wNjY0LTkuMDY2NCAwLTUuMDA3OC00LjA2MjUtOS4wNjI1LTkuMDY2NC05LjA2MjV6bS02OC41OTQtNTYuMTY0Yy0xMC41MDQgMTAuNTY2LTI2LjU2Mi01LjQxMDItMTYuMDU5LTE1Ljk2OSA0Ni4yODEtNDYuNjg0IDEyMi41OS00Ni45OCAxNjkuMjctMC43MTA5NCAxMC41NjYgMTAuNTA0LTUuNDEwMiAyNi41NjItMTUuOTY5IDE2LjA2Ni0zNy44NzUtMzcuNTUxLTk5LjY5MS0zNy4yNTQtMTM3LjI0IDAuNjE3MTl6bTIuNzMwNSAzLjc3NzNjMzYuMzM2LTM1Ljk1NyA5NS41Ny0zNi4wMjMgMTMyLjAzLTAuMjA3MDMgMTEuMDQ3IDEwLjkzLTQuODA4NiAyNi45OTYtMTUuODQ4IDE2LjE4NC0yNy42NzItMjcuMjM0LTcyLjU3NC0yNy4xODQtMTAwLjIgMC4wNzgxMjUtMTEuMzIgMTIuMTc2LTI3LjgyLTUuODc4OS0xNS45OC0xNi4wNTV6bTE4LjU2NiAyMC4zNTljMjYuMjU4LTI1Ljc5MyA2OC45MTQtMjUuNjk1IDk1LjEwMiAwLjE1MjM0IDEwLjU4MiAxMC4yNTgtNC42NDQ1IDI3LjAzOS0xNi4wOTggMTUuOTMtMTcuNDQxLTE3LjA0My00NS42MDktMTcuMDI3LTYzLjA1MSAwLTExLjI3NyAxMi4xMDUtMjcuODA1LTUuOTQxNC0xNS45NTMtMTYuMDgyem0tNTguMTIxIDMzMi45OGg1Ny43OTN2LTEwMS43NmgtNTcuNzkzeiIgZmlsbD0iI2ZmZiIvPgo8L3N2Zz4K" alt="" />
        </div>
      </div>
      <div className="stepsOrder">LEARN</div>
    </div>
  )
}

export default DisplayTXHexPageInfo
