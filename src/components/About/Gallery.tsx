import Image from "next/image";
import galleryOne from "../../../public/images/products/gallery-1.jpg";
import galleryTwo from "../../../public/images/products/gallery-2.jpg";
import galleryThree from "../../../public/images/products/gallery-3.jpg";
import galleryFour from "../../../public/images/products/gallery-4.jpg";
import galleryFive from "../../../public/images/products/gallery-5.jpg";
import gallerySix from "../../../public/images/products/gallery-6.jpg";
import { Gallery } from "@/types/gallery";
import SectionTitle from "@/components/Common/SectionTitle";

const Images: Gallery[] = [
  { image: galleryOne },
  { image: galleryTwo },
  { image: galleryThree },
  { image: galleryFour },
  { image: galleryFive },
  { image: gallerySix },
];

const GalleryAbout = () => {
  return (
    <div className="bg-white">
      <SectionTitle
        titleColor="text-[#1e242e]"
        title="GALERÍA"
        paragraph="En Repsell Internacional, convertimos sus ideas en obras maestras de gran formato. Desde murales impresionantes hasta banners impactantes, nuestra impresión de gran formato eleva su visión al siguiente nivel. "
        center
      />
      <div className="mb-20 flex flex-wrap items-center justify-center gap-1">
        {Images.map((item, index) => (
          <div key={index} className=" w-1/4">
            <Image
              src={item.image}
              alt={`Gallery Image ${index + 1}`}
              width={380}
              height={380}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryAbout;
