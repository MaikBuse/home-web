import Image from "next/image"
import princeBadge from '@/images/badges/prince2.png';
import psm2 from '@/images/badges/psm2.png';
import pspo from '@/images/badges/pspo.png';

export default function CertificateCloud({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
          <div className="mx-auto w-full max-w-xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-white">My expertise, certified by the world&apos;s trailblazers.</h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Certified in both technical mastery and project management, I turn innovative ideas into successful realities, ensuring projects excel from start to finish.
            </p>
          </div>
          <div className="mx-auto grid w-full max-w-xl grid-cols-2 items-center gap-x-4 gap-y-12 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:pl-8">
            <Image
              className="max-h-40 w-full object-contain object-left"
              src={pspo}
              placeholder="blur"
              alt="Professional Productowner"
              width={150}
              height={150}
            />
            <Image
              className="max-h-40 w-full object-contain object-left"
              src={psm2}
              placeholder="blur"
              alt="Professional Scrum Master II"
              width={150}
              height={150}
            />
            <Image
              className="max-h-40 w-full object-contain object-left"
              src={princeBadge}
              placeholder="blur"
              alt="PRINCE2 Foundation"
              width={150}
              height={150}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
