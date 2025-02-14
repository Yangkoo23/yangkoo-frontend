import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { PhotoView } from "react-photo-view";
import { Upload } from "lucide-react"; // Importing an icon

export function HotelImages() {
  return (
    <>
      <label
        htmlFor="hotelImages"
        className="text-lg font-medium text-gray-700"
      >
        Hotel Images
      </label>

      <div className="flex flex-col border border-gray-400 rounded-lg p-4">
        <div className="grid grid-cols-2 gap-4">
          <PhotoView src="https://plus.unsplash.com/premium_photo-1661964071015-d97428970584?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWx8ZW58MHx8MHx8fDA%3D">
            <Image
              src="https://plus.unsplash.com/premium_photo-1661964071015-d97428970584?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWx8ZW58MHx8MHx8fDA%3D"
              alt=""
              width={150}
              height={150}
              className="rounded-xl"
            />
          </PhotoView>
          <PhotoView src="https://plus.unsplash.com/premium_photo-1661929519129-7a76946c1d38?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aG90ZWx8ZW58MHx8MHx8fDA%3D">
            <Image
              src="https://plus.unsplash.com/premium_photo-1661929519129-7a76946c1d38?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aG90ZWx8ZW58MHx8MHx8fDA%3D"
              alt=""
              width={150}
              height={150}
              className="rounded-xl"
            />
          </PhotoView>
        </div>
        <div className="flex flex-col justify-center mt-4">
          {/* Hidden File Input */}
          <Input id="hotelImages" type="file" className="hidden" />

          {/* Styled Upload Button */}
          <label
            htmlFor="hotelImages"
            className="flex items-center justify-center gap-2 cursor-pointer px-4 py-2 bg-primary text-white font-medium rounded-lg shadow-md  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all"
          >
            <Upload className="w-5 h-5" />
            Upload Images
          </label>
        </div>
      </div>
    </>
  );
}
