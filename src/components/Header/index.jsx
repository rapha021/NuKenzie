import "./index.css"
import logo from "./assets/NuKenzie.svg"
import { ButtonGrey } from "../Buttons"
import { useState } from "react"

const Header = () => {
  return (
    <>
      <header>
        <div className="header__container">
          <img src={logo} alt="app-logo" />
          <ButtonGrey
            text={"Inicio"}
            onClick={() => window.location.reload(true)}
          />
        </div>
      </header>
    </>
  )
}

export default Header
