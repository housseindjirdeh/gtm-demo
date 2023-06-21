import { useState } from "react";
import { useReportWebVitals } from "next/web-vitals";
import Image from "next/image";

export default function Home() {
  const [images, showImages] = useState(false);
  useReportWebVitals((metric) => {
    if (metric.name === "INP") console.log(metric);
  });

  return (
    <main className="flex flex-col items-center justify-center p-6 xl:p-24">
      <div className="mb-6 relative flex flex-col place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
        <h1 className="font-semibold xl:text-3xl">
          This page loads Google Tag Manager (18 tags) in a web worker using
          Partytown
        </h1>
        <p className="mt-6 font-inter">Here's a picture of a goat</p>
        <Image
          src="/goat.jpg"
          width={500}
          height={500}
          alt="Picture of a goat"
          priority
        />
      </div>
      <hr className="my-6 border border-gray-500 w-full" />
      <button
        onClick={() => showImages(true)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Click Me
      </button>
      {images && (
        <div className="flex-col space-y-10">
          <p className="mt-6 font-roboto">Here's more pictures of goats</p>
          <Image
            src="/goat4.png"
            width={500}
            height={500}
            alt="Picture of a goat"
          />
          <Image
            src="/goat2.jpg"
            width={500}
            height={500}
            alt="Picture of a goat"
          />
          <Image
            src="/goat3.jpg"
            width={500}
            height={500}
            alt="Picture of a goat"
          />
        </div>
      )}
    </main>
  );
}
