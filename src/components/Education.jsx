import { useState } from "react"

export default function Education() {
    const [count, setCount]=useState(0);
    return (
        <>
            <fieldset>
                <legend>Educational Background</legend>
                <School />
                <School />
            </fieldset>
        </>
    )
}

function School() {
    function handleRemove(e){
        e.target.parentElement.remove();
    }

    return (
        <div className="schoolInput">
            <div>
                <label>Name of Institution : </label>
                <input></input>
            </div>
            <div>
                <label htmlFor="">Degree</label>
                <input type="text" />
            </div>
            <div>
                <label htmlFor="">Start Year</label>
                <input type="number" />
            </div>
            <div>
                <label htmlFor="">End Year</label>
                <input type="number" />
            </div>
            <button onClick={handleRemove} className="remove-field-btn">Remove</button>
        </div>
    )
}

