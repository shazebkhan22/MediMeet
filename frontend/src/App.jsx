import {Routes, Route} from "react-router-dom"
import Home  from "./pages/Home";
import MyAppointments from "./pages/MyAppointments";
import MyProfile from "./pages/MyProfile";
import Contact from "./pages/Contact";
import Doctors from "./pages/Doctors";
import Login from "./pages/Login";
import About from "./pages/About";
import Appointment from "./pages/Appointment";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="mx-4 sm:mx-[10%]">

      <Navbar />

      <Routes>
        <Route path ="/" element={ < Home />} />
        <Route path ="/contact" element={ < Contact />} />
        <Route path ="/doctors" element={ < Doctors />} />
        <Route path ="/doctors/:speciality" element={ < Doctors />} />
        <Route path ="/login" element={ < Login />} />
        <Route path ="/appointments" element={ < MyAppointments />} />
        <Route path ="/profile" element={ < MyProfile />} />
        <Route path ="/about" element={ < About />} />
        <Route path ="/appointment/:docId" element={ < Appointment />} />

        
      </Routes>
      <Footer />
    </div>
  )
}

export default App