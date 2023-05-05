"use client";

import { useRouter } from "next/navigation";

const RegionSelect = ({ region }: { region: string }) => {
  const router = useRouter();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault();
    if (event.target.value) {
      router.replace(`/region/${event.target.value}`);
    } else {
      router.replace("/");
    }
  };

  return (
    <select
      className="mt-8 md:mt-0 py-2 px-4 rounded shadow outline-0 bg-lightElement dark:bg-darkElement"
      placeholder="filter by region"
      onChange={handleChange}
      value={region}
    >
      {[
        { value: "", label: "Filter by Region" },
        { value: "africa", label: "africa" },
        { value: "america", label: "america" },
        { value: "asia", label: "asia" },
        { value: "europe", label: "europe" },
        { value: "oceania", label: "oceania" },
      ].map((item) => (
        <option key={item.value} value={item.value} className="capitalize">
          {item.label}
        </option>
      ))}
    </select>
  );
};

export default RegionSelect;
