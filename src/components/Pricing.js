import Image from "next/image";
import React from "react";
import Container from "@/components/Container";
import Link from "next/link";


const Pricing  = () => {
  return (
    <Container className="flex w-full flex-col mt-4 bg items-center justify-center text-center">
      <div>
        <div className="text-sm font-bold tracking-wider text-indigo-600 uppercase">
          Our Pricing
        </div>
        <h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
          Transparent pricing. Pay as you grow.
        </h2>
        <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam, eaque ipsa quae.
        </p>
      </div>

      <div className="my-8">
        <div className="grid max-w-md gap-10 row-gap-5 lg:max-w-screen-lg sm:row-gap-10 lg:grid-cols-3 xl:max-w-screen-lg sm:mx-auto">
          <div className="flex flex-col justify-between p-8 transition-shadow duration-300 bg-white border rounded-lg shadow-sm sm:items-center hover:shadow">
            <div className="text-center">
              <div className="text-lg font-semibold">Start</div>
              <div className="flex items-center justify-center mt-2">
                <div className="mr-1 text-5xl font-bold">Free</div>
              </div>
              <div className="mt-2 space-y-3">
                <div className="text-gray-700">10 deploys per day</div>
                <div className="text-gray-700">10 GB of storage</div>
                <div className="text-gray-700">20 domains</div>
              </div>
            </div>
            <div>
              <a
                href="/"
                className="inline-flex items-center justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-white transition duration-200 bg-gray-800 rounded shadow-md hover:bg-gray-900 focus:shadow-outline focus:outline-none"
              >
                Start for free
              </a>
              <p className="max-w-xs mt-6 text-xs text-gray-600 sm:text-sm sm:text-center sm:max-w-sm sm:mx-auto">
                Sed ut unde omnis iste natus accusantium doloremque.
              </p>
            </div>
          </div>
          <div className="relative flex flex-col justify-between p-8 transition-shadow duration-300 bg-white border rounded-lg shadow-sm sm:items-center hover:shadow border-deep-purple-accent-400">
            <div className="text-center">
              <div className="text-lg font-semibold">Pro</div>
              <div className="flex items-center justify-center mt-2">
                <div className="mr-1 text-5xl font-bold">$38</div>
                <div className="text-gray-700">/ mo</div>
              </div>
              <div className="mt-2 space-y-3">
                <div className="text-gray-700">200 deploys per day</div>
                <div className="text-gray-700">80 GB of storage</div>
                <div className="text-gray-700">Global CDN</div>
              </div>
            </div>
            <div>
              <a
                href="/"
                className="inline-flex items-center justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
              >
                Buy Pro
              </a>
              <p className="max-w-xs mt-6 text-xs text-gray-600 sm:text-sm sm:text-center sm:max-w-sm sm:mx-auto">
                Sed ut unde omnis iste natus accusantium doloremque.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between p-8 transition-shadow duration-300 bg-white border rounded-lg shadow-sm sm:items-center hover:shadow">
            <div className="text-center">
              <div className="text-lg font-semibold">Business</div>
              <div className="flex items-center justify-center mt-2">
                <div className="mr-1 text-5xl font-bold">$78</div>
                <div className="text-gray-700">/ mo</div>
              </div>
              <div className="mt-2 space-y-3">
                <div className="text-gray-700">500 GB of storage</div>
                <div className="text-gray-700">Unlimited domains</div>
                <div className="text-gray-700">24/7 Support</div>
              </div>
            </div>
            <div>
              <a
                href="/"
                className="inline-flex items-center justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-white transition duration-200 bg-gray-800 rounded shadow-md hover:bg-gray-900 focus:shadow-outline focus:outline-none"
              >
                Buy Business
              </a>
              <p className="max-w-xs mt-6 text-xs text-gray-600 sm:text-sm sm:text-center sm:max-w-sm sm:mx-auto">
                Sed ut unde omnis iste natus accusantium doloremque.
              </p>
            </div>
          </div>
        </div>
      </div>

    </Container>
  );
}


function Mark(props) {
  return (
    <>
      {" "}
      <mark className="text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
        {props.children}
      </mark>{" "}
    </>
  );
}

export default Pricing;