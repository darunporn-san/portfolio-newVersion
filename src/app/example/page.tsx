"use client";
import Navigation from "@/components/navigator";
import Image from "next/image";
import { exampleProject } from "@/shared/constants";
import { IExampleProject, IExampleWorking } from "@/shared/type";
import { useEffect, useState } from "react";
import { CaretLeftOutlined, CaretRightOutlined } from "@ant-design/icons";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState<number[]>(
    Array(exampleProject.length).fill(0)
  );

  const carouselInfiniteScroll = (e: number) => {
    const projectLength = exampleProject[e].project.length;

    if (currentIndex[e] === exampleProject[e].project.length - 1) {
      setCurrentIndex((prevIndexes) => {
        const newIndexes = [...prevIndexes];
        newIndexes[e] = 0;
        return newIndexes;
      });
    } else {
      setCurrentIndex((prevIndexes) => {
        const newIndexes = [...prevIndexes];
        newIndexes[e] = newIndexes[e] + 1;
        return newIndexes;
      });
    }
  };

  const carouselInfiniteScrollPrevious = (e: number) => {
    const projectLength = exampleProject[e].project.length;

    if (currentIndex[e] === 0) {
      setCurrentIndex((prevIndexes) => {
        const newIndexes = [...prevIndexes];
        newIndexes[e] = projectLength - 1;
        return newIndexes;
      });
    } else {
      setCurrentIndex((prevIndexes) => {
        const newIndexes = [...prevIndexes];
        newIndexes[e] = newIndexes[e] - 1;
        return newIndexes;
      });
    }
  };

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
        {exampleProject?.map((project: IExampleProject, index: number) => {
          return (
            <>
              <div className="text-center text-2xl">{project.name}</div>
              {project?.detail && (
                <div className="details indent-8 break-word	text-lg">
                  &emsp;
                  {project?.detail?.split("\n").map((str) => (
                    <div>{str}</div>
                  ))}
                </div>
              )}
              {project.project?.length > 0 && (
                <div className="flex justify-between">
                  {currentIndex[index] > 0 && (
                    <div
                      className="m-auto "
                      onClick={() => carouselInfiniteScrollPrevious(index)}
                    >
                      <CaretLeftOutlined className="text-5xl" />
                    </div>
                  )}
                  <div
                    className="carousel-container"
                    style={{ width: "-webkit-fill-available" }}
                  >
                    {project.project.map(
                      (example: IExampleWorking, j: number) => {
                        return (
                          <div
                            key={j}
                            className="carousel-item"
                            style={{
                              transform: `translate(-${
                                currentIndex[index] * 100
                              }%)`,
                            }}
                          >
                            {example.second_image ? (
                              <div>
                                <div className="text-3xl md:hidden text-center">
                                  {example.name}
                                </div>
                                <div className="wrap animate pop">
                                  <div className=" overlay hidden md:flex">
                                    <div className="overlay-content animate slide-left delay-2 w-1/4">
                                      <h1 className="animate slide-left pop delay-4 text-5xl break-words">
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
                                      src={example.second_image ?? ""}
                                      height={200}
                                      width={400}
                                    />
                                  </div>
                                </div>
                              </div>
                            ) : (
                              <div>
                                <div className="text-3xl md:hidden text-center">
                                  {example.name}
                                </div>
                                <div className="nowrap animate pop">
                                  <div className=" overlay hidden md:flex">
                                    <div className="overlay-content animate s w-1/4">
                                      <h1 className="animate  pop delay-4 text-5xl break-words">
                                        {example.name}
                                      </h1>
                                    </div>
                                    <div className="image-content animate ">
                                      <Image
                                        alt=""
                                        src={example.first_image}
                                        height={200}
                                        width={400}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        );
                      }
                    )}
                  </div>
                  {currentIndex[index] !== project.project.length - 1 && (
                    <div
                      className="m-auto "
                      onClick={() => carouselInfiniteScroll(index)}
                    >
                      <CaretRightOutlined className="text-5xl" />
                    </div>
                  )}
                </div>
              )}
            </>
          );
        })}
        {/* <div className="flex justify-between">
          {currentIndex > 0 && (
            <div className="m-auto " onClick={carouselInfiniteScrollPrevious}>
              <CaretLeftOutlined className="text-5xl" />
            </div>
          )}
          <div
            className="carousel-container"
            style={{ width: "-webkit-fill-available" }}
          >
    
            {OBCL.map((example: IExampleWorking, index: number) => {
              return (
                <div
                  key={index}
                  className="carousel-item"
                  style={{ transform: `translate(-${currentIndex * 100}%)` }}
                >
                  <div>
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
                </div>
              );
            })}
          </div>
          {currentIndex !== OBCL.length - 1 && (
            <div className="m-auto " onClick={carouselInfiniteScroll}>
              <CaretRightOutlined className="text-5xl" />
            </div>
          )}
        </div> */}
      </div>
    </div>
  );
};
export default Projects;
