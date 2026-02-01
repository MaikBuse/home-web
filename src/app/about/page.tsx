import { type Metadata } from 'next'
import Image from "next/image"
import logoSicore from '@/images/logos/sicore.png'
import logoSolance from '@/images/logos/solance.png'
import logoLogaer from '@/images/logos/logaer.png'
import logoSchuetz from '@/images/logos/schuetz.png'
import logoWestminster from '@/images/logos/westminster.png'
import logoNyenrode from '@/images/logos/nyenrode.png'
import logoCbs from '@/images/logos/cbs.png'
import { type ImageProps } from "next/image"

import { Container } from '@/components/Container'
import portraitImage from '@/images/photos/portrait.jpg'
import BriefcaseIcon from '@/components/icons/BriefcaseIcon'
import MailIcon from '@/components/icons/MailIcon'
import CallToAction from '@/components/CallToAction'
import SocialLink from '@/components/social/SocialLink'
import { GitHubIcon } from '@/components/social/SocialIcons'
import { BookOpenIcon } from '@heroicons/react/20/solid'
import CertificateCloud from './CertificateCloud'

interface Role {
  company: string
  title: string
  logo: ImageProps['src']
  start: string | { label: string; dateTime: string }
  end: string | { label: string; dateTime: string }
}

function Role({ role }: { role: Role }) {
  let startLabel =
    typeof role.start === 'string' ? role.start : role.start.label
  let startDate =
    typeof role.start === 'string' ? role.start : role.start.dateTime

  let endLabel = typeof role.end === 'string' ? role.end : role.end.label
  let endDate = typeof role.end === 'string' ? role.end : role.end.dateTime

  return (
    <li className="flex gap-4">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-zinc-900/5 border border-zinc-700/50 bg-zinc-800 ring-0">
        <Image
          src={role.logo}
          alt="Maik Buse"
          className="h-7 w-7"
          style={{
            maxWidth: "100%",
            height: "auto"
          }} />
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-zinc-100">
          {role.company}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-zinc-400">
          {role.title}
        </dd>
        <dt className="sr-only">Date</dt>
        <dd
          className="ml-auto text-xs text-zinc-500"
          aria-label={`${startLabel} until ${endLabel}`}
        >
          <time dateTime={startDate}>{startLabel}</time>{' '}
          <span aria-hidden="true">—</span>{' '}
          <time dateTime={endDate}>{endLabel}</time>
        </dd>
      </dl>
    </li>
  );
}

function Resume() {
  let resume: Array<Role> = [
    {
      company: 'SICORE Real Assets GmbH',
      title: 'Head of Technology Consulting',
      logo: logoSicore,
      start: '2026',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear().toString(),
      },
    },
    {
      company: 'SICORE Real Assets GmbH',
      title: 'Teamlead Technology Consulting',
      logo: logoSicore,
      start: '2025',
      end: '2025',
    },
    {
      company: 'SICORE Real Assets GmbH',
      title: 'Software Architect',
      logo: logoSicore,
      start: '2021',
      end: '2024',
    },
    {
      company: 'Solance UG',
      title: 'CEO',
      logo: logoSolance,
      start: '2021',
      end: '2024',
    },
    {
      company: 'Logaer Maschinenbau GmbH',
      title: 'IT Department Lead',
      logo: logoLogaer,
      start: '2017',
      end: '2021',
    },
    {
      company: 'Schütz GmbH',
      title: 'IT Projectmanager',
      logo: logoSchuetz,
      start: '2015',
      end: '2016',
    },
  ]

  return (
    <div className="rounded-2xl border p-6 border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <Role key={roleIndex} role={role} />
        ))}
      </ol>
    </div>
  )
}

function Education() {
  let resume: Array<Role> = [
    {
      company: 'Cologne Business School, Cologne',
      title: 'Master in Management',
      logo: logoCbs,
      start: '2013',
      end: '2015',
    },
    {
      company: 'University of Westminster, London',
      title: 'Bachelor in Business Management (2/2)',
      logo: logoWestminster,
      start: '2012',
      end: '2013',
    },
    {
      company: 'Nyenrode Business University, Amsterdam',
      title: 'Bachelor in Business Management (1/2)',
      logo: logoNyenrode,
      start: '2010',
      end: '2012',
    },
  ]

  return (
    <div className="rounded-2xl border p-6 border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-100">
        <BookOpenIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Education</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <Role key={roleIndex} role={role} />
        ))}
      </ol>
    </div>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description:
    'I’m Maik Buse. I live in Hamburg City, where I build the future.',
}

export default function About() {
  return (
    <>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt="Maik Buse"
                placeholder='blur'
                className="aspect-square rounded-2xl object-cover bg-zinc-800"
                sizes="(min-width: 1024px) 32rem, 20rem"
                priority={true}
                style={{
                  maxWidth: "100%",
                  height: "auto"
                }} />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2 border-b border-zinc-700/40">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-zinc-100 pb-8">
              I’m Maik Buse. I live in Hamburg City, where I build the future.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-400">
              <p >
                I still remember the thrill of staying up late into the night, huddled over my old computer,
                pushing it to run a program it barely had the specs for. That moment wasn&apos;t just a childhood memory;
                it was the ignition of a lifelong passion for information technology. With each challenge I tackled,
                my fascination grew, driving me to explore the limits of what could be created or solved in the digital
                realm.
              </p>
              <p>
                My passion didn&apos;t wane as I grew older; it evolved into a voracious appetite for learning
                and innovation. Every day, I seized opportunities to learn new technologies and apply them
                creatively in both personal and professional projects. This continuous learning and application
                have been the bedrock of my career.
              </p>
              <p>
                Today, as a software architect and IT projectmanager, my broad expertise across cloud
                infrastructure, front- and backend development, enables me to devise innovative solutions.
                What sets me apart is not just my technical skills but my genuine enthusiasm. For me, technology
                is an endless exploration, one that I am as passionate about today as I was when I first started.
              </p>
            </div>
            <ul className='my-8' role="list">
              <SocialLink href="https://github.com/MaikBuse" icon={GitHubIcon} className="mt-4">
                Follow on GitHub
              </SocialLink>
              <SocialLink
                href="mailto:contact@maikbuse.com"
                icon={MailIcon}
                className="mt-8"
              >
                contact@maikbuse.com
              </SocialLink>
            </ul>
          </div>
          <div className="lg:pl-20">
            <Resume />
            <div className='pt-8'>
              <Education />
            </div>
          </div>
        </div>
        <CertificateCloud className='py-32' />
      </Container>
      <CallToAction buttonText='Skillset' buttonHref='/skillset' />
    </>
  );
}
