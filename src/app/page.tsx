import Hero from '@/components/Hero'
import { BentoGrid } from '@/components/ui/BentoGrid'
import React from "react";
import { GoogleGemini } from '@/components/ui/GoogleGemini'
import CallToAction from '@/components/ui/CallToAction';

export default async function Home() {
  return (
    <div className="pt-[5vh]">
      <Hero />
      <BentoGrid className="mx-auto" />
      <GoogleGemini className="h-[400vh] mx-auto max-w-7xl lg:px-9 md:px-12 sm:px-8 pt-40" />
      <CallToAction buttonText='About me' buttonHref='/about' />
    </div >
  )
}
