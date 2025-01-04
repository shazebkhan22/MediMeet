import { assets } from "../assets/assets_frontend/assets"

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm  "> 
        {/*-----------Left Section---------*/}
        <div>
          <img className="mb-5 w-40" src={assets.logo} alt="" />
          <p className="w-full md:w-2/3 text-gray-400 leading-6">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio nihil minus, animi, quidem rerum soluta culpa laudantium dicta mollitia neque incidunt repudiandae iure placeat laborum eum officia deserunt nisi voluptas?</p>

        </div>
        {/*-----------Middle Section---------*/}
        <div>
          <p className="text-xl font-medium mb-5 ">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>          
          </ul>
          
        </div>
        {/*-----------right Section---------*/}
        <div>
          <p  className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+91 1234-343-567</li>
            <li>shazebdev@gmail.com</li>
          </ul>         
        </div>    
      </div>

      {/*-----------Copyright Section---------*/}
      <div>
        <hr/>
        <p className="py-5 text-sm text-center">Copyright 2024@ MediMeet - All Rights Reserved.</p>
      </div>
      
    </div>
  )
}

export default Footer
