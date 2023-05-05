"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);
  const router = useRouter();

  return (
    <div className="text-center mt-8 bg-lightElement dark:bg-darkElement rounder shadow py-4">
      <h2 className="text-lg font-bold">
        {error.message === "NEXT_NOT_FOUND"
          ? "Not found!"
          : "Something went wrong!"}
      </h2>
      <button
        className="bg-lightElement dark:bg-darkElement rounded shadow py-2 px-6 mt-4 mx-auto cursor-pointer font-semibold"
        onClick={() => {
          if (error.message === "NEXT_NOT_FOUND") {
            router.replace("/");
          } else {
            reset();
          }
        }}
      >
        {error.message === "NEXT_NOT_FOUND" ? "Go to home page" : "Try again"}
      </button>
    </div>
  );
}
