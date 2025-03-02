import { DestinationGrid } from "@/components/destination-grid";
import { Button } from "@/components/ui/button";
import React from "react";

export const Destinations = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container py-12">
        {/* Experience Types */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="relative rounded-lg overflow-hidden group cursor-pointer">
            <img
              src="/placeholder.svg?height=200&width=300"
              alt="Beach Destinations"
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <span className="text-white font-semibold text-lg">
                Beach Getaways
              </span>
            </div>
          </div>
          <div className="relative rounded-lg overflow-hidden group cursor-pointer">
            <img
              src="/placeholder.svg?height=200&width=300"
              alt="Mountain Adventures"
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <span className="text-white font-semibold text-lg">
                Mountain Adventures
              </span>
            </div>
          </div>
          <div className="relative rounded-lg overflow-hidden group cursor-pointer">
            <img
              src="/placeholder.svg?height=200&width=300"
              alt="City Exploration"
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <span className="text-white font-semibold text-lg">
                City Exploration
              </span>
            </div>
          </div>
          <div className="relative rounded-lg overflow-hidden group cursor-pointer">
            <img
              src="/placeholder.svg?height=200&width=300"
              alt="Cultural Experiences"
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <span className="text-white font-semibold text-lg">
                Cultural Experiences
              </span>
            </div>
          </div>
        </div>

        <DestinationGrid />
      </div>
    </div>
  );
};
