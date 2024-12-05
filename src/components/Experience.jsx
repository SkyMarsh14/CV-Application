import { useContext } from "react"
import UserContext from "./UserContext"

export default function Experience() {
    const { experienceInfo } = useContext(UserContext);
    return (
        <>
            <fieldset>
                <legend>Experience</legend>
                {experienceInfo.map((inputField) => (
                    <InputField
                        key={inputField.id}
                        inputField={inputField}
                    />
                ))}
            </fieldset>
        </>
    )
}

function InputField({ inputField }) {
    const { experienceInfo, setExperienceInfo } = useContext(UserContext);
    function updateInput(e, field) {
        setExperienceInfo(previous =>
            previous.map(exp =>
                exp.id === inputField.id
                    ? { ...exp, [field]: e.target.value }
                    : exp
            )
        );
    }
    return (
        <div className="experience-input">
            <div className="company">
                <label htmlFor="">Company: </label>
                <input type="text" onChange={(e) => updateInput(e, "companyName")} value={inputField.companyName}/>
            </div>
            <div className="responsibilites">
                <label htmlFor="">Responsibilities: </label>
                <input type="text" onChange={(e) => updateInput(e, "responsibilities" )} value={inputField.responsibilities} />
            </div>
            <div className="positionTitle">
                <label htmlFor="">Position Title: </label>
                <input type="text" onChange={(e) => updateInput(e, "positionTitle")} value={inputField.positionTitle}/>
            </div>
            <div className="startDate">
                <label htmlFor="">Start Date: </label>
                <input type="text" onChange={(e) => updateInput(e, "startDate")} value={inputField.startDate} />
            </div>
            <div className="endDate">
                <label htmlFor="">End Date: </label>
                <input type="text" onChange={(e)=>updateInput(e,"endDate")} value={inputField.endDate}/>
            </div>

        </div >
    )
}