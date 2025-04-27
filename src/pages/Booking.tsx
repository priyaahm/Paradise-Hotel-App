import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";

interface BookingForm {
  checkIn: string;
  checkOut: string;
  guests: number;
  roomType: string;
  name: string;
  email: string;
  phone: string;
  specialRequests: string;
}

interface LocationState {
  selectedRoom?: string;
  selectedOffer?: string;
  isOffer?: boolean;
  roomDetails?: RoomType | OfferType;
}

interface RoomType {
  id: string;
  name: string;
  price: number;
  description: string;
  capacity: number;
}

interface OfferType {
  id: string;
  name: string;
  price: number;
  duration: string;
  capacity: number;
}

const roomTypes: RoomType[] = [
  {
    id: "luxury-villa",
    name: "Luxury Pool Villa",
    price: 2500,
    description: "Luxury villa with private pool",
    capacity: 6,
  },
  {
    id: "premium-villa",
    name: "Premium 3 BHK Villa",
    price: 5000,
    description: "Spacious villa with modern amenities",
    capacity: 8,
  },
  {
    id: "duplex-suite",
    name: "Duplex Suite",
    price: 2000,
    description: "Elegant suite with garden view",
    capacity: 2,
  },
  {
    id: "jumbo-package",
    name: "Jumbo Package",
    price: 3500,
    description: "Perfect for families",
    capacity: 4,
  },
  {
    id: "family-vacation",
    name: "Family Vacation Package",
    price: 4500,
    description: "Romantic suite for couples",
    capacity: 6,
  },
];

const offers: OfferType[] = [
  {
    id: "weekend-getaway",
    name: "Weekend Getaway",
    price: 2500,
    duration: "3 nights",
    capacity: 2,
  },
  {
    id: "family-vacation",
    name: "Family Vacation Package",
    price: 4500,
    duration: "4 nights",
    capacity: 6,
  },
  {
    id: "weekend-getaway",
    name: "Weekend Getaway",
    price: 2500,
    duration: "2 nights",
    capacity: 4,
  },
  {
    id: "summer-special",
    name: "Summer Special",
    price: 3000,
    duration: "3 nights",
    capacity: 4,
  },
];

