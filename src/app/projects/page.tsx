import { type Metadata } from 'next'
import Image from "next/image"

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoNext from '@/images/logos/next.png'
import logoSolance from '@/images/logos/solance.png'
import logoKubernetes from '@/images/logos/kubernetes.png'
import logoSyndicode from '@/images/logos/syndicode.png'
import CallToAction from '@/components/CallToAction'

const projects = [
  {
    name: 'Syndicode',
    description:
      `A multiplayer strategy game for programmers set in cyberpunk Tokyo. Features a Rust gRPC server
      and a Next.js web client with deck.gl map visualization.
      Players compete by managing corporations, controlling districts, and building automated strategies.`,
    link: { href: 'https://www.syndicode.dev', label: 'syndicode.dev' },
    logo: logoSyndicode,
  },
  {
    name: 'Alarmboard',
    description:
      `A Flutter application designed to streamline fire brigade operations,
      enhancing coordination and response times. This intuitive tool facilitates incident management,
      resource allocation, and real-time communication, ensuring efficient and effective emergency responses.`,
    link: { href: 'https://alarmboard.de', label: 'alarmboard.de' },
    logo: logoSolance,
  },
  {
    name: 'Cloud Orchestration',
    description:
      `Discover the technical foundations powering my website and numerous other microservices, all managed through 
      a fully automated Kubernetes cluster. Among other technologies, this project utilizes Terraform to implement 
      infrastructure as code, offering a scalable and repeatable environment.`,
    link: { href: 'https://github.com/MaikBuse/cloud-config', label: 'github.com/cloud-config' },
    logo: logoKubernetes,
  },
  {
    name: 'Next.js Homepage',
    description:
      `Explore how I built this website using the Next.js framework. Discover how you can leverage its robust 
      features to deliver a dynamic, fast, and SEO-friendly web experience. `,
    link: { href: 'https://github.com/MaikBuse/home-web', label: 'github.com/home-web' },
    logo: logoNext,
  }
]

function LinkIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Things I’ve made trying to put my dent in the universe.',
}

export default function Projects() {
  return (
    <>
      <SimpleLayout
        title="Things I’ve made trying to put my dent in the universe."
        intro="I’ve worked on tons of little projects over the years but these are the ones I'd like to share with you."
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-[82px] sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <Card as="li" key={project.name} className='h-[25rem] xs:h-[18rem] sm:h-[25rem] flex flex-col justify-between'>
              <div>
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-zinc-900/5 border border-zinc-700/50 bg-zinc-800 ring-0">
                  <Image
                    src={project.logo}
                    alt={project.name}
                    className="h-10 w-10"
                    placeholder='blur'
                    style={{
                      maxWidth: "100%",
                      height: "auto"
                    }} />
                </div>
                <h2 className="mt-6 text-base font-semibold text-zinc-100">
                  <Card.Link href={project.link.href}>{project.name}</Card.Link>
                </h2>
                <Card.Description>{project.description}</Card.Description>
              </div>
              <p className="relative z-10 mt-6 flex text-sm font-medium transition group-hover:text-teal-500 text-zinc-200">
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">{project.link.label}</span>
              </p>
            </Card>
          ))}
        </ul>
      </SimpleLayout>
      <CallToAction buttonText='Skillset' buttonHref='/skillset' className='pt-40' />
    </>
  );
}
