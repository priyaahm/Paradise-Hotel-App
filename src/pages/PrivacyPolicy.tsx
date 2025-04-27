import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-center text-blue-700">
          Privacy Policy
        </h1>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-blue-600">
                Information We Collect
              </h2>
              <p className="text-gray-700">
                We collect information that you provide directly to us,
                including name, email address, phone number, and payment
                information when making a reservation.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-blue-600">
                How We Use Your Information
              </h2>
              <p className="text-gray-700">
                We use the information we collect to process your bookings,
                communicate with you about your reservations, and improve our
                services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-blue-600">
                Information Sharing
              </h2>
              <p className="text-gray-700">
                We do not sell or share your personal information with third
                parties except as necessary to fulfill your booking or as
                required by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-blue-600">
                Data Security
              </h2>
              <p className="text-gray-700">
                We implement appropriate security measures to protect your
                personal information from unauthorized access and disclosure.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
