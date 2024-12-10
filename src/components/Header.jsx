import { useContext } from "react";
import UserContext from "./UserContext";
import {
  emptyGeneralInfo,
  emptyEducationInfo,
  emptyExperienceInfo,
} from "./emptyInfo";
import {
  exampleGeneralInfo,
  exampleEducationInfo,
  exampleExperience,
} from "./exampleinfo";
import "../styles/header.css"
export default function Header(){
    return(
        <header>
            <h1>CV Generator</h1>
            <ClearBtn />
        </header>
    )
}
function ClearBtn() {
    const { setGeneralInfo, setEducationInfo, setExperienceInfo } =
      useContext(UserContext);
    function clearInputs() {
      setGeneralInfo(emptyGeneralInfo);
      setEducationInfo(emptyEducationInfo);
      setExperienceInfo(emptyExperienceInfo);
    }
    function loadExample() {
      setGeneralInfo(exampleGeneralInfo);
      setEducationInfo(exampleEducationInfo);
      setExperienceInfo(exampleExperience);
    }
    function printout(){
      window.print();
  
    }
    return (
      <div className="inputControl">
        <button type="button" onClick={clearInputs}>
          Clear All
        </button>
        <button type="button" onClick={loadExample}>
          Load Exmaple
        </button>
        <button type="butotn" onClick={printout} >Print</button>
      </div>
    );
  }
  