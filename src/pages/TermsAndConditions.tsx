import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-center text-blue-700">
          Terms & Conditions
        </h1>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-blue-600">
                Booking and Reservations
              </h2>
              <p className="text-gray-700">
                All bookings are subject to availability and confirmation. A
                valid credit card is required to secure your reservation.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-blue-600">
                Check-in and Check-out
              </h2>
              <p className="text-gray-700">
                Standard check-in time is 3:00 PM and check-out time is 11:00
                AM. Early check-in and late check-out are subject to
                availability.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-blue-600">
                Payment Terms
              </h2>
              <p className="text-gray-700">
                Payment is processed at the time of booking. All rates are
                inclusive of applicable taxes and service charges.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-blue-600">
                Property Rules
              </h2>
              <p className="text-gray-700">
                Guests are expected to comply with all hotel policies and
                regulations. The hotel reserves the right to refuse service to
                anyone.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
