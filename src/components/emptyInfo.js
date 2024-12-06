const emptyGeneralInfo = {
  firstName: "",
  lastName: "",
  location: "",
  number: "",
  email: "",
  aboutMe: "",
};

const emptyEducationInfo = [
  {
    id: crypto.randomUUID(),
    degree: "",
    institution: "",
    city: "",
    startDate: "",
    endDate: "",
  },
];

const emptyExperienceInfo = [
  {
    id: crypto.randomUUID(),
    companyName: "",
    responsibilities: "",
    positionTitle: "",
    startDate: "",
    endDate: "",
  },
];

export { emptyGeneralInfo, emptyEducationInfo, emptyExperienceInfo };
