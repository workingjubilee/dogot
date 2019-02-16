import React, { Component } from 'react';
import './reset.css';
import './App.css';
import StarField from './components/StarField'

class App extends Component {
  constructor() {
    super();
    this.state = {
      iAmSirius: []
    };
  }

  componentDidMount() {
    this.getDoggo('https://dog.ceo/api/breeds/image/random');
  }

  getDoggo = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data);
        this.setState({ iAmSirius: data });
      })
      .catch(err => {
        throw new Error(err);
      });

  };

  moreDoggo = event => {
    event.preventDefault();
    this.getDoggo;
  }

 //  .then(data => {
 //   console.log(data); <-- Log data here to find the fields you will need.
 // })


  render() {
    return (
      <div className="App">
        <h1 className="Header">Dog Stars</h1>
        <img src={this.state.iAmSirius.message} alt="Doggo!" />
        <button onClick={this.moreDoggo}>New Doggo?</button>
      </div>
    );
  }
}



export default App;
