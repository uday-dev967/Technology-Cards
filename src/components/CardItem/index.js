// Write your code here.
import './index.css'

const CardItem = props => {
  const {cardDetails} = props
  //   console.log(cardDetails)
  const {className, title, description, imgUrl} = cardDetails
  return (
    <li className={className}>
      <div className="card">
        <h1>{title}</h1>
        <p>{description}</p>
        <img src={imgUrl} className="image" alt={title} />
      </div>
    </li>
  )
}

export default CardItem
