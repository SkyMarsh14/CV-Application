import UserContext from "./UserContext"
import { useContext } from "react"
import  "../styles/preview.css";

export default function Preview() {
    return (
        <section className="preview">
            <div id="page">
                <GeneralInfoPreview />
                <EducationPreview />
                <ExperiencePreview />
            </div>
        </section>
    )
}
function GeneralInfoPreview(){
    const {generalInfo}=useContext(UserContext);
    return(
        <div className="generalInfo">
            <h4 className="name">{generalInfo.firstName} {generalInfo.lastName}</h4>
            <div className="contacts-preview">
                <div className="location">{generalInfo.location}</div>
                <div className="number">{generalInfo.number}</div>
                <div className="email">{generalInfo.email}</div>
            </div>
            <div className="aboutMe">{generalInfo.aboutMe}</div>
        </div>
    )
}
function EducationPreview() {
    const { educationInfo } = useContext(UserContext);
    return (
        <div className="education">     
            <h5>Education</h5>
            {educationInfo.map((each, index) => (
                <div key={index}>
                    <div className="degreePreview">{each.degree}</div>
                    <div>{each.institution}</div>
                    <div>{each.startDate} ~ {each.endDate}</div>
                </div>
            ))}
        </div>
    )
}

function ExperiencePreview(){
    const {experienceInfo}=useContext(UserContext);
    return (
        <div className="experience">
            <h6>Experience</h6>
            {experienceInfo.map((each,index)=>(
                <div className="experienceOutput" key={index}>
                    <div>{each.positionTitle}</div>
                    <div>{each.companyName} </div> 
                    <div>{each.startDate} ~ {each.endDate}</div>
                    <div>{each.responsibilities}</div>
                </div>
            ))}
        </div>
    )
}
