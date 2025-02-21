"use client";
import React from "react";
import { useOrganization } from "@clerk/nextjs";
import { Loader } from "@/shared/ui/Loader";
import UpdateInput from "@/shared/ui/UpdateInput";
import { useHotelRoom, useUpdateHotelRoom } from "../hooks";
import { useParams } from "next/navigation";

export const RoomDetail = () => {
  const params = useParams();
  const roomId = String(params?.roomId); // Ensure the key matches the dynamic segment in your route

  console.log("Room ID:", roomId);
  const { organization, isLoaded: orgLoaded } = useOrganization({
    memberships: true,
  });
  const orgId = organization?.id || "";
  const { room, isLoading } = useHotelRoom(roomId);
  const { updateHotelRoom } = useUpdateHotelRoom();

  const onUpdateRoomType = (roomType: string) => {
    updateHotelRoom({
      id: roomId,
      room_type: roomType,
    });
  };
  if (!orgLoaded || isLoading) {
    return <Loader />;
  }

  return (
    <div className="flex flex-col items-center justify-center container mx-auto py-10 shadow-lg border border-gray-300 bg-gray-100 rounded-xl min-h-screen w-[100vw] md:w-[80vw]">
      <h1 className="text-3xl font-bold mb-8">Room Detail</h1>
      <div className="w-full max-w-md space-y-4">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="roomType"
            className="text-lg font-medium text-gray-700"
          >
            Room Type
          </label>
          <UpdateInput
            id="roomType"
            name="roomType"
            value={room.room_type}
            onChange={onUpdateRoomType}
            placeholder="Enter Room Type"
            type="text"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>
    </div>
  );
};
