import "./index.css"

import { ButtonGrey, ButtonPrimary } from "../Buttons"
import Card from "../Card"
import MyLoader from "../LoaderAnim"
import { useState } from "react"

const List = ({ cards, handleDelete, entrada, despesa }) => {
  const [filtro, setFiltro] = useState("Todos")

  return (
    <div className="list__container">
      <div className="list__header">
        <h3 className="title-3">Resumo financeiro</h3>
      </div>

      <div className="list__buttons">
        <ButtonPrimary text={"Todos"} onClick={() => setFiltro("Todos")} />
        <ButtonGrey text={"Entradas"} onClick={() => setFiltro("Entradas")} />
        <ButtonGrey text={"Despesas"} onClick={() => setFiltro("Despesas")} />
      </div>

      <ul className="list">
        {cards.length === 0 && (
          <>
            <li className="title-2">Você ainda não possui nenhum lançamento</li>
            <MyLoader />
            <MyLoader />
            <MyLoader />
          </>
        )}
        {filtro === "Todos"
          ? cards.map(({ description, priceType, price }, index) => (
              <Card
                key={index}
                title={description}
                type={priceType}
                price={price}
                handleDelete={() => handleDelete(description, price, priceType)}
              />
            ))
          : filtro === "Entradas"
          ? entrada.map(({ description, priceType, price }, index) => (
              <Card
                key={index}
                title={description}
                type={priceType}
                price={price}
                handleDelete={() => handleDelete(description, price, priceType)}
              />
            ))
          : filtro === "Despesas" &&
            despesa.map(({ description, priceType, price }, index) => (
              <Card
                key={index}
                title={description}
                type={priceType}
                price={price}
                handleDelete={() => handleDelete(description, price, priceType)}
              />
            ))}
      </ul>
    </div>
  )
}

export default List
