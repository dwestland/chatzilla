import type { Metadata } from 'next'
import Head from "next/head";
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import Hero from '@/components/Hero'
import SectionTitle from '@/components/SectionTitle'
import Benefits from '@/components/Benefits'
import Pricing from '@/components/Pricing'
import { benefitOne, benefitTwo } from "@/components/data";

export const metadata: Metadata = {
  title: 'Chattastic 2',
  description: 'Empower your website with AI-driven customer service chat bot for health, fitness, and beauty sites. Boost engagement and promote your services seamlessly.',
}

export default async function Home() {
  const session = await getServerSession(authOptions)

  return (
    <>
      <Hero />
      <SectionTitle
        pretitle="Nextly Benefits"
        title=" Why should you use this landing page">
        Nextly is a free landing page & marketing website template for startups
        and indie projects. Its built with Next.js & TailwindCSS. And its
        completely open-source.
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      {/* <Benefits data={benefitOne} /> */}
      <Pricing />
      <SectionTitle
        pretitle="Nextly Benefits"
        title=" Why should you use this landing page">
        Nextly is a free landing page & marketing website template for startups
        and indie projects. Its built with Next.js & TailwindCSS. And its
        completely open-source.
      </SectionTitle>
    </>
  )
}
