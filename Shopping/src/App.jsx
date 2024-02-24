import Navbar from "./Components/Navbar/Navbar"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NoPage from "./Pages/NoPage"
import Login from "./Pages/Login"
import Footer from "./Components/Footer/Footer"
import Home from "./Pages/Home"
import Shop from "./Pages/Shop"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import ProductDetails from "./Pages/ProductDetails"
import Cart from "./Pages/Cart"
function App() {
  let navOptions = {
    page1: "Home",
    page2: "Shop",
    page3: "About",
    page4: "Contact",
  }
  return (
    <BrowserRouter>
      <Navbar navOptions={navOptions} />
      <Routes>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NoPage />} />
        <Route path="details" element={<ProductDetails />} />
        <Route path="cart" element={<Cart />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
