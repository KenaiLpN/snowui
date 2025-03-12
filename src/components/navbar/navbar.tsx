import { NavLink } from "react-router-dom";
import ImgNavBar from "../../assets/ab24e416-7abc-439a-9e6d-4102d10e7fbc.jpg"
export function NavBar(){

return(
<>
    <nav className="flex flex-col bg-[#2A2A2A] w-80 h-screen">
             <img src={ImgNavBar} alt="" className="bg-[#2A2A2A] m-3 w-60"/>
       
        <div className="flex flex-col items-center gap-5">
            <NavLink  to="/src/pages/overview" className="text-white hover:bg-gray-200">Overview</NavLink>        
            <NavLink  to="/src/pages/ecommerce" className="text-white hover:bg-gray-200">eCommerce</NavLink>        
            <NavLink  to="/dashboard" className="text-white hover:bg-gray-200">Projects</NavLink>        
            <NavLink  to="/dashboard" className="text-white hover:bg-gray-200">User Profile</NavLink>        
            <NavLink  to="/dashboard" className="text-white hover:bg-gray-200">Account</NavLink>        
            <NavLink  to="/dashboard" className="text-white hover:bg-gray-200">Corporate</NavLink>        
            <NavLink  to="/dashboard" className="text-white hover:bg-gray-200">Blog</NavLink>        
            <NavLink  to="/dashboard" className="text-white hover:bg-gray-200">Social</NavLink>        
                   
        </div>
    </nav>
    
</>
)
}