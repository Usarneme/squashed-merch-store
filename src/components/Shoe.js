import './Shoe.css';

function Shoe(props) {
  const {name, imgUrl, price, sizes} = props.shoe;
  const allSizes = []

  const getSizes = () => {
    for (let i = sizes[0]; i <= sizes[1]; i += 0.5) {
      allSizes.push(i)
    }
  }

  getSizes()

  const shoeStyles = {
    background: 'white',
    border: '1px dashed gray'
  }

  const imgStyles = {
    maxWidth: '15vw',
    width: '200px',
    height: '175px',
    objectFit: 'cover',
    margin: '15px'
  }

  return (
    <div id={`shoe_${props.id}`} className="shoe-unit" style={shoeStyles} >
      <div style={{ padding: '10px' }}>
        <h2>{name}</h2>
        <img src={imgUrl} alt={name} style={imgStyles} />
        <h4>${price}.00</h4>
        <div style={{ display: 'flex', flexDirection: 'column', fontSize: '0.9rem', paddingTop: '11px', paddingBottom: '6px' }}>
          <span style={{ paddingBottom: '6px', paddingTop: '11px' }}>Available Sizes</span>
          <p>{allSizes.join(", ")}</p>
        </div>
      </div>
    </div>
  )
}

export default Shoe;
