import {
  Star,
  Wifi,
  ParkingMeterIcon as Parking,
  PocketIcon as Pool,
  SpadeIcon as Spa,
  Dumbbell,
  UtensilsCrossed,
  Wine,
  Waves,
  Mountain,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface Hotel {
  id: number;
  name: string;
  price: number;
  rating: number;
  amenities: string[];
  description: string;
}

const amenityIcons: { [key: string]: React.ReactNode } = {
  wifi: <Wifi className="w-4 h-4" />,
  parking: <Parking className="w-4 h-4" />,
  pool: <Pool className="w-4 h-4" />,
  spa: <Spa className="w-4 h-4" />,
  gym: <Dumbbell className="w-4 h-4" />,
  restaurant: <UtensilsCrossed className="w-4 h-4" />,
  bar: <Wine className="w-4 h-4" />,
  beach: <Waves className="w-4 h-4" />,
  hiking: <Mountain className="w-4 h-4" />,
};

export default function HotelCard({ hotel }: { hotel: Hotel }) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg flex flex-col md:flex-row mt-4">
      <div className="md:w-1/3">
        <img
          src={`hotels/hotel_placeholder.webp`}
          alt={hotel.name}
          className="w-full h-64 md:h-full object-cover"
        />
      </div>
      <div className="p-6 md:w-2/3 flex flex-col">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-2xl font-semibold">{hotel.name}</h2>
          <div className="flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
            <Star className="w-5 h-5 text-yellow-400 mr-1 fill-current" />
            <span className="font-semibold">{hotel.rating}</span>
          </div>
        </div>
        <p className="text-gray-600 mb-4 flex-grow">{hotel.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {hotel.amenities.map((amenity) => (
            <span
              key={amenity}
              className="flex items-center bg-gray-200 px-3 py-1 rounded-full text-sm"
            >
              {amenityIcons[amenity]}
              <span className="ml-1 capitalize">{amenity}</span>
            </span>
          ))}
        </div>
        <div className="flex justify-between items-center">
          <p className="text-2xl font-bold">
            ${hotel.price}{" "}
            <span className="text-sm font-normal text-gray-600">/ night</span>
          </p>
          <Button>Book Now</Button>
        </div>
      </div>
    </div>
  );
}
