import Image from "next/image";

interface HeroProps {
  mainSlider?: string;
  sideBanner1?: string;
  sideBanner2?: string;
}

const Hero = ({
  mainSlider = "/hero_banner_1.png",
  sideBanner1 = "/side_banner_1.png",
  sideBanner2 = "/side_banner_1.png",
}: HeroProps) => {
  return (
    <section className="bg-white py-4 md:py-6">
      <div className="container-custom grid grid-cols-12 gap-4 md:gap-6">
        {/* Main Slider */}
        <div className="col-span-12 lg:col-span-9 relative aspect-[2.1/1] md:aspect-[2.2/1] bg-gray-100 rounded-lg md:rounded-2xl overflow-hidden shadow-sm">
          <Image
            src={mainSlider}
            alt="Hero Banner"
            fill
            className="object-cover"
            priority
          />
          {/* Slider dots */}
          <div className="absolute bottom-3 md:bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5 md:gap-2">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className={`w-1.5 h-1.5 md:w-6 md:h-1.5 rounded-full ${i === 1 ? 'bg-[#FF5722]' : 'bg-white/80 shadow-sm'}`}></div>
            ))}
          </div>
        </div>

        {/* Side Banners */}
        <div className="col-span-12 lg:col-span-3 flex flex-row lg:flex-col gap-3 md:gap-6">
          <div className="relative flex-1 aspect-[1.2/1] lg:aspect-auto rounded-lg md:rounded-2xl overflow-hidden shadow-sm border border-gray-100">
            <Image
              src={sideBanner1}
              alt="Side Banner 1"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative flex-1 aspect-[1.2/1] lg:aspect-auto rounded-lg md:rounded-2xl overflow-hidden shadow-sm border border-gray-100">
            <Image
              src={sideBanner2}
              alt="Side Banner 2"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
