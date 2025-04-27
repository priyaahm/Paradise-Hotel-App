import React from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-4xl font-bold mb-8 text-center text-blue-700">
          About Paradise Auro Oceanic Resort
        </h1>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-blue-600">
                Our Story
              </h2>
              <p className="text-gray-700 mb-4">
                Paradise Auro Oceanic Resort was established in 2010 with a
                vision to create a sanctuary where luxury meets nature. Located
                in the serene surroundings of Auroville, Pondicherry, our resort
                has grown from a small boutique property to one of the region's
                most sought-after destinations.
              </p>
              <p className="text-gray-700">
                Our journey has been guided by a commitment to sustainable
                luxury, where every aspect of our operations is designed to
                minimize environmental impact while maximizing guest comfort and
                experience.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-blue-700">
                Key Milestones
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span>2010: Resort established with 20 rooms</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span>
                    2015: Expansion to 50 rooms and addition of spa facilities
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span>
                    2018: Awarded "Best Eco-Friendly Resort" in Tamil Nadu
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span>
                    2020: Complete renovation and addition of luxury villas
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span>2023: Launch of our signature wellness programs</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600">
              Our Philosophy
            </h2>
            <p className="text-gray-700 mb-4">
              At Paradise Auro Oceanic Resort, we believe in creating
              experiences that nourish the body, mind, and soul. Our philosophy
              is rooted in three core principles:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-blue-700">
                  Sustainable Luxury
                </h3>
                <p className="text-gray-700">
                  We combine opulent comfort with eco-conscious practices,
                  ensuring that our guests enjoy the finest amenities while
                  respecting the natural environment.
                </p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-blue-700">
                  Cultural Integration
                </h3>
                <p className="text-gray-700">
                  Our resort celebrates the rich cultural heritage of
                  Pondicherry and Auroville, offering guests authentic
                  experiences that connect them with local traditions.
                </p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-blue-700">
                  Wellness Focus
                </h3>
                <p className="text-gray-700">
                  We prioritize holistic wellness, providing spaces and programs
                  designed to rejuvenate and restore balance to our guests'
                  lives.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-blue-600">
              Our Team
            </h2>
            <p className="text-gray-700 mb-6">
              Our dedicated team of hospitality professionals brings together
              decades of experience in luxury hospitality, wellness, and
              sustainable tourism. Led by our General Manager, Mr. Rajesh Kumar,
              who has over 20 years of experience in the hospitality industry,
              our staff is committed to delivering exceptional service with a
              personal touch.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2 text-blue-700">
                  Leadership
                </h3>
                <p className="text-gray-700">
                  Our leadership team combines international hospitality
                  standards with deep local knowledge, ensuring that every
                  aspect of your stay meets the highest expectations.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2 text-blue-700">
                  Staff
                </h3>
                <p className="text-gray-700">
                  Our staff members are carefully selected and extensively
                  trained to provide attentive, personalized service that
                  anticipates your needs before you even express them.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4 text-blue-600">
              Our Commitment
            </h2>
            <p className="text-gray-700 mb-6">
              We are committed to creating memorable experiences for our guests
              while contributing positively to our community and environment.
              Our sustainability initiatives include:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <span className="text-blue-500 mr-2 mt-1">✓</span>
                <div>
                  <h3 className="font-semibold text-blue-700">
                    Environmental Stewardship
                  </h3>
                  <p className="text-gray-700">
                    Solar power, water conservation, and waste reduction
                    programs
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-blue-500 mr-2 mt-1">✓</span>
                <div>
                  <h3 className="font-semibold text-blue-700">
                    Community Engagement
                  </h3>
                  <p className="text-gray-700">
                    Supporting local artisans, farmers, and educational
                    initiatives
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-blue-500 mr-2 mt-1">✓</span>
                <div>
                  <h3 className="font-semibold text-blue-700">
                    Cultural Preservation
                  </h3>
                  <p className="text-gray-700">
                    Promoting local arts, crafts, and cultural experiences
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-blue-500 mr-2 mt-1">✓</span>
                <div>
                  <h3 className="font-semibold text-blue-700">
                    Guest Education
                  </h3>
                  <p className="text-gray-700">
                    Workshops and programs that raise awareness about
                    sustainability
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link
            to="https://paradisegroups.in/contact-us/"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
