import React, { Component } from 'react'
import Navbar from './Navbar';
import News from './News';

export default class App extends Component {
  c="This Is My First React App";
  render() {
    return (
      <div className='APP'>

        <Navbar />
        <News/>        
      </div>
    )
  }
}

