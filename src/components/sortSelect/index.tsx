"use client";

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

import Select from "../select";
import { addOrUpdate, removeFromQuery } from "@/utils/queryUtils";

const SortSelect = ({ sort }: { sort: string }) => {
  const router = useRouter();
  const pathName = usePathname();

  const handleChange = (value: string) => {
    if (value) {
      router.replace(addOrUpdate(pathName, "sort", value));
    } else {
      router.replace(removeFromQuery(pathName, "sort"));
    }
  };

  return (
    <Select
      value={sort}
      handleChange={handleChange}
      options={[
        { value: "", label: "default" },
        { value: "name-asc", label: "name asc" },
        { value: "name-desc", label: "name desc" },
        { value: "population-asc", label: "population asc" },
        { value: "population-desc", label: "population desc" },
      ]}
      placeHolder="Sort"
      extraClass="min-w-[10rem] mt-8 md:mt-0 me-3"
    />
  );
};

export default SortSelect;
