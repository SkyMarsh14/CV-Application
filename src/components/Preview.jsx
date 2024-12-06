import UserContext from "./UserContext"
import { useContext } from "react"

export default function Preview() {
    return (
        <section className="preview">
            <div id="page">
                <h3>Preview</h3>
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
            <h4>General Info</h4>
            <div className="location">Location: {generalInfo.location}</div>
            <div>Name: {generalInfo.firstName} {generalInfo.lastName}</div>
            <div>Number: {generalInfo.number}</div>
            <div>Email: {generalInfo.email}</div>
            <div>About Me: {generalInfo.aboutMe}</div>
        </div>
    )
}
function EducationPreview() {
    const { educationInfo } = useContext(UserContext);
    return (
        <div className="education">     
            <h5>Educatoin</h5>
            {educationInfo.map((each, index) => (
                <div key={index}>
                    <div>Degree: {each.degree}</div>
                    <div>Institution: {each.institution}</div>
                    <div>Start Date: {each.startDate}</div>
                    <div>End Date: {each.endDate}</div>
                </div>
            ))}
        </div>
    )
}

function ExperiencePreview(){
    const {experienceInfo}=useContext(UserContext);
    return (
        <div className="education">
            <h6>Experience</h6>
            {experienceInfo.map((each,index)=>(
                <div key={index}>
                    <div>Company Name: {each.companyName}</div> 
                    <div>Responsibilities: {each.responsibilities}</div>
                    <div>Position Title: {each.positionTitle}</div>
                    <div>Start Date: {each.startDate}</div>
                    <div>End Date: {each.endDate}</div>
                </div>
            ))}
        </div>
    )
}
