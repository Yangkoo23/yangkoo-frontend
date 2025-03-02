"use client";

import { MapPin, Calendar, ThermometerSun } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const destinations = [
  {
    id: 1,
    name: "Santorini, Greece",
    image: "/placeholder.svg?height=400&width=600",
    description:
      "Discover the iconic white-washed buildings and stunning sunsets of this Mediterranean paradise.",
    region: "Europe",
    bestTime: "April to October",
    climate: "Mediterranean",
    activities: ["Island Hopping", "Wine Tasting", "Beach", "Photography"],
  },
  {
    id: 2,
    name: "Kyoto, Japan",
    image: "/placeholder.svg?height=400&width=600",
    description:
      "Experience the perfect blend of traditional culture and modern Japanese life in ancient temples and gardens.",
    region: "Asia",
    bestTime: "March to May",
    climate: "Temperate",
    activities: [
      "Temple Visits",
      "Tea Ceremony",
      "Garden Tours",
      "Cultural Shows",
    ],
  },
  {
    id: 3,
    name: "Machu Picchu, Peru",
    image: "/placeholder.svg?height=400&width=600",
    description:
      "Explore the ancient Incan citadel set high in the Andes Mountains.",
    region: "South America",
    bestTime: "May to October",
    climate: "Alpine",
    activities: [
      "Hiking",
      "Archaeological Tours",
      "Photography",
      "Cultural Experience",
    ],
  },
  {
    id: 4,
    name: "Banff National Park, Canada",
    image: "/placeholder.svg?height=400&width=600",
    description:
      "Experience the majestic Rocky Mountains and pristine lakes in this stunning national park.",
    region: "North America",
    bestTime: "June to August",
    climate: "Alpine",
    activities: ["Hiking", "Skiing", "Wildlife Viewing", "Photography"],
  },
  {
    id: 5,
    name: "Maldives",
    image: "/placeholder.svg?height=400&width=600",
    description:
      "Relax in overwater bungalows surrounded by crystal clear waters and coral reefs.",
    region: "Asia",
    bestTime: "November to April",
    climate: "Tropical",
    activities: ["Snorkeling", "Diving", "Beach", "Water Sports"],
  },
  {
    id: 6,
    name: "Safari, Tanzania",
    image: "/placeholder.svg?height=400&width=600",
    description:
      "Witness the incredible wildlife and natural beauty of the Serengeti.",
    region: "Africa",
    bestTime: "June to October",
    climate: "Tropical Savanna",
    activities: ["Wildlife Safari", "Photography", "Cultural Tours", "Camping"],
  },
  {
    id: 7,
    name: "Great Barrier Reef, Australia",
    image: "/placeholder.svg?height=400&width=600",
    description:
      "Dive into the world's largest coral reef system and discover amazing marine life.",
    region: "Oceania",
    bestTime: "June to October",
    climate: "Tropical",
    activities: ["Diving", "Snorkeling", "Island Hopping", "Boat Tours"],
  },
  {
    id: 8,
    name: "Tuscany, Italy",
    image: "/placeholder.svg?height=400&width=600",
    description:
      "Immerse yourself in the art, culture, and cuisine of this historic Italian region.",
    region: "Europe",
    bestTime: "April to October",
    climate: "Mediterranean",
    activities: [
      "Wine Tasting",
      "Art Tours",
      "Cooking Classes",
      "Countryside Tours",
    ],
  },
];

export function DestinationGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {destinations.map((destination) => (
        <div
          key={destination.id}
          className="group rounded-lg overflow-hidden border bg-card text-card-foreground shadow-sm transition-all hover:shadow-md"
        >
          <div className="relative aspect-[4/3] overflow-hidden">
            <img
              src={destination.image || "/placeholder.svg"}
              alt={destination.name}
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="p-4">
            <h3 className="text-xl font-semibold tracking-tight mb-2">
              {destination.name}
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              {destination.description}
            </p>

            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>{destination.region}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>Best Time: {destination.bestTime}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <ThermometerSun className="h-4 w-4" />
                <span>{destination.climate} Climate</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {destination.activities.map((activity) => (
                <span
                  key={activity}
                  className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                >
                  {activity}
                </span>
              ))}
            </div>

            <Button asChild className="w-full">
              <Link href={`/destinations/${destination.id}`}>
                Explore Destination
              </Link>
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
