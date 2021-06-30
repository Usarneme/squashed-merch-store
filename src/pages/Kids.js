import React from 'react';
import Header from './../components/Header';
import ShoeList from './../components/ShoeList';
import { kids } from '../shoes.json';

function Kids () {
  return (
    <div className='container'>
      <Header
        title='Kids'
      />
      <ShoeList shoes={kids} />
    </div>
  );
}

export default Kids;
