import React from 'react'

const getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}

export default props => {

    const { min, max } = props
    const numGerado = getRandom(min, max)

    return (

        <div>

            <h2>Os números informados foram: </h2>

            <p>min: { props.min } - max: { props.max }</p>

            <p>Número Aleatório: { numGerado }</p>
        </div>

    )

}