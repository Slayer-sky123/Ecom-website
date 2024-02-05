import Navbar from "./Components/Navbar/Navbar"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NoPage from "./Pages/NoPage"
import Login from "./Pages/Login"
import Footer from "./Components/Footer/Footer"
import Home from "./Pages/Home"
import Shop from "./Pages/Shop"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
