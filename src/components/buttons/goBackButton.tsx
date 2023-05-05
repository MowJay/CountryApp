"use client";

import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";

const GoBackButton = () => {
  const router = useRouter();
  return (
    <div
      className="inline-block bg-lightElement dark:bg-darkElement rounded shadow py-2 px-6 mt-8 cursor-pointer"
      onClick={() => {
        router.back();
      }}
    >
      <FaArrowLeft className="inline me-2" />
      Back
    </div>
  );
};

export default GoBackButton;
