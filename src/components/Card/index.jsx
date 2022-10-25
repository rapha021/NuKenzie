import { ButtonDelete } from "../Buttons"
import "./index.css"

const Card = ({ title, type, price, handleDelete }) => {
  type === "Entrada" ? (type = "Entrada") : (type = "Despesa")
  return (
    <>
      <li className={`card__container ${type}`}>
        <div className="card__info">
          <h3 className="title-3">{title}</h3>
          <p className="Body">{type}</p>
        </div>
        <div className="card__price">
          <p className="Body">R${price}</p>
          <ButtonDelete handleDelete={handleDelete} />
        </div>
      </li>
    </>
  )
}

export default Card
