import React, { useState } from 'react'

const Home = () => {

    const [mensaje, setMensaje] = useState('Hola Mundo')
    const [numero, setNumero] = useState(3)
    const [nombre, setNombre] = useState(['Luis'])

    const handleClick = () => {
        setNumero(5)
    }

    const addName = () => {
        setNombre([...nombre,'Rolando'])
    }

    return (
        <div>
            <h2>useState Example</h2>
            <p>{mensaje}</p>
            <p>{numero}</p>
            <button onClick={handleClick}>Pulsa</button>
            <button onClick={addName}>Agregar Nombre</button>
            <ul>
                {nombre.map (nombre => (
                    <li>{nombre}</li>
                ))}
            </ul>
        </div>
    )
}

export default Home