import { useState } from "react";

// this component  lets the user search by name of the product
function SearchBar({ query, setQuery }) {
  const [inputValue, setInputValue] = useState("");

  function handleSearch() {
    setQuery(inputValue);
  }

  function handleKeyDown(e) {
    // console.log(e);
    if (e.key === "Enter") {
      setQuery(inputValue);
      console.log("Enter");
    }
  }
  return (
    <div className="my-8 ">
      <p className="text-slate-800">Search by Name</p>
      <input
        type="text"
        className="border border-slate-600 h-8  w-2/3 shadow-md p-1"
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Search for products (e.g. 'jiu-jitsu')"
      />
      <button onClick={handleSearch} className="h-8 p-0 w-8">
        🔍
      </button>
    </div>
  );
}

export default SearchBar;
