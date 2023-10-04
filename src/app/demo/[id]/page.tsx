// 'use client'
import Container from '@/components/Container'
import React, { useEffect } from 'react'
import { prisma } from '@/lib/prisma'

const DemoDetailPage = async ({ params }: { params: { id: number } }) => {
  const demoUser = await prisma.demo.findUnique({
    where: {
      id: +params.id,
    },
    select: {
      id: true,
      businessName: true,
      managerName: true,
      phone: true,
      zip: true,
    },
  })

  console.log('%c demoUser ', 'background: red; color: white', demoUser)
  return (
    <Container>
      <main>
        <section>
          <h1>Demo User Detail</h1>

          <p>ID:{params.id}</p>
          <p>{demoUser?.managerName}</p>
          <p>{demoUser?.businessName}</p>
          <p>{demoUser?.phone}</p>
          <p>{demoUser?.zip}</p>
        </section>
      </main>
    </Container>
  )
}

export default DemoDetailPage
