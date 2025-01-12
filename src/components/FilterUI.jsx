import { useState } from "react";

function FilterUI({ setCategory, setGender, setPriceRange }) {
  const [isMaleChecked, setIsMaleChecked] = useState(true);
  const [isFemaleChecked, setIsFemaleChecked] = useState(true);

  const bothGenders = () => {
    if (isFemaleChecked === true && isMaleChecked === true) {
      console.log("both genders");
      return true;
    } else return false;
  };
  return (
    <div className="flex gap-4">
      <select onChange={(e) => setCategory(e.target.value)}>
        <option value="">All Disciplines</option>
        <option value="Uniforms">Uniforms</option>
        <option value="Gloves">Gloves</option>
        <option value="Accesories">Accesories & others</option>
      </select>
      <div className="flex gap-4">
        <div className="flex gap-1">
          <label htmlFor="male">Male</label>
          <input
            type="checkbox"
            id="male"
            name="male"
            checked={isMaleChecked}
            onChange={() => setIsMaleChecked(!isMaleChecked)}
          />
        </div>
        <div className="flex gap-1">
          <label htmlFor="female">Female</label>
          <input
            type="checkbox"
            id="female"
            name="female"
            checked={isFemaleChecked}
          />
        </div>
      </div>
    </div>
  );

  // to turn off the check value
  // male.value = off

  console.log(male.value);
}

export default FilterUI;
