import Image from 'next/image'
import Container from '@/components/Container'

const Hero = () => {
  return (
    <>
      <Container className="flex flex-wrap">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              AI Chatbot for your Health, Fitness, and Beauty Website
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              Once annoying and useless, the new Chattastic AI powered chatbots
              now converse naturally and intelligently to provide users a
              smooth, enjoyable experience. Assists booking appointments and
              promoting your services.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="rounded-lg overflow-hidden">
            <Image
              src="/img/hero.jpg"
              width={616}
              height={617}
              className={'object-cover'}
              alt="Hero Photo"
              loading="eager"
            />
          </div>
        </div>
      </Container>
    </>
  )
}

export default Hero
