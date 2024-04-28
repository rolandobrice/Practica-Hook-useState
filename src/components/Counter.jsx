import React, { useState } from 'react'

const Counter = () => {

    let [obj, setOjb] = useState({num:1})

    const [count, setCount] = useState(0)

    const handleClick = () => {
        const newObj = {... obj, num: obj.num + 1}
        setOjb(newObj)
    }

    const incrementaX3 = () => {
        setCount(count => count +1)
        setCount(count => count +1)
        setCount(count => count +1)

    }

    return (
        <div>
            <h2>Counter</h2>
            <p>Contador: {obj.num}</p>
            <button onClick={handleClick}>incrementa</button>

            <p>Contador: 2 {count}</p>
            <button onClick={incrementaX3}>incrementa x 3</button>
        </div>
    )
}

export default Counter