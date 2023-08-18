import React, { useRef } from 'react'
import { prisma } from '@/lib/prisma'
import Container from '@/components/Container'
import AddDemoUserForm from '@/components/AddDemoUserForm'

async function addDemo() {
  return (
    <Container>
      <main className="p-4 sm:p-8 lg:p-16">
        <h1 className="mb-8 text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
          Add Demo User
        </h1>
        <AddDemoUserForm />
      </main>
    </Container>
  )
}

export default addDemo
