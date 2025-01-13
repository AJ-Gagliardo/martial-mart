import { useState } from "react";

function FilterUI({ setCategory, setGender, setPriceRange }) {
  const [isMaleChecked, setIsMaleChecked] = useState(true);
  const [isFemaleChecked, setIsFemaleChecked] = useState(true);

  function PriceRange({ setPriceRange }) {
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(250);

    const handleMinChange = (e) => {
      const value = Number(e.target.value);
      if (value <= maxPrice) {
        setMinPrice(value);
        setPriceRange({ min: value, max: maxPrice });
      }
    };

    const handleMaxChange = (e) => {
      const value = Number(e.target.value);
      if (value >= minPrice) {
        setMaxPrice(value);
        setPriceRange({ min: minPrice, max: value });
      }
    };

    return (
      <div className="grid gap-1 text-start place-items-center">
        <label>
          Min Price: ${minPrice}
          <input
            type="range"
            min="0"
            max="250"
            step="10"
            value={minPrice}
            onChange={handleMinChange}
          />
        </label>
        <label>
          Max Price: ${maxPrice}
          <input
            type="range"
            min="0"
            max="250"
            step="10"
            value={maxPrice}
            onChange={handleMaxChange}
          />
        </label>
      </div>
    );
  }

  const bothGenders = () => {
    if (isFemaleChecked === true && isMaleChecked === true) {
      console.log("both genders");
      return true;
    } else return false;
  };
  return (
    <div className="grid place-content-center items-center content-center text-center sm:grid-cols-3  gap-4">
      <div>
        <select onChange={(e) => setCategory(e.target.value)}>
          <option value="">All Products</option>
          <option value="Uniforms">Uniforms</option>
          <option value="Gloves">Gloves</option>
          <option value="Accesories">Accesories & others</option>
        </select>
      </div>
      <div className="flex gap-4 text-center items-center content-center m-auto">
        <div className="flex gap-1 ">
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
      <PriceRange />
    </div>
  );

  // to turn off the check value
  // male.value = off

  console.log(male.value);
}

export default FilterUI;