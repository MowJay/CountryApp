import { Country } from "@/types";
import Image from "next/image";
import Link from "next/link";

const CountriesList = ({ countries }: { countries: Country[] }) => {
  if (!countries || !Array.isArray(countries)) {
    return (
      <div className="my-8 text-center bg-lightElement dark:bg-darkElement p-4 shadow rounded">
        No countries found
      </div>
    );
  }

  return (
    <div className="my-8 grid grid-cols-[256px] justify-center md:grid-cols-[256px_256px] md:justify-around lg:grid-cols-[256px_256px_256px_256px] lg:justify-between gap-y-8 gap-x-4">
      {countries.map((item) => (
        <Link
          href={`/details/${item.cca3}`}
          key={item.cca3}
          className="bg-lightElement dark:bg-darkElement rounded shadow w-64 align-end col hover:shadow-xl"
        >
          <div className="relative h-48">
            <Image
              src={item.flags.png}
              alt={item.flags.alt}
              fill
              sizes="w-full h-full"
              className="rounded-t"
              loading="lazy"
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
                {item.capital?.[0]}
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CountriesList;
