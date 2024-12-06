import Education from "./Education";
import GeneralInfo from "./GeneralInfo";
import Experience from "./Experience";
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
export default function Form() {
  return (
    <form>
      <GeneralInfo />
      <Education />
      <Experience />
      <ClearBtn />
    </form>
  );
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
  return (
    <div className="inputControl">
      <button type="button" onClick={clearInputs}>
        Clear All
      </button>
      <button type="button" onClick={loadExample}>
        Load Exmaple
      </button>
    </div>
  );
}
