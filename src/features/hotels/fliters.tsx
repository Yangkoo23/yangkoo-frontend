"use client";

import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";

export default function Filters({
  onFilterChange,
}: {
  onFilterChange: (filters: any) => void;
}) {
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [rating, setRating] = useState(0);
  const [amenities, setAmenities] = useState<string[]>([]);

  const handlePriceChange = (value: number[]) => {
    setPriceRange(value);
    applyFilters();
  };

  const handleRatingChange = (value: number[]) => {
    setRating(value[0]);
    applyFilters();
  };

  const handleAmenityChange = (amenity: string, checked: boolean) => {
    if (checked) {
      setAmenities([...amenities, amenity]);
    } else {
      setAmenities(amenities.filter((a) => a !== amenity));
    }
    applyFilters();
  };

  const applyFilters = () => {
    onFilterChange({
      minPrice: priceRange[0],
      maxPrice: priceRange[1],
      rating: rating,
      amenities: amenities,
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-2">Price Range</h3>
        <Slider
          min={0}
          max={500}
          step={10}
          value={priceRange}
          onValueChange={handlePriceChange}
        />
        <div className="flex justify-between mt-2">
          <span>${priceRange[0]}</span>
          <span>${priceRange[1]}</span>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">Minimum Rating</h3>
        <Slider
          min={0}
          max={5}
          step={0.5}
          value={[rating]}
          onValueChange={handleRatingChange}
        />
        <span className="mt-2 block">{rating} stars</span>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">Amenities</h3>
        <div className="space-y-2">
          {[
            "pool",
            "spa",
            "gym",
            "restaurant",
            "bar",
            "wifi",
            "parking",
            "beach",
            "hiking",
          ].map((amenity) => (
            <div key={amenity} className="flex items-center">
              <Checkbox
                id={amenity}
                checked={amenities.includes(amenity)}
                onCheckedChange={(checked) =>
                  handleAmenityChange(amenity, checked as boolean)
                }
              />
              <label htmlFor={amenity} className="ml-2 capitalize">
                {amenity}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
