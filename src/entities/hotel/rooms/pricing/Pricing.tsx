"use client";

import React from "react";
import { useOrganization } from "@clerk/nextjs";
import { Loader } from "@/shared/ui/Loader";
import { useParams } from "next/navigation";

export const Pricing = () => {
  const params = useParams();
  const roomId = String(params?.roomId);
  const { organization, isLoaded: orgLoaded } = useOrganization({
    memberships: true,
  });
  const orgId = organization?.id || "";

  if (!orgLoaded) {
    return <Loader />;
  }

  return (
    <div className="flex flex-col items-center justify-center container mx-auto py-10 shadow-lg border border-gray-300 rounded-xl min-h-screen w-[100vw] md:w-[80vw]">
      <h1 className="text-3xl font-bold mb-8">Room Pricing</h1>
    </div>
  );
};
