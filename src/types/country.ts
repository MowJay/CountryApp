export type Country = {
  name: {
    common: string;
    nativeName: string;
  };
  population: number;
  region: string;
  subregion: string;
  capital: string[];
  tld: string[];
  currencies: string;
  languages: string[];
  borders: string[];
  cca3: string;
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
};
