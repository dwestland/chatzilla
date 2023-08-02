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

      <div className="my-8 text-center">
        <div className="grid max-w-md gap-10 row-gap-5 lg:max-w-screen-lg sm:row-gap-10 lg:grid-cols-3 xl:max-w-screen-lg sm:mx-auto">

          <div className="flex flex-col justify-between py-8 transition-shadow duration-300 dark:bg-gray-800 border-gray-200 dark:border-gray-700 border-2 rounded-lg shadow-sm sm:items-center hover:shadow">
            <div className="text-lg font-semibold">Starter</div>
            <div className="flex items-center justify-center mt-2">
              <div className="mr-1 text-5xl font-bold">$24</div>
              <div className="self-end">/ mo</div>
            </div>
            <p className="text-sm mt-2">Paid annually, paid monthly $30 per month</p>

            <div className="p-6">
              <ul className="list-inside">
                <li className="mb-4 flex">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3"
                    stroke="#4f46e5" className="mr-3 h-5 w-5 text-primary dark:text-primary-400">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>Unlimited
                  updates
                </li>
                <li className="mb-4 flex">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3"
                    stroke="#4f46e5" className="mr-3 h-5 w-5 text-primary dark:text-primary-400">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>Git
                  repository
                </li>
                <li className="mb-4 flex">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3"
                    stroke="#4f46e5" className="mr-3 h-5 w-5 text-primary dark:text-primary-400">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>npm
                  installation
                </li>
              </ul>
            </div>

            <Link href="/" className="w-full px-6 py-2 mt-3 text-center text-white bg-indigo-600 rounded-md lg:ml-5">         
              Get Started
            </Link>
          </div>

          <div className="flex flex-col justify-between py-8 transition-shadow duration-300 dark:bg-gray-800 border-gray-200 dark:border-gray-700 border-2 rounded-lg shadow-sm sm:items-center hover:shadow">
            <div className="text-lg font-semibold">Starter</div>
            <div className="flex items-center justify-center mt-2">
              <div className="mr-1 text-5xl font-bold">$24</div>
              <div className="self-end">/ mo</div>
            </div>
            <p className="text-sm mt-2">Paid annually, paid monthly $30 per month</p>

            <div className="p-6">
              <ul className="list-inside">
                <li className="mb-4 flex">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3"
                    stroke="#4f46e5" className="mr-3 h-5 w-5 text-primary dark:text-primary-400">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>Unlimited
                  updates
                </li>
                <li className="mb-4 flex">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3"
                    stroke="#4f46e5" className="mr-3 h-5 w-5 text-primary dark:text-primary-400">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>Git
                  repository
                </li>
                <li className="mb-4 flex">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3"
                    stroke="#4f46e5" className="mr-3 h-5 w-5 text-primary dark:text-primary-400">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>npm
                  installation
                </li>
              </ul>
            </div>

            <Link href="/" className="w-full px-6 py-2 mt-3 text-center text-white bg-indigo-600 rounded-md lg:ml-5">         
              Get Started
            </Link>
          </div>

          <div className="flex flex-col justify-between py-8 transition-shadow duration-300 dark:bg-gray-800 border-gray-200 dark:border-gray-700 border-2 rounded-lg shadow-sm sm:items-center hover:shadow">
            <div className="text-lg font-semibold">Starter</div>
            <div className="flex items-center justify-center mt-2">
              <div className="mr-1 text-5xl font-bold">$24</div>
              <div className="self-end">/ mo</div>
            </div>
            <p className="text-sm mt-2">Paid annually, paid monthly $30 per month</p>

            <div className="p-6">
              <ul className="list-inside">
                <li className="mb-4 flex">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3"
                    stroke="#4f46e5" className="mr-3 h-5 w-5 text-primary dark:text-primary-400">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>Unlimited
                  updates
                </li>
                <li className="mb-4 flex">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3"
                    stroke="#4f46e5" className="mr-3 h-5 w-5 text-primary dark:text-primary-400">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>Git
                  repository
                </li>
                <li className="mb-4 flex">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3"
                    stroke="#4f46e5" className="mr-3 h-5 w-5 text-primary dark:text-primary-400">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>npm
                  installation
                </li>
              </ul>
            </div>

            <Link href="/" className="w-full px-6 py-2 mt-3 text-center text-white bg-indigo-600 rounded-md lg:ml-5">         
              Get Started
            </Link>
          </div>

        </div>
      </div>

    </Container>
  );
}

export default Pricing;
