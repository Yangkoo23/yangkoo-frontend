"use client";
import React from "react";
import { useOrganization } from "@clerk/nextjs";
import { Loader } from "@/shared/ui/Loader";

export const RoomDetail = () => {
  const { organization, isLoaded: orgLoaded } = useOrganization({
    memberships: true,
  });
  const orgId = organization?.id || "";

  if (!orgLoaded) {
    return <Loader />;
  }

  return (
    <div className="flex flex-col items-center justify-center container mx-auto py-10 shadow-lg border border-gray-300 bg-gray-100 rounded-xl min-h-screen w-[100vw] md:w-[80vw]">
      <h1 className="text-3xl font-bold mb-8">Hotel Rooms</h1>
    </div>
  );
};
