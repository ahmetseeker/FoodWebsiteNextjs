"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const data = [
  {
    id: 1,
    title: "always fresh & always crispy & always hot",
    image: "/slide1.png",
  },
  {
    id: 2,
    title: "we deliver your order wherever you are in NY",
    image: "/slide2.png",
  },
  {
    id: 3,
    title: "the best pizza to share with your family",
    image: "/slide3.jpg",
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
      2000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row">
      <div className="flex-1 flex items-center justify-center flex-col gap-8 text-red-500 font-bold bg-fuchsia-50">
        <h1 className="text-5xl uppercase text-center p-4 md:text-6xl xl:text-7xl md:p-10">
          {data[currentSlide].title}
        </h1>
        <button className="bg-red-500 py-4 px-8 text-white rounded-sm">
          Order Now!
        </button>
      </div>
      <div className="flex-1 w-full relative">
        <Image
          src={data[currentSlide].image}
          className="object-cover"
          alt=""
          fill
        />
      </div>
    </div>
  );
};

export default Slider;
