import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#F2F0FF] flex flex-col items-center justify-center px-4">
      <div className="max-w-7xl flex flex-col md:flex-row items-center">
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <p className="text-sm text-pink-500 mb-2">Best Furniture For Your Castle...</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            New Furniture Collection <br /> Trends in 2020
          </h1>
          <p className="text-gray-500 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in
            phasellus non in justo.
          </p>
          <button className="bg-pink-500 text-white py-2 px-6 rounded-md hover:bg-pink-600 transition">
            Shop Now
          </button>
        </div>

        {/* Right Content - Image and Discount Badge */}
        <div className="relative md:w-1/2 flex justify-center">
          <div className="relative w-full max-w-xs md:max-w-md">
            <Image
              src="/images/Shell-Shaped-Armchair-Pink-Velvet-Fabric-One-Seater-Sofa-for-Living-Room 1.png"
              alt="Pink Chair"
              width={400}
              height={400}
              className="w-full h-auto"
            />
            <div className="absolute top-5 right-0 bg-blue-500 text-white py-2 px-4 rounded-full">
              50% off
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Lamp Image */}
      <div className="absolute top-10 left-1 hidden md:block">
        <Image
          src="/images/image 32.png"
          alt="Lamp"
          width={150}
          height={150}
          className="w-auto h-auto"
        />
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-10 flex gap-2">
        <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
        <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
        <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
      </div>
    </section>
  );
};

export default HeroSection;
