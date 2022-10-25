import { useState } from "react"
import List from "../List"
import { ButtonPrimary } from "../Buttons"
import { ToastError, ToastInfo, ToastSuccess } from "../Toasts"
import TotalMoney from "../TotalMoney"

import "./styles.css"

const Form = () => {
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState(0)
  const [priceType, setPriceType] = useState("Entrada")

  const [cards, setCards] = useState([])
  const [entrada, setEntrada] = useState([])
  const [despesa, setDespesa] = useState([])

  const [totalPrice, setTotalPrice] = useState(0)

  const handleSubmit = () => {
    if (price < 0) {
      return ToastError("Valor invalido")
    }
    if (priceType === "Entrada") {
      setEntrada([
        {
          description: description,
          price: parseFloat(price),
          priceType: priceType,
        },
        ...entrada,
      ])
      setTotalPrice(totalPrice + parseFloat(price))
      ToastSuccess("Entrada registrada com sucesso!")
    } else {
      setDespesa([
        {
          description: description,
          price: parseFloat(price),
          priceType: priceType,
        },
        ...despesa,
      ])
      setTotalPrice(totalPrice - price)
      ToastSuccess("Despesa registrada com sucesso!")
    }
    setCards([
      {
        description: description,
        price: parseFloat(price),
        priceType: priceType,
      },
      ...cards,
    ])

    setDescription("")
    setPrice(0)
    setPriceType("Entrada")
  }

  const handleDelete = (cardDelete, price, priceType) => {
    const newCards = cards.filter((card) => card.description !== cardDelete)
    setCards([...newCards])
    priceType === "Entrada"
      ? setTotalPrice(totalPrice - parseFloat(price))
      : setTotalPrice(totalPrice + parseFloat(price))
    ToastInfo(`A ${priceType}: ${cardDelete} foi removida com sucesso!`)
  }

  return (
    <>
      <aside className="container__menu">
        <form onSubmit={(event) => handleSubmit(event.preventDefault())}>
          <label className="Headline" htmlFor="description">
            Descrição
            <input
              name="description"
              type="text"
              placeholder="Digite aqui sua descrição"
              className="input"
              onChange={(event) => setDescription(event.target.value)}
              value={description}
              required
            />
          </label>
          <div className="div--input">
            <label htmlFor="price" className="Headline">
              Valor
              <input
                className="input"
                type="number"
                name="price"
                placeholder="R$0,00"
                onChange={(event) => setPrice(event.target.value)}
                value={price}
                required
              />
            </label>

            <label htmlFor="select" className="Headline">
              Tipo de Valor
              <select
                name="select"
                className="input"
                onChange={(event) => setPriceType(event.target.value)}
                value={priceType}
                required
              >
                <option value="Entrada">Entrada</option>
                <option value="Despesa">Despesa</option>
              </select>
            </label>
          </div>
          <ButtonPrimary text={"Inserir valor"} />
        </form>
        <TotalMoney price={totalPrice} />
      </aside>
      <List
        cards={cards}
        handleDelete={handleDelete}
        setCards={setCards}
        entrada={entrada}
        despesa={despesa}
      />
    </>
  )
}

export default Form
