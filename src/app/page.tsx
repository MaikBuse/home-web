import Hero from '@/components/Hero'
import { BentoGrid } from '@/components/ui/BentoGrid'
import React from "react";
import { GoogleGemini } from '@/components/ui/GoogleGemini'
import CallToAction from '@/components/ui/CallToAction';
import { Container } from '@/components/Container';

export default async function Home() {
  return (
    <div className="pt-[5vh]">
      <Hero />
      <BentoGrid className="mx-auto" />
      <Container>
        <GoogleGemini className="h-[250vh] pt-[15rem]" />
      </Container>
      <CallToAction buttonText='About me' buttonHref='/about' />
    </div >
  )
}
