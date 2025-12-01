import React from "react";
import Containner from "./Container";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="py-16 md:py-4 rounded-lg  flex items-center justify-between">
      <div className="flex items-center gap-10  flex-col md:flex-row w-full">
        <div className="flex flex-col gap-6 flex-1 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-bold">
            <span className="text-shop_dark_green">Eco</span>-Friendly Products
            for a<span className="text-shop_light_green"> Better Tomorrow</span>
          </h1>
          <p className="text-sm text-gray-500">
            Shop our sustainable collection and make a positive impact on the
            planet with every purchase.
          </p>
          <Link href={"/shop"} className="m-auto md:m-0 w-full">
            <Button className="p-6 w-[75%] md:w-[45%]  bg-shop_light_green hover:bg-green-500 hover:cursor-pointer  hoverEffect  font-semibold text-xl">
              Shop Now
            </Button>
          </Link>
        </div>

        <div className="relative w-full h-64 md:w-1/2 md:h-100">
          <Image
            src="/asset/hero-img.jpg"
            alt="Hero Image with Friendly Products"
            fill
            className="w-lg h-auto rounded-lg shadow-lg"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
