import SearchBox from "@/components/searchBox";
import RegionSelect from "@/components/regionSelect";
import { Country } from "@/types";
import { Suspense } from "react";
import CountriesList from "@/components/countriesList";
import { notFound } from "next/navigation";
import Spinner from "@/components/spinner";
import SortSelect from "@/components/sortSelect";
import { sortCountries } from "@/utils/countryUtils";

async function getData(searchUrl: string) {
  let url = "";

  if (!searchUrl) {
    url = "https://restcountries.com/v3.1/all";
  } else {
    url = `https://restcountries.com/v3.1/${searchUrl}`;
  }

  const res = await fetch(url);
  return res.json();
}

export default async function Home({
  params,
}: {
  params: { query: string[] };
}) {
  const query = params?.query;

  let data: Country[] = [];
  let name = "";
  let region = "";
  let sort = "";
  let searchUrl = "";

  if (query && Array.isArray(query)) {
    query.forEach((item, index) => {
      if (index % 2 !== 0) {
        return;
      }
      if (query[index + 1]) {
        switch (item) {
          case "region":
            region = query[index + 1];
            searchUrl = `/region/${query[index + 1]}`;
            break;
          case "name":
            name = query[index + 1];
            searchUrl = `/name/${query[index + 1]}`;
            break;
          case "sort":
            sort = query[index + 1];
            break;
          default:
            notFound();
            break;
        }
      }
    });
  }
  data = await getData(searchUrl);

  if (sort) {
    data = sortCountries(data, sort);
  }

  return (
    <>
      <div className="md:flex justify-between mt-8">
        <SearchBox name={name} region={region} />
        <div>
          <SortSelect sort={sort} />
          <RegionSelect region={region} />
        </div>
      </div>
      <Suspense fallback={<Spinner />}>
        <CountriesList countries={data} />
      </Suspense>
    </>
  );
}
