import Navbar from "./Components/Navbar"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Shop from "./Pages/Shop"
import Mens from "./Pages/Mens"
import Womens from "./Pages/Womens"
import Kids from "./Pages/Kids"
import NoPage from "./Pages/NoPage"
function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Shop />} />
        <Route path="mens" element={<Mens />} />
        <Route path="womens" element={<Womens />} />
        <Route path="kids" element={<Kids />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
