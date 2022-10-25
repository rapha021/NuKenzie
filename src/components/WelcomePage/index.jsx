import "./index.css"

import logo from "./assets/home-logo.svg"
import logo2 from "./assets/NuKenzieW.svg"

import { ButtonPrimary } from "../Buttons"

const WelcomePage = ({ handleLogin }) => {
  return (
    <>
      <section className="homepage">
        <div className="info">
          <img src={logo2} alt="logo" />
          <h1 className="title-1">Centralize o controle das suas finanças</h1>
          <p className="Headline">de forma rápida e segura</p>
          <ButtonPrimary text={"Iniciar"} onClick={handleLogin} />
        </div>

        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
      </section>
    </>
  )
}

export default WelcomePage