const Booking = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const {
    selectedRoom,
    selectedOffer,
    isOffer: locationIsOffer,
    roomDetails,
  } = (location.state as LocationState) || {};

  const [isOffer, setIsOffer] = useState(locationIsOffer || false);
  const [selectedDetails, setSelectedDetails] = useState<
    RoomType | OfferType | undefined
  >(roomDetails || roomTypes[0]);

  const { control, handleSubmit, watch, setValue } = useForm<BookingForm>({
    defaultValues: {
      checkIn: new Date().toISOString().split("T")[0],
      checkOut: new Date(Date.now() + 24 * 60 * 60 * 1000)
        .toISOString()
        .split("T")[0],
      guests: 1,
      roomType: selectedRoom || "luxury-villa",
      name: "",
      email: "",
      phone: "",
      specialRequests: "",
    },
  });

  useEffect(() => {
    if (!selectedRoom && !selectedOffer) {
      setValue("roomType", "luxury-villa");
      setSelectedDetails(roomTypes[0]);
    }
  }, [selectedRoom, selectedOffer, setValue]);

  useEffect(() => {
    if (roomDetails) {
      setSelectedDetails(roomDetails);
      setValue("roomType", roomDetails.id);
    } else if (selectedRoom) {
      const foundRoom = roomTypes.find((room) => room.id === selectedRoom);
      if (foundRoom) {
        setSelectedDetails(foundRoom);
        setValue("roomType", foundRoom.id);
      }
    }
  }, [selectedRoom, roomDetails, setValue]);

  useEffect(() => {
    if (selectedOffer) {
      setIsOffer(true);
      setValue("roomType", selectedOffer);
      const offer = offers.find((o) => o.id === selectedOffer);
      if (offer) {
        setSelectedDetails(offer);
      }
    }
  }, [selectedOffer, setValue]);

  const selectedType = watch("roomType");

  useEffect(() => {
    if (selectedType) {
      const details = isOffer
        ? offers.find((offer) => offer.id === selectedType)
        : roomTypes.find((room) => room.id === selectedType);
      if (details) {
        setSelectedDetails(details);
      }
    }
  }, [selectedType, isOffer]);

  useEffect(() => {
    if (!selectedDetails) {
      setSelectedDetails(roomTypes[0]);
      setValue("roomType", roomTypes[0].id);
    }
  }, []);

  const getOptionDescription = (option: RoomType | OfferType) => {
    return isOffer
      ? (option as OfferType).duration
      : (option as RoomType).description;
  };

  const onSubmit = (data: BookingForm) => {
    navigate("/payment", {
      state: {
        bookingDetails: {
          ...data,
          isOffer,
          roomName: selectedDetails?.name,
          price: selectedDetails?.price,
          duration:
            isOffer && selectedDetails
              ? (selectedDetails as OfferType).duration
              : undefined,
        },
      },
    });
  };

  if (!selectedDetails) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-blue-600">Loading...</h1>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-center text-blue-700">
          {isOffer ? "Package Booking" : "Room Booking"}
        </h1>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="mb-6 bg-blue-50 p-4 rounded-lg">
            <h2 className="text-xl font-semibold text-blue-800 mb-2">
              Selected {isOffer ? "Package" : "Room"}: {selectedDetails.name}
            </h2>
            <p className="text-gray-600">
              Price: ₹{selectedDetails.price}
              {isOffer ? " / package" : " / night"}
            </p>
            <p className="text-gray-600">
              Maximum Capacity: {selectedDetails.capacity} guests
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <Controller
                  name="name"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="text"
                      className="w-full p-2 border rounded-md bg-white text-gray-900 placeholder-gray-500"
                      placeholder="Enter your full name"
                    />
                  )}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <Controller
                  name="email"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="email"
                      className="w-full p-2 border rounded-md bg-white text-gray-900 placeholder-gray-500"
                      placeholder="Enter your email"
                    />
                  )}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <Controller
                  name="phone"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="tel"
                      className="w-full p-2 border rounded-md bg-white text-gray-900 placeholder-gray-500"
                      placeholder="Enter your phone number"
                    />
                  )}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Number of Guests *
                </label>
                <Controller
                  name="guests"
                  control={control}
                  render={({ field }) => (
                    <input
                      type="number"
                      {...field}
                      min={1}
                      max={selectedDetails?.capacity || 8}
                      className="w-full p-2 border rounded-md bg-white text-gray-900"
                    />
                  )}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Check-in Date *
                </label>
                <Controller
                  name="checkIn"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="date"
                      className="w-full p-2 border rounded-md bg-white text-gray-900"
                      min={new Date().toISOString().split("T")[0]}
                    />
                  )}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Check-out Date *
                </label>
                <Controller
                  name="checkOut"
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="date"
                      className="w-full p-2 border rounded-md bg-white text-gray-900"
                      min={
                        new Date(Date.now() + 24 * 60 * 60 * 1000)
                          .toISOString()
                          .split("T")[0]
                      }
                    />
                  )}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {isOffer ? "Select Package" : "Select Room Type"}
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {(isOffer ? offers : roomTypes).map((option) => (
                  <div key={option.id} className="relative">
                    <Controller
                      name="roomType"
                      control={control}
                      render={({ field }) => (
                        <label
                          className={`block p-4 border rounded-lg cursor-pointer transition-all ${
                            field.value === option.id
                              ? "border-blue-500 bg-blue-50"
                              : "border-gray-200 hover:border-blue-300"
                          }`}
                        >
                          <input
                            type="radio"
                            className="sr-only"
                            {...field}
                            value={option.id}
                            checked={field.value === option.id}
                          />
                          <h3 className="text-lg font-semibold">
                            {option.name}
                          </h3>
                          <p className="text-gray-600 text-sm mt-1">
                            {getOptionDescription(option)}
                          </p>
                          <p className="text-blue-600 font-semibold mt-2">
                            ₹{option.price}
                            {isOffer ? " / package" : " / night"}
                          </p>
                        </label>
                      )}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Special Requests
              </label>
              <Controller
                name="specialRequests"
                control={control}
                render={({ field }) => (
                  <textarea
                    {...field}
                    className="w-full p-2 border rounded-md h-24 bg-white text-gray-900 placeholder-gray-500"
                    placeholder="Any special requests or preferences..."
                  />
                )}
              />
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">
                Booking Summary
              </h3>
              <div className="space-y-2">
                <p className="text-gray-600">
                  <span className="font-medium">
                    {isOffer ? "Package" : "Room"}:
                  </span>{" "}
                  {selectedDetails?.name}
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">Price:</span> ₹
                  {selectedDetails?.price}
                  {isOffer ? " / package" : " / night"}
                </p>
                {isOffer && selectedDetails && (
                  <p className="text-gray-600">
                    <span className="font-medium">Duration:</span>{" "}
                    {(selectedDetails as OfferType).duration}
                  </p>
                )}
                <p className="text-gray-600">
                  <span className="font-medium">Max Capacity:</span>{" "}
                  {selectedDetails?.capacity} guests
                </p>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors"
              >
                Proceed to Payment
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Booking;
