import Navigation from "@/components/navigator";
import { skills } from "@/shared/constants";
import { ISkill } from "@/shared/type";
import Image from "next/image";

const Skill = () => {
  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-24  mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16  lg:pt-32">
        <div className="mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Skill
          </h2>
          <p className="mt-4 text-zinc-400 mb-5">My tech stack</p>
        </div>
        <div className="grid grid-cols-4 items-center ">
          {skills.map((skill: ISkill, index: number) => {
            return (
              <div key={index} className="my-3">
                <div className="aspect-square w-[80px] flex justify-center flex-col m-auto hover:animate-wiggle">
                  <Image alt="" src={skill.image} height={80} width={80} />
                </div>

                <div className="text-center my-3">{skill.name}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Skill;
