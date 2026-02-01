import Image from "next/image"
import templeImage from '@/images/photos/temple.jpg'
import Link from "next/link"
import { cn } from "@/lib/cn"
import SocialLink from "./social/SocialLink"
import MailIcon from "./icons/MailIcon"
import { ConnectButton } from "./buttons/ConnectButton"

export default function CallToAction({ className = "", buttonText, buttonHref }: { className?: string, buttonText: string, buttonHref: string }) {
  return (
    <div className={cn("mx-auto max-w-7xl lg:px-8 sm:px-8", className)}>
      <div className="relative isolate">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-2xl flex-col gap-16 bg-white/5 px-6 py-16 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
            <Link
              className="flex-none"
              href={"/about"}>
              <Image
                className="h-72 w-full rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm"
                src={templeImage}
                placeholder="blur"
                alt="Me walking towards a temple"
              />
            </Link>
            <div className="w-full flex-auto">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Hello, World! Let&apos;s talk.</h2>
              <p className="text-justify mt-6 text-lg leading-8 text-gray-300">
                Curious about the stories behind my projects or simply in the mood for a good conversation?
                I&apos;m all ears. Drop me an email or take a leisurely scroll through my pages to dive deeper into my world.
                Who knows what sparks might fly when minds meet? Looking forward to hearing from you!
              </p>
              <div className="mt-10 flex flex-wrap gap-y-10 gap-x-2 items-center justify-evenly">
                <SocialLink
                  href="mailto:contact@maikbuse.com"
                  icon={MailIcon}
                  className="border-zinc-700/40"
                >
                  contact@maikbuse.com
                </SocialLink>
                <ConnectButton text={buttonText} href={buttonHref} />
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[1318/752] w-[82.375rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"
            style={{
              clipPath:
                'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
            }}
          />
        </div>
      </div>
    </div>
  )
}
