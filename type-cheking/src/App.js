import React from "react";
import PetShop from "./PetShop";

function App () {
  const handleClick = () => {
    console.log('Iniciando o banho...');
  }
  return(
    <PetShop
      custumerName="GMR"
      onClick={handleClick}
      status='done'  
    />
  )
}

export default App