export default function Experience(){
    return (
        <>
        <fieldset>
            <legend>Experience</legend>
            <InputField />
        </fieldset>
        </>
    )
}

function InputField(){
    return (
        <div className="experience-input">
            <div className="company">
                <label htmlFor="">Company: </label>
                <input type="text" />
            </div>
            <div className="responsibilites">
                <label htmlFor="">Responsibilities: </label>
                <input type="text" />
            </div>
            <div className="positionTitle">
                <label htmlFor="">Position Title: </label>
                <input type="text" />
            </div>
            <div className="startDate">
                <label htmlFor="">Start Date: </label>
                <input type="text" />
            </div>
            <div className="endDate">
                <label htmlFor="">End Date: </label>
                <input type="text" />
            </div>

        </div >
    )
}