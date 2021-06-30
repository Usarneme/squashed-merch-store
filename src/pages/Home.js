import React from 'react';
import Header from './../components/Header';
import { GiSonicShoes, GiConverseShoe, GiRunningShoe } from 'react-icons/gi';

function Home (props) {
  const linkStyles = {}
  const linkDivStyles = {}

  return (
    <div className='container'>
      <Header
        title='Home'
      />
      <div style={{ display: 'flex', alignContent: 'center', justifyContent: 'space-around', marginTop: '22px' }}>
        <a type="submit"
          onClick={event => props.navigateTo(event, "kids")}
          style={linkStyles} href='/kids'
        >
          <div style={linkDivStyles}><GiSonicShoes style={{ fontSize: '40px'}} /></div>
          <span>Kids</span>
        </a>

        <a type="submit"
          onClick={event => props.navigateTo(event, "mens")}
          style={linkStyles} href='/mens'
        >
          <div style={linkDivStyles}><GiConverseShoe style={{ fontSize: '40px'}} /></div>
          <span>Mens</span>
        </a>

        <a type="submit"
          onClick={event => props.navigateTo(event, "womens")}
          style={linkStyles} href='/womens'
        >
          <div style={linkDivStyles}><GiConverseShoe style={{ fontSize: '40px'}} /></div>
          <span>Womens</span>
        </a>
      </div>
    </div>
  );
}

export default Home;
