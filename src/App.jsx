import "./App.css"
import "./reset.css"
import "./components/DefaultStyles/index.css"

import Header from "./components/Header"
import Form from "./components/Form"

import { ToastContainer } from "react-toastify"

function App() {
  return (
    <>
      <Header />
      <ToastContainer />
      <main className="container">
        
          <Form />
      </main>
    </>
  )
}

export default App
