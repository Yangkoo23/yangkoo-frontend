import HotelListing from "@/features/hotels/hotel-listing";

export default function Page() {
  return (
    <main className="w-full container mx-auto px-4 py-8">
      {" "}
      {/* Updated to w-full for full width */}
      <h1 className="text-3xl font-bold mb-8">Find Your Perfect Stay</h1>
      <HotelListing />
    </main>
  );
}
