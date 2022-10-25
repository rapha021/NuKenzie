import { FaTrash } from "react-icons/fa"

import "./index.css"

const ButtonGrey = ({ text, onClick }) => (
  <button className="grey-2 Headline button" onClick={onClick}>
    {text}
  </button>
)

const ButtonPrimary = ({ text, onClick }) => (
  <button className="primary Headline button" onClick={onClick}>
    {text}
  </button>
)

const ButtonDelete = ({ handleDelete }) => (
  <button className="grey-2 button button--delete" onClick={handleDelete}>
    <FaTrash />
  </button>
)
export { ButtonGrey, ButtonPrimary, ButtonDelete }
