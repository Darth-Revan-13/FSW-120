import React, {useState} from 'react';
import './styles.css'

function Calculator() {
    const [numberOne, setNumOne] = useState(0);
    const [numberTwo, setNumTwo] = useState(0);
    const [total, setTotal] = useState(0);

    function addition() {
        setTotal(Number(numberOne) + Number(numberTwo))
    }

    function subtraction() {
        setTotal(Number(numberOne) - Number(numberTwo))
    }

    function division() {
        setTotal(Number(numberOne) / Number(numberTwo))
    }

    function multiplication() {
        setTotal(Number(numberOne) * Number(numberTwo))
    }

    return(
        <div>
            <h1>
                <center>
                    Simplified React Calculator
                </center>
            </h1>
            <input type="number" placeholder="Number One" onChange={event => setNumOne(event.target.value)}></input>
            <input type="number" placeholder="Number Two" onChange={event => setNumTwo(event.target.value)}></input>
            <p>Number One: {numberOne}</p>
            <p>Number Two: {numberTwo}</p>
            <p>Total: {total}</p>
            <button onClick={addition}>Addition</button>
            <button onClick={subtraction}>Subtraction</button>
            <button onClick={division}>Division</button>
            <button onClick={multiplication}>Multiply</button>
        </div>
    )
}

export default Calculator;