"use client";

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import Select from "./../select/index";
import { removeFromQuery, addOrUpdate } from "@/utils/queryUtils";

const RegionSelect = ({ region }: { region: string }) => {
  const router = useRouter();
  const pathName = usePathname();

  const handleChange = (value: string) => {
    if (value) {
      router.replace(
        addOrUpdate(removeFromQuery(pathName, "name"), "region", value)
      );
    } else {
      router.replace(removeFromQuery(pathName, "region"));
    }
  };

  return (
    <Select
      value={region}
      handleChange={handleChange}
      options={[
        { value: "", label: "all" },
        { value: "africa", label: "africa" },
        { value: "america", label: "america" },
        { value: "asia", label: "asia" },
        { value: "europe", label: "europe" },
        { value: "oceania", label: "oceania" },
      ]}
      placeHolder="filter by region"
      extraClass="min-w-[10rem] mt-8 md:mt-0 "
    />
  );
};

export default RegionSelect;
