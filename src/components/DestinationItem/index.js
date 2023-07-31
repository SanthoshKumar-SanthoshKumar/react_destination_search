// Write your code here
import './index.css'

const DestinationItem = props => {
  const {destinationResult} = props
  const {imgUrl, name} = destinationResult

  return (
    <li className="destination-container">
      <img src={imgUrl} alt={name} className="destination-image" />
      <p className="name">{name}</p>
    </li>
  )
}
export default DestinationItem
