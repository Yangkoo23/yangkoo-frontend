"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Hotel } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div
        className="relative h-[70vh] bg-cover bg-center flex flex-col items-center justify-center text-white rounded-3xl mt-7"
        style={{
          backgroundImage: `url('home/hero_image.webp')`, // Replace with your hero image path
        }}
      >
        <div className="text-center space-y-4 ">
          <h1 className="text-4xl md:text-6xl font-bold">
            Find Your Perfect Stay
          </h1>
          <p className="text-lg md:text-2xl">
            Book hotels, apartments, and more around the world.
          </p>
        </div>

        {/* Booking Interface */}
        <div className="p-1 backdrop-blur-xl bg-white/20 shadow-lg rounded-t-lg  max-w-5xl mx-auto space-y-4 md:mt-32">
          <div className="flex flex-wrap flex-col justify-between items-center space-y-4 md:space-y-0">
            <div>
              <Button variant={"ghost"}>
                <Hotel />
                Hotels
              </Button>
            </div>
          </div>
        </div>
        <div className="p-6 backdrop-blur-xl bg-white/20 shadow-lg rounded-2xl  max-w-5xl mx-auto space-y-4 ">
          <div className="flex flex-wrap flex-col justify-between items-center space-y-4 md:space-y-0">
            <div>
              <Input
                className="bg-white rounded-full w-[300px] md:w-[930px] h-12 text-black"
                placeholder="Destination"
              />
            </div>
            <div className="flex flex-col md:flex-row gap-4 ">
              <div className="flex flex-row mt-4 gap-4">
                <Input
                  className="bg-white rounded-full w-[150px] md:w-[300px] h-12 text-black"
                  placeholder="Check-in"
                />
                <Input
                  className="bg-white rounded-full w-[150px] md:w-[300px] h-12 text-black "
                  placeholder="Check-out"
                />
              </div>
              <div className="mt-4 items-center">
                <Input
                  className="bg-white rounded-full w-[300px] md:w-[300px] h-12 text-black  "
                  placeholder="Guests"
                />
              </div>
            </div>
            <div>
              <Button
                variant={"default"}
                className="mt-4 w-72 h-12 md:w-96 rounded-full"
                asChild
              >
                <Link href="/hotels">Search</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
