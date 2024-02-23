import './index.css'

const PlanetItem = props => {
  const {planetsData} = props
  const {name, imageUrl, description} = planetsData
  return (
    <div className="item-container">
      <img src={imageUrl} alt={`planet ${name}`} className="planet-img" />
      <h1 className="planet-name">{name}</h1>
      <p className="planet-description">{description}</p>
    </div>
  )
}

export default PlanetItem
