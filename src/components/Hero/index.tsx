import repsell from "../../../public/images/hero/repsell-name.png";
import repsellDark from "../../../public/images/hero/repsell-name-dark.png";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 flex h-[100vh] items-center justify-center overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        <div className="video-repsell absolute inset-0 z-0 h-[2000px] ">
          <video
            className=" h-full w-full object-cover opacity-60 dark:opacity-15"
            autoPlay
            loop
            playsInline
            muted
          >
            <source src="/images/video/repsell.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="hover:scale-99 relative z-10 flex flex-col items-center justify-center">
          <Image
            className="repsell-name hidden transition-transform duration-300 ease-in-out hover:scale-110 dark:block"
            src={repsell}
            alt="repsell-naem"
            width={850}
            height={850}
          />

          <Image
            src={repsellDark}
            alt="dark"
            width={850}
            height={850}
            className="repsell-name  transition-transform duration-300 ease-in-out hover:scale-110 dark:block dark:hidden"
          />
          <div className="border-b-2 font-serif text-3xl ">
            Más allá de la medalla
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
