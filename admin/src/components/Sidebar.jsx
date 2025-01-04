import { NavLink } from "react-router-dom"
import { AdminContext } from "../context/AdminContext"
import { assets } from "../assets/assets"
import { useContext } from "react"

const Sidebar = () => {

  const {aToken} = useContext(AdminContext)
  return (
    <div className="min-h-screen bg-white border-r">
      {
        aToken && <ul className="text-[#515151] mt-5">

          <NavLink to={'/admin-dashboard'}>
            <img src={assets.home_icon} alt="Dashboard" />
            <p>Dashboard</p>
          </NavLink>
          <NavLink to={'/all-appointments'}>
            <img src={assets.appointment_icon} alt="All appointments" />
            <p>Appointments</p>
          </NavLink>
          <NavLink to={'/add-doctor'}>
            <img src={assets.add_icon} alt="Add Doctors" />
            <p>Add Doctor</p>
          </NavLink>
          <NavLink to={'/doctor-list'}>
            <img src={assets.doctor_icon} alt="Doctors List" />
            <p>Doctors List</p>
          </NavLink>

        </ul>
      }
      
    </div>
  )
}

export default Sidebar
