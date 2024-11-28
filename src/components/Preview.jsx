export default function Preview({generalInfo}){
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
                    <h5>Education</h5>
                    <div></div>
                </div>
            </div>
        </section>
    )
}
