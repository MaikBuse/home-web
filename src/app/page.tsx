import Hero from '@/components/Hero'
import { BentoGrid } from '@/components/ui/BentoGrid'
import React from "react";
import { GoogleGemini } from '@/components/ui/GoogleGemini'
import CallToAction from '@/components/ui/CallToAction';

export default async function Home() {
  return (
    <div className="pt-[5rem]">
      <Hero />
      <BentoGrid className="mx-auto" />
      <GoogleGemini className="h-[250vh] pt-[15rem]" />
      <CallToAction buttonText='About me' buttonHref='/about' />
    </div >
  )
}
