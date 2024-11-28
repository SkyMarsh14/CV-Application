import Form from "./Form"
import Preview from "./Preview"
import { useState } from "react";


export default function App(){

    const [generalInfo, setGeneralInfo]=useState(exampleGeneralInfo);
    return (
        <>
            <Form setGeneralInfo={setGeneralInfo}/>
            <Preview  generalInfo={generalInfo}/>
        </>
    )
}


const exampleGeneralInfo={
    firstName:"Randy",
    lastName:"Marsh",
    jobTitle:"Software Engineer",
    number: "555-555-5555",
    email:"example@gmail.com"
}

const exampleEducationInfo={
    degree:"Master's in Coumputer Science",
    university:"Harvard University",
    city:"Colorado City",
    startDate:"2016",
    endDate:"2018",
}