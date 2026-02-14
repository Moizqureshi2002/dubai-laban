import Image from "next/image";
import HeroBG from "../../public/heroSectionBGDL.webp"
export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-white">
      <div className="max-w-[90%] mx-auto w-full px-6 grid md:grid-cols-2 gap-12 items-center">
        
        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Layers of Creamy Laban Delight
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-xl">
            Authentic, refreshing buttermilk made the traditional way and delivered fresh to your doorstep.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="px-6 py-3 bg-blue-800 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
              Order Now
            </button>
            <button className="px-6 py-3 border border-blue-800 text-blue-800 font-semibold rounded-lg hover:bg-blue-50 transition">
              Learn More
            </button>
          </div>
        </div>

        <div  className="relative w-full h-[400px] md:h-[500px]">
            <Image
            src={HeroBG}
            alt="Fresh traditional laban bottle"
            fill
            className="object-contain"
            priority
            />
        </div>

      </div>
    </section>
  );
}
