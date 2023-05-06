import { Country } from "@/types";

export function sortCountries(countries: Country[], sortType: string) {
  let newCountries: Country[] = [];

  switch (sortType) {
    case "name-asc":
      newCountries = countries.sort((a, b) =>
        a.name.common > b.name.common ? 1 : -1
      );
      break;
    case "name-desc":
      newCountries = countries.sort((a, b) =>
        a.name.common < b.name.common ? 1 : -1
      );

      break;
    case "population-asc":
      newCountries = countries.sort((a, b) =>
        a.population > b.population ? 1 : -1
      );

      break;
    case "population-desc":
      newCountries = countries.sort((a, b) =>
        a.population < b.population ? 1 : -1
      );

      break;

    default:
      break;
  }
  return newCountries;
}
