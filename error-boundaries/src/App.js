import React, { Fragment } from 'react'

const store = [
  {
    type: 'Roupa'
  }, {
    type: 'Calçado'
  }, 
  {
    type: 'Camiseta'
  }
]

function Conlumn({type}) {
  return(
    <tr>
      <td>{type}</td>
    </tr>
  )
}

function App (){

  const renderColumns = (element, key) => (
    <Fragment key={`column-${key}`}>
      <Conlumn type={element.type}/>
    </Fragment>
  )
  
  return(
    <table>
      {store.map(renderColumns)}
    </table>
  ) 
}

export default App;
