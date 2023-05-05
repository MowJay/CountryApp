import { Country } from "@/types";
import { separateDigits } from "@/utils/numberUtils";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

async function getData(query: string) {
  const res = await fetch(`https://restcountries.com/v3.1/alpha/${query}`);

  return res.json();
}

const Details = async ({ params }: { params: { query: string } }) => {
  const data: Country[] = await getData(params.query);

  const details = data[0];

  const renderDetails = (details: Country) => {
    if (!data || !Array.isArray(data) || !data[0]) {
      return <div>not found</div>;
    }

    return (
      <div className="md:flex items-center mt-8 gap-8 box-border">
        <div className="relative flex-1 aspect-[4/3]">
          <Image
            src={details.flags.png}
            alt={details.flags.alt}
            fill
            priority
          />
        </div>

        <div className="flex-1 mt-8 md:mt-0">
          <h2 className="font-bold text-xl">{details.name.common}</h2>

          <div className="mt-6 grid md:grid-cols-2 gap-4">
            {[
              {
                label: "Native Name",
                value: Object.values(details.name.nativeName)?.[0]?.common,
              },
              { label: "Top Level Domain", value: details.tld.toString() },
              {
                label: "Population",
                value: separateDigits(details.population),
              },
              {
                label: "Currencies",
                value: Object.keys(details.currencies).toString(),
              },
              { label: "Region", value: details.region },
              {
                label: "Languages",
                value: Object.values(details.languages).toString(),
              },
              { label: "Sub Region", value: details.subregion },
              { label: "Capital", value: details.capital?.toString() },
            ].map((item, index) => (
              <div key={index}>
                <span className="font-semibold me-2">{item.label}:</span>
                <span>{item.value}</span>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <span className="font-semibold">Border Countries:</span>
            <div className="mt-4">
              {details.borders?.map((item, index) => (
                <Link
                  href=""
                  key={index}
                  className="inline-block bg-lightElement dark:bg-darkElement rounded shadow py-2 px-6 cursor-pointer ms-2 first:ms-0"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <Link
        href="/"
        className="inline-block bg-lightElement dark:bg-darkElement rounded shadow py-2 px-6 mt-8 cursor-pointer"
        replace
      >
        <FaArrowLeft className="inline me-2" />
        Back
      </Link>
      {renderDetails(details)}
    </>
  );
};

export default Details;
