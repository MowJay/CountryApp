import SearchBox from "@/components/searchBox";
import { Country } from "@/types";
import Image from "next/image";
import Link from "next/link";

async function getData() {
  const res = await fetch("https://restcountries.com/v3.1/name/ger");

  return res.json();
}

export default async function Home() {
  const data: Country[] = await getData();

  const renderCountries = (data: Country[]) => {
    if (!data || !Array.isArray(data)) {
      return (
        <div className="my-8 text-center bg-lightElement dark:bg-darkElement p-4 shadow rounded">
          No countries found
        </div>
      );
    }

    return (
      <div className="my-8 grid grid-cols-[256px] justify-center md:grid-cols-[256px_256px] md:justify-around lg:grid-cols-[256px_256px_256px_256px] lg:justify-between gap-y-8 gap-x-4">
        {data.map((item) => (
          <Link
            href="/details/"
            key={item.cca3}
            className="bg-lightElement dark:bg-darkElement rounded shadow w-64 align-end col hover:shadow-xl"
          >
            <div className="relative h-48">
              <Image
                src={item.flags.png}
                alt={item.flags.alt}
                fill
                className="rounded-t"
              />
            </div>
            <div className="p-4">
              <strong>{item.name.common}</strong>
              <div className="mt-2">
                <span className="block">
                  <span className="font-semibold">Population:</span>{" "}
                  {item.population}
                </span>
                <span className="block">
                  <span className="font-semibold">Region:</span> {item.region}
                </span>
                <span className="block">
                  <span className="font-semibold">Capital:</span>{" "}
                  {item.capital[0]}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    );
  };

  return (
    <>
      <div className="md:flex justify-between mt-8">
        <SearchBox />

        <select
          className="mt-8 md:mt-0 py-2 px-4 rounded shadow outline-0 bg-lightElement dark:bg-darkElement"
          placeholder="filter by region"
        >
          {[
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
      </div>

      {renderCountries(data)}
    </>
  );
}
