import React, { useEffect } from "react"

function WIFPageInfo(props) {
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
          <h1>What is a WIF private key?</h1>
          <p className="lead">
            <p>From Mastering Bitcoin by Andreas Antonopoulos: A private key is simply a number, picked at random. Ownership and control over the private key is the root of user control over all funds associated with the corresponding bitcoin address. The private key is used to create signatures that are required to spend bitcoins by proving ownership of funds used in a transaction.</p>
            <p>A private key can take on many different types of formats. The most commonly accepted format for a single key is the Wallet Import Format &#40;WIF&#41;. From Jimmy Song's Programming Bitcoin: WIF is a serialization of the private key that&rsquo;s meant to be human-readable. WIF uses the same Base58 encoding that addresses use.</p>
          </p>
          <button onClick={props.closeInfoPopHandler} className="closePreviewButton">
            Continue
          </button>
        </div>
        <div className="rightBox m-3">
          <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNzUycHQiIGhlaWdodD0iNzUycHQiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDc1MiA3NTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZGVmcz4KICA8Y2xpcFBhdGggaWQ9ImEiPgogICA8cGF0aCBkPSJtMTM5LjIxIDI1MGg0NzMuNTh2MjM3aC00NzMuNTh6Ii8+CiAgPC9jbGlwUGF0aD4KIDwvZGVmcz4KIDxwYXRoIGQ9Im0zMDkuNCAzODcuMWMwIDQuMDg1OS0zLjMxMjUgNy4zOTg0LTcuMzk4NCA3LjM5ODQtNC4wODU5IDAtNy4zOTg0LTMuMzEyNS03LjM5ODQtNy4zOTg0IDAtNC4wODU5IDMuMzEyNS03LjM5ODQgNy4zOTg0LTcuMzk4NCA0LjA4NTkgMCA3LjM5ODQgMy4zMTI1IDcuMzk4NCA3LjM5ODQiIGZpbGw9IiNmZmYiLz4KIDxwYXRoIGQ9Im0yNjUuMDEgNDM1LjJjMCA0LjA4NTktMy4zMTY0IDcuMzk4NC03LjQwMjMgNy4zOTg0LTQuMDg1OSAwLTcuMzk4NC0zLjMxMjUtNy4zOTg0LTcuMzk4NCAwLTQuMDg1OSAzLjMxMjUtNy4zOTg0IDcuMzk4NC03LjM5ODQgNC4wODU5IDAgNy40MDIzIDMuMzEyNSA3LjQwMjMgNy4zOTg0IiBmaWxsPSIjZmZmIi8+CiA8cGF0aCBkPSJtMjIzLjg2IDMzMC45N2MwIDQuMDg5OC0zLjMxMjUgNy40MDIzLTcuMzk4NCA3LjQwMjMtNC4wODU5IDAtNy40MDIzLTMuMzEyNS03LjQwMjMtNy40MDIzIDAtNC4wODU5IDMuMzE2NC03LjM5ODQgNy40MDIzLTcuMzk4NCA0LjA4NTkgMCA3LjM5ODQgMy4zMTI1IDcuMzk4NCA3LjM5ODQiIGZpbGw9IiNmZmYiLz4KIDxnIGNsaXAtcGF0aD0idXJsKCNhKSI+CiAgPHBhdGggZD0ibTU2OS45MSAzMzAuNDljLTEuOTk2MS0xLjU5MzgtNC40NDE0LTIuNTI3My02Ljk5MjItMi42NjQxaC0xMS44NGMtMi40OTYxIDAuMTQ0NTMtNC44NTE2IDEuMTk1My02LjYyMTEgMi45NjA5bC0yMS45NDEgMjQuMzQ0LTIyLjE5OS0yMi45MzhjLTEuMzUxNi0xLjM5ODQtMy4xOTkyLTIuMjEwOS01LjE0NDUtMi4yNTc4LTIuMTQ4NCAwLjAxOTUzMS00LjE3MTkgMS4wMjczLTUuNDcyNyAyLjczODNsLTIxLjIwMyAyNi40OTItMTguMTY4LTI2LjE1NiAwLjAwMzkwNi0wLjAwMzkwN2MtMS4wOTc3LTEuNzU3OC0zLTIuODUxNi01LjA3MDMtMi45MjE5LTEuODQ3NyAwLjA0Njg3NC0zLjU3ODEgMC45MzM1OS00LjY5OTIgMi40MDYybC0yMC43OTMgMjUuMjM0LTI4Ljk2OS0zMS41MjNoLTE1LjUwNGMtMS4zMDQ3LTUuMzYzMy00LjU3ODEtMTAuMDM1LTkuMTcxOS0xMy4wOS00LjU5MzgtMy4wNTg2LTEwLjE2OC00LjI3NzMtMTUuNjE3LTMuNDE0MS0xNy4wOS0yMy40NzctNDIuODc1LTM5LjEzMy03MS41OS00My40NzMtMS42NTYyLTUuNzMwNS01LjU0NjktMTAuNTUxLTEwLjc5Ny0xMy4zODMtNS4yNS0yLjgyODEtMTEuNDE4LTMuNDI1OC0xNy4xMTMtMS42NjAyLTUuNjk1MyAxLjc2OTUtMTAuNDQxIDUuNzUzOS0xMy4xNjQgMTEuMDU5LTIuNzI2NiA1LjMwNDctMy4xOTkyIDExLjQ4NC0xLjMyMDMgMTcuMTQ1IDEuODc4OSA1LjY2MDIgNS45NTcgMTAuMzI0IDExLjMxNiAxMi45NDEgNS4zNTk0IDIuNjIxMSAxMS41NDMgMi45NzI3IDE3LjE2OCAwLjk4MDQ3djM0LjU5NGg2Ni45M2MtMC45MDIzNCA1LjA5MzggMC4wMzkwNjIgMTAuMzQ0IDIuNjY0MSAxNC44MDFoLTc2Ljk5NmMtNC4wODU5IDAtNy4zOTg0LTMuMzEyNS03LjM5ODQtNy4zOTg0di0yNy4yN2MtOC4wNzgxLTEuNTQ2OS0xNS40MDYtNS43NDIyLTIwLjgzMi0xMS45MTgtNS40Mjk3LTYuMTc1OC04LjY0NDUtMTMuOTg4LTkuMTM2Ny0yMi4xOTUtMzMuMjkzIDE0LjY3Ni01Ny4yNSA0NC43NzMtNjQuMDgyIDgwLjUwOC01Ljg0NzcgMS40MTgtMTAuODcxIDUuMTUyMy0xMy45MTggMTAuMzQ0LTMuMDQ2OSA1LjE5MTQtMy44NTE2IDExLjM5NS0yLjIzNDQgMTcuMTk1IDEuNjEzMyA1Ljc5NjkgNS41MTU2IDEwLjY4OCAxMC44MDkgMTMuNTU1IDUuMjkzIDIuODY3MiAxMS41MiAzLjQ2NDggMTcuMjYyIDEuNjQ4NCA1LjczODMtMS44MTI1IDEwLjQ5Ni01Ljg3NSAxMy4xOC0xMS4yNjIgMi42ODM2LTUuMzg2NyAzLjA2NjQtMTEuNjMzIDEuMDU4Ni0xNy4zMDloMjYuNTY2di0xNi43NjJjLTYuNjM2Ny0yLjM0MzgtMTEuNzY2LTcuNjk5Mi0xMy44MjgtMTQuNDMtMi4wNTg2LTYuNzMwNS0wLjgwNDY5LTE0LjAzOSAzLjM4MjgtMTkuNjk5IDQuMTgzNi01LjY2MDIgMTAuODA1LTkgMTcuODQ0LTkgNy4wMzkxIDAgMTMuNjY0IDMuMzM5OCAxNy44NDggOSA0LjE4NzUgNS42NjAyIDUuNDQxNCAxMi45NjkgMy4zNzg5IDE5LjY5OS0yLjA1ODYgNi43MzA1LTcuMTg3NSAxMi4wODYtMTMuODI0IDE0LjQzdjE2Ljc2MmgzMy45MjZjMS45NjQ4IDAgMy44NDM4IDAuNzgxMjUgNS4yMzQ0IDIuMTY4IDEuMzg2NyAxLjM4NjcgMi4xNjggMy4yNjk1IDIuMTY4IDUuMjMwNXYzN2MwLjAzNTE1NyAwLjQxNzk3IDAuMDM1MTU3IDAuODM5ODQgMCAxLjI1NzggNi42NjQxIDIuMzEyNSAxMS44MzYgNy42NTIzIDEzLjkzIDE0LjM5MSAyLjA4OTggNi43MzgzIDAuODU1NDcgMTQuMDY2LTMuMzI4MSAxOS43NS00LjE4MzYgNS42Nzk3LTEwLjgyIDkuMDM1Mi0xNy44NzUgOS4wMzUycy0xMy42ODgtMy4zNTU1LTE3Ljg3MS05LjAzNTJjLTQuMTg3NS01LjY4MzYtNS40MjE5LTEzLjAxMi0zLjMyODEtMTkuNzUgMi4wOTM4LTYuNzM4MyA3LjI2NTYtMTIuMDc4IDEzLjkzLTE0LjM5MS0wLjEyMTA5LTAuNDEwMTYtMC4yMDcwMy0wLjgzMjAzLTAuMjU3ODEtMS4yNTc4di0yOS41OThoLTUyLjYxM2MtMS43MDMxIDguMzQzOC02LjIzMDUgMTUuODQ0LTEyLjgyNCAyMS4yMzgtNi41OTM4IDUuMzkwNi0xNC44NDQgOC4zNDM4LTIzLjM1OSA4LjM1OTRoLTEuMTgzNmM3LjMzNTkgMjEuNTA0IDIxLjE5MSA0MC4xODQgMzkuNjQxIDUzLjQ0NSAxOC40NDUgMTMuMjYyIDQwLjU3IDIwLjQ0NSA2My4yODkgMjAuNTUxIDI0LjU1MS0wLjAwMzkwNiA0OC4zNTktOC40MjU4IDY3LjQ0OS0yMy44NjMgNi43NTc4IDIuNzg1MiAxNC40NTcgMi4wNTg2IDIwLjU3OC0xLjkzMzYgNi4xMjUtMy45OTYxIDkuODg2Ny0xMC43NSAxMC4wNjYtMTguMDU5IDAuMTc1NzgtNy4zMDg2LTMuMjU3OC0xNC4yMzQtOS4xODM2LTE4LjUyLTUuOTIxOS00LjI4NTItMTMuNTc4LTUuMzc4OS0yMC40NjUtMi45MjU4di0wLjM3MTA5aC0yMi4xOTljNi44NDc3LTkuNjkxNCAxNy45MjYtMTUuNTE2IDI5Ljc5My0xNS42NTYgMTEuODYzLTAuMTM2NzIgMjMuMDc0IDUuNDIxOSAzMC4xNDUgMTQuOTUzbDE5MC40NyAwLjI5Njg4YzUuMDcwMy0wLjI1MzkxIDkuOTQ1My0yLjAzNTIgMTMuOTg4LTUuMTA1NWwzNi4zNzEtMzEuNDg0LTAuMDAzOTA3LTAuMDAzOTA2YzEuNTkzOC0xLjI2OTUgMi41MjM0LTMuMTk1MyAyLjUyMzQtNS4yMzQ0IDAtMi4wMzUyLTAuOTI5NjktMy45NjQ4LTIuNTIzNC01LjIzNDR6bS0zMTIuMy01MC42ODhjLTIuOTkyMiAwLTUuNjkxNC0xLjgwMDgtNi44MzU5LTQuNTY2NHMtMC41MTE3Mi01Ljk0OTIgMS42MDU1LTguMDY2NGMyLjExMzMtMi4xMTMzIDUuMjk2OS0yLjc1IDguMDYyNS0xLjYwMTYgMi43NjU2IDEuMTQ0NSA0LjU3MDMgMy44NDM4IDQuNTcwMyA2LjgzNTkgMCAxLjk2MDktMC43ODEyNSAzLjg0MzgtMi4xNjggNS4yMzA1LTEuMzkwNiAxLjM5MDYtMy4yNjk1IDIuMTY4LTUuMjM0NCAyLjE2OHptLTk2LjE5NSAxMDMuNmMtMi45OTIyIDAtNS42OTE0LTEuODA0Ny02LjgzNTktNC41NzAzcy0wLjUxMTcyLTUuOTQ1MyAxLjYwMTYtOC4wNjI1YzIuMTE3Mi0yLjExNzIgNS4zMDA4LTIuNzUgOC4wNjY0LTEuNjA1NSAyLjc2NTYgMS4xNDQ1IDQuNTY2NCAzLjg0MzggNC41NjY0IDYuODM1OSAwIDEuOTY0OC0wLjc3NzM0IDMuODQ3Ny0yLjE2OCA1LjIzNDQtMS4zODY3IDEuMzg2Ny0zLjI2OTUgMi4xNjgtNS4yMzA1IDIuMTY4em0xNzcuNTkgNTEuNzk3YzIuOTkyMiAwIDUuNjkxNCAxLjgwMDggNi44MzU5IDQuNTY2NCAxLjE0NDUgMi43NjU2IDAuNTExNzIgNS45NDkyLTEuNjA1NSA4LjA2NjQtMi4xMTcyIDIuMTE3Mi01LjI5NjkgMi43NS04LjA2MjUgMS42MDE2LTIuNzY1Ni0xLjE0NDUtNC41NzAzLTMuODQzOC00LjU3MDMtNi44MzU5IDAtNC4wODU5IDMuMzE2NC03LjM5ODQgNy40MDIzLTcuMzk4NHptMTQuODAxLTExMWgtMC4wMDM5MDdjMi45OTYxIDAgNS42OTE0IDEuODA0NyA2LjgzOTggNC41NjY0IDEuMTQ0NSAyLjc2NTYgMC41MTE3MiA1Ljk0OTItMS42MDU1IDguMDY2NC0yLjExNzIgMi4xMTcyLTUuMzAwOCAyLjc1LTguMDY2NCAxLjYwNTUtMi43NjE3LTEuMTQ4NC00LjU2NjQtMy44NDM4LTQuNTY2NC02LjgzOTggMC00LjA4NTkgMy4zMTI1LTcuMzk4NCA3LjM5ODQtNy4zOTg0em0zNi45OTYgNzAuMjk3aC02Ny44OTFjLTIuMzQ3NyA2LjYzNjctNy43MDMxIDExLjc3LTE0LjQzNCAxMy44MjgtNi43MzA1IDIuMDU4Ni0xNC4wMzkgMC44MDQ2OS0xOS42OTktMy4zNzg5LTUuNjYwMi00LjE4NzUtOC45OTYxLTEwLjgwOS04Ljk5NjEtMTcuODQ4IDAtNy4wMzkxIDMuMzM1OS0xMy42NiA4Ljk5NjEtMTcuODQ4czEyLjk2OS01LjQ0MTQgMTkuNjk5LTMuMzc4OWM2LjczMDUgMi4wNTg2IDEyLjA4NiA3LjE5MTQgMTQuNDM0IDEzLjgyOGg2Ny44OTFjNC4wODU5IDAgNy4zOTg0IDMuMzEyNSA3LjM5ODQgNy4zOTg0IDAgNC4wODU5LTMuMzEyNSA3LjM5ODQtNy4zOTg0IDcuMzk4NHptMjkuNTk4IDBjLTIuOTkyMiAwLTUuNjkxNC0xLjgwMDgtNi44MzU5LTQuNTY2NHMtMC41MTE3Mi01Ljk0OTIgMS42MDU1LTguMDY2NGMyLjExNzItMi4xMTMzIDUuMjk2OS0yLjc0NjEgOC4wNjI1LTEuNjAxNnM0LjU3MDMgMy44NDM4IDQuNTcwMyA2LjgzNTljMCAxLjk2MDktMC43ODEyNSAzLjg0MzgtMi4xNjggNS4yMzA1LTEuMzg2NyAxLjM5MDYtMy4yNjk1IDIuMTY4LTUuMjM0NCAyLjE2OHoiIGZpbGw9IiNmZmYiLz4KIDwvZz4KPC9zdmc+Cg==" alt="" />
        </div>
      </div>
      <div className="stepsOrder">LEARN</div>
    </div>
  )
}

export default WIFPageInfo