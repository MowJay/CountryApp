export type Country = {
  name: {
    common: string;
    nativeName: { [key: string]: {official:string;common:string} };
  };
  population: number;
  region: string;
  subregion: string;
  capital: string[];
  tld: string[];
  currencies: string;
  languages: string[];
  borders: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
};
