import React, { useEffect } from "react"

function Preview2(props) {
  useEffect(() => {
    document.addEventListener("keyup", KeyPressHandler)
    return () => document.removeEventListener("keyup", KeyPressHandler)
  }, [])

  function KeyPressHandler(e) {
    if (e.keyCode == 27) {
      props.closePreview()
    }
  }

  return (
    <div className="search-overlay">
      <div className="infoBox">
        <div className="leftBox">
          <h1>
            Retrieve a P2PKH &#40;Legacy&#41; <br /> bitcoin address that you plan
            <br />
            on sending the UTXO to.
          </h1>
          <h3 className="display-6">
            A P2PKH &#40;Legacy&#41; bitcoin address <br /> always starts with number &lsquo;1&rsquo;.
          </h3>
          <p className="lead">
            <em>Got another P2PKH bitcoin address to send to?</em>
          </p>
          <button onClick={props.closePreview} className="closePreviewButton">
            Continue Building
          </button>
        </div>
        <div className="rightBox">
          <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNzUycHQiIGhlaWdodD0iNzUycHQiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDc1MiA3NTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8cGF0aCBkPSJtMjcwLjkzIDE5MS4zYy00Ljg4MjggMC40NjA5NC04LjYwNTUgNC41NzAzLTguNTgyIDkuNDcyN3Y5NC43MTVjLTAuMDM5MDYyIDIuNTM1MiAwLjk0NTMxIDQuOTgwNSAyLjcyMjcgNi43ODUyIDEuNzgxMiAxLjgwNDcgNC4yMTA5IDIuODIwMyA2Ljc0NjEgMi44MjAzczQuOTY0OC0xLjAxNTYgNi43NDYxLTIuODIwM2MxLjc4MTItMS44MDQ3IDIuNzYxNy00LjI1IDIuNzI2Ni02Ljc4NTJ2LTc0LjczOGw4OC43OTcgNzAuODkxYzMuNDYwOSAyLjc2OTUgOC4zNzg5IDIuNzY5NSAxMS44NCAwbDg4Ljc5Ny03MC44OTF2MTAzLjE1aC0xOTguOTFjLTIuNTM1Mi0wLjAzNTE1Ni00Ljk3NjYgMC45NDkyMi02Ljc4NTIgMi43MjY2LTEuODA0NyAxLjc4MTItMi44MjAzIDQuMjEwOS0yLjgyMDMgNi43NDYxczEuMDE1NiA0Ljk2NDggMi44MjAzIDYuNzQ2MWMxLjgwODYgMS43ODEyIDQuMjUgMi43NjE3IDYuNzg1MiAyLjcyNjZoMjA4LjM4YzUuMjM0NCAwIDkuNDcyNy00LjI0MjIgOS40NzI3LTkuNDcyN3YtMTMyLjZjMC01LjIzMDUtNC4yMzgzLTkuNDcyNy05LjQ3MjctOS40NzI3aC0yMDguMzhjLTAuMjkyOTctMC4wMTU2MjYtMC41ODk4NC0wLjAxNTYyNi0wLjg4NjcyIDB6bTI3LjUyNyAxOC45NDVoMTU1LjFsLTc3LjU1MSA2MS44NTl6bTYzLjM0IDE2MS4wMmMtMjAuODI0IDAtMzcuODg3IDE3LjA2Mi0zNy44ODcgMzcuODg3IDAgMjAuODI0IDE3LjA2MiAzNy44ODcgMzcuODg3IDM3Ljg4N2gyNC4yNzNsLTMwLjc4NSAxOC4zNTJjLTMuMTAxNi0wLjUyNzM0LTMzLjE0MS01LjYwNTUtNjcuNzgxLTExLjI1LTE4LjE5MS0yLjk2MDktMzYuNzg5LTUuOTA2Mi01MS42NDgtOC4xMzY3LTcuNDI5Ny0xLjExNzItMTMuOTkyLTIuMDAzOS0xOS4wOS0yLjY2NDEtNS4xMDE2LTAuNjY0MDYtOC4xOTE0LTEuMDM1Mi0xMS4yNS0xLjAzNTItMjAuODEyIDAtMzcuODg3IDE3LjA3NC0zNy44ODcgMzcuODgzIDAgMTMuOTY1IDguMTE3MiAyNS40ODggMTguNzk3IDMxLjgyIDEuNjQwNiAwLjk3MjY2IDEuOTEwMiAwLjgxMjUgMi41MTU2IDEuMDM1MiAwLjYwNTQ3IDAuMjIyNjYgMS4xNTIzIDAuNDg4MjggMS45MjE5IDAuNzQyMTkgMS41NDMgMC41MDc4MSAzLjYyMTEgMS4wMjczIDYuMDcwMyAxLjc3MzQgNC44OTg0IDEuNDkyMiAxMS40OTYgMy40ODgzIDE5LjM4NyA1Ljc3MzQgMTUuNzgxIDQuNTcwMyAzNi4zNjMgMTAuNTEyIDU2LjgyOCAxNi4yNzcgNDAuOTM0IDExLjUzNSA4MS4zOTggMjIuNjQ1IDgxLjM5OCAyMi42NDUgMS44MDA4IDAuNDkyMTkgMy43MDMxIDAuNDQxNDEgNS40NzY2LTAuMTQ4NDRsMTI1LjItNDEuNzM0IDg3LjMxNiAyMi45NDFjMi44MTI1IDAuNzIyNjYgNS44MDA4IDAuMTIxMDkgOC4xMDk0LTEuNjQwNiAyLjMwODYtMS43NjE3IDMuNjgzNi00LjQ4NDQgMy43MzA1LTcuMzkwNnYtODUuMjQyYzAuMDM1MTU2LTIuNTM1Mi0wLjk0OTIyLTQuOTgwNS0yLjcyNjYtNi43ODUyLTEuNzgxMi0xLjgwNDctNC4yMTA5LTIuODIwMy02Ljc0NjEtMi44MjAzcy00Ljk2NDggMS4wMTU2LTYuNzQ2MSAyLjgyMDNjLTEuNzgxMiAxLjgwNDctMi43NjE3IDQuMjUtMi43MjY2IDYuNzg1MnY3Mi45NjFsLTc4LjE0MS0yMC41N2MtMS43NTM5LTAuNDYwOTQtMy42MDE2LTAuNDEwMTYtNS4zMjgxIDAuMTQ4NDRsLTEyNS4wNSA0MS43MzRjLTIuNTE1Ni0wLjY5OTIyLTM5LjAzOS0xMC45MS03OC41ODYtMjIuMDU1LTIwLjQ0MS01Ljc1NzgtNDAuOTg0LTExLjU4Ni01Ni42OC0xNi4xMjktNy44NDc3LTIuMjczNC0xNC40OTYtNC4xNzk3LTE5LjIzOC01LjYyNS0yLjM3NS0wLjcxODc1LTQuMzM1OS0xLjM0NzctNS42MjUtMS43NzM0LTAuNDI5NjktMC4xNDQ1My0wLjYxNzE5LTAuMjAzMTItMC44ODY3Mi0wLjI5Njg4LTUuNzgxMi0zLjU1ODYtOS4zMjQyLTguNTQzLTkuMzI0Mi0xNS4yNDYgMC0xMC41NzQgOC4zNjcyLTE4Ljk0MSAxOC45NDEtMTguOTQxIDAuMDM1MTU2IDAgNCAwLjI1MzkxIDguODc4OSAwLjg4NjcyIDQuODgyOCAwLjYzMjgxIDExLjI4OSAxLjU2MjUgMTguNjQ4IDIuNjY0MSAxNC43MTUgMi4yMTA5IDMzLjIwNyA1LjE4MzYgNTEuMzU1IDguMTQwNiAzNi4yOTcgNS45MTQxIDcxLjAzNSAxMS44NCA3MS4wMzUgMTEuODQgMi4yNjE3IDAuMzU1NDcgNC41NzQyLTAuMTE3MTkgNi41MTE3LTEuMzMybDYzLjE5NS0zNy44ODdjMy41MjM0LTIuMjQyMiA1LjE2MDItNi41MjM0IDQuMDM5MS0xMC41NDMtMS4xMjUtNC4wMjM0LTQuNzUtNi44MzItOC45MjU4LTYuOTIxOWgtNTguNDU3Yy0xMC42NTYgMC0xOC45NDEtOC4yODUyLTE4Ljk0MS0xOC45NDEgMC0xMC42NiA4LjI4NTItMTguOTQ1IDE4Ljk0MS0xOC45NDVoMTEyLjQ4bDk3Ljk3MyAyNy45NzNjNS4wMjczIDEuNDcyNyAxMC4yOTMtMS40MTAyIDExLjc2Ni02LjQzNzUgMS40Njg4LTUuMDI3My0xLjQxMDItMTAuMjkzLTYuNDM3NS0xMS43NjZsLTk5LjQ1My0yOC40MTRjLTAuODcxMDktMC4yMjY1Ni0xLjc2NTYtMC4zMjQyMi0yLjY2NDEtMC4yOTY4OHoiIGZpbGw9IiNmZmYiLz4KPC9zdmc+Cg==" alt="" />
        </div>
      </div>
      <div className="stepsOrder">STEP 4</div>
    </div>
  )
}

export default Preview2
