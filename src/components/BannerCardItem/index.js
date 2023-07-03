// Write your code here.
import './index.css'

const BannerCardItem = props => {
  const {cardDetails} = props
  const {headerText, description, className} = cardDetails

  return (
    <li className={`${className} card-border`}>
      <div className="list-container">
        <h1 className="heading">{headerText}</h1>
        <p className="para">{description}</p>
        <button type="button" className="custom-btn">
          Show More
        </button>
      </div>
    </li>
  )
}

export default BannerCardItem
