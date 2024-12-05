import UserContext from "./UserContext"
import React, { useContext } from "react"

export default function Preview() {
    const { generalInfo } = useContext(UserContext);
    return (
        <section className="preview">
            <h3>Preview</h3>
            <div id="page">
                <div className="generalInfo">
                    <h4>General Info</h4>
                    <div className="job-title">{generalInfo.jobTitle}</div>
                    <div>{generalInfo.firstName} {generalInfo.lastName}</div>
                    <div>{generalInfo.number}</div>
                    <div>{generalInfo.email}</div>
                </div>
                <EducationPreview />
                <ExperiencePreview />
            </div>
        </section>
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