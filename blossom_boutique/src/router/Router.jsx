import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../Home"
import Register from "../Pages/Menu/RegisterUser"

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/users/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router