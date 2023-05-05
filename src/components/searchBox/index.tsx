"use client";

import { useRouter } from "next/navigation";
import { FaSearch } from "react-icons/fa";
import { useState, FormEvent, useEffect } from "react";

const SearchBox = ({ name, region }: { name: string; region: string }) => {
  const router = useRouter();

  const [query, setQuery] = useState(name);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!query) {
        if (!region) {
          router.replace("/");
        }
      } else {
        router.replace(`/name/${query}`, { forceOptimisticNavigation: true });
      }
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, [query, region, router]);

  function handleChange(e: FormEvent<HTMLInputElement>) {
    setQuery(e.currentTarget.value);
  }

  return (
    <div className="flex items-center gap-2 bg-lightElement dark:bg-darkElement py-2 px-4 rounded shadow min-w-[40%]">
      <FaSearch className="text-lightInput" />
      <input
        autoFocus
        className="outline-0 bg-transparent grow"
        placeholder="Search for a country..."
        value={query}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;
