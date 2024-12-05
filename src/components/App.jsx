import Form from "./Form"
import Preview from "./Preview"
import { useState} from "react"
import UserContext from "./UserContext";
import { exampleEducationInfo, exampleExperience,exampleGeneralInfo } from "./exampleinfo";

export default function App(){
    const [generalInfo, setGeneralInfo]=useState(exampleGeneralInfo);
    const [educationInfo, setEducationInfo]=useState(exampleEducationInfo);
    const [experienceInfo, setExperienceInfo]=useState(exampleExperience);
    return (
        <UserContext.Provider value={{generalInfo, setGeneralInfo, educationInfo, setEducationInfo}} >
            <Form />
            <Preview />
        </UserContext.Provider>
    )
}
