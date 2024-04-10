import Image, { StaticImageData } from "next/image"

export default function TabCerts({ certificates }: { certificates: { name: string, image: StaticImageData }[] }) {
  return (
    <div className="mx-auto max-w-7xl px-6 pt-16 lg:px-8">
      <div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-5">
        {certificates.map((cert) => (
          <Image
            key={cert.name}
            className="col-span-2 max-h-40 w-full object-contain lg:col-span-1"
            src={cert.image}
            alt={cert.name}
            width={150}
            height={150}
          />
        ))}
      </div>
    </div>
  )
}
