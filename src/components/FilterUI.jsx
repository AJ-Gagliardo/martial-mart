import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

function FilterUI({ setCategory, setGender, setPriceRange }) {
  const [searchParams] = useSearchParams();
  const maleUrl =
    searchParams.get("gender") === "male" ||
    searchParams.get("gender") === "both"
      ? true
      : false;

  const femaleUrl =
    searchParams.get("gender") === "female" ||
    searchParams.get("gender") === "both"
      ? true
      : false;
  const [isMaleChecked, setIsMaleChecked] = useState(maleUrl);
  const [isFemaleChecked, setIsFemaleChecked] = useState(femaleUrl);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(250);
  // function GenderFilter({setGender}) {

  // }

  // use Effect to change the selected gender component
  useEffect(() => {
    if (isMaleChecked === true && isFemaleChecked === true) {
      console.log("both genders are selected");
      setGender("both");
    } else if (isMaleChecked === true && isFemaleChecked === false) {
      console.log("male only is selected");
      setGender("male");
    } else if (isMaleChecked === false && isFemaleChecked === true) {
      console.log("female only is selected");
      setGender("female");
    } else {
      console.log("make as if both are checked");
      setGender("both");
    }
    // it will react everytime one of this changes
  }, [isMaleChecked, isFemaleChecked]);

  function PriceRange({ setPriceRange, minPrice, maxPrice }) {
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
      <div className="grid gap-1 text-start place-items-center text-stale-700 ">
        <label className="text-slate-700">
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
        <label className="text-slate-700">
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
          <option value="Uniforms">Uniforms & Clothing</option>
          <option value="Gloves">Gloves</option>
          <option value="Accessories">Accesories & others</option>
        </select>
      </div>
      <div className="flex gap-4 text-center items-center content-center m-auto">
        <div className="flex gap-1 ">
          <label htmlFor="male" className="text-slate-700">
            Male
          </label>
          <input
            type="checkbox"
            id="male"
            name="male"
            checked={isMaleChecked}
            onChange={() => setIsMaleChecked(!isMaleChecked)}
          />
        </div>
        <div className="flex gap-1">
          <label htmlFor="female" className="text-slate-700">
            Female
          </label>
          <input
            type="checkbox"
            id="female"
            name="female"
            checked={isFemaleChecked}
            onChange={() => setIsFemaleChecked(!isFemaleChecked)}
          />
        </div>
      </div>
      <PriceRange
        setPriceRange={setPriceRange}
        minPrice={minPrice}
        maxPrice={maxPrice}
      />
    </div>
  );

  // to turn off the check value
  // male.value = off

  console.log(male.value);
}

export default FilterUI;
