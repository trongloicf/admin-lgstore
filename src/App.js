import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLayout from "./layouts/AdminLayout";
import Dashboard from "./pages/Dashboard";
import UserManagement from "./pages/UserManagement";
import GuestManagement from "./pages/GuestManagement";
import OrderManagement from "./pages/OrderManagement";
import ProductManagement from "./pages/ProductManagement";

function App() {
  return (
    <Router>
      <AdminLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/user" element={<UserManagement />}/>
          <Route path="/guest" element={<GuestManagement />}/>
          <Route path="/order" element={<OrderManagement />}/>
          <Route path="/product" element={<ProductManagement />}/>
          {/* <Route path="/users" element={<Users />} /> */}
          {/* <Route path="/orders" element={<Orders />} /> */}
        </Routes>
      </AdminLayout>
    </Router>
  );
}

export default App;
