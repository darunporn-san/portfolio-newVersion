import Navigation from "@/components/navigator";
import Image from "next/image";
import { exampleWorking } from "@/shared/constants";
import { IExampleWorking } from "@/shared/type";

const Projects = () => {
  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-24  mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16  lg:pt-32">
        <div className="mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Example Working
          </h2>
          <p className="mt-4 text-zinc-400 mb-5">
            My Experience Coding In Working
          </p>
        </div>
        {exampleWorking.map((example: IExampleWorking, index: number) => {
          return (
            <div key={index}>
              <div className="text-3xl md:hidden text-center">
                {example.name}
              </div>
              <div className="wrap animate pop">
                <div className=" overlay hidden md:flex">
                  <div className="overlay-content animate slide-left delay-2 w-1/4">
                    <h1 className="animate slide-left pop delay-4 text-5xl">
                      {example.name}
                    </h1>
                  </div>
                  <div className="image-content animate slide delay-5">
                    <Image
                      alt=""
                      src={example.first_image}
                      height={200}
                      width={400}
                    />
                  </div>
                </div>
                <div className="text w-[100%] md:w-[60vmin] image-detail">
                  <div className="md:hidden">
                    <div className="text-2xl text-black my-3">
                      Preview Image
                    </div>
                    <Image
                      alt=""
                      src={example.first_image}
                      height={200}
                      width={400}
                    />
                    <div className="text-2xl text-black my-3">
                      Preview Coding
                    </div>
                  </div>

                  <Image
                    alt=""
                    src={example.second_image}
                    height={200}
                    width={400}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Projects;
