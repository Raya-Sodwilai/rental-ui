const Search = () => {
  return <div>Luxury Purse Rentals</div>
}

const SearchBar = () => (
  <form action="/" method="get">
    <label htmlFor="header-search">
      <span className="visually-hidden">Find Your Purse</span>
    </label>
    <input
      type="text"
      id="header-search"
      placeholder="Find Your Purse"
      name="s" 
    />
    <button type="submit">Search</button>
  </form>
);

export default SearchBar;