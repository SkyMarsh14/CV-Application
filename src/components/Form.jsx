import { useState } from "react"
import Education from "./Education";
import GeneralInfo from "./GeneralInfo";

export default function Form({setGeneralInfo,setEducationInfo, educationInfo}) {
    return (
        <form>
            <GeneralInfo setGeneralInfo={setGeneralInfo} />
            <Education setEducationInfo={setEducationInfo} educationInfo={educationInfo} />
        </form>
    )
}
