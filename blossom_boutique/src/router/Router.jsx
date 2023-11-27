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
import Penjualan from "../Pages/Admin/Penjualan/Penjualan"

// user page 
import DashboardUser from "../components/users/DashboardUser"
import UserSProduct from "../Pages/Users/Produk/UserSProduct"
import DetailUsersProduk from "../Pages/Users/Produk/DetailUsersProduk"
import Keranjang from "../Pages/Users/Keranjang/Keranjang"
import Checkout from "../Pages/Users/Checkout/Checkout"
import StatusPaket from "../Pages/Users/Checkout/StatusPaket"

// kurir page
import DashboardKurir from "../Pages/Kurir/DashboardKurir"
import SudahDikemas from "../Pages/Kurir/Menu/SudahDikemas"
import Dikirim from "../Pages/Kurir/Menu/Dikirim"
import Testimoni from "../Pages/Users/Testimoni/Testimoni"

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
        <Route path="/admin/penjualan" element={<Penjualan />} />


        {/* user Route */}
        <Route path="/users/dashboard" element={<DashboardUser />} />
        <Route path="/users/produk" element={<UserSProduct />} />
        <Route path="/users/produk/:id" element={<DetailUsersProduk />} />
        <Route path="/users/keranjang" element={<Keranjang />} />
        <Route path="/users/checkout/:id" element={<Checkout />} />
        <Route path="/users/status-paket" element={<StatusPaket />} />
        <Route path="/users/testimoni" element={<Testimoni />} />

        {/* Kurir Route */}
        <Route path="/kurir/dashboard" element={<DashboardKurir />} />
        <Route path="/kurir/sudah-dikemas" element={<SudahDikemas />} />
        <Route path="/kurir/dikirim" element={<Dikirim />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router