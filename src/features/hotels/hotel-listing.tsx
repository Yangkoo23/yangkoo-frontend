"use client";

import { useState } from "react";
import HotelCard from "./hotel-card";
import Filters from "./fliters";

// Dummy data for hotels
const hotels = [
  {
    id: 1,
    name: "Luxury Resort",
    price: 250,
    rating: 4.5,
    amenities: ["pool", "spa", "gym"],
    description:
      "Experience unparalleled luxury at our resort. Nestled in lush tropical gardens with breathtaking ocean views, our resort offers world-class amenities including a full-service spa, state-of-the-art fitness center, and infinity pool. Indulge in gourmet dining at our award-winning restaurants or relax in your spacious, elegantly appointed room. Perfect for both romantic getaways and family vacations.",
  },
  {
    id: 2,
    name: "City Center Hotel",
    price: 150,
    rating: 4,
    amenities: ["restaurant", "bar"],
    description:
      "Located in the heart of the city, our hotel puts you steps away from major attractions, shopping, and dining. Enjoy modern, comfortable rooms with city views, high-speed Wi-Fi, and premium bedding. Our on-site restaurant serves local and international cuisine, while our stylish bar is perfect for evening cocktails. Ideal for business travelers and urban explorers alike.",
  },
  {
    id: 3,
    name: "Budget Inn",
    price: 80,
    rating: 3,
    amenities: ["wifi", "parking"],
    description:
      "Affordable comfort without compromising on essentials. Our Budget Inn offers clean, cozy rooms with comfortable beds, free Wi-Fi, and complimentary parking. While we keep things simple, you'll find everything you need for a pleasant stay. Conveniently located near public transport and local eateries, it's perfect for budget-conscious travelers looking for value.",
  },
  {
    id: 4,
    name: "Beachfront Paradise",
    price: 300,
    rating: 5,
    amenities: ["beach", "pool", "spa"],
    description:
      "Step into paradise at our beachfront resort. Wake up to the sound of waves and enjoy direct access to pristine white sand beaches. Our resort features luxurious rooms with private balconies, multiple infinity pools overlooking the ocean, and a world-class spa offering rejuvenating treatments. Indulge in fresh seafood at our beachside restaurant or try exciting water sports. The perfect destination for a dream beach vacation.",
  },
  {
    id: 5,
    name: "Mountain Lodge",
    price: 200,
    rating: 4,
    amenities: ["hiking", "restaurant"],
    description:
      "Escape to the serenity of the mountains at our rustic yet comfortable lodge. Surrounded by breathtaking natural beauty, our lodge offers cozy rooms with stunning mountain views. Enjoy hiking trails right at your doorstep, gather around the fireplace in our grand lounge, or savor hearty mountain cuisine at our restaurant. Perfect for nature lovers and those seeking a peaceful retreat.",
  },
];

export default function HotelListing() {
  const [filteredHotels, setFilteredHotels] = useState(hotels);

  const applyFilters = (filters: any) => {
    const filtered = hotels.filter((hotel) => {
      return (
        hotel.price >= filters.minPrice &&
        hotel.price <= filters.maxPrice &&
        hotel.rating >= filters.rating &&
        (filters.amenities.length === 0 ||
          filters.amenities.every((amenity: string) =>
            hotel.amenities.includes(amenity)
          ))
      );
    });
    setFilteredHotels(filtered);
  };

  return (
    <div className="flex flex-col md:flex-row gap-8">
      <div className="w-full md:w-[300px] md:mr-10">
        <Filters onFilterChange={applyFilters} />
      </div>
      <div className="w-full md:w-3/4">
        <div className="space-y-6">
          {filteredHotels.map((hotel) => (
            <HotelCard key={hotel.id} hotel={hotel} />
          ))}
        </div>
      </div>
    </div>
  );
}
