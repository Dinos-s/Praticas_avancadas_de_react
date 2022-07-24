import React from "react";
import PropType from 'prop-types'

function Calc(props) {
    const {min, max, onChange} = props
    return(
        <>
            <p>
                Valor mínimo: {min}
            </p>
            <p>
                Valor maximo: {max}
            </p>
            <input type='text' onChange={onChange}/>
        </>
    )
}

Calc.propType = {
    min: PropType.number.isRequired,
    max: PropType.number.isRequired,
    onChange: PropType.func.isRequired
}

export default Calc