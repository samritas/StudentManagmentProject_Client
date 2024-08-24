import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { RiArrowLeftLine, RiArrowRightLine } from "react-icons/ri";
import Layout from "../../Layouts/layout";

const StudentLandingPage = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ stopOnInteraction: false })]
  );
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <Layout>
      <div className="w-full xl:w-10/12 lg:w-10/12 md:w-11/12 mx-auto py-14 flex flex-col justify-start items-start px-6 pt-24">
        <h1 className="text-center text-xl mb-2">25 June</h1>
        <h1 className="text-center font-normal text-2xl font-serif">Today</h1>
        <div className="flex m-auto w-10/12 py-6">
          <div className="cursor-pointer w-full flex justify-around ">
            <div className="text-sm flex flex-col text-center justify-center text-black">
              <h1 class="font-serif text-sm capitalize">mon</h1>
              <h1 class="font-serif text-xl font-bold">26</h1>
            </div>
            <div className="text-sm flex flex-col justify-center text-black">
              <h1 class="font-serif text-sm capitalize">tue</h1>
              <h1 class="font-serif text-xl font-bold">27</h1>
            </div>
            <div className="text-sm flex flex-col justify-center text-black">
              <h1 class="font-serif text-sm capitalize">Wen</h1>
              <h1 class="font-serif text-xl font-bold">28</h1>
            </div>
            <div className="text-sm flex flex-col justify-center text-black">
              <h1 class="font-serif text-sm capitalize">thur</h1>
              <h1 class="font-serif text-xl font-bold">29</h1>
            </div>
            <div className="text-sm flex flex-col justify-center text-black">
              <h1 class="font-serif text-sm capitalize">frid</h1>
              <h1 class="font-serif text-xl font-bold">30</h1>
            </div>
            <div className="text-sm flex flex-col justify-center text-black">
              <h1 class="font-serif text-sm capitalize">sat</h1>
              <h1 class="font-serif text-xl font-bold">01</h1>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 items-center justify-center flex-wrap gap-4 md:px-0">
          <div
            className="overflow-hidden relative  md:col-span-3 "
            style={{
              flex: "0 0 100%",
            }}
            ref={emblaRef}
          >
            <div className="flex text-white">
              <div className="border  min-w-0  flex-2  lg:flex-3 h-full flex items-center justify-center mx-2">
                <div class="flex md:w-96 w-full shadow-md rounded-lg overflow-hidden">
                  <div class="overflow-hidded relative shadow-lg w-full">
                    <div class="absolute z-10 transition bg-gradient-to-t from-black via-gray-900 to-transparent h-32 bottom-0 left-0 right-0"></div>
                    <div class="relative cursor-pointer group z-10 px-10 pt-4 space-y-6">
                      <div class="poster__info align-self-end w-full">
                        <div class="h-96"></div>
                        <div class="space-y-6 detail_info">
                          <div class="flex flex-col space-y-4 pb-4">
                            <h3
                              class="text-2xl font-bold text-white"
                              data-unsp-sanitized="clean"
                            >
                              Mathematics
                            </h3>
                          </div>
                        </div>
                        <div className="absolute transition-[1s] -translate-x-0 right-2 top-2 text-sm text-white opacity-70 ">
                          2:30 - 3:45
                        </div>
                      </div>
                    </div>
                    <img
                      class="absolute inset-0 transform w-full -translate-y-8"
                      src="https://images.pearsoned-ema.com/jpeg/large/9781292280059.jpg"
                    />
                  </div>
                </div>
              </div>

              <div className="border  min-w-0  flex-2  lg:flex-3 h-full flex items-center justify-center mx-2">
                <div class="flex md:w-96 w-full shadow-md rounded-lg overflow-hidden">
                  <div class="overflow-hidded relative shadow-lg w-full">
                    <div class="absolute z-10 transition bg-gradient-to-t from-black via-gray-900 to-transparent h-32 bottom-0 left-0 right-0"></div>
                    <div class="relative cursor-pointer group z-10 px-10 pt-4 space-y-6">
                      <div class="poster__info align-self-end w-full">
                        <div class="h-96"></div>
                        <div class="space-y-6 detail_info">
                          <div class="flex flex-col space-y-4 pb-4">
                            <h3
                              class="text-2xl font-bold text-white"
                              data-unsp-sanitized="clean"
                            >
                              Physics Textbook
                            </h3>
                          </div>
                        </div>
                        <div className="absolute transition-[1s] -translate-x-0 right-2 top-2 text-sm text-white opacity-70 ">
                          3:50 - 4:45
                        </div>
                      </div>
                    </div>
                    <img
                      class="absolute inset-0 transform w-full -translate-y-8"
                      src="https://ethiofetena.com/up_asset/b/314/fetena17001131707d5fa7bd42.png"
                    />
                  </div>
                </div>
              </div>

              <div className="border  min-w-0  flex-2  lg:flex-3 h-full flex items-center justify-center mx-2">
                <div class="flex md:w-96 w-full shadow-md rounded-lg overflow-hidden">
                  <div class="overflow-hidded relative shadow-lg w-full">
                    <div class="absolute z-10 transition bg-gradient-to-t from-black via-gray-900 to-transparent h-32 bottom-0 left-0 right-0"></div>
                    <div class="relative cursor-pointer group z-10 px-10 pt-4 space-y-6">
                      <div class="poster__info align-self-end w-full">
                        <div class="h-96"></div>
                        <div class="space-y-6 detail_info">
                          <div class="flex flex-col space-y-4 pb-4">
                            <h3
                              class="text-2xl font-bold text-white"
                              data-unsp-sanitized="clean"
                            >
                              Biology Book
                            </h3>
                          </div>
                        </div>
                        <div className="absolute transition-[1s] -translate-x-0 right-2 top-2 text-sm text-white opacity-70 ">
                          4:50 - 6:05
                        </div>
                      </div>
                    </div>
                    <img
                      class="absolute inset-0 transform w-full -translate-y-8"
                      src="https://static.abeka.com/Shared/ABeka/ProductImages/GeneratedMid/309214.jpg"
                    />
                  </div>
                </div>
              </div>
              <div className="border  min-w-0  flex-2  lg:flex-3 h-full flex items-center justify-center mx-2">
                <div class="flex md:w-96 w-full shadow-md rounded-lg overflow-hidden">
                  <div class="overflow-hidded relative shadow-lg w-full">
                    <div class="absolute z-10 transition bg-gradient-to-t from-black via-gray-900 to-transparent h-32 bottom-0 left-0 right-0"></div>
                    <div class="relative cursor-pointer group z-10 px-10 pt-4 space-y-6">
                      <div class="poster__info align-self-end w-full">
                        <div class="h-96"></div>
                        <div class="space-y-6 detail_info">
                          <div class="flex flex-col space-y-4 pb-4">
                            <h3
                              class="text-2xl font-bold text-white"
                              data-unsp-sanitized="clean"
                            >
                              Chemistry
                            </h3>
                          </div>
                        </div>
                        <div className="absolute transition-[1s] -translate-x-0 right-2 top-2 text-sm text-white opacity-70 ">
                          7:15 - 8:05
                        </div>
                      </div>
                    </div>
                    <img
                      class="absolute inset-0 transform w-full -translate-y-8"
                      src="https://m.media-amazon.com/images/I/51dWjb+9zuS._AC_UF1000,1000_QL80_.jpg"
                    />
                  </div>
                </div>
              </div>

              <div className="border  min-w-0  flex-2  lg:flex-3 h-full flex items-center justify-center mx-2">
                <div class="flex md:w-96 w-full shadow-md rounded-lg overflow-hidden">
                  <div class="overflow-hidded relative shadow-lg w-full">
                    <div class="absolute z-10 transition bg-gradient-to-t from-black via-gray-900 to-transparent h-32 bottom-0 left-0 right-0"></div>
                    <div class="relative cursor-pointer group z-10 px-10 pt-4 space-y-6">
                      <div class="poster__info align-self-end w-full">
                        <div class="h-96"></div>
                        <div class="space-y-6 detail_info">
                          <div class="flex flex-col space-y-4 pb-4">
                            <h3
                              class="text-2xl font-bold text-white"
                              data-unsp-sanitized="clean"
                            >
                              English
                            </h3>
                          </div>
                        </div>
                        <div className="absolute transition-[1s] -translate-x-0 right-2 top-2 text-sm text-white opacity-70 ">
                          8:10 - 9:15
                        </div>
                      </div>
                    </div>
                    <img
                      class="absolute inset-0 transform w-full -translate-y-8"
                      src="https://ethiofetena.com/up_asset/b/319/fetena17001180039aa8027c68.png"
                    />
                  </div>
                </div>
              </div>
              <div className="border  min-w-0  flex-2  lg:flex-3 h-full flex items-center justify-center mx-2">
                <div class="flex md:w-96 w-full shadow-md rounded-lg overflow-hidden">
                  <div class="overflow-hidded relative shadow-lg w-full">
                    <div class="absolute z-10 transition bg-gradient-to-t from-black via-gray-900 to-transparent h-32 bottom-0 left-0 right-0"></div>
                    <div class="relative cursor-pointer group z-10 px-10 pt-4 space-y-6">
                      <div class="poster__info align-self-end w-full">
                        <div class="h-96"></div>
                        <div class="space-y-6 detail_info">
                          <div class="flex flex-col space-y-4 pb-4">
                            <h3
                              class="text-2xl font-bold text-white"
                              data-unsp-sanitized="clean"
                            >
                              አማረኛ
                            </h3>
                          </div>
                        </div>
                        <div className="absolute transition-[1s] -translate-x-0 right-2 top-2 text-sm text-white opacity-70 ">
                          9:20 - 10:05
                        </div>
                      </div>
                    </div>
                    <img
                      class="absolute inset-0 transform w-full -translate-y-8"
                      src="https://imgv2-2-f.scribdassets.com/img/document/618781870/original/95f85b417b/1722426435?v=1"
                    />
                  </div>
                </div>
              </div>
            </div>
            <button
              className="embla__prev absolute top-[45%] left-0 py-2 md:py-4 rounded-full px-2 md:px-4 hover:opacity-100 transition-all text-black   bg-white border text-center"
              onClick={scrollPrev}
            >
              <RiArrowLeftLine className=" " />
            </button>
            <button
              className="embla__next absolute top-[45%] right-0 py-2 md:py-4 rounded-full px-2 md:px-4 hover:opacity-100 transition-all text-black   bg-white border"
              onClick={scrollNext}
            >
              <RiArrowRightLine className=" " />
            </button>
          </div>
        </div>
      </div>

      <div className="w-full xl:w-10/12 lg:w-10/12 md:w-11/12 mx-auto py-4 flex flex-col justify-center items-center px-6">
        <h1 className="text-center font-normal text-4xl mb-16 font-serif">
          Upcoming Events
        </h1>
        <article class="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
            class="absolute inset-0 h-full w-full object-cover"
          />

          <div class="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
            <div class="p-4 sm:p-6">
              <time datetime="2024-10-04" class="block text-xs text-white/90">
                {" "}
                4th Oct 2024{" "}
              </time>

              <a href="#">
                <h3 class="mt-0.5 text-lg text-white">Upcoming Events name</h3>
              </a>
            </div>
          </div>
        </article>
      </div>
    </Layout>
  );
};
export default StudentLandingPage;
