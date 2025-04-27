import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      question: "What are your check-in and check-out times?",
      answer:
        "Check-in time is 3:00 PM and check-out time is 11:00 AM. Early check-in and late check-out may be available upon request, subject to availability.",
    },
    {
      question: "Do you offer airport transfers?",
      answer:
        "Yes, we offer airport transfer services. Please contact our concierge at least 24 hours before your arrival to arrange transportation.",
    },
    {
      question: "Is breakfast included in the room rate?",
      answer:
        "Yes, all our room rates include complimentary breakfast for two guests. Additional guests may be charged extra.",
    },
    {
      question: "Do you have parking facilities?",
      answer:
        "Yes, we offer complimentary parking for all our guests. Both self-parking and valet parking services are available.",
    },
    {
      question: "Are pets allowed?",
      answer:
        "We are a pet-friendly hotel. A nominal pet fee applies, and certain restrictions may apply. Please contact us for more details.",
    },
    {
      question: "Do you have a swimming pool?",
      answer:
        "Yes, we have both an indoor and outdoor swimming pool. The pools are heated and available year-round.",
    },
    {
      question: "Is there a spa at the hotel?",
      answer:
        "Yes, we have a full-service spa offering various treatments and massages. Advance booking is recommended.",
    },
    {
      question: "Do you offer room service?",
      answer:
        "Yes, 24/7 room service is available. A service charge may apply.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-center text-blue-700">
          Frequently Asked Questions
        </h1>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center bg-white"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="font-semibold text-black">
                    {item.question}
                  </span>
                  <span className="text-black">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>
                {openIndex === index && (
                  <div className="px-6 py-4 bg-gray-50">
                    <p className="text-gray-700">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
