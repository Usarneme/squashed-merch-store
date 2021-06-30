import React from 'react';
import Header from './../components/Header';
import ShoeList from './../components/ShoeList';
import { mens } from '../shoes.json';

function Mens () {
  return (
    <div className='container'>
      <Header
        title='Mens'
      />
      <ShoeList shoes={mens} />
    </div>
  );
}

export default Mens;
