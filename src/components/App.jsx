import Form from "./Form"
import Preview from "./Preview"
import { useState } from "react"


export default function App(){
    const [generalInfo, setGeneralInfo]=useState(exampleGeneralInfo);
    const [educationInfo, setEducationInfo]=useState(exampleEducationInfo);

    return (
        <>
            <Form setGeneralInfo={setGeneralInfo} setEducationInfo={setEducationInfo} educationInfo={educationInfo}/>
            <Preview  generalInfo={generalInfo} educationInfo={educationInfo} />
        </>
    )
}

const exampleGeneralInfo={
    firstName:"John",
    lastName:"Smith",
    jobTitle:"Software Engineer",
    number: "555-555-5555",
    email:"example@gmail.com"
}

const exampleEducationInfo=[{
    degree:"Master's in Coumputer Science",
    institution:"Harvard University",
    city:"Colorado City",
    startDate:"2016",
    endDate:"2018"
},
{
    degree:"Bachelor in Information and Technology",
    institution:"NotAReal University",
    city:"New York City",
    startDate:"2014",
    endDate:"2016"
}]