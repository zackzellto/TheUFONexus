import React, { useState, ChangeEvent, FormEvent } from "react";

interface SearchProps {
  data: any[];
  handleSearchResult: (result: any[]) => void;
}

const SearchBar: React.FC<SearchProps> = ({ data, handleSearchResult }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();

    // This example assumes your data is an array of objects
    // and we're searching for a searchTerm in every string field
    const result = data.filter((item) =>
      Object.values(item).some(
        (val) => typeof val === "string" && val.includes(searchTerm)
      )
    );

    handleSearchResult(result);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search the Nexus..."
        value={searchTerm}
        onChange={handleChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
