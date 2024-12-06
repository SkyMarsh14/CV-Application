
const exampleGeneralInfo = {
    firstName: "John",
    lastName: "Smith",
    location: "California, USA",
    number: "555-555-5555",
    email: "example@gmail.com",
    aboutMe: "Organized and self-motivated software engineer graduate with 2+ years combined internship and professional experience. Fluent in .Net C#, SQL, Python, JavaScript, and CSS programming languages. Possess practical working knowledge of relational databases using PostgreSQL, SQL Server, Cloud Development, and Agile Development. Constantly updating personal and professional technical skills with complementary collegiate courses and online bootcamps. Reliable and responsible team player."
}

const exampleEducationInfo = [{
    id: crypto.randomUUID(),
    degree: "Master's in Coumputer Science",
    institution: "Harvard University",
    city: "Colorado City",
    startDate: "2016",
    endDate: "2018"
},
{
    id: crypto.randomUUID(),
    degree: "Bachelor in Information and Technology",
    institution: "NotAReal University",
    city: "New York City",
    startDate: "2014",
    endDate: "2016"
}]

const exampleExperience = [{
    id: crypto.randomUUID(),
    companyName: "Microsoft",
    responsibilities: "Developed and maintained web applications using a modern stack: React (frontend), Node.js (backend), and MongoDB (database).",
    positionTitle: "Software Engineer",
    startDate: "2014 Aug",
    endDate: "2017 Sep"
},
{
    id: crypto.randomUUID(),
    companyName: "Apple",
    responsibilities: "Build and maintain mobile applications using native (Swift, Kotlin) or cross-platform (React Native, Flutter) frameworks.",
    positionTitle: "Swift Engineer",
    startDate: "2010 June",
    endDate: "2014 Jan",
}
]

export { exampleEducationInfo, exampleGeneralInfo, exampleExperience };