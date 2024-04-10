import { type Metadata } from 'next'
import CallToAction from '@/components/ui/CallToAction'
import { Tabs } from './tabs/Tabs'
import { Container } from '@/components/Container'

export const metadata: Metadata = {
  title: 'Skillset',
  description:
    "How I'm Shaping the Future: A Catalog of My Skills.",
}

export default async function ArticlesIndex() {
  return (
    <>
      <Container className="mt-16 sm:mt-32">
        <header className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-zinc-100">
            How I'm Shaping the Future:<br />A Catalog of My Skills.
          </h1>
          <p className="mt-6 text-base text-zinc-400">
            Over the years, I've honed a diverse set of skills through practical experience and relentless curiosity. Here's a glimpse into the capabilities that fuel my drive to innovate and impact.
          </p>
        </header>
        <div className="mt-16 sm:mt-20">
          <Tabs />
        </div>
      </Container>
      <CallToAction buttonText='Projects' buttonHref='/projects' />
    </>
  )
}
