import '../searchbar.css';

function SearchBar() {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Where (Destination)" />
      <input type="text" placeholder="Type (Activity)" />
      <input type="date" />
      <input type="number" placeholder="Guests" />
      <button>Search</button>
    </div>
  );
}

export default SearchBar;
