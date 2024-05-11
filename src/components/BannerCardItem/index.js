// Write your code here.
import './index.css'

const BannerCardItem = props => {
  const {bannerCards} = props
  const {headerText, description, className} = bannerCards
  return (
    <li>
      <div className={className}>
        <h1 className="heading">{headerText}</h1>
        <p className="description">{description}</p>
        <button type="button">Show More</button>
      </div>
    </li>
  )
}

export default BannerCardItem
