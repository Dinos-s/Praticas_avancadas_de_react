import React, { Component } from "react";
import Counter from "./Counter";

const Btns = ({ increment, decrement, count}) => (
  <div>
    <h1>Valor atual: {count}</h1>
    <div>
      <button onClick={increment}>Add 1</button>
    </div>
    <div>
      <button onClick={decrement}>Remove 1</button>
    </div>
  </div>
)

class App extends Component {
  render () {
    return (
      <div>
        <Counter rend={
          ({ increment, decrement, count }) => (
            <Btns 
            increment={increment}
            decrement={decrement}
            count={count}/>
          )
        }>

        </Counter>
      </div>
    )
  }
}

export default App