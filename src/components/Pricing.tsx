import Image from "next/image";
import React from "react";
import Container from "@/components/Container";
import Link from "next/link";


const Pricing  = () => {
  return (
    <Container className="flex w-full flex-col mt-4 bg items-center justify-center text-center">
      <div id="pricing">
        <div className="text-sm font-bold tracking-wider text-indigo-600 uppercase">
          Transparent Pricing
        </div>
        <h2 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
        Plans that scale with your website
        </h2>
        <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
          Your customers expect you to deliver faster, more personalized, and smarter experiences.
        </p>
      </div>

      <div className="my-8 text-center">
        <div className="grid max-w-md gap-10 row-gap-5 lg:max-w-screen-lg sm:row-gap-10 lg:grid-cols-3 xl:max-w-screen-lg sm:mx-auto">

          <div className="flex flex-col justify-between py-8 transition-shadow duration-300 dark:bg-gray-800 border-gray-200 dark:border-gray-700 border-2 rounded-lg shadow-sm sm:items-center hover:shadow px-4">
            <div className="text-lg font-semibold">Starter</div>
            <div className="flex items-center justify-center mt-2">
              <div className="mr-1 text-5xl font-bold">$24</div>
              <div className="self-end">/ mo</div>
            </div>
            <p className="text-sm mt-2">Paid annually, paid monthly $30 per month, $240 Setup fee</p>

            <div className="p-6">
              <ul className="list-inside">
                <li className="mb-4 flex">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3"
                    stroke="#4f46e5" className="mr-3 h-5 w-5 text-primary dark:text-primary-400">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>1M tokens per month
                </li>
                <li className="mb-4 flex">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3"
                    stroke="#4f46e5" className="mr-3 h-5 w-5 text-primary dark:text-primary-400">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                    1 website
                </li>
                <li className="mb-4 flex">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3"
                    stroke="#4f46e5" className="mr-3 h-5 w-5 text-primary dark:text-primary-400">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                  Custom reporting
                </li>
              </ul>
            </div>

            <Link href="/" className="w-full px-6 py-2 mt-3 text-center text-white bg-indigo-600 rounded-md">         
              Get Started
            </Link>
          </div>

          <div className="flex flex-col justify-between py-8 transition-shadow duration-300 dark:bg-gray-800 border-gray-200 dark:border-gray-700 border-2 rounded-lg shadow-sm sm:items-center hover:shadow px-4">
            <div className="text-lg font-semibold">Professional</div>
            <div className="flex items-center justify-center mt-2">
              <div className="mr-1 text-5xl font-bold">$42</div>
              <div className="self-end">/ mo</div>
            </div>
            <p className="text-sm mt-2">Paid annually, paid monthly $52.50 per month, $240 Setup fee</p>

            <div className="p-6">
              <ul className="list-inside">
                <li className="mb-4 flex">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3"
                    stroke="#4f46e5" className="mr-3 h-5 w-5 text-primary dark:text-primary-400">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>10M tokens per month
                </li>
                <li className="mb-4 flex">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3"
                    stroke="#4f46e5" className="mr-3 h-5 w-5 text-primary dark:text-primary-400">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                    Up to 5 websites
                </li>
                <li className="mb-4 flex">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3"
                    stroke="#4f46e5" className="mr-3 h-5 w-5 text-primary dark:text-primary-400">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                  Custom reporting
                </li>
                <li className="mb-4 flex">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3"
                    stroke="#4f46e5" className="mr-3 h-5 w-5 text-primary dark:text-primary-400">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                  No watermark
                </li>
              </ul>
            </div>

            <Link href="/" className="w-full px-6 py-2 mt-3 text-center text-white bg-indigo-600 rounded-md">         
              Get Started
            </Link>
          </div>

          <div className="flex flex-col justify-between py-8 transition-shadow duration-300 dark:bg-gray-800 border-gray-200 dark:border-gray-700 border-2 rounded-lg shadow-sm sm:items-center hover:shadow px-4">
            <div className="text-lg font-semibold">Enterprise</div>
            <div className="flex items-center justify-center mt-2">
              <div className="mr-1 text-5xl font-bold">Call</div>
            </div>
            <p className="text-sm mt-2">Custom solutions to fit your business needs</p>

            <div className="p-6">
              <ul className="list-inside">
                <li className="mb-4 flex">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3"
                    stroke="#4f46e5" className="mr-3 h-5 w-5 text-primary dark:text-primary-400">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                  Professional Services
                </li>
                <li className="mb-4 flex">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3"
                    stroke="#4f46e5" className="mr-3 h-5 w-5 text-primary dark:text-primary-400">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
                    Up to 20 website
                </li>
                <li className="mb-4 flex">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3"
                    stroke="#4f46e5" className="mr-3 h-5 w-5 text-primary dark:text-primary-400">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>Advanced reporting
                </li>
              </ul>
            </div>

            <Link href="/" className="w-full px-6 py-2 mt-3 text-center text-white bg-indigo-600 rounded-md">         
              Get Started
            </Link>
          </div>

        </div>
        <p className="pt-12">Average chat conversation uses 400 tokens. Additional 500,000 tokens available for $10.</p>
      </div>

    </Container>
  );
}

export default Pricing;
