import React, { useEffect, useState } from 'react'
import Card from './Card';
import { ThemeContext, themes } from "./Theme";

function App (){
  const [token, setToken] = useState()

  useEffect(()=>{
    setTimeout(() =>{
      setToken('3nfw9unejifo28')
    }, 4000)
  }, [setToken])
  return(
    <ThemeContext.Provider value={{...themes.primary, token}}>
      <Card/>
    </ThemeContext.Provider >
  )
}

export default App;
