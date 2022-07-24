import React, { Fragment } from 'react'

const store = ['', '', '']

function Conlumn() {
  return(
    <tr>
      <td>Tênis</td>
      <td>Roupa</td>
    </tr>
  )
}

function App (){

  const renderColumns = (element, key) => (
    <Fragment key={`column-${key}`}>
      <Conlumn/>
    </Fragment>
  )
  
  return(
    <table>
      {store.map(renderColumns)}
    </table>
  ) 
}

export default App;
