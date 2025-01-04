function SearchBar({ query, setQuery }) {
  return (
    <div className="my-8 ">
      <p>Search by Name</p>
      <input
        type="text"
        className="border border-slate-600 h-8  w-2/3 shadow-md"
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="h-8 p-0 w-8">0</button>
    </div>
  );
}

export default SearchBar;
