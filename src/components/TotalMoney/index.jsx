import "./index.css"

const TotalMoney = ({ price }) => (
  <div className="total-price__container">
    <div className="total-price__info">
      <h3 className="title-3">Valor total:</h3>
      <p className="Body">O valor se refere ao saldo</p>
    </div>
    <div className="total-price__price">
      <p className="title-3 price">R${price}</p>
    </div>
  </div>
)

export default TotalMoney
