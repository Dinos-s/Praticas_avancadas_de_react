import React, {useContext} from "react";
import Form from "./Form";
import { ThemeContext } from "./Theme";

function Card() {
    const theme = useContext(ThemeContext)
    console.log('theme:values', theme);
    
    return(
        <div style={{padding:'50px'}}>
            <Form/>
            <button style={{background: theme.background, color: theme.color}}>Card Button</button>
        </div>
    )
}

export default Card