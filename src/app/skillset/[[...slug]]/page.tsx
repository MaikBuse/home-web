import { type Metadata } from 'next'
import { Tabs } from './tabs/Tabs'
import { Container } from '@/components/Container'
import CallToAction from '@/components/CallToAction';

export const metadata: Metadata = {
  title: 'Skillset',
  description:
    "What I Work With",
}

export default async function Skillset({ params }: { params: { slug: string[] } }) {
  const trimmedSlug = Array.isArray(params.slug) ? params.slug[0] : "project";

  return (
    <>
      <Container className="mt-16 sm:mt-32">
        <header className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-zinc-100">
            What I Work With
          </h1>
          <p className="mt-6 text-base text-zinc-400">
            A breakdown of the tools and technologies I use day to day, picked up through years of building things.
          </p>
        </header>
        <div className="mt-20">
          <Tabs slug={trimmedSlug} />
        </div>
      </Container>
      <CallToAction className='pt-[10rem]' buttonText='Projects' buttonHref='/projects' />
    </>
  )
}
