import React, { useEffect } from "react"

function Preview3(props) {
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
            It's time to use your <br /> WIF private key to <br /> sign the transaction.
          </h1>
          <h3 className="display-6">
            Your WIF private key will start <br /> either with a &lsquo;5&rsquo;, &lsquo;K&rsquo;, or &lsquo;L&rsquo;.
          </h3>
          <p className="lead">
            <em>Got your WIF private key ready?</em>
          </p>
          <button onClick={props.closePreview} className="closePreviewButton">
            Let's Sign
          </button>
        </div>
        <div className="rightBox">
          <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNzUycHQiIGhlaWdodD0iNzUycHQiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDc1MiA3NTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZGVmcz4KICA8Y2xpcFBhdGggaWQ9ImEiPgogICA8cGF0aCBkPSJtMTM5LjIxIDE0OGg0NzMuNTh2NDU2aC00NzMuNTh6Ii8+CiAgPC9jbGlwUGF0aD4KIDwvZGVmcz4KIDxnIGNsaXAtcGF0aD0idXJsKCNhKSI+CiAgPHBhdGggZD0ibTU3Ny4yNyAxODQuMmMtNDIuNjIxLTQyLjYyMS0xMDQuMTktNDcuMzU5LTEzOS43MS0xMS44NC0zMC43ODEgMzAuNzgxLTMwLjc4MSA4MC41MDgtNC43MzQ0IDEyMC43NmwtMTU2LjI4IDE1Ni4yOC0zMy4xNTItMzMuMTUyYy05LjQ3MjctOS40NzI3LTIzLjY4LTkuNDcyNy0zMy4xNTIgMHMtOS40NzI3IDIzLjY4IDAgMzMuMTUybDkuNDcyNyA5LjQ3MjdjNC43MzQ0IDQuNzM0NCA0LjczNDQgOS40NzI3IDAgMTQuMjA3bC0xNi41NzQgMjEuMzE2Yy00LjczNDQgNC43MzQ0LTkuNDcyNyA0LjczNDQtMTQuMjA3IDBsLTkuNDcyNy05LjQ3MjdjLTkuNDcyNy05LjQ3MjctMjMuNjgtOS40NzI3LTMzLjE1MiAwLTkuNDcyNyA5LjQ3MjctOS40NzI3IDIzLjY4IDAgMzMuMTUybDMzLjE1MiAzMy4xNTItMTEuODQgMTEuODRjLTkuNDcyNyA5LjQ3MjctOS40NzI3IDIzLjY4IDAgMzMuMTUyczIzLjY4IDkuNDcyNyAzMy4xNTIgMGwyNjcuNTctMjY5Ljk1YzQwLjI1NCAyNi4wNDcgODkuOTggMjYuMDQ3IDEyMC43Ni0yLjM2NzIgMzUuNTItMzUuNTIgMzAuNzgxLTk3LjA4Ni0xMS44NC0xMzkuNzF6bS0yMS4zMTIgMTA2LjU2Yy0xOC45NDEgMTguOTQxLTUyLjA5NCA5LjQ3MjctNzEuMDM5LTExLjg0LTIxLjMxMi0xOC45NDEtMjguNDE0LTU0LjQ2MS0xMS44NC03MS4wMzkgMTYuNTc0LTE2LjU3NCA1Mi4wOTQtOS40NzI3IDcxLjAzOSAxMS44NCAyMS4zMTIgMTguOTQ1IDI4LjQxOCA1Mi4wOTQgMTEuODQgNzEuMDM5eiIgZmlsbD0iI2ZmZiIvPgogPC9nPgo8L3N2Zz4K" alt="" />
        </div>
      </div>
      <div className="stepsOrder">STEP 6</div>
    </div>
  )
}

export default Preview3
