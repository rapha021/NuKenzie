import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import WelcomePage from "./components/WelcomePage"

const handleLogin = () => {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <WelcomePage handleLogin={handleLogin} />
  </React.StrictMode>
)
