import repsell from "../../../public/images/hero/repsell-name.png";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 h-[100vh] overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        {/* Video background */}
        <div className="absolute inset-0 z-0 h-[2000px]">
          <video
            className="h-full w-full object-cover opacity-20"
            autoPlay
            loop
            muted
          >
            <source src="/images/video/repsell.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="hover:scale-99 relative z-10 flex flex-col items-center justify-center">
          <Image
            className="transition-transform duration-300 ease-in-out hover:scale-110"
            src={repsell}
            alt="repsell-naem"
            width={750}
            height={750}
          />
          <p className="border-b-2 font-serif text-3xl">
            Mas alla de la medalla
          </p>
        </div>

        {/* Content
        <div className="absolute right-0 top-0 z-[-1] opacity-30 lg:opacity-100">
          <svg
            width="450"
            height="556"
            viewBox="0 0 450 556"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 z-[-1] opacity-30 lg:opacity-100">
          <svg
            width="364"
            height="201"
            viewBox="0 0 364 201"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
          </svg>
        </div>
        */}
      </section>
    </>
  );
};

export default Hero;
