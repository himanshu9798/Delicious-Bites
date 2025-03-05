import React, { Component } from 'react'
import UsingFetch from './UsingFetch'
import FuncFetch from './FuncFetch'

export class App extends Component {
  render() {
    return (
      <div>
        <h1 style={{textAlign:"center"}}>Data Access Through fetch And Using Class Component</h1>
        <UsingFetch></UsingFetch>
        <h1 style={{textAlign:"center"}}>Data Access Through fetch And Using function Component</h1>
        <FuncFetch></FuncFetch>
        <h1 style={{textAlign:"center"}}>Data Access Through Axios And Using class Component</h1>
        <h1 style={{textAlign:"center"}}>Data Access Through Axios And Using function Component</h1>
      </div>
    )
  }
}

export default App
