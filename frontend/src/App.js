import { Routes, Route } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/home/HomePage";
import CartPage from "./pages/cart/CartPage";
import ProfilePage from "./pages/profile/ProfilePage";
import DashboardPage from "./pages/dashboard/DashboardPage";

function App() {
  return (
    <div className="App font-poppins">
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/admin/dashboard" element={<DashboardPage />} />
      </Routes>
    </div>
  );
}

export default App;
