// 'use client'
import React from 'react'
import { prisma } from '@/lib/prisma'
// import { Container } from 'postcss'
import Container from '@/components/Container'
import Link from 'next/link'

async function adminDashboard() {
  const businesses = await prisma.demo.findMany()
  // const handleClick = () => {
  //   console.log('clicked')
  // }

  return (
    <Container>
      <main>
        <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
          Dashboard
        </h1>
        <Link href="/add-demo">Add Demo User</Link>

        <table className="min-w-full mt-4 divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 text-lg font-medium leading-4 tracking-wider text-left text-gray-500 uppercase">
                Business Name
              </th>
              <th className="px-6 py-3 text-lg font-medium leading-4 tracking-wider text-left text-gray-500 uppercase">
                Manager Name
              </th>
              <th className="px-6 py-3 text-lg font-medium leading-4 tracking-wider text-left text-gray-500 uppercase">
                Phone
              </th>
              <th className="px-6 py-3 text-lg font-medium leading-4 tracking-wider text-left text-gray-500 uppercase">
                Zip
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {businesses.map((business) => (
              <tr
                key={business.id}
                className=" hover:text-indigo-500"
                // onClick={handleClick}
              >
                <td className="px-6 py-4 whitespace-no-wrap">
                  <Link href={`/demo/${business.id}`}>
                    {business.businessName}
                  </Link>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap">
                  {business.managerName}
                </td>

                <td className="px-6 py-4 whitespace-no-wrap">
                  {business.phone}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap">{business.zip}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </Container>
  )
}

export default adminDashboard
