"use client";
import { CreateOrganization, useAuth } from "@clerk/nextjs";
import { useEffect } from "react";

export default function CreateHotelPage() {
  const { userId } = useAuth();
  useEffect(() => {
    const handleCreateOrganization = async () => {
      try {
        const response = await fetch("/api/clerk/update-public-metadata", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ entity: "hotel", userId: userId }),
        });
        if (!response.ok) throw new Error("Update failed");
      } catch (error) {
        console.error(error);
        throw error; // Optional: Prevents redirect on error
      }
    };

    handleCreateOrganization();
  }, [userId]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <CreateOrganization
        skipInvitationScreen
        afterCreateOrganizationUrl="/hotel"
      />
    </div>
  );
}
