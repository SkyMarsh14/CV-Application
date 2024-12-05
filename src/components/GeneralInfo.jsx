import { useContext } from "react";
import UserContext from "./UserContext";

export default function GeneralInfo(){
    const {generalInfo,setGeneralInfo}=useContext(UserContext)
    function updateInput(e){
        const {id,value}=e.target;
        setGeneralInfo(previous=>(
            {...previous, [id]:value}
        ) )
    };
    return (
            <fieldset>
                <legend>General Information</legend>

                <div className="firstName">
                    <label>First Name : </label>
                    <input id="firstName" onChange={updateInput} value={generalInfo.firstName}></input>
                </div>

                <div className="lastName">
                    <label>Last Name : </label>
                    <input type="text" id="lastName" onChange={updateInput} value={generalInfo.lastName}/>
                </div>
                <div className="jobTitle">
                    <label htmlFor="">Job Title</label>
                    <input type="text" id="jobTitle" onChange={updateInput} value={generalInfo.jobTitle}/>
                </div>
                <div className="number">
                    <label htmlFor="">Phone Number : </label>
                    <input id="number" type="tel" onChange={updateInput} value={generalInfo.number}/>
                </div>

                <div className="email">
                    <label htmlFor="">Email : </label>
                    <input type="email" id="email" onChange={updateInput} value={generalInfo.email}/>
                </div>
            </fieldset>
    );
};
