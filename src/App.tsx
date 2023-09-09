import Header from "./components/Header";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import image1 from "/photos/img1.jpg";
import image2 from "/photos/img2.jpg";
import image3 from "/photos/img3.jpg";
import image4 from "/photos/img4.jpg";
import logo1 from "/logos/IAPR.png";
import logo2 from "/logos/INAOE.png";
import logo3 from "/logos/LNCS.jpeg";
import logo4 from "/logos/UV.png";
import { Autoplay } from "swiper/modules";
import "./Swiper.css";
function App() {
  const photos = [image1, image2, image3, image4];

  const InfiniteSlider = () => {
    return (
      <div className="relative flex h-min flex-col justify-center overflow-hidden bg-transparent py-6 sm:py-12">
        <div className="pointer-events-none relative mt-5 flex gap-10 overflow-hidden">
          <div className="animate-marquee flex min-w-full shrink-0 items-center justify-around gap-10 [animation-direction:reverse] ">
            <img
              className="max-w-[clamp(10rem,28vmin,20rem)] h-16"
              src={logo1}
              alt=""
            />
            <img
              className="max-w-[clamp(10rem,28vmin,20rem)] h-16"
              src={logo2}
              alt=""
            />
            <img
              className="max-w-[clamp(10rem,28vmin,20rem)] h-16"
              src={logo3}
              alt=""
            />
            <img
              className="max-w-[clamp(10rem,28vmin,20rem)] h-16"
              src={logo4}
              alt=""
            />
          </div>
          <div
            aria-hidden="true"
            className="animate-marquee flex min-w-full shrink-0 items-center justify-around gap-10 [animation-direction:reverse]"
          >
            <img
              className="max-w-[clamp(10rem,28vmin,20rem)] h-16"
              src={logo1}
              alt=""
            />
            <img
              className="max-w-[clamp(10rem,28vmin,20rem)] h-16"
              src={logo2}
              alt=""
            />
            <img
              className="max-w-[clamp(10rem,28vmin,20rem)] h-16"
              src={logo3}
              alt=""
            />
            <img
              className="max-w-[clamp(10rem,28vmin,20rem)] h-16"
              src={logo4}
              alt=""
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="bg-white">
        <Header />

        <div className="relative h-fit mx-6 max-w-screen min-h-[400px] max-h-[600px]">
          <div className="absolute flex flex-col rounded-3xl h-full w-full z-10 p-4 justify-between">
            <div>
              <p className="text-5xl text-white font-bold w-full max-w-lg">
                Mexican Conference on Pattern Recognition
              </p>

              <p className="text-xl font-bold text-white mt-4">
                June 21-24, 2024
              </p>
              <p className="text-lg font-bold text-white ">
                Xalapa, Veracruz, México
              </p>
            </div>
            <button className="bg-cyan-500 text-white text-base font-medium px-5 py-2 rounded-full self-center md:self-start">
              Get the eBook now
            </button>
          </div>
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            centeredSlides={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="rounded-3xl aspect-square min-h-[400px] max-h-[500px]"
          >
            {photos.map((photo, id) => (
              <SwiperSlide key={id} className="h-min-[450px] h-max-[500px]">
                <div className="h-full">
                  <img
                    src={photo}
                    alt=""
                    className="brightness-75 h-fit w-auto object-cover object-center"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <InfiniteSlider />
        <div className="flex flex-col lg:flex-row">
          <div className="rounded-3xl w-auto p-4 mx-6 bg-[#b7bffe] my-2 flex flex-col lg:mt-2 lg:my-0 lg:mb-0 lg:w-1/2">
            <h2 className="text-2xl font-bold text-[#111321]">
              About the congress
            </h2>
            <p className="text-lg my-4 text-[#111321]">
              The 16th Mexican Conference on Pattern Recognition (MCPR2024) will
              be held in Xalapa, Veracruz, Mexico, from June 20 to June 23,
              2024, under the direction of the Xalapa Technological Transfer
              Unit of the Center for Scientific and Higher Education Research of
              Ensenada, Baja California (CICESE-UT3), in collaboration with the
              Veracruzano Center for Innovation and Technology Transfer and the
              Coordination of Computational Sciences of the National Institute
              of Astrophysics, Optics and Electronics (INAOE), and with the
              consent of the International Association for Pattern Recognition
              (IAPR) and the Mexican Association for Computer Vision,
              Neurocomputing and Robotics (MACVNR), which is affiliated to the
              IAPR. MCPR2024 aims to provide a forum for the exchange of
              scientific results, experiences, and new knowledge, as well as
              promoting cooperation among research groups in Pattern Recognition
              and related areas in Mexico and around the world.
            </p>
            <button className="self-center w-3/4 px-6 py-3 text-lg bg-[#111321] text-white rounded-full">
              Previuos Editions
            </button>
          </div>
          <div className="rounded-3xl w-auto p-4 mx-6 bg-[#84c6d2] mt-4 mb-8 flex flex-col lg:mt-2 lg:my-0 lg:mb-0 lg:w-1/2">
            <h2 className="text-2xl font-bold text-[#04050d]">
              Important dates
            </h2>
            <img src="" alt="" />
            <ol className="relative border-l border-gray-200 dark:border-gray-700 mt-4 ml-4">
              <li className="mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-md font-normal leading-none text-[#222222]">
                  February 20, 2024
                </time>
                <h3 className="text-lg font-semibold text-[#04050d]">
                  Submission deadline
                </h3>
              </li>
              <li className="mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-md font-normal leading-none text-[#222222]">
                  March 27, 2024
                </time>
                <h3 className="text-lg font-semibold text-[#04050d]">
                  Notification
                </h3>
              </li>
              <li className="ml-4 mb-10">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-md font-normal leading-none text-[#222222]">
                  April 3, 2024
                </time>
                <h3 className="text-lg font-semibold text-[#04050d]">
                  Camera-ready due
                </h3>
              </li>
              <li className="mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-md font-normal leading-none text-[#222222]">
                  April 22, 2024
                </time>
                <h3 className="text-lg font-semibold text-[#04050d]">
                  Early bird registration
                </h3>
              </li>
              <li className="ml-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-md font-normal leading-none text-[#222222]">
                  June 21-24, 2024
                </time>
                <h3 className="text-lg font-semibold text-[#04050d]">
                  Main conference
                </h3>
              </li>
            </ol>
          </div>
        </div>
        <footer className="bg-white dark:bg-gray-900">
          <div className="mx-auto w-screen max-w-full">
            <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
              <div className="w-full">
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Links
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="#" className=" hover:underline">
                      Home
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Call for papers
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Paper Awards
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Keynote Speakers
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Student´s Meeting
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Info and Tours
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Program Committee
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Organization
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Submission Guidelines
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Fees for Authors
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Contact
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Ansel Y. Rodríguez González
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Congress organizer
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      ansel@cicese.edu.mx
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      mcpr2023@inaoep.mx{" "}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="px-4 py-6 bg-gray-100 dark:bg-gray-700 md:flex md:items-center md:justify-between">
              <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">
                © 2024{" "}
                <a
                  href="https://media.giphy.com/media/3oKIPnAiaMCws8nOsE/giphy.gif"
                  target="_blank"
                >
                  MCPR2024
                </a>
                . Todos los derechos reservados.
              </span>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
