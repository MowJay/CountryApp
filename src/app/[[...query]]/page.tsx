import SearchBox from "@/components/searchBox";
import RegionSelect from "@/components/regionSelect";
import { Country } from "@/types";
import { checkQueryValidity } from "@/utils/queryUtils";
import { Suspense } from "react";
import CountriesList from "@/components/countriesList";

async function getData(key: string, value?: string) {
  let url = "";

  if (key === "all") {
    url = "https://restcountries.com/v3.1/all";
  } else {
    url = `https://restcountries.com/v3.1/${key}/${value}`;
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

  if (checkQueryValidity(query)) {
    data = await getData(query[0], query[1]);
    if (query[0] === "name") name = query[1];
    else if (query[0] === "region") region = query[1];
  } else {
    data = await getData("all");
  }

  return (
    <>
      <div className="md:flex justify-between mt-8">
        <SearchBox name={name} region={region} />
        <RegionSelect region={region} />
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <CountriesList countries={data} />
      </Suspense>
    </>
  );
}
