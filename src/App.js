import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 'HOME'
    }
  }

  navigateTo = (event, location) => {
    event.preventDefault();
    console.log('NAV TO', location)
    this.setState({currentPage: location});
    window.history.replaceState({}, 'Squash Shoes', location);
  }

  render() {
    return (
      <div className="App">
        <Navbar navigateTo={this.navigateTo} />
          pages go here
        <Footer />
      </div>
    );
  }
}

export default App;
