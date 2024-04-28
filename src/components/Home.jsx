import React, { useState } from 'react'

const Home = () => {

    const [mensaje, setMensaje] = useState('Hola Mundo')
    const [numero, setNumero] = useState(3)

    const handleClick = () => {
        setNumero(5)
    }
    return (
        <div>
            <h2>useState Example</h2>
            <p>{mensaje}</p>
            <p>{numero}</p>
            <button onClick={handleClick}>Pulsa</button>
        </div>
    )
}

export default Home