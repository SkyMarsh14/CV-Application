import { useState } from "react"
import Education from "./Education";

export default function Form({setGeneralInfo}) {
    function updateInput(e){
        const {id,value}=e.target;
        setGeneralInfo(previous=>(
            {...previous, [id]:value}
        ) )
    }
    return (
        <form>
            <fieldset>
                <legend>General Information</legend>
                <div className="firstName">
                    <label>First Name : </label>
                    <input id="firstName" onChange={updateInput}></input>
                </div>

                <div className="lastName">
                    <label>Last Name : </label>
                    <input type="text" id ="lastName" onChange={updateInput} />
                </div>
                <div className="jobTitle">
                    <label htmlFor="">Job Title</label>
                    <input type="text" id="jobTitle"onChange={updateInput} />
                </div>
                <div className="number">
                    <label htmlFor="">Phone Number : </label>
                    <input id="number"type="tel" onChange={updateInput} />
                </div>

                <div className="email">
                    <label htmlFor="">Email : </label>
                    <input type="email"id="email" onChange={updateInput} />
                </div>

            </fieldset>
            <Education />
        </form>
    )
}
