import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import Page from "./Page"

function Hero() {
  return (
    <div className="hero">
      <Page title="Home" wide={true}>
        <div style={{ overflow: "hidden", height: "75vh" }} className="row">
          <div className="col-6 text-center">
            <img style={{ transform: "translateX(-100px) translateY(-200px) scale(0.9)" }} src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNzUycHQiIGhlaWdodD0iNzUycHQiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDc1MiA3NTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZyBmaWxsPSIjZmY5NzAwIj4KICA8cGF0aCBkPSJtNTA4LjQzIDI4My41MmMwLjM4NjcyIDAuMDIzNDM4IDAuNzc3MzQgMC4xMjUgMS4xNjAyIDAuMTI1IDQuOTE0MSAwIDkuNzA3LTEuNjY0MSAxMy42MjktNC44MDg2IDUuMTk5Mi00LjE2OCA4LjE3OTctMTAuMzgzIDguMTc5Ny0xNy4wNDMgMC05LjQ5MjItNS45OTIyLTE3LjYwOS0xNC44MDEtMjAuNjAybDAuMDAzOTA2LTUuNzg1MmMwLTQ4Ljk2NS0zOS44MzItODguNzk3LTg4Ljc5Ny04OC43OTctMzYuNTk4IDAtNjkuMzc5IDIyLjc2Mi04Mi42MDIgNTYuMjgxbC0xLjgxMjUtMC4zOTg0NGMtNi40ODgzLTEuNDQ5Mi0xMy4yMTUgMC4xMTcxOS0xOC40MDIgNC4yODUyLTUuMTk5MiA0LjE2OC04LjE3OTcgMTAuMzgzLTguMTc5NyAxNy4wNDMgMCA5LjQ5MjIgNS45OTIyIDE3LjYwOSAxNC44MDEgMjAuNjAybC0wLjAwMzkwNyAyNy45ODRjMCAzNy43NzcgMjMuNzU0IDcwLjAzMSA1Ny4wNzQgODIuODMyLTYuNDUzMSAzLjA0My0xMi41OTQgNi43NzczLTE4LjIxMSAxMS4yN2wtMTEuODU5IDkuNDkyMmgtNTEuNjcybC0zLjc2NTYtMTcuNTc0YzMuNzU3OC0yLjY3NTggNi4yMzQ0LTcuMDU4NiA2LjIzNDQtMTIuMDIzaDMyLjQ2MWwtMy42MjUtMTAuODc5Yy00LjYwOTQtMTMuODI4LTE2LjU1NS0yMy42MDUtMzAuNjU2LTI1LjY3Ni0yLjQ5MjItNC42NDg0LTcuMzQ3Ny03Ljg0MzgtMTIuOTc3LTcuODQzOGgtMjkuNTk4Yy01LjQ1MzEgMC0xMC4xNzYgMi45OTYxLTEyLjc0MiA3LjM5ODRoLTE2Ljg1OWMtOC4xNjAyIDAtMTQuODAxIDYuNjM2Ny0xNC44MDEgMTQuODAxdjE0LjgwMWMwIDguMTYwMiA2LjYzNjcgMTQuODAxIDE0LjgwMSAxNC44MDFoMTYuODU1YzEuNTM5MSAyLjYzMjggMy44MzIgNC43NTc4IDYuNjIxMSA2LjAzOTFsNi40ODgzIDI1Ljk0MWMtNC43NzczIDUuMjYxNy03Ljc2NTYgMTIuMTcyLTcuNzY1NiAxOS44MTYgMCAxMi44MTYgOC4yMzQ0IDIzLjY0OCAxOS42NiAyNy43NThsNy44MDA4IDMxLjE5NWMxLjE3NTggNC42OTE0IDMuOTcyNyA4LjU4OTggNy42Nzk3IDExLjI2Mi0zLjU5MzggNi44NTE2LTUuNTQzIDE0LjQyMi01LjU0MyAyMi4yODF2NjQuOTY5bC04LjMyNDIgMi43NzM0Yy04LjI5MyAyLjc2MTctMTMuODcxIDEwLjUtMTMuODcxIDE5LjI1NCAwIDExLjE5NSA5LjEwMTYgMjAuMjk3IDIwLjI5NyAyMC4yOTdoOTAuNjk1di0wLjI5Njg4YzIuMjc3My0wLjIyMjY2IDQuNTQzLTAuNTU0NjkgNi43Njk1LTEuMDY2NGw4Ni4xMDItMTkuODc1IDcuNjcxOSAxMS41MDhjNC4wNjY0IDYuMDg5OCAxMC44NjcgOS43MzA1IDE4LjE5NSA5LjczMDUgMTIuMDU1IDAgMjEuODU5LTkuODA0NyAyMS44NTktMjEuODU1di00NC43NDJjMC0xMi4yMzgtOS45NjA5LTIyLjE5OS0yMi4xOTktMjIuMTk5aC0yMi4zOTFjNC42OTUzLTYuMTk5MiA3LjU4OTgtMTMuODM2IDcuNTg5OC0yMi4xOTV2LTExOC40aC0wLjEwOTM4Yy0wLjQwNjI1LTExLjIzOC02Ljg3NS0yMC44NjctMTYuMjM0LTI1Ljg3MSAyNC4yNy0xMy40MzQgNDEuNTYyLTM3LjkxNCA0NS4xNzItNjYuNjA5em0tODAuNjI1LTEyMi4xMWM0MC44MDEgMCA3My45OTYgMzMuMTk1IDczLjk5NiA3My45OTZ2Mi4yODUybC0xNDEuOTItMzEuNTM1YzExLjU0My0yNi43NDIgMzguMjExLTQ0Ljc0NiA2Ny45MjItNDQuNzQ2em0tODEuMzk4IDExMXYtMjQuNDg0bDU5LjE5OSAxMy4xNTZ2MjYuMTI1aDE0LjgwMWM0LjA3ODEgMCA3LjM5ODQgMy4zMjQyIDcuMzk4NCA3LjM5ODQgMCA0LjA3ODEtMy4zMjQyIDcuMzk4NC03LjM5ODQgNy4zOTg0aC0xNC44MDF2NDIuOTAyYy0zMy43MzgtNi44NjcyLTU5LjE5OS0zNi43NjItNTkuMTk5LTcyLjQ5NnptMzguMDIgMTAyLjIxYzUuNzI2Ni0zLjg5ODQgMTEuOTQxLTcgMTguNDYxLTkuMjM0NHptLTEwNS44OCAyLjgyODEtNC4wNjI1LTE2LjI0MmgxNC4xMzNsMy4xNzU4IDE0LjgwMS00LjU4OTgtMC4wMDM5MDZjLTMuMDMxMiAwLTUuOTAyMyAwLjU5Mzc1LTguNjU2MiAxLjQ0NTN6bTMwLjg1NS00NS44NDR2LTYuMDc0MmMzLjY4MzYgMS4yMzQ0IDcuMDQzIDMuMjU3OCA5LjY4NzUgNi4wNzQyem0tNDQuMzk1LTE0Ljc5N2gyOS41OThsMC4wMDc4MTIgMjkuNTk4aC0yOS42MDV6bS0yOS42MDIgNy4zOTg0aDE0LjgwMXYxNC44MDFoLTE0LjgwMXptNTEuNzk3IDY2LjU5OGg5MS42MjVsMTQuODAxIDI5LjU5OGgtMTA2LjQzYy04LjE2MDIgMC0xNC44MDEtNi42MzY3LTE0LjgwMS0xNC44MDEgMC4wMDM5MDYtOC4xNjAyIDYuNjQwNi0xNC43OTcgMTQuODAxLTE0Ljc5N3ptMzcuNzE5IDEzMi44OGMtNS4zMTI1IDguNTAzOS04LjExNzIgMTguMjkzLTguMTE3MiAyOC4zMDUgMCAzLjA3MDMgMC4zMTY0MSA2LjA2NjQgMC44MjAzMSA5LjAwMzloLTE1LjYyMXYtNjIuODk4YzAtNi43OTMgMi4wNTA4LTEzLjI5NyA1Ljg4MjgtMTguODU1IDYuNjgzNi0xLjIxNDggMTIuMjE5LTUuNzQyMiAxNC43NzctMTEuODU1IDEwLjA5NC00LjEwNTUgMjIuMDI3LTIuOTE0MSAzMS4xMzcgMy4xMjg5djYuOTY0OHptLTEuNzYxNy03MS45My0zLjU0My0xNi41NTVoMzQuMTg0djE4LjYzM2MtOS42NTYyLTMuOTIxOS0yMC41NDctNC42MDk0LTMwLjY0MS0yLjA3ODF6bS0xOC42ODQtMTYuNTU1IDQuODE2NCAyMi40NjVjMC4wNzQyMTkgMC4zNDc2NiAwLjEwOTM4IDAuNzAzMTMgMC4xMDkzOCAxLjA1ODZ2MS4wMTU2YzAgMi43ODkxLTIuMjY5NSA1LjA1ODYtNS4wNjY0IDUuMDU4Ni0yLjMzMiAwLTQuMzUxNi0xLjU3NDItNC45MTQxLTMuODM5OGwtNi40Mzc1LTI1Ljc1OHptNjQuMTI1IDBoMzguOTE0bDU2LjI4OS0zMS4yNzdjMC4zNDc2Ni0wLjE5MTQxIDAuNjUyMzQtMC40Mzc1IDAuOTkyMTktMC42NDQ1M3Y2OC45MjJoLTk2LjE5NXptLTgzLjI5NyAxNTUuMzljLTMuMDM1MiAwLTUuNS0yLjQ2NDgtNS41LTUuNSAwLTIuMzY3MiAxLjUwNzgtNC40Njg4IDMuNzU3OC01LjIxNDhsMTIuMjUtNC4wODU5aDI2LjY2OGMyLjc4OTEgNS41NTg2IDYuNTExNyAxMC41NTEgMTAuOTk2IDE0LjgwMXptMjE2LjQ5LTUxLjgwMXY0NC43MzhjMCAzLjg5NDUtMy4xNjggNy4wNjI1LTcuMDU4NiA3LjA2MjUtMi4zNjcyIDAtNC41NjY0LTEuMTc1OC01Ljg3NS0zLjE0NDVsLTkuMjY1Ni0xMy44OTh2LTQyLjE1NmgxNC44MDFjNC4wNzQyIDAgNy4zOTg0IDMuMzI0MiA3LjM5ODQgNy4zOTg0em0tODguNzk3LTcuMzk4NGg1MS43OTd2MzguNTA4bC04NS4zNTUgMTkuNjk5Yy0yLjgzMiAwLjY2MDE2LTUuNzU3OCAwLjk5MjE5LTkuMjM0NCAwLjk5MjE5LTIxLjI4OSAwLTM4LjYwNS0xNy4zMTYtMzguNjA1LTM4LjYwNSAwLTcuMjQ2MSAyLjAyNzMtMTQuMzIgNS44NjcyLTIwLjQ2OWwyNy44MzItNDQuNTIzaDk5LjQ5NnY3LjM5ODRjMCAxMi4yMzgtOS45NjA5IDIyLjE5OS0yMi4xOTkgMjIuMTk5aC01OS4xOTV2MTQuODAxem00My42MjEtMTQwLjQxLTQ3Ljg1OSAyNi41ODYtMTUuNDM4LTMwLjg2MyA0Ny42Ni0yMy44MzZjMi4yMDctMS4wODU5IDQuNjY0MS0xLjY2OCA3LjExMzMtMS42NjhoMC44MDQ2OWM4Ljc2OTUgMCAxNS44OTUgNy4xMjUgMTUuODk1IDE1Ljg5NSAwIDUuNzYxNy0zLjEyODkgMTEuMDktOC4xNzU4IDEzLjg4N3ptLTM2LjIyMy00NC41ODJ2LTI5LjU5OGMxMi4yMzggMCAyMi4xOTktOS45NjA5IDIyLjE5OS0yMi4xOTlzLTkuOTYwOS0yMi4xOTktMjIuMTk5LTIyLjE5OXYtOC4wNDNsNDIuNzYyIDkuNSAzLjIxMDktMTQuNDQ1LTEyOS4yNS0yOC43MTljLTMuMjQ2MS0wLjcyMjY2LTUuNTE5NS0zLjU1MDgtNS41MTk1LTYuODc4OSAwLTIuMTUyMyAwLjk2MDk0LTQuMTYwMiAyLjYzMjgtNS40OTYxIDEuNjcxOS0xLjMzOTggMy44NDc3LTEuODUxNiA1Ljk0MTQtMS4zODI4bDE3MC44OSAzNy45NzdjMy4yNSAwLjcyNjU2IDUuNTE5NSAzLjU1MDggNS41MTk1IDYuODgyOCAwIDIuMTUyMy0wLjk2MDk0IDQuMTYwMi0yLjYzMjggNS40OTYxLTEuNjc5NyAxLjMzOTgtMy44NTU1IDEuODM1OS01LjkzMzYgMS4zODI4bC0yNi4wMDQtNS43NzczLTMuMjE4OCAxNC40NDUgMTUuMDk0IDMuMzU5NGMtNC4xMjg5IDM2LjkwMi0zNS40OTYgNjUuNjk1LTczLjQ5NiA2NS42OTV6Ii8+CiAgPHBhdGggZD0ibTI0MC42IDM1OS40NS0xMi41OTQgMTguMjk3LTE0LjYwNS0yMS4yMjMtMjUuNzUtMS45MDIzIDExLjIwNy0yMy4wMi0xMS4yMTEtMjMuMDIgMjUuNzUtMS45MDIzIDE0LjYwOS0yMS4yMjMgMTIuNTk0IDE4LjMwMSAxMi4xODgtOC4zOTA2LTE3LjM4My0yNS4yNjJ2LTEyMy41aC04OC43OTd2NDU4Ljc4aDg4Ljc5N3YtMjEyLjI5bDE3LjM5MS0yNS4yNjJ6bS03OS4xOTEgMjMxLjE0di00MjkuMThoNTkuMTk5djEwOC43bC0xNS4zNzUgMjIuMzQtNDAuNDUzIDIuOTgwNSAxNy42MTMgMzYuMTc2LTE3LjYxNyAzNi4xNzYgNDAuNDUzIDIuOTgwNSAxNS4zNzkgMjIuMzQ0djE5Ny40OXoiLz4KICA8cGF0aCBkPSJtMzYxLjIgMjY1LjAxaDE0LjgwMXYxNC44MDFoLTE0LjgwMXoiLz4KICA8cGF0aCBkPSJtMTc2LjIxIDE3Ni4yMWgxNC44MDF2NTkuMTk5aC0xNC44MDF6Ii8+CiAgPHBhdGggZD0ibTE3Ni4yMSAyNTAuMjFoMTQuODAxdjE0LjgwMWgtMTQuODAxeiIvPgogIDxwYXRoIGQ9Im0xOTEuMDEgMzk4LjJoMTQuODAxdjU5LjE5OWgtMTQuODAxeiIvPgogIDxwYXRoIGQ9Im0xNzYuMjEgNTMxLjM5aDE0LjgwMXY0NC4zOThoLTE0LjgwMXoiLz4KIDwvZz4KPC9zdmc+Cg==" alt="" />
          </div>
          <div className="col-6 text-end">
            <h1 className="mainTitle text-body">
              Build Your <br /> Own <span className="orangeMe">Bitcoin</span> <br /> Transaction
            </h1>
            <p className="display-5">
              So you can stop relying <br /> on a third party.
            </p>
            <Link to="/dashboard" className="btn btn-lg btn-outline-warning mt-2">
              Start Building
            </Link>
          </div>
        </div>
      </Page>

      <Page title="Home" wide={true}>
        <div className="row">
          <div className="col">
            <h1 className="subTitle text-body">
              Learn how to <span className="orangeMe">construct</span> a <br /> P2PKH TX.
            </h1>
            <p className="display-5">By learning what goes on under the hood of a bitcoin transaction, the more you'll understand bitcoin's security.</p>
          </div>
          <div className="col">
            <img width="600" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNzUycHQiIGhlaWdodD0iNzUycHQiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDc1MiA3NTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8Zz4KICA8cGF0aCBkPSJtNDIwLjQgNTk3Ljk5di0yMTQuNTloLTE0Ljc5N3YyMi4xOTloLTU5LjE5OXYtMjIuMTk5aC0xNC44MDF2MjIuMTk5aC03My45OTZ2NzMuOTk2aC0yOS41OTh2LTE0LjgwMWgxNC44MDF2LTE0Ljc5N2gtNDQuMzk4di0xNC44MDFoLTE0LjgwMXYxNC44MDFoLTE0LjgwMXYtMjIuMTk5aC0xNC43OTd2MTcwLjE5em0tMTQ3Ljk5LTE3Ny41OWgxMzMuMnYxNjIuNzloLTEzMy4yem0tNzMuOTk2IDQ0LjM5OGgxNC44MDF2MTQuODAxaC0xNC44MDF6bS0yOS42MDIgMGgxNC44MDF2MTQuODAxaC0xNC44MDF6bTAgMjkuNTk4IDg4Ljc5NyAwLjAwMzkwN3Y4OC43OTNoLTg4Ljc5N3oiLz4KICA8cGF0aCBkPSJtNTkwLjU5IDE1NC4wMWgtMzYyLjU5Yy0yLjE5OTItMC4wMDM5MDctNC4yODEyIDAuOTY4NzUtNS42OTE0IDIuNjU2MmwtMzcgNDQuMzk4aDAuMDAzOTA2Yy0xLjg0MzggMi4yMDMxLTIuMjQyMiA1LjI3NzMtMS4wMjM0IDcuODgyOCAxLjIxODggMi42MDE2IDMuODM1OSA0LjI2MTcgNi43MTA5IDQuMjU3OGg4OC43OTd2MjkuNTk4aDIyLjE5OXYzMi45MzhsLTc2LjE1NiA0OC40NjFoLTM0Ljg0djQ0LjM5OGgyMzYuNzl2LTQ0LjM5OGgtNDIuMDdsLTY4LjkyNi00OC4yNTR2LTMzLjE0MWgyMi4xOTl2LTI5LjYwMmgxMjQuNzlsLTI2Ljg4MyAzMi4yNTR2MC4wMDM5MDZjLTEuMTA1NSAxLjMzMi0xLjcxMDkgMy4wMTE3LTEuNzEwOSA0Ljc0MjJ2MjkuNTk4YzAgMS45NjQ4IDAuNzgxMjUgMy44NDM4IDIuMTY4IDUuMjM0NCAxLjM4NjcgMS4zODY3IDMuMjY5NSAyLjE2NDEgNS4yMzA1IDIuMTY0MWgyOS41OThsMC4wMDM5MDcgMzEwLjc5aDg4Ljc5M3YtMzEwLjc5aDI5LjYwMmMxLjk2MDkgMCAzLjg0MzgtMC43NzczNCA1LjIzMDUtMi4xNjQxIDEuMzg2Ny0xLjM5MDYgMi4xNjgtMy4yNjk1IDIuMTY4LTUuMjM0NHYtMTE4LjM5YzAtMS45NjA5LTAuNzgxMjUtMy44NDM4LTIuMTY4LTUuMjM0NC0xLjM4NjctMS4zODY3LTMuMjY5NS0yLjE2NDEtNS4yMzA1LTIuMTY0MXptLTE5Ljk4IDE0Ljc5Ny0zMS40MjYgMjYuOTIyLTI2LjkzLTI2LjkyMnptLTQ5LjY4IDI5LjYwMmgtNTMuMDc0bDI2LjUzOS0yNi41MzV6bS0zMTQuMTIgMCAyMS42OTUtMjYuMDMxIDI2LjAzOSAyNi4wMzF6bTY1LjU5OC0zLjA2NjQtMjYuNTM1LTI2LjUzNWg1My4wN3ptMTQwLjU5IDE0My42NnYxNC44MDFsLTIwNy4xOS0wLjAwMzkwN3YtMTQuNzk3em0tNTMuMDctMTQuODAxaC0xMDYuNTFsNTUuNzkzLTM1LjUyem0tMzUuNzI3LTk2LjE5NWgtMjkuNTk4di0xNC44MDFoMjkuNTk4em0tMzMuOTM0LTI5LjU5OCAyNi41MzUtMjYuNTM1IDI2LjUzNSAyNi41MzV6bTQ0LjM5OC0yOS41OThoNTMuMDdsLTI2LjUzNSAyNi41MzF6bTQ0LjM5OCAyOS41OTggMjYuNTM1LTI2LjUzNSAyNi41MzUgMjYuNTM1em03MC45MzQtMy4wNjY0LTI2LjUzNS0yNi41MzVoNTMuMDd6bTMzLjA2NiAxNy44NjNoMzMuNTMxdjI5LjU5OGwtNTguMTk5IDAuMDAzOTA2em02Ljk5MjIgMjE0LjU5IDI2LjUzOS0yNi41MzEgMjYuNTM1IDI2LjUzNS0yNi41MzUgMjYuNTM1em01My41MjMgNzQuNDU3LTI2Ljk4NCAzMi4zODMtMjYuOTg4LTMyLjM4MyAyNi45ODgtMjYuOTkyem0tNTMuNTIzLTE0OC40NSAyNi41MzktMjYuNTM1IDI2LjUzNSAyNi41MzUtMjYuNTM1IDI2LjUzNXptNy4zOTg0LTY2LjU5OGgzOC4yN2wtMTkuMTI5IDE5LjEzN3ptOC42NzE5IDI5LjU5OC0xOS4xMzMgMTkuMTM3di0zOC4yN3ptMCA3My45OTYtMTkuMTMzIDE5LjE0MXYtMzguMjczem0wIDczLjk5Ni0xOS4xMzMgMTkuMTQxdi0zOC4yN3ptMC44NDc2NiA4MS40MDItMTkuOTggMjMuOTUzdi00Ny45MDZ6bS0xMS41NTkgMzcgMjEuMTgtMjUuNDM0IDIxLjE5MSAyNS40M3ptNTAuNzc3LTEzLjA0Ny0xOS45OC0yMy45NTMgMTkuOTgtMjMuOTUzem0wLTg2LjIxNS0xOS4xMzctMTkuMTM3IDE5LjEzNy0xOS4xMzN6bTAtNzMuOTk2LTE5LjEzNy0xOS4xMzcgMTkuMTM3LTE5LjEzN3ptMC03My45OTYtMTkuMTM3LTE5LjEzNyAxOS4xMzctMTkuMTM3em0zNi45OTYtNjMuNTM1aC0xMzMuMTl2LTE0LjgwMWg3My45OTZjMS45NjA5IDAgMy44NDM4LTAuNzc3MzQgNS4yMzA1LTIuMTY4IDEuMzkwNi0xLjM4NjcgMi4xNjgtMy4yNjk1IDIuMTY4LTUuMjMwNXYtMzdoNTEuNzk3em0wLTczLjk5NmgtMjQuNDE4bDI0LjQxOC0yMC45MjJ6Ii8+CiAgPHBhdGggZD0ibTI4Ny4yIDUyNGgxMDMuNnYtODguNzk3aC0xMDMuNnptMTQuODAxLTczLjk5Nmg3My45OTZ2NTkuMTk5bC03My45OTYtMC4wMDM5MDd6Ii8+CiAgPHBhdGggZD0ibTE4My42MSA1NTMuNTloNTkuMTk5di00NC4zOThoLTU5LjE5OXptMTQuODAxLTI5LjU5OGgyOS41OTh2MTQuODAxbC0yOS41OTgtMC4wMDM5MDZ6Ii8+CiAgPHBhdGggZD0ibTM3NiA1NTMuNTloLTI5LjU5OHYxNC44MDFoNDQuMzk4di0yOS42MDJoLTE0LjgwMXoiLz4KICA8cGF0aCBkPSJtMzE2LjggNTUzLjU5aDE0LjgwMXYxNC44MDFoLTE0LjgwMXoiLz4KICA8cGF0aCBkPSJtNTQ2LjIgMjI4LjAxaDE0LjgwMXYxNC44MDFoLTE0LjgwMXoiLz4KIDwvZz4KPC9zdmc+Cg==" alt="" />
          </div>
        </div>
      </Page>

      <div className="orangeBG">
        <Page title="Home" wide={true}>
          <div className="row pt-5">
            <div className="col">
              <img width="600" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNzUycHQiIGhlaWdodD0iNzUycHQiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDc1MiA3NTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8Zz4KICA8cGF0aCBkPSJtMjE0LjEyIDU4Ni40OGMtMi40MTQxIDAtNC42Nzk3LTAuOTM3NS02LjM4MjgtMi42NDA2bC0zOS41NzgtMzkuNTljLTMuNTExNy0zLjUxOTUtMy41MTE3LTkuMjQyMiAwLTEyLjc1NGwxNDguNDUtMTQ4LjQxYzEuNzAzMS0xLjcwMzEgMy45Njg4LTIuNjQwNiA2LjM3ODktMi42NDA2IDIuNDEwMiAwIDQuNjc5NyAwLjkzNzUgNi4zODI4IDIuNjQwNmwxMC4yOTMgMTAuMjkzYzAuODI0MjIgMC44MjQyMiAxLjk1MzEgMS4yOTMgMy4xMjExIDEuMjkzIDEuMTY0MSAwIDIuMjg1Mi0wLjQ2ODc1IDMuMTE3Mi0xLjI5M2w3MC44MDktNzAuNzg1YzEuNjkxNC0xLjY5NTMgMS43MjI3LTQuNDIxOSAwLjA3NDIxOS02LjE1MjNsLTI5LjkyNi0zMS40OTZjLTIuMTI1LTIuMjUtNi4wMjczLTguMDQ2OS01LjUxOTUtMTMuNzc3IDAuMTI1LTEuNTUwOCAwLjQ4MDQ3LTMuMDk3NyAxLjA0My00LjY0ODQgMC42MTMyOC0xLjY3NTggMi42NjAyLTcuNzMwNSAzLjMwMDgtMTUuMTY0IDAuOTY0ODQtMTEuMTM3LTEuNDMzNi0xOS43MTktNy4zMzk4LTI2LjIzNC04Ljc0MjItOS42MTMzLTI2LjAzOS0xNC44MDEtNTAuMDI3LTE1LjAxMi00LjMxMjUtMC4wMzkwNjItOC4yNDYxLTEuNzc3My0xMS4wNzgtNC44ODY3LTIuOTI1OC0zLjIzNDQtNC4zMjQyLTcuNTM5MS0zLjkyMTktMTIuMTMzIDAuNjAxNTYtNi44MDA4IDUuMDg5OC0xMi44ODcgMTEuNDM0LTE1LjUwOCAxMy4zMjgtNS41IDM0LjIwMy0xMi4wNjYgNTcuOTQ5LTEyLjA2NiAzMS42ODggMCA1OC44OTUgMTEuNzMgODAuODgzIDM0Ljg3NWw1My45NDkgNTYuNzdjMy4zMjAzIDMuNDg0NCAzLjMyMDMgOC45Mzc1IDAgMTIuNDIyLTcuMTU2MiA3LjUyNzMtNy45MjE5IDE4Ljk4LTEuNzE0OCAyNS41MzEgMi41NjY0IDIuNjkxNCA2LjA4NTkgNC4xNzE5IDkuOTE0MSA0LjE3MTkgNC42NjggMCA5LjQyMTktMi4xNzE5IDEzLjA0Ny01Ljk2MDkgMS41OTc3LTEuNjkxNCAzLjk4MDUtMi42NDg0IDYuNTQ2OS0yLjY0ODQgMi41NjI1IDAgNC45NDUzIDAuOTU3MDMgNi41MjM0IDIuNjMyOGwzMC4zOTUgMzEuOTkyYzMuMDU0NyAzLjIwMzEgNC41NzQyIDcuNjk5MiA0LjE3MTkgMTIuMzUyLTAuMzYzMjggNC4xMjExLTIuMTc5NyA4LjA5MzgtNS4xMjg5IDExLjE4NGwtNTQuNTYyIDU3LjQyMmMtMy4wMTk1IDMuMTg3NS02Ljk2NDggNS4xNjgtMTEuMTA1IDUuNTc4MS0wLjUyNzM0IDAuMDQ2ODc1LTEuMDYyNSAwLjA4NTkzNy0xLjU4OTggMC4wODU5MzctNC4xOTkyIDAtOC4wODItMS42NDQ1LTEwLjkzNC00LjY0MDZsLTMwLjM5NS0zMi4wMDRjLTMuMzEyNS0zLjQ4MDUtMy4zMTI1LTguOTMzNiAwLTEyLjQyNiA3LjE1NjItNy41MzEyIDcuOTIxOS0xOC45NzMgMS43MTA5LTI1LjUwOC0yLjU1NDctMi42ODc1LTYuMDc0Mi00LjE3OTctOS45MTAyLTQuMTc5Ny00LjY3MTkgMC05LjQzMzYgMi4xODM2LTEzLjA2MiA1Ljk4MDUtMS41OTc3IDEuNjkxNC0zLjk3NjYgMi42NDg0LTYuNTQzIDIuNjQ4NC0yLjU2MjUgMC00Ljk0NTMtMC45NTcwMy02LjUzNTItMi42Mjg5bC0zLjA3ODEtMy4yNDIyYy0wLjgyNDIyLTAuODYzMjgtMS45NTMxLTEuMzU5NC0zLjE0MDYtMS4zNzExaC0wLjA1NDY4N2MtMS4xNjggMC0yLjI4OTEgMC40Njg3NS0zLjEyMTEgMS4yOTNsLTcwLjMxNiA3MC4zMDFjLTAuODI0MjIgMC44MjAzMS0xLjI5MyAxLjk0OTItMS4yOTMgMy4xMTcyczAuNDY4NzUgMi4yODUyIDEuMjkzIDMuMTIxMWwxMC4yOTMgMTAuMjkzYzMuNTE5NSAzLjUxOTUgMy41MTk1IDkuMjQyMiAwIDEyLjc1NGwtMTQ4LjQ1IDE0OC40MmMtMS43MDMxIDEuNjkxNC0zLjk2MDkgMi42Mjg5LTYuMzcxMSAyLjYyODl6bTEwOC44Ni0xODIuNDRjLTEuMTI4OSAwLTIuMjU3OCAwLjQyOTY5LTMuMTIxMSAxLjI4OTFsLTEyOS40NSAxMjkuNDJjLTEuNzIyNyAxLjcyMjctMS43MjI3IDQuNTA3OCAwIDYuMjMwNWwyMC41OSAyMC41OThjMC44MjAzMSAwLjgyMDMxIDEuOTQ5MiAxLjI4OTEgMy4xMTcyIDEuMjg5MXMyLjI4NTItMC40Njg3NSAzLjEyMTEtMS4yODkxbDEyOS40NS0xMjkuNDRjMC44MjQyMi0wLjgyMDMxIDEuMjkzLTEuOTQ5MiAxLjI5My0zLjExNzIgMC0xLjE2OC0wLjQ2ODc1LTIuMjg5MS0xLjI5My0zLjEyMTFsLTIwLjU5LTIwLjU4NmMtMC44NTkzOC0wLjg0Mzc1LTEuOTg4My0xLjI3MzQtMy4xMTcyLTEuMjczNHptMTQxLjI1LTg4Ljc0NmM4Ljk3MjcgMCAxNy40NDkgMy41MTE3IDIzLjI1IDkuNjI1IDkuODkwNiAxMC4zOTggMTEuODkxIDI2Ljc3NyA0Ljk5MjIgNDAuNzczLTAuODEyNSAxLjY1NjItMC41MTU2MiAzLjY0ODQgMC43NTc4MSA0Ljk4NDRsMTguMDA0IDE4Ljk2NWMwLjgzMjAzIDAuODc4OTEgMS45ODgzIDEuMzY3MiAzLjE5NTMgMS4zNjcyczIuMzYzMy0wLjQ5NjA5IDMuMTk1My0xLjM2NzJsNDcuNTUxLTUwLjA1OWMxLjYxNzItMS42OTkyIDEuNjE3Mi00LjM3MTEgMC02LjA2MjVsLTE4LjI4NS0xOS4yNWMtMC44NTE1Ni0wLjg5ODQ0LTIuMDE1Ni0xLjM2NzItMy4xOTUzLTEuMzY3Mi0wLjY3OTY5IDAtMS4zNjcyIDAuMTYwMTYtMi4wMDc4IDAuNDg4MjgtNC44MTI1IDIuNDY0OC0xMC4yNDYgMy43Njk1LTE1LjcxMSAzLjc2OTUtOC45NzI3IDAtMTcuNDQxLTMuNTAzOS0yMy4yMjctOS42MDU1LTkuOTE0MS0xMC40MjItMTEuOTIyLTI2LjgyLTQuOTk2MS00MC43OTcgMC44MjQyMi0xLjY1NjIgMC41MTk1My0zLjY1NjItMC43NTM5MS00Ljk5MjJsLTQ2LjUtNDguOTM4Yy0xOC4zNDgtMTkuMzE2LTQxLjM2Ny0yOS4xMTMtNjguMzk1LTI5LjExMy04LjAzNTIgMC0xNi40MTggMC44OTA2Mi0yNC44ODcgMi42NDg0LTIuMDM1MiAwLjQyMTg3LTMuNSAyLjIxMDktMy41MDc4IDQuMjk2OS0wLjAxMTcxOSAyLjA3NDIgMS40MzM2IDMuODgyOCAzLjQ3MjcgNC4zMjQyIDE1LjAxMiAzLjI3MzQgMjYuNjE3IDkuMzI4MSAzNC40ODggMTguMDA0IDkuMjM0NCAxMC4xNTIgMTMuMzY3IDIzLjk1NyAxMS45OCAzOS45MjYtMC41OTM3NSA2Ljg4NjctMi4xMjUgMTIuODg3LTMuMzAwOCAxNi43MTUtMC40Njg3NSAxLjUxOTUtMC4wNzgxMjUgMy4xNzU4IDEuMDExNyA0LjMyNDJsNDEuOTczIDQ0LjI0NmMwLjg1MTU2IDAuOTAyMzQgMi4wMTk1IDEuMzc4OSAzLjIwMzEgMS4zNzg5IDAuNjkxNDEgMCAxLjM3ODktMC4xNjAxNiAyLjAxOTUtMC40ODgyOCA0Ljc5My0yLjQ5NjEgMTAuMjExLTMuNzk2OSAxNS42NzItMy43OTY5eiIvPgogIDxwYXRoIGQ9Im0zMDguODMgNTg2LjQ4Yy00Ljk3NjYgMC05LjAyMzQtNC4wNDY5LTkuMDIzNC05LjAyMzQgMC00Ljk3MjcgNC4wNDY5LTkuMDE5NSA5LjAyMzQtOS4wMTk1aDIwMS40NmMyLjQyOTcgMCA0LjQxMDItMS45NzI3IDQuNDEwMi00LjQxMDJ2LTY3LjE0NWMwLTIuNDI5Ny0xLjk3MjctNC40MTAyLTQuNDEwMi00LjQxMDJoLTEzLjQzNGMtNC45NzI3IDAtOS4wMTk1LTQuMDQ2OS05LjAxOTUtOS4wMjM0IDAtNC45NzI3IDQuMDQ2OS05LjAxOTUgOS4wMTk1LTkuMDE5NWg1My43MjNjNC45NzI3IDAgOS4wMTk1IDQuMDQ2OSA5LjAxOTUgOS4wMTk1IDAgNC45NzY2LTQuMDQ2OSA5LjAyMzQtOS4wMTk1IDkuMDIzNGgtMTMuNDM0Yy0yLjQyOTcgMC00LjQxMDIgMS45NzI3LTQuNDEwMiA0LjQxMDJ2NjcuMTQ1YzAgMi40Mjk3IDEuOTY4OCA0LjQxMDIgNC40MTAyIDQuNDEwMmg0MC4yODljNC45NzI3IDAgOS4wMTk1IDQuMDQ2OSA5LjAxOTUgOS4wMTk1IDAgNC45NzY2LTQuMDQ2OSA5LjAyMzQtOS4wMTk1IDkuMDIzNHoiLz4KICA8cGF0aCBkPSJtNDE2LjI4IDQ5Mi40OWMtNC45NzY2IDAtOS4wMjM0LTQuMDQ2OS05LjAyMzQtOS4wMjM0IDAtNC45NzY2IDQuMDQ2OS05LjAyMzQgOS4wMjM0LTkuMDIzNGgyNi44NjNjNC45NzY2IDAgOS4wMjM0IDQuMDQ2OSA5LjAyMzQgOS4wMjM0IDAgNC45NzY2LTQuMDQ2OSA5LjAyMzQtOS4wMjM0IDkuMDIzNHoiLz4KICA8cGF0aCBkPSJtNDcwIDQ1Mi4yYy0yLjQxMDIgMC00LjY3OTctMC45NDE0MS02LjM3ODktMi42NDA2bC0xOC45OTItMTkuMDA0Yy0xLjcxNDgtMS42OTkyLTIuNjUyMy0zLjk2ODgtMi42NTIzLTYuMzkwNiAwLTIuNDEwMiAwLjkzNzUtNC42NjggMi42NDA2LTYuMzU5NCAxLjcxNDgtMS43MTQ4IDMuOTgwNS0yLjY1MjMgNi4zODI4LTIuNjUyM3M0LjY3OTcgMC45Mzc1IDYuMzgyOCAyLjY0MDZsMTguOTg4IDE5YzEuNzE0OCAxLjcwMzEgMi42NTIzIDMuOTgwNSAyLjY1MjMgNi4zOTA2IDAgMi40MDIzLTAuOTM3NSA0LjY3MTktMi42NDA2IDYuMzYzMy0xLjcwMzEgMS43MTA5LTMuOTcyNyAyLjY1MjMtNi4zODI4IDIuNjUyM3oiLz4KIDwvZz4KPC9zdmc+Cg==" alt="" />
            </div>
            <div className="col text-end">
              <h1 className="subTitle text-body">
                Your TX. <br /> <span className="text-white">Your Control</span>.
              </h1>
              <p className="display-5">Most bitcoin wallets essentially abstract the process of constructing a tx for us. By constructing it yourself, the process allows for more flexibility and ownership.</p>
            </div>
          </div>
        </Page>
      </div>

      <Page title="Home" wide={true}>
        <div className="row pt-5">
          <div className="col">
            <h1 className="subTitle text-body">
              Learn <span className="orangeMe">bitcoin</span> fundamentals.
            </h1>
            <p className="display-5">Learn fundamental concepts such as UTXO, scriptSig, scriptPubKey, and more throughout the building process.</p>
          </div>
          <div className="col">
            <img width="600" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNzUycHQiIGhlaWdodD0iNzUycHQiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDc1MiA3NTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8Zz4KICA8cGF0aCBkPSJtNTkwLjU5IDQ1MGM0LjA4NTkgMCA3LjM5ODQtMy4zMTY0IDcuMzk4NC03LjQwMjMgMC00LjA4NTktMy4zMTI1LTcuMzk4NC03LjM5ODQtNy4zOTg0aC02Ni41OTh2LTY2LjU5OGMwLTEuOTYwOS0wLjc4MTI1LTMuODQzOC0yLjE2OC01LjIzMDUtMS4zODY3LTEuMzkwNi0zLjI2OTUtMi4xNjgtNS4yMzA1LTIuMTY4aC04OC43OTd2LTY2LjU5OGMwLTEuOTY0OC0wLjc4MTI1LTMuODQzOC0yLjE2OC01LjIzNDQtMS4zODY3LTEuMzg2Ny0zLjI2OTUtMi4xNjgtNS4yMzQ0LTIuMTY4aC03My45OTZ2LTY2LjU5NGMwLTEuOTY0OC0wLjc4MTI1LTMuODQ3Ny0yLjE2OC01LjIzNDRzLTMuMjY5NS0yLjE2OC01LjIzMDUtMi4xNjhoLTg4Ljc5N3YtNTEuNzk3YzAtNC4wODU5LTMuMzEyNS03LjM5ODQtNy4zOTg0LTcuMzk4NC00LjA4OTggMC03LjQwMjMgMy4zMTI1LTcuNDAyMyA3LjM5ODR2NTEuNzk3aC03My45OTZjLTQuMDg1OSAwLTcuMzk4NCAzLjMxMjUtNy4zOTg0IDcuNDAyM3Y3My45OTZjMCAxLjk2MDkgMC43NzczNCAzLjg0MzggMi4xNjQxIDUuMjMwNSAxLjM5MDYgMS4zOTA2IDMuMjczNCAyLjE2OCA1LjIzNDQgMi4xNjhoNzMuOTk2djU5LjE5OWgtNzMuOTk2Yy00LjA4NTkgMC03LjM5ODQgMy4zMTI1LTcuMzk4NCA3LjM5ODR2NzMuOTk2YzAgMS45NjQ4IDAuNzc3MzQgMy44NDc3IDIuMTY0MSA1LjIzNDQgMS4zOTA2IDEuMzg2NyAzLjI3MzQgMi4xNjggNS4yMzQ0IDIuMTY4aDczLjk5NnY1OS4xOTlsLTczLjk5Ni0wLjAwMzkwN2MtNC4wODU5IDAtNy4zOTg0IDMuMzEyNS03LjM5ODQgNy40MDIzdjczLjk5NmMwIDEuOTYwOSAwLjc3NzM0IDMuODQzOCAyLjE2NDEgNS4yMzA1IDEuMzkwNiAxLjM4NjcgMy4yNzM0IDIuMTY4IDUuMjM0NCAyLjE2OGgzNTUuMTljMS45NjA5IDAgMy44NDM4LTAuNzgxMjUgNS4yMzA1LTIuMTY4czIuMTY4LTMuMjY5NSAyLjE2OC01LjIzMDV2LTY2LjU5OGg2Ni41OThjNC4wODU5IDAgNy4zOTg0LTMuMzEyNSA3LjM5ODQtNy4zOTg0IDAtNC4wODk4LTMuMzEyNS03LjQwMjMtNy4zOTg0LTcuNDAyM2gtMTYyLjc5di01OS4xOTV6bS04MS4zOTgtMTQuODAxaC0xNjIuNzl2LTU5LjE5OWgxNjIuNzl6bS0zNDAuMzktMjA3LjE5aDE2Mi43OXY1OS4xOTlsLTE2Mi43OS0wLjAwMzkwNnptODEuMzk4IDczLjk5NmgxNjIuNzl2NTkuMTk5aC0xNjIuNzl6bS04MS4zOTggNzMuOTk2aDE2Mi43OXY1OS4xOTloLTE2Mi43OXptMCAxNDhoMTYyLjc5djU5LjE5OWwtMTYyLjc5LTAuMDAzOTA2em0zNDAuMzkgMHY1OS4xOTlsLTE2Mi43OS0wLjAwMzkwNnYtNTkuMTk1em0tOTYuMTk1LTE0LjgwMWgtMTYyLjc5di01OS4xOTVoMTYyLjc5eiIvPgogIDxwYXRoIGQ9Im00NTUuOTggMzQxLjE4YzAuOTgwNDcgMCAxLjk1MzEtMC4xOTUzMSAyLjg1NTUtMC41NzAzMWw4OC41NjYtMzdjMi4yNzczLTAuOTUzMTIgMy45Mjk3LTIuOTc2NiA0LjQwNjItNS4zOTQ1IDAuNDc2NTYtMi40MjE5LTAuMjg1MTYtNC45MjE5LTIuMDI3My02LjY2OGwtMjAuOTI2LTIwLjkzNCA2LjIxNDgtNi4yMTQ4YzIuNzczNC0yLjc4MTIgNC4zMzItNi41NTQ3IDQuMzMyLTEwLjQ4NCAwLTMuOTI5Ny0xLjU1ODYtNy43MDMxLTQuMzMyLTEwLjQ4NGwtNy45OTIyLTguMDIzNCA4Ljc1MzktOC43MzgzYzQuMTEzMyAyLjAwMzkgOC43NSAyLjY3MTkgMTMuMjYyIDEuOTA2MiA0LjUxMTctMC43NjE3MiA4LjY3MTktMi45MjE5IDExLjg5NS02LjE2OGwzMS4zOTgtMzEuMzk4YzUuNjA5NC01LjYwOTQgNy44MDA4LTEzLjc4MSA1Ljc0NjEtMjEuNDQ1LTIuMDUwOC03LjY2MDItOC4wMzUyLTEzLjY0NS0xNS42OTktMTUuNjk1LTcuNjYwMi0yLjA1NDctMTUuODM2IDAuMTM2NzItMjEuNDQ1IDUuNzQ2MWwtMzEuMzk1IDMxLjM5NWMtMy4yMTA5IDMuMjQ2MS01LjM0MzggNy40MDYyLTYuMTA5NCAxMS45MDYtMC43NjE3MiA0LjUwMzktMC4xMTcxOSA5LjEzMjggMS44NDc3IDEzLjI1NGwtOC43MzgzIDguNzUzOWMtMi43NzczIDIuNzg1Mi00LjMzNTkgNi41NTQ3LTQuMzM1OSAxMC40ODQgMCAzLjkzMzYgMS41NTg2IDcuNzAzMSA0LjMzNTkgMTAuNDg0bDcuOTkyMiA4LjAzNTItNi4yMTQ4IDYuMjE0OC0yMC45MzQtMjAuOTI2LTAuMDAzOTA2IDAuMDAzOTA2Yy0xLjc1MzktMS43NTc4LTQuMjY5NS0yLjUxNTYtNi43MDMxLTIuMDIzNC0yLjQzMzYgMC40OTIxOS00LjQ1MzEgMi4xNzE5LTUuMzg2NyA0LjQ3MjdsLTM2LjI1OCA4OS4zMjhjLTAuOTI1NzggMi4yODEyLTAuNjU2MjUgNC44NzUgMC43MTg3NSA2LjkxOCAxLjM3NSAyLjA0MyAzLjY3NTggMy4yNjU2IDYuMTQwNiAzLjI2NTZ6bTg0LjA3NC0xMzkuNzEgMzEuMzk4LTMxLjM5MWMyLjg5MDYtMi44OTA2IDcuNTc0Mi0yLjg5MDYgMTAuNDY5LTAuMDAzOTA2IDIuODkwNiAyLjg5MDYgMi44OTA2IDcuNTc4MSAwIDEwLjQ2OWwtMzEuMzk1IDMxLjM4N2MtMi44OTA2IDIuODk0NS03LjU3NDIgMi44OTQ1LTEwLjQ2OSAwLjAwMzkwNi0yLjg5MDYtMi44ODY3LTIuODkwNi03LjU3NDItMC4wMDM5MDYtMTAuNDY1em0tNDUuMTcyIDU2LjEzMyAxMy4wMzkgMTMuMDM5LTExLjM1OSAxMS4zNTljLTEuNDI5NyAxLjM3ODktMi4yNDIyIDMuMjczNC0yLjI2MTcgNS4yNTc4LTAuMDE1NjI2IDEuOTg0NCAwLjc2NTYyIDMuODk0NSAyLjE2OCA1LjI5NjlzMy4zMTI1IDIuMTgzNiA1LjI5NjkgMi4xNjhjMS45ODQ0LTAuMDE5NTMxIDMuODc4OS0wLjgzMjAzIDUuMjU3OC0yLjI2MTdsMTEuMzY3LTExLjM2NyAxMy4xMjkgMTMuMTI5LTYyLjAwNCAyNS44OTh6Ii8+CiA8L2c+Cjwvc3ZnPgo=" alt="" />
          </div>
        </div>
      </Page>
    </div>
  )
}

export default Hero
