import Image from "next/image";
import { BlurFade } from "../components/ui/blur-fade"
import StacksCard from "@/components/Home/Bento/StacksCard";
import GlobeCard from "@/components/Home/Bento/GlobeCard";

export default function Home() {
  return (
    <div className="flex flex-col max-w-[572px] mx-auto p-3">
      <section className="pb-3 pt-8 md:mt-8 md:pb-16 lg:mt-10 w-full">
        <BlurFade delay={0.25}>
          <div className="flex flex-col items-start justify-start gap-5 md:flex-row md:items-center md:justify-between">
            {' '}
            <div>
              {' '}
                <h1 className="mb-1 mt-0 text-3xl font-semibold dark:text-white">
                  Murunwa Maphiri
                </h1>
                <div className="max-w-[58ch] text-zinc-400 dark:text-zinc-400">
                  Software Developer
                </div>
            </div>{' '}
          </div>
        </BlurFade>
        <section className="mt-8 text-zinc-400">
          <BlurFade delay={0.25 * 2}>
            <div className="space-y-5 text-left">
              <p>
                I&apos;m the type of person who loves building cool things with code—whether it&apos;s a clean NextJS UI or a solid backend with .NET. I&apos;m constantly learning, experimenting and trying to make each project better than the last. Think of it like my own little tech journey—kind of like a training arc, minus the dramatic music (most of the time).
              </p>
              <p>
                I fell in love with tech at the age of 13 and since then I&apos;ve never looked back. From installing custom roms from xda developers to hacking games using Lucky Patcher, I was obsessed with figuring out how things worked behind the screen. That curiosity turned into a passion and it&apos;s what turned me into the person I am today. It&apos;s what drives me to keep learning every day.
              </p>
              <p>
                If you&apos;re into creating, breaking and fixing stuff, you&apos;re in the right place.
              </p>
            </div>
          </BlurFade>
        </section>
        <section>
          <BlurFade delay={0.25 * 3}>
            <div className="mt-8">
              <StacksCard />
              <GlobeCard />
            </div>
          </BlurFade>
        </section>
      </section>
    </div>
  );
}
