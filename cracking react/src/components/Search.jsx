function Search({ setSearchQuery }) {
  return (
    <div>
      <h2>Search Contacts</h2>
      <input
        type="text"
        placeholder="Search by name"
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
}

export default Search;
