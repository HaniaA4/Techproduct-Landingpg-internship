import { useState } from "react";

const images = [
  "/images/img3.png",
  "/images/img4.png",
  "/images/img1.png",
  "/images/img2.png"
];

export function ImageCarousel() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => setCurrent((current - 1 + images.length) % images.length);
  const nextSlide = () => setCurrent((current + 1) % images.length);

  return (
    <div className="relative w-full max-w-xl mx-auto px-16"> 
      <img
        src={images[current]}
        alt={`Slide ${current + 1}`}
        className="w-full h-[32rem] object-cover rounded-lg shadow"
      />
      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-100 hover:bg-gray-200 dark:bg-white/20 hover:dark:bg-white/30 rounded-full p-2 shadow z-10"
        aria-label="Previous"
      >
        &#8592;
      </button>
      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-100 hover:bg-gray-200 dark:bg-white/20 hover:dark:bg-white/30 rounded-full p-2 shadow z-10"
        aria-label="Next"
      >
        &#8594;
      </button>
      <div className="flex justify-center mt-2 gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full ${current === idx ? "bg-primary" : "bg-gray-200 dark:bg-gray-500"}`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
export default ImageCarousel;