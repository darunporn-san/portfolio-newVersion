import Navigation from "@/components/navigator";
import { aboutUS, linkAbout } from "@/shared/constants";
import { IAboutUS } from "@/shared/type";
import {
  NodeIndexOutlined,
  RiseOutlined,
  RobotOutlined,
  SnippetsOutlined,
  SoundOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Image from "next/image";

const Detail = ({ icon, text }: { icon?: any; text: string }) => {
  return (
    <div className="grid grid-cols-6 md:flex">
      <div className="my-3 bg-slate-500 w-14 md:w-10 aspect-square col-span-1 rounded-full flex justify-center items-center">
        {icon}
      </div>
      <div className="my-auto ml-10 text-lg md:text-2xl flex md:flex-row col-span-5 break-all">
        {text}
      </div>
    </div>
  );
};
const AboutUS = () => {
  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-24  mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16  lg:pt-32">
        <div className="mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            About Me
          </h2>
          <p className="mt-4 text-zinc-400 mb-5">My Introduction</p>
        </div>
        <div className="relative">
          <div className="flex flex-col items-center w-0/12">
            <div
              className="mb-5  aspect-[8/3] backdrop-sepia-0 bg-white/30 rounded"
              style={{ width: "-webkit-fill-available" }}
            >
              <div className="grid grid-cols-12 gap-4 p-5">
                <div className="col-span-12 md:col-span-4 p-5 m-auto">
                  <Image
                    alt=""
                    src={"/images/about/profile_3.png"}
                    height={200}
                    width={400}
                  />
                </div>
                <div className="col-span-12 md:col-span-8 p-5 ">
                  <Detail
                    icon={<UserOutlined />}
                    text={"Name : Darunporn Santisawaddiwong ( MINT )"}
                  />
                  <Detail
                    icon={<SnippetsOutlined />}
                    text={"Position : Middle Frontend Developer"}
                  />
                  <Detail icon={<RiseOutlined />} text={"Age : 29 years old"} />
                  <Detail
                    icon={<NodeIndexOutlined />}
                    text={"Career Path : Mobile Developer"}
                  />
                  <div className="">
                    {aboutUS.map((us: IAboutUS, index: number) => {
                      return (
                        <div key={index} className="grid grid-cols-6 md:flex">
                          <div className="my-3 bg-slate-500 w-14 md:w-10 aspect-square col-span-1 rounded-full flex justify-center items-center">
                            {us.icon}
                          </div>
                          <div className="my-auto ml-10 text-lg md:text-2xl flex md:flex-row col-span-5 break-all">
                            {us.label} : {us.value}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="flex justify-center mt-10 md:mt-0">
                    {linkAbout.map((us: IAboutUS, index: number) => {
                      return (
                        <a
                          href={us.url}
                          target="_blank"
                          className="my-3 bg-slate-500 w-14 md:w-10  mx-2 md:mx-10 aspect-square col-span-1 rounded-full flex justify-center items-center"
                        >
                          {us.icon}
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            {/* <a id="container" href="/MintCV.pdf" target="_blank">
            <button className="learn-more">
              <span className="circle" aria-hidden="true">
                <span className="icon arrow"></span>
              </span>
              <span className="button-text">Download</span>
            </button>
          </a> */}
          </div>
          <a id="container" href="/MintCV.pdf" target="_blank">
            <div className="absolute top-5 right-5 p-2 bg-[#f59e0b] rounded-full px-5 flex">
              Resume <RobotOutlined className="m-auto pl-2" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
export default AboutUS;
