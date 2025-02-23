"use client";

import React from "react";
import { useOrganization } from "@clerk/nextjs";
import { Loader } from "@/shared/ui/Loader";
import UpdateTextArea from "@/shared/ui/UpdateTextArea";
import { Button } from "@/components/ui/button";
import { useParams } from "next/navigation";

export const Inclusions = () => {
  const params = useParams();
  const roomId = String(params?.roomId);
  console.log("Room ID:", roomId);

  const { organization, isLoaded: orgLoaded } = useOrganization({
    memberships: true,
  });
  const orgId = organization?.id || "";

  if (!orgLoaded) {
    return <Loader />;
  }

  return (
    <div className="flex flex-col items-center justify-center container mx-auto py-10 shadow-lg border border-gray-300 rounded-xl min-h-screen w-[100vw] md:w-[80vw]">
      <h1 className="text-3xl font-bold mb-8">Room Inclusions</h1>
      <Button>Add Inclusion</Button>
      <div className="space-y-4  w-2/5">
        <div className="space-y-4">
          <p className="text-lg">u</p>
          <UpdateTextArea
            id="description"
            value={""}
            onChange={(val) => {}}
            name="description"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
          />
          <Button variant={"destructive"} onClick={() => {}}>
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};
