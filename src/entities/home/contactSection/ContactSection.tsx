import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowUpRight, Flame, Hotel } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const ContactSection = () => {
  return (
    <div className="p-4 max-w-8xl mt-7 bg-blue-700 rounded-3xl">
      <div className="flex flex-col justify-center p-10 ">
        <div className="flex flex-col items-center justify-center mb-4">
          <div className="flex flex-col items-center justify-center mb-4 gap-4">
            <div>
              <p className="text-white">--Lorem ipsum dolor sit</p>
            </div>
            <div>
              <p className="text-white text-3xl font-bold text-center">
                Lorem ipsum dolor sit amet consectuer amet lorem
              </p>
            </div>
            <div className="md:w-1/2">
              <p className="text-white text-sm text-center ">
                lorem ipsum dolor sit amet consecteur lorem ipsum dolor sit amet
                consecteurlorem ipsum dolor sit amet consecteurlorem ipsum dolor
                sit amet consecteur
              </p>
            </div>
            <div className="md:w-1/3 lg:w-1/2 xl:w-1/3">
              <Button className="rounded-full w-full h-12" size={"lg"}>
                Contact us Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
