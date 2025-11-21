import { Marquee } from '../Marquee'
import {
    ReactLogo,
    NextLogo,
    HtmlLogo,
    CSSLogo,
    TailwindLogo,
    JavascriptLogo,
    CsharpLogo,
    PostgreSQLLogo,
    MongoDBLogo,
    NodeJSLogo,
    TypescriptLogo,
    ExpressLogo,
    GitLogo,
    NpmLogo,
    PostmanLogo,
    Csharp2Logo,
  } from "../../icons";
  import { cn } from "@/lib/utils";
  import type React from "react";
import BentoCard from './BentoCard'
import { Layers } from 'lucide-react'

const frontendTech: React.FC<React.SVGProps<SVGSVGElement>>[] = [
  HtmlLogo,
  CSSLogo,
  JavascriptLogo,
  TypescriptLogo,
  ReactLogo,
  NextLogo,
  TailwindLogo,
  HtmlLogo,
  CSSLogo,
  JavascriptLogo,
  TypescriptLogo,
  ReactLogo,
  NextLogo,
  TailwindLogo,
]

const backendAndTools: React.FC<React.SVGProps<SVGSVGElement>>[] = [
  NodeJSLogo,
  ExpressLogo,
  PostgreSQLLogo,
  MongoDBLogo,
  PostmanLogo,
  NpmLogo,
  GitLogo,
  Csharp2Logo,
  ExpressLogo,
  PostgreSQLLogo,
  MongoDBLogo,
  PostmanLogo,
  NpmLogo,
  GitLogo,
  Csharp2Logo,
]

const StacksCard = ({ isForSmall = false }: { isForSmall?: boolean }) => {
  return (
    <BentoCard
      className="group/stack col-span-5 row-span-1 h-56 mt-12
                rounded-xl
                border border-white/10
                bg-black/20
                shadow-[0_0_40px_-10px_rgba(255,255,255,0.15)_inset]
                backdrop-blur-sm"
    >
      {/* ⭐ Add padding here */}
      <div className="p-4">
        <div className="mb-3 flex items-center gap-2">
          <Layers className="size-4" />
          <h2 className="bg-gradient-to-r from-[#8ebac7] via-[#4d8b9d] to-[#2a4b55] bg-clip-text font-neu text-sm font-medium text-transparent">
            Tech Stack
          </h2>
        </div>

        <Marquee gap="20px" className="py-4" fade pauseOnHover>
          {frontendTech.map((TechComponent, index) => (
            <TechComponent
              key={index}
              id={isForSmall ? `s-${index}` : `${index}`}
              className="size-11 grayscale transition-all duration-500 ease-in-out hover:grayscale-0 dark:invert dark:hover:invert-0"
            />
          ))}
        </Marquee>

        <Marquee gap="20px" className="py-4" reverse fade pauseOnHover>
          {backendAndTools.map((TechComponent, index) => (
            <TechComponent
              key={index}
              id={isForSmall ? `s2-${index}` : `${index}2`}
              className="size-11 grayscale transition-all duration-500 ease-in-out hover:grayscale-0 dark:invert dark:hover:invert-0"
            />
          ))}
        </Marquee>
      </div>
    </BentoCard>

  )
}

export default StacksCard
