import React from 'react';
import axios from 'axios';
import { Icon } from 'semantic-ui-react'
import './style.css';
import { Button } from 'semantic-ui-react'
class App extends React.Component {
  state = {
    advice: '',
  }

  componentDidMount() {
    this.fetchAdvice();
  }

  fetchAdvice = () => {
    axios.get('https://api.adviceslip.com/advice')
      .then((response) => {
        const { advice } = response.data.slip;

        this.setState({ advice });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="app">
        <div className="card">
          <h1  style={{margin:50,color:"white"}}>{this.state.advice}</h1>
            
          <Button style={{padding:16}} onClick={this.fetchAdvice} color='orange'>
          <Icon name='sun' /> PUSH ME!
          </Button>
          
        </div>
      </div>
    );
  }
}

export default App;