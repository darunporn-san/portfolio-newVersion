"use client";
import Navigation from "@/components/navigator";
import { education, workExperience } from "@/shared/constants";
import Image from "next/image";
import ImageLogo from "@/assets/images/experience/digital.png";
import { IExperience, IProject } from "@/shared/type";
import { useState } from "react";
import { ForwardOutlined } from "@ant-design/icons";
const CardExperience = ({ data }: { data: IExperience }) => {
  const [expanded, setExpanded] = useState(false);
  const toggleExpanded = () => setExpanded((current) => !current);
  return (
    <>
      <div
        className={`rounded-md animate-fade-left-card ${
          expanded ? "mt-5 mb-2" : "my-5"
        } bg-zinc-800 p-3 flex flex-wrap flex-col md:flex-row shadow-white/25	 shadow-md`}
      >
        <div className="flex items-center basis-1/4 justify-center text-3xl">
          {data.year}
        </div>
        <div className="basis-1/4 flex justify-center my-5 md:my-0">
          <div className="bg-white rounded-full p-3  aspect-square flex w-[100px] h-[100px] experience-img">
            <Image alt="" src={data.logo1} height={70} width={80} />
          </div>
        </div>

        <div className="flex flex-col items-start  basis-1/4 m-auto">
          <div className="text-2xl ">{data.name}</div>
          <div className="text-amber-500">{data.position}</div>
        </div>
        {(data?.project || data?.product) && (
          <div
            className="flex items-center basis-1/4 justify-center cursor-pointer"
            onClick={toggleExpanded}
          >
            {expanded ? "Show Less ..." : "Show More ..."}
          </div>
        )}
      </div>
      <div
        className={`px-6 py-5 overflow-hidden transition-[max-height] duration-500 ease-in bg-zinc-700/40 rounded-md grid grid-cols-1  md:grid-cols-2 gap-4 md:flex-row  ${
          expanded ? "min-h-[10rem] overflow-y-auto" : "hidden"
        }`}
      >
        {data?.project && (
          <div>
            <div className="text-2xl text-center">Project</div>
            <div className="flex-col">
              {data?.project?.map((project: IProject, index: number) => {
                return (
                  <div key={index} className="ml-0 md:ml-5 my-2">
                    <div className="text-xl"> {project.detail}</div>
                    {project.language && (
                      <div
                        className="ml-0 md:ml-5  experience"
                        style={{ display: "-webkit-box" }}
                      >
                        <ForwardOutlined className="my-auto mr-2" />
                        <div>{project.language}</div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <hr className={`block md:hidden mb-2 mt-7`} />
          </div>
        )}
        {data?.product && (
          <div>
            <div className="text-2xl  text-center">Product</div>
            <div className="flex-col">
              {data?.product?.map((product: IProject, index: number) => {
                return (
                  <div key={index} className="ml-0 md:ml-5 my-2">
                    <div className="text-xl">{product.detail}</div>
                    <div
                      className="ml-0 md:ml-5  experience"
                      style={{ display: "-webkit-box" }}
                    >
                      <ForwardOutlined className="my-auto mr-2" />
                      <div>{product.language}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* <hr className={`block md:hidden my-2`} /> */}
          </div>
        )}
      </div>
    </>
  );
};

const Experience = () => {
  const lorem =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-24  mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16  lg:pt-32">
        <div className="mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Work Status
          </h2>
        </div>
        <div className="mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Work Experience
          </h2>
          <p className="mt-4 text-zinc-400 mb-5">My personal journey</p>
          {workExperience.map((work: IExperience, index: number) => {
            return (
              <div key={index}>
                <CardExperience data={work} />
              </div>
            );
          })}
        </div>
        <div className=" mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Education
          </h2>
          <p className="mt-4 text-zinc-400">My personal journey </p>

          {education.map((work: IExperience, index: number) => {
            return (
              <div key={index}>
                <CardExperience data={work} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Experience;
