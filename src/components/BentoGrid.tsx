import { cn } from "@/lib/cn";
import Image from "next/image"
import cloud from '@/images/abstract/cloud.jpeg'
import devops from '@/images/abstract/devops.jpeg'
import frontend from '@/images/abstract/frontend.jpeg'
import backend from '@/images/abstract/backend.jpeg'
import analytics from '@/images/abstract/analytics.jpeg'
import container from '@/images/abstract/container.jpeg'
import Link from "next/link";

interface Tag {
  title: string,
  color: string
}

const items = [
  {
    title: "Public Cloud Management",
    href: "cloud",
    description: "I design and run cloud setups on AWS, Azure, and Hetzner, picking the right provider for the job.",
    header:
      <Image
        className="saturate-[.3] group-hover/bento:saturate-100 object-cover"
        src={cloud}
        alt="Public Cloud Management"
        placeholder="blur"
        priority
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
      />,
    tags: [
      {
        title: "AWS",
        color: "fill-red-500"
      },
      {
        title: "Azure",
        color: "fill-blue-500"
      },
      {
        title: "Hetzner",
        color: "fill-green-500"
      }
    ]
  },
  {
    title: "Container Orchestration",
    href: "container",
    description: "I build and manage container platforms that keep services running reliably at scale.",
    header:
      <Image
        className="saturate-[.3] group-hover/bento:saturate-100 object-cover object-center"
        src={container}
        alt="Container Orchestration"
        placeholder="blur"
        priority
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
      />,
    tags: [
      {
        title: "Kubernetes",
        color: "fill-yellow-500"
      },
      {
        title: "Docker",
        color: "fill-blue-500"
      },
      {
        title: "Argo CD",
        color: "fill-green-500"
      },
    ]
  },
  {
    title: "Development Operations",
    href: "devops",
    description: "I set up CI/CD pipelines and infrastructure as code so teams can ship faster with fewer surprises.",
    header:
      <Image
        className="saturate-[.3] group-hover/bento:saturate-100 object-cover object-center"
        src={devops}
        alt="Development Operations"
        priority
        placeholder="blur"
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
      />,
    tags: [
      {
        title: "Terraform",
        color: "fill-blue-500"
      },
      {
        title: "CDK",
        color: "fill-green-500"
      },
      {
        title: "GitHub Actions",
        color: "fill-red-500"
      },
      {
        title: "Circle CI",
        color: "fill-yellow-500"
      },

    ]
  },
  {
    title: "Backend Development",
    href: "backend",
    description:
      "I design and build backend systems: APIs, data layers, and the plumbing that holds everything together.",
    header:
      <Image
        className="saturate-[.3] group-hover/bento:saturate-100 object-cover object-center"
        src={backend}
        alt="Backend Development"
        placeholder="blur"
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
      />,
    tags: [
      {
        title: "Rust",
        color: "fill-orange-800"
      },
      {
        title: "Go-lang",
        color: "fill-red-500"
      },
      {
        title: "Java-/Typescript",
        color: "fill-yellow-500"
      },
      {
        title: "Python",
        color: "fill-fuchsia-500"
      }
    ]
  },
  {
    title: "Web- and mobile app development",
    href: "frontend",
    description:
      "I build web and mobile apps with a focus on clean UI and solid user experience.",
    header:
      <Image
        className="saturate-[.3] group-hover/bento:saturate-100 object-cover object-center"
        src={frontend}
        alt="Web- and mobile app development"
        placeholder="blur"
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
      />,
    tags: [
      {
        title: "React/Next",
        color: "fill-orange-500"
      },
      {
        title: "Flutter",
        color: "fill-blue-500"
      }
    ]
  },
  {
    title: "Analytics",
    href: "analytics",
    description:
      "I work with databases and dashboards to turn raw data into something you can actually act on.",
    header:
      <Image
        className="saturate-[.3] group-hover/bento:saturate-100 object-cover object-center"
        src={analytics}
        alt="Analytics"
        placeholder="blur"
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
      />,
    tags: [
      {
        title: "Relational",
        color: "fill-teal-500"
      },
      {
        title: "NoSQL",
        color: "fill-green-500"
      },
      {
        title: "PowerBi",
        color: "fill-yellow-500"
      }
    ]
  },
];

export function BentoGrid({ className }: { className?: string }) {
  return (
    <BentoGridCluster className={className}>
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          href={item.href}
          description={item.description}
          header={item.header}
          tags={item.tags}
        />
      ))}
    </BentoGridCluster>
  );
}

export const BentoGridCluster = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  href,
  description,
  header,
  tags
}: {
  className?: string;
  title?: string | React.ReactNode;
  href?: string;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  tags?: Tag[]
}) => {
  const link = `/skillset/${href}`;

  return (
    <Link href={link}>
      <div
        className={cn(
          "md:h-[420px] lg:h-[420px] xl:h-[380px] rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-none p-2 bg-black border-white/[0.2] border justify-between flex flex-col space-y-2",
          className
        )}
      >
        <div className="relative flex-none aspect-video overflow-hidden rounded-lg bg-zinc-800">
          {header}
        </div>
        <div className="flex flex-wrap justify-start gap-4">
          {tags && tags.map((tag, i) => (
            <BentoGridItemBadge key={i} title={tag.title} color={tag.color} />
          ))
          }
        </div>
        <div className="flex-1 group-hover/bento:translate-x-1 transition duration-200">
          <div className="font-sans font-bold text-neutral-200 mb-2">
            {title}
          </div>
          <div className="font-sans font-normal text-xs text-neutral-300">
            {description}
          </div>
        </div>
      </div>
    </Link>
  );
};

export const BentoGridItemBadge = ({
  className,
  title,
  color
}: {
  className?: string;
  title: string | React.ReactNode;
  color: string
}) => {
  return (
    <div className={cn(className)}>
      <span className="inline-flex items-center gap-x-1.5 rounded-md px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-gray-800">
        <svg className={cn("h-1.5 w-1.5", color)} viewBox="0 0 6 6" aria-hidden="true">
          <circle cx={3} cy={3} r={3} />
        </svg>
        {title}
      </span>
    </div>
  );
};
