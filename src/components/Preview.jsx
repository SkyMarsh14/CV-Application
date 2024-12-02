export default function Preview({generalInfo,educationInfo}){
    return(
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
                <div className="education">
                    <div className="education">
                        <h5>Education</h5>
                        <EducationPreview educationInfo={educationInfo} />
                    </div>
                </div>
            </div>
        </section>
    )
}

function EducationPreview({educationInfo}){
    return (
        <>
        {educationInfo.map((each,index)=>(
            <div key={index}>
               <div>Degree: {each.degree}</div>
               <div>Institution: {each.institution}</div>
               <div>Start Date: {each.startDate}</div>
               <div>End Date: {each.endDate}</div>
            </div>
     ))}
     </>
    )
}