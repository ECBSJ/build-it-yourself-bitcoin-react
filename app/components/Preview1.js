import React, { useEffect } from "react"

function Preview1(props) {
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
            Retrieve a P2PKH &#40;Legacy&#41; <br /> bitcoin address that is currently <br /> encumbering 1 single UTXO.
          </h1>
          <h3 className="display-6">
            A P2PKH &#40;Legacy&#41; bitcoin address <br /> always starts with number &lsquo;1&rsquo;.
          </h3>
          <p className="lead">
            <em>Got a P2PKH bitcoin address?</em>
          </p>
          <button onClick={props.closePreview} className="closePreviewButton">
            Let's Build
          </button>
        </div>
        <div className="rightBox">
          <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNzUycHQiIGhlaWdodD0iNzUycHQiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDc1MiA3NTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8cGF0aCBkPSJtMjU2LjEyIDE2Ny42MmMtNi45MzM2IDAuNzI2NTYtMTIuNzY2IDcuMjM4My0xMi43MjcgMTQuMjA3djUyLjA5NGMwIDcuNDM3NSA2Ljc2OTUgMTQuMjA3IDE0LjIwNyAxNC4yMDd2MTQuNTA0Yy0yLjU1ODYgMC40MjU3OC00Ljk5MjIgMS41NjI1LTYuOTU3IDMuMjU3OGwtNDkuNzI3IDQzLjgwNWMtMy4wMzkxIDIuNjQ0NS00Ljg2NzIgNi42Mjg5LTQuODgyOCAxMC42NTZ2MTQ1LjYyYzAgNy40Mzc1IDYuNzY5NSAxNC4yMDcgMTQuMjA3IDE0LjIwN2g5LjQ3Mjd2MjMuNjhjLTcuNDM3NSAwLTE0LjIwNyA2Ljc2OTUtMTQuMjA3IDE0LjIwN3Y1Mi4wOTRjMCA3LjQzNzUgNi43Njk1IDE0LjIwNyAxNC4yMDcgMTQuMjA3aDEzMi42YzcuNDM3NSAwIDE0LjIwNy02Ljc2OTUgMTQuMjA3LTE0LjIwN3YtNTIuMDk0YzAtNy40Mzc1LTYuNzY5NS0xNC4yMDctMTQuMjA3LTE0LjIwN3YtMjMuNjhjNy40Mzc1IDAgMTQuMjA3LTYuNzY5NSAxNC4yMDctMTQuMjA3di04OS45OGgxOC45NDF2ODkuOThjMCA3LjQzNzUgNi43Njk1IDE0LjIwNyAxNC4yMDcgMTQuMjA3djIzLjY4Yy03LjQzNzUgMC0xNC4yMDcgNi43Njk1LTE0LjIwNyAxNC4yMDd2NTIuMDk0YzAgNy40Mzc1IDYuNzY5NSAxNC4yMDcgMTQuMjA3IDE0LjIwN2gxMzIuNmM3LjQzNzUgMCAxNC4yMDctNi43Njk1IDE0LjIwNy0xNC4yMDd2LTUyLjA5NGMwLTcuNDM3NS02Ljc2OTUtMTQuMjA3LTE0LjIwNy0xNC4yMDd2LTIzLjY4aDkuNDcyN2M3LjQzNzUgMCAxNC4yMDctNi43Njk1IDE0LjIwNy0xNC4yMDd2LTE0NS42MmMtMC4wMTk1MzEtNC4wMjczLTEuODQzOC04LjAxMTctNC44ODI4LTEwLjY1NmwtNDkuNzI3LTQzLjgwNWMtMS45NDUzLTEuNzQ2MS00LjM4MjgtMi45Mzc1LTYuOTU3LTMuNDA2MnYtMTQuMzU1YzcuNDM3NSAwIDE0LjIwNy02Ljc2OTUgMTQuMjA3LTE0LjIwN3YtNTIuMDk0YzAtNy40Mzc1LTYuNzY5NS0xNC4yMDctMTQuMjA3LTE0LjIwN2gtOTQuNzE1Yy03LjQzNzUgMC0xNC4yMDcgNi43Njk1LTE0LjIwNyAxNC4yMDd2NTIuMDk0YzAgNy40Mzc1IDYuNzY5NSAxNC4yMDcgMTQuMjA3IDE0LjIwN3YxNC4yMDdjLTcuNDM3NSAwLTE0LjIwNyA2Ljc2OTUtMTQuMjA3IDE0LjIwN3YyMy42OGgtMTguOTQxdi0yMy42OGMwLTcuNDM3NS02Ljc2OTUtMTQuMjA3LTE0LjIwNy0xNC4yMDd2LTE0LjIwN2M3LjQzNzUgMCAxNC4yMDctNi43Njk1IDE0LjIwNy0xNC4yMDd2LTUyLjA5NGMwLTcuNDM3NS02Ljc2OTUtMTQuMjA3LTE0LjIwNy0xNC4yMDdoLTk2LjE5NXptMTUuNjg4IDI4LjQxNGg2Ni4zMDF2MjMuNjhoLTY2LjMwMXptMTQyLjA3IDBoNjYuMzAxdjIzLjY4aC02Ni4zMDF6bS0xMjcuODcgNTIuMDk0aDM3Ljg4N3YxNC4yMDdoLTM3Ljg4N3ptMTQyLjA3IDBoMzcuODg3djE0LjIwN2gtMzcuODg3em0tMTYyLjc5IDQyLjYyMWg3Mi44MTJ2MTYxLjAyaC0xMTMuNjZ2LTEyNS4wNXptMTQ4LjU5IDBoNzIuODEybDQwLjg0OCAzNS45NjF2MTI1LjA1aC0xMTMuNjZ6bS00Ny4zNTkgMzcuODg3aDE4Ljk0MXYxOC45NDFoLTE4Ljk0MXptLTExOC4zOSAxNTEuNTVoNzUuNzczdjIzLjY4aC03NS43NzN6bTE3OS45NiAwaDc1Ljc3M3YyMy42OGgtNzUuNzczem0tMTk0LjE3IDUyLjA5NGgxMDQuMTl2MjMuNjhoLTEwNC4xOXptMTc5Ljk2IDBoMTA0LjE5djIzLjY4aC0xMDQuMTl6IiBmaWxsPSIjZmZmIi8+Cjwvc3ZnPgo=" alt="" />
        </div>
      </div>
      <div className="stepsOrder">STEP 1</div>
    </div>
  )
}

export default Preview1
