"use client";

import UpdateInput from "@/shared/ui/UpdateInput";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const OverView = () => {
  return (
    <div className="flex flex-col items-center justify-center container mx-auto py-10 border border-red-600 min-h-screen md:w-[80vw]">
      <h1 className="text-3xl font-bold mb-8">Overview</h1>
      <div className="w-full max-w-md space-y-4">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="hotelName"
            className="text-lg font-medium text-gray-700"
          >
            Hotel Name
          </label>
          <UpdateInput
            id="hotelName"
            name="name"
            value="Hotel Name"
            onChange={(value) => console.log(value)}
            placeholder="Enter hotel name"
            type="text"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="hotelName"
            className="text-lg font-medium text-gray-700"
          >
            Location
          </label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="system">System</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};
