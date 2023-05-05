"use client";

import { FaSearch } from "react-icons/fa";
import { useState, FormEvent, useEffect } from "react";

const SearchBox = () => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      console.log(query);
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, [query]);

  function handleChange(e: FormEvent<HTMLInputElement>) {
    setQuery(e.currentTarget.value);
  }

  return (
    <div className="flex items-center gap-2 bg-lightElement dark:bg-darkElement py-2 px-4 rounded shadow">
      <FaSearch className="text-lightInput" />
      <input
        className="outline-0 bg-transparent"
        placeholder="Search for a country..."
        value={query}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;
