import { useState } from "react";
import PropTyeps from "prop-types";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };
  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Search for a product..."
        value={query}
        onChange={handleSearch}
        className="w-full border rounded p-2"
      />
    </div>
  );
};

SearchBar.propTypes = {
  onSearch: PropTyeps.func.isRequired,
};

export default SearchBar;
