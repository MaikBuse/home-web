import { BentoGrid } from '@/components/BentoGrid';
import CallToAction from '@/components/CallToAction';
import { GoogleGemini } from '@/components/GoogleGemini';
import Hero from '@/components/Hero'
import React from "react";

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
