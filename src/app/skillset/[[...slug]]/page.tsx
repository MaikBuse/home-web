import { type Metadata } from 'next'
import { Tabs } from './tabs/Tabs'
import { Container } from '@/components/Container'
import CallToAction from '@/components/CallToAction';

export const metadata: Metadata = {
  title: 'Skillset',
  description:
    "How I'm Shaping the Future: A Catalog of My Skills.",
}

export default async function Skillset({ params }: { params: { slug: string[] } }) {
  const trimmedSlug = Array.isArray(params.slug) ? params.slug[0] : "project";

  return (
    <>
      <Container className="mt-16 sm:mt-32">
        <header className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-zinc-100">
            How I&apos;m Shaping the Future:<br />A Catalog of My Skills.
          </h1>
          <p className="mt-6 text-base text-zinc-400">
            Over the years, I&apos;ve honed a diverse set of skills through practical experience and relentless curiosity. Here&apos;s a glimpse into the capabilities that fuel my drive to innovate and impact.
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
