import React from "react";
import { Link } from "react-router-dom";

const BookingConfirmation = () => {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-2xl mx-auto text-center">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="mb-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-green-500"
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
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Booking Confirmed!
            </h1>
            <p className="text-gray-600">
              Thank you for your booking. We've sent a confirmation email with
              all the details.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold mb-4">Booking Details</h2>
            <div className="space-y-2 text-left">
              <div className="flex justify-between">
                <span>Booking Reference:</span>
                <span className="font-medium">#BOK12345</span>
              </div>
              <div className="flex justify-between">
                <span>Room Type:</span>
                <span className="font-medium">Deluxe Room</span>
              </div>
              <div className="flex justify-between">
                <span>Check-in:</span>
                <span className="font-medium">March 15, 2024</span>
              </div>
              <div className="flex justify-between">
                <span>Check-out:</span>
                <span className="font-medium">March 17, 2024</span>
              </div>
              <div className="flex justify-between">
                <span>Guests:</span>
                <span className="font-medium">2</span>
              </div>
              <div className="border-t pt-2 mt-2">
                <div className="flex justify-between">
                  <span className="font-semibold">Total Paid:</span>
                  <span className="font-semibold">$299.99</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-x-4">
            <Link
              to="/"
              className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmation;
