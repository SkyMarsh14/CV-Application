import Form from "./Form";
import Preview from "./Preview";
import { useState } from "react";
import UserContext from "./UserContext";
import Header from "./Header";
import { emptyGeneralInfo, emptyEducationInfo, emptyExperienceInfo } from "./emptyInfo";
import "../styles/icons.css";
export default function App() {
  const [generalInfo, setGeneralInfo] = useState(emptyGeneralInfo);
  const [educationInfo, setEducationInfo] = useState(emptyEducationInfo);
  const [experienceInfo, setExperienceInfo] = useState(emptyExperienceInfo);
  return (
    <UserContext.Provider
      value={{
        generalInfo,
        setGeneralInfo,
        educationInfo,
        setEducationInfo,
        experienceInfo,
        setExperienceInfo,
      }}
    >
      <Header />
      <Form />
      <Preview />
    </UserContext.Provider>
  );
}