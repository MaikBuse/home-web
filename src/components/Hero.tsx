import React from "react";
import { Container } from "./Container";
import Link from "next/link";
import { GitHubIcon } from "./social/SocialIcons";

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
    <div className="h-[400px]">
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-zinc-100">
            Software architect, developer and projectmanager.
          </h1>
          <p className="mt-6 text-base text-zinc-400">
            Hi, I&apos;m Maik. A Hamburg City based software enthusiast.
            No matter if cloud infrastructure, back- or frontend development,
            I strive to architect and implement the most optimal solutions.
          </p>
          <SocialLink
            href="https://github.com/MaikBuse"
            aria-label="Follow on GitHub"
            icon={GitHubIcon}
          />
        </div>
      </Container>
    </div >
  );
}

export default Hero;
