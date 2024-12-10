import { useContext } from "react"
import UserContext from "./UserContext"

export default function Experience() {
    const { experienceInfo, setExperienceInfo } = useContext(UserContext);
    function handleAdd(e){
        e.preventDefault();
    setExperienceInfo(previous=>
        [...previous,
        {
        id:crypto.randomUUID(),
        companyName:"",
        responsibilities:"",
        positionTitle:"",
        startDate:"",
        endDate:"",
    }
    ])
}
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
                <button onClick={handleAdd} className="add-experience-btn">Add Experience</button>
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
    function removeField(){
        const newExp = experienceInfo.filter(exp=>exp.id!==inputField.id);
        setExperienceInfo(newExp);
    }
    return (
        <div className="experience-input">
            <div className="company">
                <label htmlFor="">Company</label>
                <input type="text" onChange={(e) => updateInput(e, "companyName")} value={inputField.companyName} placeholder="Software Coorp"/>
            </div>
            <div className="responsibilites">
                <label htmlFor="">Responsibilities</label>
                <textarea type="text" onChange={(e) => updateInput(e, "responsibilities")} value={inputField.responsibilities} placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec faucibus nibh eget dolor imperdiet, accumsan blandit massa vulputate. Nunc tristique nisi mollis augue blandit facilisis. Sed nec libero ac ligula eleifend placerat non non neque. Quisque in quam felis. Nullam nec sem mi. Sed sit amet egestas elit, sed vulputate erat. Proin ac elit ac ipsum tristique interdum. Nulla et sagittis nulla." />
            </div>
            <div className="positionTitle">
                <label htmlFor="">Position Title</label>
                <input type="text" onChange={(e) => updateInput(e, "positionTitle")} value={inputField.positionTitle} placeholder="Software Engneer"/>
            </div>
            <div className="startDate">
                <label htmlFor="">Start Date</label>
                <input type="month" onChange={(e) => updateInput(e, "startDate")} value={inputField.startDate} placeholder="MM/ YYYY"/>
            </div>
            <div className="endDate">
                <label htmlFor="">End Date</label>
                <input type="month" onChange={(e) => updateInput(e, "endDate")} value={inputField.endDate} placeholder="MM/ YYYY"/>
            </div>
            <button onClick={removeField} className="remove-field-btn"></button>
        </div >
    )
}