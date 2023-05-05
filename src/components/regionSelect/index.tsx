"use client";

import { useRouter } from "next/navigation";
import Select from "./../select/index";

const RegionSelect = ({ region }: { region: string }) => {
  const router = useRouter();

  const handleChange = (value: string) => {
    if (value) {
      router.replace(`/region/${value}`);
    } else {
      router.replace("/");
    }
  };

  return (
    <Select
      id="regionSelect"
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
