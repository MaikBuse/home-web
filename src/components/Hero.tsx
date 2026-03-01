import React from "react";
import Image from "next/image";
import { Container } from "./Container";
import Link from "next/link";
import { GitHubIcon } from "./social/SocialIcons";
import portraitImage from "@/images/photos/portrait.png";

function SocialLink({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-8 w-8 transition fill-zinc-400 group-hover:fill-zinc-300" />
    </Link>
  )
}

export function Hero() {
  return (
    <div className="min-h-[400px] mb-16 lg:mb-24">
      <Container className="mt-9">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-end lg:gap-x-16">
          <div className="max-w-2xl lg:order-first">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-zinc-100">
              Department lead, software architect and project manager.
            </h1>
            <p className="mt-6 text-base text-zinc-400">
              Hi, I&apos;m Maik. I lead a technology consulting team in Hamburg.
              I come from cloud infrastructure, architecture, and full-stack
              development, and I still enjoy writing code myself.
            </p>
            <SocialLink
              href="https://github.com/MaikBuse"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
          </div>
          <div className="hidden lg:block lg:pl-20 -translate-y-12">
            <Image
              src={portraitImage}
              alt="Maik Buse"
              placeholder="blur"
              className="aspect-square rounded-2xl object-cover bg-zinc-800 brightness-90"
              sizes="(min-width: 1024px) 32rem, 20rem"
              priority={true}
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Hero;
