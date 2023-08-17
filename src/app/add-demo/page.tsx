import React from 'react'
import { prisma } from '@/lib/prisma'
import Container from '@/components/Container'
import { revalidatePath } from 'next/cache'

async function addDemo() {
  async function addDemoUser(formData: FormData) {
    'use server'

    await prisma.demo.create({
      data: {
        businessName: formData.get('businessName') as string,
        managerName: formData.get('managerName') as string,
        phone: formData.get('phone') as string,
        zip: formData.get('zip') as string,
      },
    })

    revalidatePath('/add-demo')
  }

  return (
    <Container>
      <main className="p-4 sm:p-8 lg:p-16">
        <h1 className="mb-8 text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
          Add Demo User
        </h1>
        <form className="space-y-4" action={addDemoUser}>
          <div>
            <label
              htmlFor="businessName"
              className="block font-medium text-gray-600 dark:text-gray-400"
            >
              Business Name
            </label>
            <input
              type="text"
              name="businessName"
              // id="businessName"

              className="w-full p-2 mt-1 transition border-2 border-gray-300 rounded-md dark:bg-gray-700 focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div>
            <label
              htmlFor="managerName"
              className="block font-medium text-gray-600 dark:text-gray-400"
            >
              Manager Name
            </label>
            <input
              type="text"
              name="managerName"
              // id="managerName"
              className="w-full p-2 mt-1 transition border-2 border-gray-300 rounded-md dark:bg-gray-700 focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block font-medium text-gray-600 dark:text-gray-400"
            >
              Phone
            </label>
            <input
              type="text"
              name="phone"
              // id="phone"
              className="w-full p-2 mt-1 transition border-2 border-gray-300 rounded-md dark:bg-gray-700 focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div>
            <label
              htmlFor="zip"
              className="block font-medium text-gray-600 dark:text-gray-400"
            >
              Zip
            </label>
            <input
              type="text"
              name="zip"
              // id="zip"
              className="w-full p-2 mt-1 transition border-2 border-gray-300 rounded-md dark:bg-gray-700 focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div>
            <button
              type="submit"
              className="px-4 py-2 mt-4 text-white transition bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none"
            >
              Submit
            </button>
          </div>
        </form>
      </main>
    </Container>
  )
}

export default addDemo
