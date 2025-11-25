import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Github, ArrowRight } from "lucide-react";

interface ProjectCardProps {
  imageSrc: string;
  videoSrc?: string;
  title: string;
  tags: string[];
  liveLink?: string;
  repoLink: string;
  timeline: string;
  tagline: string;
  delay?: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  imageSrc,
  title,
  liveLink,
  repoLink,
  timeline,
  tagline,
  tags,
}) => {
  return (
        <div className="flex flex-col gap-10 w-full">
            <Link
                className="flex-1"
                href={`${liveLink}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${title} project link`}
            >
                <div className="group relative flex cursor-pointer flex-col gap-1 rounded-lg border p-1 shadow-2xl border-[#121212] backdrop-blur-sm bg-[#121212] shadow-[#121212]/50 h-70">
                <div className="flex items-center justify-start">
                    <div className="flex gap-1 px-1 py-[2px]">
                    <div className="size-2 rounded-full bg-red-500/90 transition-all duration-300 group-hover:bg-red-500/90 sm:bg-white/10"></div>
                    <div className="size-2 rounded-full bg-yellow-500/90 transition-all duration-300 group-hover:bg-yellow-500/90 sm:bg-white/10"></div>
                    <div className="size-2 rounded-full bg-green-500/90 transition-all duration-300 group-hover:bg-green-500/90 sm:bg-white/10"></div>
                    </div>
                    <div className="flex flex-1 justify-center">
                    <div className="w-36 -translate-x-3 overflow-hidden truncate rounded bg-[#282828] text-center text-[8px] text-[#707070] backdrop-blur-3xl :bg-[#1b1b1b]">
                        {title}
                    </div>
                    </div>
                </div>

                <div className="flex h-70 justify-center overflow-hidden rounded-lg">
                    <Image
                    width={1536}
                    height={1000}
                    alt={`${title} project image`}
                    className="size-full object-cover transition-all duration-300 hover:scale-105"
                    aria-label={`${title} project image`}
                    src={imageSrc}
                    />
                </div>
                </div>
            </Link>
            <div className="flex flex-col space-y-3 p-4">
                <h2 className="mb-2 text-xl font-semibold dark:text-white">
                {title}
                </h2>
                <p className="mb-2 text-xs text-gray-50">
                {timeline}
                </p>
                <p className="mb-4 text-xs text-slate-300">{tagline}</p>
                <div className="flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                    <div
                    className="rounded-lg bg-black p-2 py-1 text-xs font-medium text-black before:mr-2 before:h-[90%] before:w-1 before:-translate-x-1 before:rounded-xl before:bg-zinc-800/90 before:text-transparent before:content-['f'] bg-white text-black before:bg-white"
                    key={index}
                    >
                    {tag}
                    </div>
                ))}
                </div>
                <div className="flex gap-4">
                <Link
                    href={repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${title} source code link`}
                    className="flex items-center justify-around gap-2 rounded-md bg-black/85 px-3 py-2 text-xs font-semibold text-black bg-white"
                >
                    <Github className="inline-block size-4 invert invert-0" />
                    Source Code
                </Link>
                <Link
                    href={`${liveLink}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${title} live demo link`}
                    className="group flex items-center justify-around gap-2 rounded-md bg-black/85 px-3 py-2 text-xs font-semibold bg-white text-black"
                >
                    Live Demo
                    <ArrowRight className="size-4 rounded-full border border-transparent stroke-1 transition-all duration-300 ease-linear group-hover:-rotate-45 group-hover:border-slate-50 group-hover:stroke-[2px] dark:group-hover:border-slate-950" />
                </Link>
                </div>
            </div>
        </div>
  );
};

export default ProjectCard;
