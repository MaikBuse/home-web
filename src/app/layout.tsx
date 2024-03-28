import { type Metadata } from 'next'

import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - Maik Buse',
    default:
      'Maik Buse - Solution Architect',
  },
  description:
    "Hi, I&apos;m Maik. A Hamburg City based software enthusiast. No matter if cloud infrastructure, back- or frontend development, I strive to architect and implement the most optimal solutions.",
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-black">
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
