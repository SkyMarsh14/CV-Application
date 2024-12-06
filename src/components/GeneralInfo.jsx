import { useContext } from "react";
import UserContext from "./UserContext";

export default function GeneralInfo() {
  const { generalInfo, setGeneralInfo } = useContext(UserContext);
  function updateInput(e) {
    const { id, value } = e.target;
    setGeneralInfo((previous) => ({ ...previous, [id]: value }));
  }
  return (
    <fieldset>
      <legend>General Information</legend>

      <div className="firstName">
        <label>First Name : </label>
        <input
          id="firstName"
          onChange={updateInput}
          value={generalInfo.firstName}
          placeholder="Smith"
        ></input>
      </div>

      <div className="lastName">
        <label>Last Name : </label>
        <input
          type="text"
          id="lastName"
          onChange={updateInput}
          value={generalInfo.lastName}
          placeholder="John"
        />
      </div>
      <div className="location">
        <label htmlFor="">Location : </label>
        <input
          type="text"
          id="location"
          onChange={updateInput}
          value={generalInfo.location}
          placeholder="NYC, USA"
        />
      </div>
      <div className="number">
        <label htmlFor="number">Phone Number : </label>
        <input
          id="number"
          type="tel"
          onChange={updateInput}
          value={generalInfo.number}
          placeholder="555-5555-5555"
        />
      </div>

      <div className="email">
        <label htmlFor="email">Email : </label>
        <input
          type="email"
          id="email"
          onChange={updateInput}
          value={generalInfo.email}
          placeholder="example.com"
        />
      </div>
      <div className="aboutMe">
        <label htmlFor="aboutMe">About Me: </label>
        <input
          type="text"
          id="aboutMe"
          onChange={updateInput}
          value={generalInfo.aboutMe}
          placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur fermentum posuere urna, ut tincidunt sem facilisis id. Integer sodales, turpis eu malesuada facilisis, tellus felis molestie felis, ac scelerisque dolor lorem ac magna. Sed viverra, ipsum a egestas gravida, metus tortor ullamcorper ex, eget convallis lectus massa non eros. Donec erat turpis, cursus vitae nunc quis, tincidunt maximus purus. Nam vel placerat metus. Donec eu commodo justo, quis ultricies purus. Sed purus diam, placerat at augue quis, imperdiet scelerisque ligula. Donec posuere dolor eget blandit lacinia. Cras ex sapien, gravida ut pretium at, lacinia vitae mi. Donec consequat magna ac risus condimentum, nec consectetur urna tincidunt. Vestibulum id magna in urna ornare consequat et sed quam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc in mauris in turpis eleifend interdum. Proin tempor orci in urna porttitor hendrerit. Vivamus rhoncus placerat risus vitae porttitor."
        />
      </div>
    </fieldset>
  );
}
