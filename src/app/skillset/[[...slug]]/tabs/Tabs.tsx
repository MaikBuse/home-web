"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";
import TabContainer from "./TabContainer";
import cloud from '@/images/abstract/cloud.jpeg'
import pm from '@/images/abstract/pm.jpeg'
import devops from '@/images/abstract/devops.jpeg'
import frontend from '@/images/abstract/frontend.jpeg'
import backend from '@/images/abstract/backend.jpeg'
import analytics from '@/images/abstract/analytics.jpeg'
import container from '@/images/abstract/container.jpeg'
import princeBadge from '@/images/badges/prince2.png';
import psm2 from '@/images/badges/psm2.png';
import pspo from '@/images/badges/pspo.png';
import { ArrowPathIcon, BoltIcon, BookOpenIcon, ChartBarIcon, ChatBubbleLeftIcon, CircleStackIcon, CloudIcon, CodeBracketSquareIcon, CogIcon, CommandLineIcon, CpuChipIcon, CubeIcon, CurrencyEuroIcon, DevicePhoneMobileIcon, DocumentIcon, GlobeAltIcon, HandRaisedIcon, PlayIcon, ScaleIcon, ServerIcon } from "@heroicons/react/20/solid";

export function Tabs({ slug }: { slug: string }) {
  const tabs = [
    {
      title: "Project Management",
      value: "project",
      content: (
        <TabContainer
          title="Project Management"
          description="Skilled in managing projects from inception to completion, balancing timelines, resources, and stakeholder expectations with a keen eye on delivering value and innovation."
          image={pm}
          features={[
            {
              name: "Hands-On Experience",
              description: "Direct involvement in diverse tasks has deepened my understanding of projects, enhancing my effectiveness as a project manager.",
              icon: HandRaisedIcon,
            },
            {
              name: "Methodologies",
              description: "Proficient in applying the most appropriate project management methodology, be it Agile, Waterfall or Hybrid approaches",
              icon: CogIcon,
            },
            {
              name: "Effective Communication",
              description: "Skilled at simplifying complex concepts into understandable communication, enhancing teamwork and understanding among varied collaborators.",
              icon: ChatBubbleLeftIcon,
            },
          ]
          }
          certificates={[
            {
              name: "Professional Productowner",
              image: pspo
            },
            {
              name: "Professional Scrum Master II",
              image: psm2
            },
            {
              name: "PRINCE2 Foundation",
              image: princeBadge
            }
          ]}
        />
      ),
    },
    {
      title: "Public Cloud Management",
      value: "cloud",
      content: (
        <TabContainer
          title="Public Cloud Management"
          description="Navigating the complexities of cloud infrastructure with proficiency, ensuring seamless deployment, scalability, and security across major cloud platforms."
          image={cloud}
          features={[
            {
              name: "AWS",
              description: "Proven in Amazon Web Services, using its vast services for scalable and innovative cloud solutions.",
              icon: CloudIcon,
            },
            {
              name: "Azure",
              description: "Skilled in Azure for seamless integration with the Microsoft ecosystems.",
              icon: ServerIcon,
            },
            {
              name: "Hetzner",
              description: "Proficient with Hetzner for cost-effective and privacy-focused cloud projects, especially in the EU.",
              icon: CurrencyEuroIcon,
            }
          ]}
        />
      ),
    },
    {
      title: "Container Orchestration",
      value: "container",
      content: (
        <TabContainer
          title="Container Orchestration"
          description="Proficient in managing and scaling containerized applications, ensuring high availability, and optimizing resource utilization across environments."
          image={container}
          features={[
            {
              name: "Docker",
              description: "Skilled in Docker for containerization, optimizing application deployment and scalability.",
              icon: CubeIcon,
            },
            {
              name: "Kubernetes",
              description: "Proven in Kubernetes, managing complex container orchestration to ensure high availability and efficiency.",
              icon: ScaleIcon,
            },
            {
              name: "Argo CD",
              description: "Proficient in ArgoCD for GitOps strategies, automating deployment to Kubernetes for consistent and reliable environments.",
              icon: ArrowPathIcon,
            },
          ]}
        />
      ),
    },
    {
      title: "Development Operations",
      value: "devops",
      content: (
        <TabContainer
          title="Development Operations"
          description="Integrating development and operations for streamlined workflows, I focus on automation, continuous integration (CI), and continuous deployment (CD) to accelerate delivery and enhance reliability."
          image={devops}
          features={[
            {
              name: "Terraform",
              description: "Proven in using Terraform for infrastructure as code, ensuring consistent and reproducible environments across development and production.",
              icon: CommandLineIcon,
            },
            {
              name: "CDK",
              description: "Skilled in utilyzing the Cloud Development Kit for defining cloud infrastructure using familiar programming languages, enhancing developer productivity and cloud resource management.",
              icon: CodeBracketSquareIcon,
            },
            {
              name: "GitHub Actions",
              description: "Proficient in GitHub Actions for automating workflows, from code integration to deployment, directly within GitHub repositories.",
              icon: PlayIcon,
            },
            {
              name: "CircleCI",
              description: "Experienced with CircleCI for continuous integration and delivery, optimizing build, test, and deployment cycles for speed and reliability.",
              icon: ArrowPathIcon,
            }
          ]}
        />
      ),
    },
    {
      title: "Backend Development",
      value: "backend",
      content: (
        <TabContainer
          title="Backend Development"
          description="Crafting robust, scalable back-end solutions using modern programming languages and frameworks. My approach prioritizes maintainability, efficient algorithms, and system security."
          image={backend}
          features={[
            {
              name: "Rust",
              description: "Expert in Rust for systems programming, emphasizing safe concurrency and memory management for high-performance applications.",
              icon: CpuChipIcon,
            },
            {
              name: "Go-lang",
              description: "Skilled in Go for building scalable and efficient backend services, leveraging its simplicity and built-in concurrency model.",
              icon: BoltIcon,
            },
            {
              name: "Java-/Typescript",
              description: "Proficient in JavaScript and TypeScript for dynamic and type-safe backend development, harnessing the power of both for creating scalable, maintainable applications.",
              icon: CodeBracketSquareIcon,
            },
            {
              name: "Python",
              description: "Experienced in Python for versatile backend development, from web applications to data analysis, valuing its readability and extensive libraries.",
              icon: BookOpenIcon,
            }
          ]}
        />
      ),
    },
    {
      title: "Web- and mobile app development",
      value: "frontend",
      content: (
        <TabContainer
          title="Web- and mobile app development"
          description="Creating responsive, user-centric web and mobile applications that engage and delight. From aesthetics to useability, I build seamless digital experiences."
          image={frontend}
          features={[
            {
              name: "React/Next.js",
              description: "Proven in React and Next.js for building fast, SEO-friendly web applications, leveraging server-side rendering and static site generation for optimal performance.",
              icon: GlobeAltIcon,
            },
            {
              name: "Flutter",
              description: "Skilled in Flutter for crafting high-quality, natively compiled mobile apps from a single codebase, ensuring consistency across iOS and Android platforms.",
              icon: DevicePhoneMobileIcon,
            }
          ]}
        />
      ),
    },
    {
      title: "Analytics",
      value: "analytics",
      content: (
        <TabContainer
          title="Analytics"
          description="Leveraging data analytics to glean insights, drive decision-making, and enhance business strategies. My expertise includes data visualization, analysis, and deploying machine learning models for predictive insights."
          image={analytics}
          features={[
            {
              name: "Relational",
              description: "Proficient in Relational databases, utilizing SQL for complex query writing and data analysis, ensuring data integrity and relationship management.",
              icon: CircleStackIcon,
            },
            {
              name: "NoSQL",
              description: "Skilled in NoSQL databases for managing large-scale, unstructured data, leveraging flexibility in data modeling to accommodate diverse data types.",
              icon: DocumentIcon,
            },
            {
              name: "PowerBi",
              description: "Experienced in Power BI for data visualization and business intelligence, turning complex data sets into actionable insights through interactive dashboards and reports.",
              icon: ChartBarIcon,
            }
          ]}
        />
      ),
    },
  ];

  const tabsOrdered = [...tabs];

  tabsOrdered.sort((a, b) => {
    // Check if `a` is the item we want to move to the front
    if (a.value === slug) {
      return -1; // Move `a` towards the front
    }
    // Check if `b` is the item we want to move to the front
    else if (b.value === slug) {
      return 1; // Move `b` towards the front, effectively pushing `a` back
    }
    // Keep the original order for other items
    return 0;
  });

  return (
    <div className="h-[40rem] [perspective:1000px] relative flex flex-col max-w-5xl mx-auto w-full items-start justify-start">
      <TabsComponent tabs={tabs} tabsOrdered={tabsOrdered} />
    </div>
  );
}

