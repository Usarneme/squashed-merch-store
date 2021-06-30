import React, { Component } from 'react';
// Components
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
// Pages
import Home from './pages/Home';
import Kids from './pages/Kids';
import Mens from './pages/Mens';
import Womens from './pages/Womens';
// Stylesheet
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 'home'
    }
  }

  navigateTo = (event, location) => {
    event.preventDefault();
    this.setState({currentPage: location});
    window.history.replaceState({}, 'Squash Shoes', location);
  }

  render() {
    let currentlyVisibleState = null;

    if (this.state.currentPage === 'mens') {
      currentlyVisibleState = <Mens />
    } else if (this.state.currentPage === 'kids') {
      currentlyVisibleState = <Kids />
    } else if (this.state.currentPage === 'womens') {
      currentlyVisibleState = <Womens />
    } else {
      currentlyVisibleState = <Home />
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
