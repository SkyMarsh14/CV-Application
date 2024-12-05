import { useState } from "react"
import Education from "./Education";
import GeneralInfo from "./GeneralInfo";
import Experience from "./Experience";

export default function Form() {
    return (
        <form>
            <GeneralInfo  />
            <Education />
            <Experience />
        </form>
    )
}
