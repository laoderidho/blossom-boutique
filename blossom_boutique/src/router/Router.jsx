import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../Home"
import Register from "../Pages/Menu/RegisterUser"
import EmployeRegister from "../Pages/Menu/EmployeRegister"
import Login from "../Pages/Menu/Login"

// admin page
import UserList from "../Pages/Admin/UserList/UserList"
import AdminProduk from "../Pages/Admin/Produk/AdminProduk"
import AddProduct from "../Pages/Admin/Produk/AddProduct"
import AdminDetailProduk from "../Pages/Admin/Produk/AdminDetailProduk"
import Dashboard from "../components/admin/Dashboard"

// user page 
import DashboardUser from "../components/users/DashboardUser"
import UserSProduct from "../Pages/Users/Produk/UserSProduct"
import DetailUsersProduk from "../Pages/Users/Produk/DetailUsersProduk"
import Keranjang from "../Pages/Users/Keranjang/Keranjang"


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/users/register" element={<Register />} />
        <Route path="/employe/register" element={<EmployeRegister />} />
        <Route path="/login" element={<Login />} />

        {/* admin Route */}
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/user" element={<UserList />} />
        <Route path="/admin/user/add" element={<EmployeRegister />} />
        <Route path="/admin/produk" element={<AdminProduk />} />
        <Route path="/admin/produk/add" element={<AddProduct />} />
        <Route path="/admin/produk/:id" element={<AdminDetailProduk />} />

        {/* user Route */}
        <Route path="/users/dashboard" element={<DashboardUser />} />
        <Route path="/users/produk" element={<UserSProduct />} />
        <Route path="/users/produk/:id" element={<DetailUsersProduk />} />
        <Route path="/users/keranjang" element={<Keranjang />} />

      </Routes>
    </BrowserRouter>
  )
}

export default Router