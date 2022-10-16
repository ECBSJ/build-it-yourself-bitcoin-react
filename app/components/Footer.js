import React, { useEffect } from "react"

function Footer() {
  return (
    // <footer className="border-top text-center small text-muted py-3">
    //   <p>
    //     <a href="/" className="mx-1">
    //       Home
    //     </a>{" "}
    //     |{" "}
    //     <a className="mx-1" href="/about-us">
    //       About Us
    //     </a>{" "}
    //     |{" "}
    //     <a className="mx-1" href="/terms">
    //       Terms
    //     </a>
    //   </p>
    //   <p className="m-0">
    //     Copyright &copy; {new Date().getFullYear()}{" "}
    //     <a href="/" className="text-muted">
    //       ComplexApp
    //     </a>
    //     . All rights reserved.
    //   </p>
    // </footer>

    <footer className="border-top py-5">
      <p className="small text-center text-muted">
        Powered by ReactJS, bitcoinJS, blockchain.info API, and mempool.space API. <br /> Any ideas on how to improve this educational tool? Add a pull request at our Github page{" "}
        <a href="https://github.com/jiamijiang/build-it-yourself-bitcoin-react" target="_blank">
          here
        </a>
        .
      </p>
    </footer>
  )
}

export default Footer
