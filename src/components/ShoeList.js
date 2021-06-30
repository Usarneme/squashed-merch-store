import Shoe from './Shoe';

function ShoeList(props) {
  const shoesContainer = {
    display: 'flex',
    flex: '1',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: '0 auto'
  }

  return (
    <div style={shoesContainer}>
      {props.shoes.map((shoe, index) => <Shoe shoe={shoe} id={index} />)}
    </div>
  )
}

export default ShoeList;
