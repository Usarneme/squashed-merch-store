import React, { Component } from 'react';
// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// Pages
import Admin from './pages/Admin';
import Home from './pages/Home';
import Kids from './pages/Kids';
import Mens from './pages/Mens';
import Womens from './pages/Womens';
// Helpers/data
import shoesJson from './shoes.json';
// Stylesheet
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: this.getCurrentLocation(),
      shoes: this.getFromLocalStorage() || shoesJson
    }
  }

  getCurrentLocation = () => {
    return window.location.pathname.slice(1)
  }

  navigateTo = (event, location) => {
    event.preventDefault();
    this.setState({currentPage: location});
    window.history.replaceState({}, 'Squash Shoes', location);
  }

  saveToLocalStorage = () => {
    console.log('SAVING TO LOCALSTORAGE', this.state.shoes)
    localStorage.setItem('squash_shoes', JSON.stringify(this.state.shoes));
  }

  getFromLocalStorage = () => {
    return localStorage.getItem('squash_shoes') ? JSON.parse(localStorage.getItem('squash_shoes')) : null;
  }

  createShoe = async (name, price, imgUrl, sizes, department) => {
    console.log('Making new shoe:',name, price, imgUrl, sizes, department);
    const sizesArray = sizes.split(",").map(stringSize => Number(stringSize));
    const newShoe = {
      name, price: Number(price), imgUrl, sizes: sizesArray
    }
    const newShoesState = this.state.shoes[department].concat(newShoe);
    await this.setState(prevState => { prevState.shoes[department] = newShoesState })
    this.saveToLocalStorage()
  }

  render() {
    let currentlyVisibleState = null;

    if (this.state.currentPage === 'mens') {
      currentlyVisibleState = <Mens />
    } else if (this.state.currentPage === 'kids') {
      currentlyVisibleState = <Kids />
    } else if (this.state.currentPage === 'womens') {
      currentlyVisibleState = <Womens />
    } else if (this.state.currentPage === 'admin') {
      // normally check for admin privileges
      currentlyVisibleState = <Admin createShoe={this.createShoe} />
    } else {
      currentlyVisibleState = <Home navigateTo={this.navigateTo} />
    }

    return (
      <div className="App">
        <Navbar navigateTo={this.navigateTo} />
        {currentlyVisibleState}
        <Footer />
      </div>
    );
  }
}

export default App;
