import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Booking from "./pages/Booking";
import Login from "./pages/Login";
import Payment from "./pages/Payment";
import BookingConfirmation from "./pages/BookingConfirmation";
import Rooms from "./pages/Rooms";
import SpecialOffers from "./pages/SpecialOffers";

function App() {
  return (
    <AuthProvider>
      <Router basename="/Hotel-Booking-App">
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/rooms" element={<Rooms />} />
              <Route path="/booking" element={<Booking />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/login" element={<Login />} />
              <Route path="/special-offers" element={<SpecialOffers />} />
              <Route
                path="/booking-confirmation"
                element={<BookingConfirmation />}
              />
            </Routes>
          </div>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
