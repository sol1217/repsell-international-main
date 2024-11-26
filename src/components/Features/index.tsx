import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";
import Image from "next/image";
import prod from "../../../public/images/hero/products-text.png";

const Features = () => {
  return (
    <div className="bg-white ">
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="mb-10 flex items-center justify-center">
            <Image src={prod} alt="" height={300} width={300} />
          </div>
          <SectionTitle
            titleColor="text-[#191e2a]"
            paragraph="En REPSELL INTERNACIONAL, nos especializamos en ofrecer una amplia gama de productos diseñados para celebrar y reconocer los logros de manera única y memorable."
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
