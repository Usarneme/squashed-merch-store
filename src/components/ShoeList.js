import Shoe from './Shoe';
import { v4 as uuid } from 'uuid';

function ShoeList(props) {
  const shoesContainer = {
    margin: '22px',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '10px'
  }

  return (
    <div style={shoesContainer}>
      {props.shoes.map((shoe, index) => <Shoe shoe={shoe} id={index} key={uuid()} />)}
    </div>
  )
}

export default ShoeList;
