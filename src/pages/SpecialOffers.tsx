import React from "react";
import { useNavigate } from "react-router-dom";
import Room12 from "../assets/1 (12).jpeg";
import Room11 from "../assets/1 (11).jpeg";
import Room6 from "../assets/1 (6).jpeg";
import Room10 from "../assets/1 (10).jpeg";
const offers = [
  {
    id: "honeymoon-package",
    title: "Jumbo Package",
    image: Room10,
    description:
      "Make your trip unforgettable with our special package including:",
    price: 3500,
    duration: "3 nights",
    includes: [
      "Luxury  Suite Stay",
      "Candlelight Dinner",
      "Couple's Spa Treatment",
      "Champagne and Chocolate Setup",
      "Airport Transfers",
      "Breakfast in Bed",
    ],
    validTill: "December 31, 2025",
    discount: "20% off on regular rates",
  },
  {
    id: "family-vacation",
    title: "Family Vacation Package",
    image: Room11,
    description:
      "Create lasting memories with your family with our all-inclusive package:",
    price: 4500,
    duration: "4 nights",
    includes: [
      "Family Suite Accommodation",
      "Daily Breakfast & Dinner",
      "Kids Activities Program",
      "One Day Sightseeing Tour",
      "Family Photoshoot Session",
      "Welcome Gift for Kids",
    ],
    validTill: "August 31, 2025",
    discount: "15% off on regular rates",
  },
  {
    id: "weekend-getaway",
    title: "Weekend Getaway",
    image: Room12,
    description: "Perfect weekend escape with premium amenities:",
    price: 2500,
    duration: "2 nights",
    includes: [
      "Luxury Room Stay",
      "Breakfast and Dinner",
      "Evening Tea with Snacks",
      "One Adventure Activity",
      "Access to All Facilities",
      "Late Check-out",
    ],
    validTill: "June 30, 2025",
    discount: "10% off on regular rates",
  },
  {
    id: "summer-special",
    title: "Summer Special",
    image: Room6,
    description: "Beat the heat with our refreshing summer package:",
    price: 3000,
    duration: "3 nights",
    includes: [
      "Pool View Room",
      "All Meals Included",
      "Poolside BBQ Dinner",
      "Complimentary Beverages",
      "Spa Treatment",
      "Evening Entertainment",
    ],
    validTill: "May 31, 2025",
    discount: "25% off on regular rates",
  },
];

const SpecialOffers = () => {
  const navigate = useNavigate();

  const handleBookNow = (offerId: string) => {
    navigate("/booking", { state: { selectedOffer: offerId } });
  };

  return (
    <div className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center text-blue-700">
          Special Offers & Packages
        </h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Discover our exclusive packages designed to make your stay at Pebbles
          Stay even more special. Book now to avail these limited-time offers.
        </p>

        <div className="space-y-12">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-[1.02]"
            >
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative h-[300px] md:h-full">
                  <img
                    src={offer.image}
                    alt={offer.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-full font-semibold">
                    {offer.discount}
                  </div>
                </div>
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    {offer.title}
                  </h2>
                  <p className="text-gray-600 mb-4">{offer.description}</p>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-3">
                      Package Includes:
                    </h3>
                    <ul className="grid grid-cols-1 gap-2">
                      {offer.includes.map((item, index) => (
                        <li
                          key={index}
                          className="flex items-center text-gray-600"
                        >
                          <svg
                            className="w-5 h-5 mr-2 text-green-500"
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
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
                    <div>
                      <p className="text-gray-600">
                        Duration: {offer.duration}
                      </p>
                      <p className="text-gray-600">
                        Valid till: {offer.validTill}
                      </p>
                      <p className="text-2xl font-bold text-blue-600 mt-2">
                        ₹{offer.price}
                      </p>
                    </div>
                    <button
                      onClick={() => handleBookNow(offer.id)}
                      className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">
            Terms & Conditions
          </h2>
          <ul className="text-gray-600 space-y-2 max-w-2xl mx-auto">
            <li>• All packages are subject to availability</li>
            <li>• Prices are inclusive of taxes</li>
            <li>• Advance booking required</li>
            <li>• Cancellation policy applies</li>
            <li>• Offers cannot be combined with other promotions</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SpecialOffers;
