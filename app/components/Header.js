import React, { useEffect } from "react"
import { Link } from "react-router-dom"

function Header() {
  return (
    <header>
      <nav className="navbar py-5">
        <div className="container">
          <Link className="navbar-brand h1" to="/">
            <span className="navbar-text h1">
              DIY-<span className="orangeMe">BTC</span>-TX BUILDER
            </span>
          </Link>

          <ul className="nav">
            <li className="nav-item">
              <Link className="nav-link link-secondary" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link link-secondary" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link link-secondary" href="#">
                More
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link link-secondary" href="https://github.com/jiamijiang/build-it-yourself-bitcoin-react" target="_blank">
                Github
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header
