import React from "react";
import { useNavigate } from "react-router-dom";
import stayImage from "../assets/stay.jpg";
import Room6 from "../assets/1 (6).jpeg";
import Room8 from "../assets/1 (8).jpeg";
import Room10 from "../assets/1 (10).jpeg";
const rooms = [
  {
    id: "luxury-villa",
    name: "Luxury Pool Villa",
    image: Room6,
    description:
      "Experience ultimate luxury in our signature pool villa featuring a private infinity pool, garden views, and premium amenities. Perfect for families seeking an exclusive and memorable stay.",
    price: 2500,
    capacity: 6,
    amenities: [
      "Private Infinity Pool",
      "Garden View",
      "Free Wi-Fi",
      "Air Conditioning",
      "Fully Equipped Kitchen",
      "Private Garden",
      "24/7 Security",
      "Daily Housekeeping",
    ],
  },
  {
    id: "premium-villa",
    name: "Premium 3 BHK Villa",
    image: stayImage,
    description:
      "Luxurious 3 BHK villa with modern amenities and a private garden. Ideal for families or groups looking for a comfortable and spacious stay.",
    price: 5000,
    capacity: 8,
    amenities: [
      "Free Wi-Fi",
      "Air Conditioning",
      "Fully Equipped Kitchen",
      "Private Garden",
      "Parking Space",
      "24/7 Security",
      "Power Backup",
      "Daily Housekeeping",
    ],
  },
  {
    id: "duplex-suite",
    name: "Duplex Suite",
    image: Room8,
    description:
      "Elegant suite overlooking our beautiful gardens. Features a spacious bedroom, living area, and private balcony perfect for nature lovers.",
    price: 2000,
    capacity: 2,
    amenities: [
      "Garden View",
      "Private Balcony",
      "Free Wi-Fi",
      "Air Conditioning",
      "Mini Kitchen",
      "Room Service",
      "Sitting Area",
      "Daily Housekeeping",
    ],
  },
  {
    id: "family-suite",
    name: "Family Suite",
    image: Room10,
    description:
      "Spacious family suite with interconnected rooms, perfect for families with children. Includes a living area and dining space.",
    price: 4000,
    capacity: 4,
    amenities: [
      "Interconnected Rooms",
      "Living Area",
      "Free Wi-Fi",
      "Air Conditioning",
      "Mini Kitchen",
      "Kids Play Area",
      "Room Service",
      "Daily Housekeeping",
    ],
  },
];

const Rooms = () => {
  const navigate = useNavigate();

  const handleBookNow = (roomId: string) => {
    const selectedRoom = rooms.find((room) => room.id === roomId);
    console.log("Selected room:", selectedRoom);

    if (selectedRoom) {
      navigate("/booking", {
        state: {
          selectedRoom: roomId,
          roomDetails: selectedRoom,
          isOffer: false,
        },
      });
    }
  };

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-center text-blue-700">
          Pebbles Stay - Our Luxury Accommodations
        </h1>

        <div className="space-y-12">
          {rooms.map((room) => (
            <div
              key={room.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="flex items-center justify-center p-4">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="max-w-full max-h-[400px] w-auto h-auto rounded-lg"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-semibold mb-4">{room.name}</h2>
                  <p className="text-gray-600 mb-4">{room.description}</p>

                  <div className="mb-4">
                    <h3 className="text-lg font-medium mb-2">
                      Room Amenities:
                    </h3>
                    <ul className="grid grid-cols-2 gap-2">
                      {room.amenities.map((amenity) => (
                        <li
                          key={amenity}
                          className="text-gray-600 flex items-center"
                        >
                          <svg
                            className="w-4 h-4 mr-2 text-green-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          {amenity}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex justify-between items-center mt-6">
                    <div>
                      <p className="text-gray-600">
                        <span className="font-medium">Capacity:</span> Up to{" "}
                        {room.capacity} guests
                      </p>
                      <p className="text-2xl font-bold text-blue-600">
                        ₹{room.price}/night
                      </p>
                    </div>
                    <button
                      onClick={() => handleBookNow(room.id)}
                      className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social Media Links */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
          <div className="flex justify-center space-x-6">
            <a
              href="https://www.instagram.com/paradisegroups.official/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-600 hover:text-pink-700 transition-colors duration-300"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/people/Paradise-Groups/61563457773817/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 transition-colors duration-300"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rooms;
