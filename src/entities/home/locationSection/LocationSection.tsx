import { ArrowUpRight, Flame } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const images = [
  {
    name: "Thimphu",
    src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
    width: 500,
    height: 500,
  },

  {
    name: "Paro",
    src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg",
    width: 500,
    height: 500,
  },
  {
    name: "Wangdue Phodrang",
    src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg",
    width: 500,
    height: 500,
  },
  {
    name: "Punakha",
    src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg",
    width: 500,
    height: 500,
  },
  {
    name: "Samtse",
    src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg",
    width: 500,
    height: 500,
  },
  {
    name: "Haa",
    src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg",
    width: 500,
    height: 500,
  },
];
export const LocationSection = () => {
  return (
    <div className="p-4 max-w-8xl mt-7">
      <div>
        <div className="flex flex-col items-center justify-center mb-4">
          <h3 className="text-4xl md:text-6xl font-bold">Trending Locations</h3>
        </div>
        <div className="flex justify-center">
          <div className="columns-2 gap-4 md:columns-3 sm:columns-1">
            {images.map((img, index) => (
              <div key={index} className="relative overflow-hidden rounded-xl">
                <Image
                  key={index}
                  src={img.src}
                  alt=""
                  className="mb-4 w-full rounded-3xl"
                  width={img.width}
                  height={img.height}
                />
                <div className="absolute inset-0 flex flex-col justify-end p-4 gap-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-white text-lg font-semibold">
                      {img.name}
                    </h3>
                    <Flame className="text-red-500" />
                  </div>
                  <p className="text-white text-sm">
                    Lorem ipsum dolor sit amet consectetur...
                  </p>
                  <div className="bg-white rounded-full p-2 mb-2 w-12 flex justify-center">
                    <Link
                      href="/home/destinations"
                      className="mt-2 inline-flex items-center text-primary"
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