type Tab = {
  title: string;
  value: string;
  content?: string | React.ReactNode | any;
};

export const TabsComponent = ({
  tabs: propTabs,
  tabsOrdered,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName,
}: {
  tabs: Tab[];
  tabsOrdered: Tab[];
  containerClassName?: string;
  activeTabClassName?: string;
  tabClassName?: string;
  contentClassName?: string;
}) => {
  const [active, setActive] = useState<Tab>(tabsOrdered[0]);
  const [tabs, setTabs] = useState<Tab[]>(tabsOrdered);

  const moveSelectedTabToTop = (idx: number) => {
    const newTabs = [...tabsOrdered];
    const selectedTab = newTabs.splice(idx, 1);
    newTabs.unshift(selectedTab[0]);
    setTabs(newTabs);
    setActive(newTabs[0]);
  };

  const [hovering, setHovering] = useState(false);

  return (
    <>
      <div
        className={cn(
          "flex flex-row items-center justify-center [perspective:1000px] relative flex-wrap no-visible-scrollbar max-w-full w-full",
          containerClassName
        )}
      >
        {propTabs.map((tab, idx) => (
          <button
            key={tab.title}
            onClick={() => {
              moveSelectedTabToTop(idx);
            }}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className={cn("relative w-32 h-24 px-4 py-2", tabClassName)}
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {active.value === tab.value && (
              <motion.div
                layoutId="clickedbutton"
                transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                className={cn(
                  "absolute inset-0 bg-zinc-800",
                  activeTabClassName
                )}
              />
            )}

            <span className="relative block text-white hover:text-teal-400">
              {tab.title}
            </span>
          </button>
        ))}
      </div>
      <FadeInDiv
        tabs={tabs}
        active={active}
        key={active.value}
        hovering={hovering}
        className={cn("mt-[3rem]", contentClassName)}
      />
    </>
  );
};

export const FadeInDiv = ({
  className,
  tabs,
  hovering,
}: {
  className?: string;
  key?: string;
  tabs: Tab[];
  active: Tab;
  hovering?: boolean;
}) => {
  const isActive = (tab: Tab) => {
    return tab.value === tabs[0].value;
  };
  return (
    <div className="relative w-full h-full">
      {tabs.map((tab, idx) => (
        <motion.div
          key={tab.value}
          layoutId={tab.value}
          style={{
            scale: 1 - idx * 0.1,
            top: hovering ? idx * -50 : 0,
            zIndex: -idx,
            opacity: idx < 3 ? 1 - idx * 0.1 : 0,
          }}
          animate={{
            y: isActive(tab) ? [0, 40, 0] : 0,
          }}
          className={cn("w-full h-full absolute top-0 left-0", className)}
        >
          {isActive(tab) ? tab.content : <BackgroundTab title={tab.title} />}
        </motion.div>
      ))
      }
    </div >
  );
};

const BackgroundTab = ({ title }: { title: string }) => {
  return (
    <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-zinc-700 to-zinc-900">
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}
