import React from "react";

const CancellationPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-center text-blue-700">
          Cancellation Policy
        </h1>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="space-y-6">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-blue-600">
                Standard Cancellation
              </h2>
              <p className="text-gray-700">
                Cancellations made 48 hours or more before the check-in date
                will receive a full refund. Cancellations made within 48 hours
                of check-in will be charged for one night's stay.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-blue-600">
                No-Show Policy
              </h2>
              <p className="text-gray-700">
                In case of no-show, the full amount of the first night's stay
                will be charged to the credit card provided during booking.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-blue-600">
                Special Rates and Packages
              </h2>
              <p className="text-gray-700">
                Some special rates and packages may have different cancellation
                policies. These will be clearly stated at the time of booking.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-blue-600">
                Refund Process
              </h2>
              <p className="text-gray-700">
                Refunds will be processed within 5-7 business days to the
                original payment method used for the booking.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CancellationPolicy;
