import Link from "next/link";
import { INavigation } from "@/shared/type";
import { navigation } from "@/shared/constants";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-16 animate-fade-in">
        <ul className="flex flex-wrap items-center justify-center gap-4">
          {navigation.map((item: INavigation) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-lg md:text-xl duration-500 text-zinc-500 hover:text-zinc-300  pl-2"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <h1 className="z-10 text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display text-7xl md:text-9xl whitespace-nowrap bg-clip-text ">
        Darunporn
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center animate-fade-in flex justify-center">
        <h2 className="text-md md:text-lg text-zinc-500 mx-6 w-3/4 md:w-1/2">
          Hi, my name is Darunporn Santisawaddiwong, call me `MINT`.I am a
          frontend developer with approximately 7 years of experience in
          JavaScript, HTML, and CSS.I am capable of developing websites from the
          initial project stages to completion, including both the UI and
          integration with the backend, particularly dashboards involving
          graphs.Currently, I utilize tools that enhance website development,
          such as React, Redux, and Vuex. I am committed to continuous learning
          and practice my skills in backend and mobile development
          in the future.
        </h2>
      </div>
    </div>
  );
}
