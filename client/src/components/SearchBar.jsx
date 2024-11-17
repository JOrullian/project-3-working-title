import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchIcon from "../assets/search-icon.svg";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  // Redirects user to explore endpoint with searched term
  const handleSearch = (event) => {
    event.preventDefault();
    console.log("Navigating to:", `/explore?search=${searchTerm}`);
    navigate(`/explore?search=${searchTerm}`);
  };

  return (
    <>
      <form onSubmit={handleSearch} className="searchbar">
        <img className="searchbar-icon" src={SearchIcon} alt="Search Icon"></img>
        <input
          className="searchbar-input"
          placeholder="Search..."
          id="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>
    </>
  );
};

export default SearchBar;
