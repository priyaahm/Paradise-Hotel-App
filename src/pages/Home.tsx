import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import Room from "../assets/1 (1).jpeg";
import Room1 from "../assets/1 (2).jpeg";
import Room2 from "../assets/1 (3).jpeg";
import Room3 from "../assets/1 (4).jpeg";
import Room4 from "../assets/1 (5).jpeg";
import Room5 from "../assets/1 (6).jpeg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  return (
    <div className="min-h-screen p-8 flex flex-col">
      <div className="flex-grow">
        <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 text-transparent bg-clip-text">
          Paradise Auro Oceanic Resort – Enjoy Nature At Its Finest!
        </h1>

        <div className="w-full max-w-6xl mx-auto mb-12">
          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-xl">
            <img
              src={Room}
              alt="Luxury Hotel Room"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          <Link to="/rooms" className="group">
            <div className="bg-white rounded-lg shadow-md p-6 transition-transform transform hover:scale-105">
              <h2 className="text-2xl font-semibold mb-4 group-hover:text-blue-600">
                Discover Our Rooms
              </h2>
              <p className="text-gray-600">
                Experience luxury and comfort in our carefully designed rooms.
              </p>
            </div>
          </Link>
          <Link to="/special-offers" className="group">
            <div className="bg-white rounded-lg shadow-md p-6 transition-transform transform hover:scale-105">
              <h2 className="text-2xl font-semibold mb-4 group-hover:text-blue-600">
                Special Offers
              </h2>
              <p className="text-gray-600">
                Exclusive packages and seasonal deals for an unforgettable stay.
              </p>
            </div>
          </Link>
          <Link to="/amenities" className="group">
            <div className="bg-white rounded-lg shadow-md p-6 transition-transform transform hover:scale-105">
              <h2 className="text-2xl font-semibold mb-4 group-hover:text-blue-600">
                Amenities
              </h2>
              <p className="text-gray-600">
                Explore our world-class facilities and services.
              </p>
            </div>
          </Link>
        </div>
      </div>

      {/* Resort Description Section */}
      <div className="max-w-6xl mx-auto mb-12">
        <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 text-transparent bg-clip-text">
          Paradise Auro Oceanic Resort Resorts in Pondicherry Auroville Photos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="rounded-lg overflow-hidden shadow-xl">
            <div className="w-full overflow-hidden rounded-lg shadow-xl">
              <Slider
                dots={false}
                infinite={true}
                speed={500}
                slidesToShow={1}
                slidesToScroll={1}
                arrows={true} /* Enable arrows */
                autoplay={true}
                autoplaySpeed={4000}
              >
                <img
                  src={Room1}
                  alt="Room 1"
                  className="w-full h-[400px] object-cover"
                />
                <img
                  src={Room2}
                  alt="Room 2"
                  className="w-full h-[400px] object-cover"
                />
                <img
                  src={Room3}
                  alt="Room 3"
                  className="w-full h-[400px] object-cover"
                />
                <img
                  src={Room4}
                  alt="Room 4"
                  className="w-full h-[400px] object-cover"
                />
                <img
                  src={Room5}
                  alt="Room 5"
                  className="w-full h-[400px] object-cover"
                />
              </Slider>
            </div>
            <p
              style={{
                fontFamily: "Arial, sans-serif",
                fontWeight: "bold",
                fontStyle: "italic",
                fontSize: "18px",
                color: "#333",
              }}
            >
              Slide to see more
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Welcome to Paradise Auro Jungle Resort, where luxury meets nature
              in the heart of Auroville, Pondicherry. Our resort is nestled in a
              lush green environment, offering a perfect escape from the urban
              hustle.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Experience the unique blend of modern comfort and natural
              serenity. Our resort features spacious rooms with private
              balconies, allowing you to immerse yourself in the surrounding
              jungle atmosphere while enjoying world-class amenities.
            </p>
            <p className="text-gray-700 leading-relaxed">
              When you choose to stay at our hotel, you'll experience excellent
              service and modern amenities. Whether you're here to explore the
              city's culture or attending important business meetings, our hotel
              offers the perfect blend of comfort and convenience. It is one of
              the best Hotel in Puducherry.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-700 mb-2">
                  Resort Highlights
                </h3>
                <ul className="text-gray-600 space-y-1">
                  <li>✓ Infinity Pool</li>
                  <li>✓ Spa & Wellness Center</li>
                  <li>✓ Nature Trails</li>
                  <li>✓ Organic Restaurant</li>
                </ul>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-700 mb-2">
                  Location Benefits
                </h3>
                <ul className="text-gray-600 space-y-1">
                  <li>✓ In heart of Auroville</li>
                  <li>✓ Beach Proximity</li>
                  <li>✓ Peaceful Setting</li>
                  <li>✓ Easy Accessibility</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <footer className="bg-gray-50 rounded-lg shadow-md mt-auto">
        <div className="max-w-6xl mx-auto py-8 px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <p className="text-gray-600 mb-2">
                <span className="font-medium">Phone:</span> +91 80569 54927
              </p>
              <p className="text-gray-600 mb-2">
                <span className="font-medium">Email:</span>{" "}
                support@paradisebookings.in
              </p>
              <p className="text-gray-600 mb-4">
                <span className="font-medium">Address:</span>
                <br />
                Nearby Matrimandir, Globe,
                <br />
                Auroville, Irumbai,
                <br />
                Tamil Nadu 605101, India
              </p>
              <a
                href="https://www.booking.com/hotel/gb/park-house-hotel.en-us.html?aid=2313352&sid=31de9712dd2fbdc4ca6ea2654c682a5c&dist=0&keep_landing=1&lang=en-us&lang_changed=1&sb_price_type=total&type=total&"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                Contact Us
              </a>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <a
                  href="/about-us"
                  className="block text-blue-600 hover:text-blue-700"
                >
                  About Us
                </a>
                <a
                  href="/gallery"
                  className="block text-blue-600 hover:text-blue-700"
                >
                  Photo Gallery
                </a>
                <a
                  href="/dining"
                  className="block text-blue-600 hover:text-blue-700"
                >
                  Dining Options
                </a>
                <a
                  href="/activities"
                  className="block text-blue-600 hover:text-blue-700"
                >
                  Activities & Events
                </a>
                <a
                  href="/privacy-policy"
                  className="block text-blue-600 hover:text-blue-700"
                >
                  Privacy Policy
                </a>
                <a
                  href="/terms-conditions"
                  className="block text-blue-600 hover:text-blue-700"
                >
                  Terms & Conditions
                </a>
                <a
                  href="/cancellation-policy"
                  className="block text-blue-600 hover:text-blue-700"
                >
                  Cancellation Policy
                </a>
                <a
                  href="/faq"
                  className="block text-blue-600 hover:text-blue-700"
                >
                  FAQs
                </a>
              </div>
            </div>

            {/* Map Section */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Location Map</h3>
              <div className="rounded-lg overflow-hidden shadow-md h-[200px] sm:h-[225px] md:h-[250px] lg:h-[275px] w-[105%] -ml-[2.5%]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.2295139240396!2d79.80064899999999!3d12.0277142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a536759bff2ffd3%3A0xc798ff2e9e8abbd4!2sParadise%20Auro%20Oceanic%20Resort!5e0!3m2!1sen!2sin!4v1745044332169!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Paradise Auro Oceanic Resort Location"
                  className="w-full h-full"
                />
              </div>
              <p className="text-sm text-gray-500 mt-2">
                ↑ Click on the map to get directions
              </p>
            </div>
          </div>
          <div className="mt-8 pt-4 border-t border-gray-200 text-center text-gray-500">
            <p>&copy; 2024 Paradise Hotels. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
