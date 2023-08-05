import type { Metadata } from 'next'
// import Head from "next/head";
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import Hero from '@/components/Hero'
import SectionTitle from '@/components/SectionTitle'
import Benefits from '@/components/Benefits'
import Pricing from '@/components/Pricing'
import { benefitOne, benefitTwo } from "@/components/data";

export const metadata: Metadata = {
  title: 'Chattastic - Home',
  description: 'Empower your website with AI-driven customer service chat bot for health, fitness, and beauty sites. Boost engagement and promote your services seamlessly.',
}

export default async function Home() {
  const session = await getServerSession(authOptions)

  return (
    <>
      <Hero />
      <SectionTitle
        pretitle="Chattastic Benefits"
        title="Turn Visitors into Customers">
        Chattastic provides smart, conversational chatbots to turn your website visitors into customers. Our AI-powered chatbots engage visitors 24/7 to promote your services and book appointments.
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits data={benefitTwo} />
      {/* <Benefits data={benefitOne} /> */}
      <Pricing />
      <SectionTitle
        pretitle="Easy Installation"
        title="Customize your business profile">
        You have your own custom dashboard to adjust your companies details in minutes. To install the chatbot on your website, you just add a single line of code.
      </SectionTitle>
    </>
  )
}
