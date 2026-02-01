import { SimpleLayout } from "@/components/SimpleLayout"
import MailIcon from "@/components/icons/MailIcon"
import SocialLink from "@/components/social/SocialLink"
import CallToAction from "@/components/CallToAction"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Imprint',
  description: 'This page provides the required legal information and contact details for transparency and accountability purposes.',
}

export default function Imprint() {
  return (
    <>
      <SimpleLayout
        title="Imprint"
        intro="This page provides the required legal information and contact details for transparency and accountability purposes."
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 sm:gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-4xl">
              Contact Information
            </h2>
            <div className="max-w-xl">
              <p className="mt-6 text-white">
                Maik Buse
              </p>
              <SocialLink
                href="mailto:contact@maikbuse.com"
                icon={MailIcon}
                className="mt-8 pb-5 border-b border-zinc-700/40"
              >
                contact@maikbuse.com
              </SocialLink>
            </div>
            <h2 className="mt-8 text-2xl font-bold tracking-tight text-white sm:text-4xl">
              Disclaimer
            </h2>
            <p className="mt-2 border-b border-zinc-700/40 pb-8 text-white">
              The contents of this online offering have been created with care and based on
              my current level of knowledge, but are for informational purposes only and do
              not have any legally binding effect, unless it concerns legally mandatory information
              (e.g., the imprint, privacy policy, terms and conditions, or mandatory consumer instructions).
              I reserve the right to modify or delete the contents in whole or in part, provided that
              contractual obligations remain unaffected. All offers are non-binding and without obligation.
            </p>
            <h2 className="mt-8 text-2xl font-bold tracking-tight text-white sm:text-4xl">
              Liability for Content
            </h2>
            <p className="mt-2 border-b border-zinc-700/40 pb-8 text-white">
              As a service provider, I am responsible for my own content on these pages
              in accordance with general laws, as per Section 7, Paragraph 1 of the German
              Telemedia Act (TMG). However, according to Sections 8 to 10 of the TMG, as a
              service provider, I am not obligated to monitor transmitted or stored external
              information or to investigate circumstances that indicate illegal activity. Obligations
              to remove or block the use of information under general laws remain unaffected.
              However, liability in this respect is only possible from the time of knowledge of a
              specific infringement. Upon notification of such violations, I will remove this content
              immediately.
            </p>
            <h2 className="mt-8 text-2xl font-bold tracking-tight text-white sm:text-4xl">
              Liability for Links
            </h2>
            <p className="mt-2 border-b border-zinc-700/40 pb-8 text-white">
              My offer includes links to external third-party websites, over whose content I
              have no control. Therefore, I cannot assume any liability for these external contents.
              The respective provider or operator of the pages is always responsible for the content
              of the linked pages. The linked pages were checked for possible legal violations at the
              time of linking. Illegal content was not recognizable at the time of linking. However, a
              permanent content control of the linked pages is not reasonable without concrete evidence
              of an infringement. Upon notification of violations, I will remove such links immediately.
            </p>
            <h2 className="mt-8 text-2xl font-bold tracking-tight text-white sm:text-4xl">
              Applicable Law
            </h2>
            <p className="mt-2 border-b border-zinc-700/40 pb-8 text-white">
              Jurisdiction: The use of this website is subject to the laws of the Federal Republic of Germany.
              For merchants, legal entities under public law, special funds under public law, and individuals who
              do not have a general place of jurisdiction in Germany, Hamburg is considered the agreed place of
              jurisdiction.
            </p>
            <h2 className="mt-8 text-2xl font-bold tracking-tight text-white sm:text-4xl">
              Copyright
            </h2>
            <p className="mt-2 text-white">
              The content and works created by the site operators on these pages are subject to German
              copyright law. Duplication, editing, distribution, and any kind of exploitation outside the
              limits of copyright require the written consent of the respective author or creator. Downloads
              and copies of this page are only permitted for private, non-commercial use. Insofar as the
              content on this page was not created by the operator, the copyrights of third parties are
              respected. In particular, third-party content is identified as such. Should you still become
              aware of a copyright infringement, please notify me accordingly. Upon notification of violations,
              I will remove such content immediately.
            </p>
          </div>
        </div>
      </SimpleLayout>
      <CallToAction className="pt-24" buttonText="About me" buttonHref="/about" />
    </>
  )
}
