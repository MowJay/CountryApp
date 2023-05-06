"use client";

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { FaSearch } from "react-icons/fa";
import { useState, FormEvent, useEffect } from "react";
import { addOrUpdate, removeFromQuery } from "@/utils/queryUtils";

const SearchBox = ({ name, region }: { name: string; region: string }) => {
  const router = useRouter();
  const pathName = usePathname();

  const [query, setQuery] = useState(name);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!query) {
        if (!region) {
          router.replace(removeFromQuery(pathName, "name"));
        }
      } else {
        router.replace(
          addOrUpdate(removeFromQuery(pathName, "region"), "name", query)
        );
      }
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, [query, region, router, pathName]);

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
