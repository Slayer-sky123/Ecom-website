import Navbar from "./Components/Navbar/Navbar"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Shop from "./Pages/Shop"
import Mens from "./Pages/Mens"
import Womens from "./Pages/Womens"
import Kids from "./Pages/Kids"
import NoPage from "./Pages/NoPage"
import Login from "./Pages/Login"
import Footer from "./Components/Footer/Footer"
function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Shop />} />
        <Route path="mens" element={<Mens />} />
        <Route path="womens" element={<Womens />} />
        <Route path="kids" element={<Kids />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
