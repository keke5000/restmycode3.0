import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DataList from "./Components/DataList";

class App extends Component {

    componentDidMount () {
        let itse = this;
        fetch('/')
            .then((result) => {
                return result.json()
            })
            .then((saa) => {
                itse.setState({saa: saa})
            });
    }
  render() {
    return (
      <div>
          <DataList />
      </div>
    );
  }
}

export default App;
