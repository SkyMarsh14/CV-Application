import { useContext} from "react"
import UserContext from "./UserContext";

export default function Education() {
    const {setEducationInfo, educationInfo} = useContext(UserContext)
    function handleAdd(e) {
        e.preventDefault();
        setEducationInfo(previous=>[...previous, {
            id: crypto.randomUUID(),
            institution: "",
            degree: "",
            startDate: "",
            endDate: ""
        }])
    }
    function handleRemove(idToRemove) {
        setEducationInfo(previous=>previous.filter(school => school.id !== idToRemove));
    }

    function updateInput(id, field, value) {
        const updateSchools = educationInfo.map(school =>
            school.id === id
                ? { ...school, [field]: value }
                : {...school}
        )
        setEducationInfo(updateSchools);
    }
    return (
        <>
            <fieldset>
                <legend>Educational Background</legend>
                {educationInfo.map((school) => (
                    <School
                        key={school.id}
                        school={school}
                        onRemove={() => handleRemove(school.id)}
                        onUpdate={(field, value) => updateInput(school.id, field, value)}

                    />
                ))}
                <button onClick={handleAdd} className="add-education-btn">Add Education</button>
            </fieldset>
        </>
    )
}

function School({ school, onRemove, onUpdate }) {
    return (
        <div className="school-input">
            <div>
                <label>Name of Institution</label>
                <input name="insitution" value={school.institution} onChange={(e) => onUpdate("institution", e.target.value)} placeholder="School Name"></input>
            </div>
            <div>
                <label htmlFor="">Degree</label>
                <input type="text" name="degree" onChange={(e)=> onUpdate("degree", e.target.value) } value={school.degree} placeholder="Degree"/>
            </div>
            <div>
                <label htmlFor="">Start Year</label>
                <input type="month" name="startDate" value={school.startDate} onChange={(e)=> onUpdate("startDate", e.target.value)} placeholder="MM / YYYY"/>
            </div>
            <div>
                <label htmlFor="">End Year</label>
                <input type="month" name="endDate" value={school.endDate} onChange={(e)=> onUpdate("endDate",e.target.value)} placeholder="MM/ YYYY"/>
            </div>
            <button onClick={onRemove} className="remove-field-btn"></button>
        </div>
    )
}
