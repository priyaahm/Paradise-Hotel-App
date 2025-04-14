import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import dayjs from "dayjs";

interface RazorpayOptions {
  key: string;
  amount: number;
  currency: string;
  name: string;
  description: string;
  image: string;
  handler: (response: RazorpayResponse) => void;
  prefill: {
    name: string;
    email: string;
    contact: string;
  };
  theme: {
    color: string;
  };
}

interface RazorpayResponse {
  razorpay_payment_id: string;
  razorpay_order_id?: string;
  razorpay_signature?: string;
}

interface BookingDetails {
  checkIn: Date;
  checkOut: Date;
  guests: number;
  roomType: string;
  roomName: string;
  price: number;
}

interface LocationState {
  bookingDetails?: BookingDetails;
}

declare global {
  interface Window {
    Razorpay: new (options: RazorpayOptions) => { open: () => void };
  }
}

const Payment = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { bookingDetails } = (location.state as LocationState) || {};
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const calculateNights = () => {
    if (!bookingDetails) return 1;
    const checkIn = dayjs(bookingDetails.checkIn);
    const checkOut = dayjs(bookingDetails.checkOut);
    return checkOut.diff(checkIn, "day");
  };

  const nights = calculateNights();
  const amount = (bookingDetails?.price || 0) * nights * 100; // Convert to paise

  useEffect(() => {
    if (!bookingDetails) {
      navigate("/booking");
      return;
    }

    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => setScriptLoaded(true);
    script.onerror = () => setError("Failed to load payment system");
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handlePayment = () => {
    if (!scriptLoaded) {
      setError("Payment system is still loading");
      return;
    }

    const options: RazorpayOptions = {
      key: "rzp_test_IDx1KRc2nR8kJ7",
      amount: amount,
      currency: "INR",
      name: "Paradise Hotels",
      description: `Room Booking: ${
        bookingDetails?.roomName || "Standard Room"
      }`,
      image: "https://example.com/your-logo.png",
      handler: function (response: RazorpayResponse) {
        console.log(response);
        navigate("/booking-confirmation");
      },
      prefill: {
        name: "Guest Name",
        email: "guest@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#2563eb",
      },
    };

    try {
      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch {
      setError("Failed to initialize payment. Please try again.");
    }
  };

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Payment Details</h1>
        {error && (
          <div className="bg-red-50 text-red-600 p-4 rounded-md mb-4">
            {error}
          </div>
        )}

        <div className="mb-6 bg-blue-50 border-l-4 border-blue-500 p-4 rounded-md">
          <h2 className="text-lg font-semibold text-blue-700 mb-2">
            Secure Direct Booking
          </h2>
          <ul className="text-blue-600 space-y-1">
            <li>✓ Book directly with the hotel - no intermediaries</li>
            <li>✓ Receive hotel's direct contact information after booking</li>
            <li>✓ Your data is protected - no promotional messages</li>
            <li>✓ Secure payment with SSL encryption</li>
          </ul>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <h2 className="text-xl font-semibold mb-4">Booking Summary</h2>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Room Type:</span>
              <span className="font-medium">
                {bookingDetails?.roomName || "Standard Room"}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Check-in:</span>
              <span className="font-medium">
                {bookingDetails?.checkIn
                  ? dayjs(bookingDetails.checkIn).format("MMMM D, YYYY")
                  : "-"}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Check-out:</span>
              <span className="font-medium">
                {bookingDetails?.checkOut
                  ? dayjs(bookingDetails.checkOut).format("MMMM D, YYYY")
                  : "-"}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Number of Nights:</span>
              <span className="font-medium">{nights}</span>
            </div>
            <div className="flex justify-between">
              <span>Guests:</span>
              <span className="font-medium">{bookingDetails?.guests || 1}</span>
            </div>
            <div className="flex justify-between">
              <span>Price per Night:</span>
              <span className="font-medium">₹{bookingDetails?.price || 0}</span>
            </div>
            <div className="border-t pt-2 mt-2">
              <div className="flex justify-between">
                <span className="font-semibold">Total:</span>
                <span className="font-semibold">
                  ₹{(amount / 100).toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            onClick={handlePayment}
            disabled={!scriptLoaded}
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {!scriptLoaded ? "Loading..." : "Pay Now"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
