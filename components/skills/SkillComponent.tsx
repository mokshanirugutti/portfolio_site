import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";

const other = [
  {
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    alt: "GitHub",
  },
  {
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    alt: "Docker",
  },
  {
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
    alt: "linux",
  },
  {
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    alt: "mongodb",
  },
  {
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    alt: "postgresql",
  },
];

const langugaes = [
  {
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    alt: "Javascript",
  },
  {
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    alt: "Typescript",
  },
  {
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    alt: "CSS",
  },
  {
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    alt: "Python",
  },
  {
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    alt: "HTML",
  },

]
const frameworks =[
  {
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
    alt: "Django",
  },
  {
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg",
    alt: "Next.js",
  },
  {
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    alt: "React",
  },
  {
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    alt: "Express",
  },
  {
    img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    alt: "Node",
  },

]



const SkillCard = ({
  img,
  alt,
}: {
  img: string;
  alt: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-fit cursor-pointer overflow-hidden p-1",
        
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="" width="32" height="32" alt={alt} src={img} />
      </div>
    </figure>
  );
};

export function SKillComponent() {
  return (
    <div className="relative flex  w-full flex-col items-center justify-center overflow-hidden  mt-14">
      <Marquee className="[--duration:20s]">
        {langugaes.map((skill, idx) => (
          <SkillCard key={idx} {...skill} />
        ))}
      </Marquee>
      <Marquee reverse className="[--duration:20s]">
        {frameworks.map((skill, idx) => (
          <SkillCard key={idx} {...skill} />
        ))}
      </Marquee>
      <Marquee className="[--duration:20s]">
        {other.map((skill, idx) => (
          <SkillCard key={idx} {...skill} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-rose-300 dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-rose-300 dark:from-background"></div>
    </div>
  );
}
