import React from 'react';
import Header from './../components/Header';
import ShoeList from './../components/ShoeList';
import { womens } from '../shoes.json';
// import Icons from 're'

function Womens () {
  return (
    <div className='container'>
      <Header
        title='Womens'
      />
      <ShoeList shoes={womens} />
    </div>
  );
}

export default Womens;
