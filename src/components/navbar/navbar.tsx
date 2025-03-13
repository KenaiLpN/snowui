
import { NavLink } from "react-router-dom";
import ImgNavBar from "../../assets/ab24e416-7abc-439a-9e6d-4102d10e7fbc.jpg"
import { CircleGauge, ShoppingBag } from 'lucide-react';
export function NavBar(){

    const baseLinkClass = "flex bg-[#2A2A2A] font-bold text-white gap-3 p-3 w-55 rounded-2xl justify-center"
    const active = "bg-[#3F3F3F] "
    const inactive = "bg-[#2A2A2A]"

return(


<>
    <nav className="flex flex-col bg-[#2A2A2A] w-80 h-screen">
             <img src={ImgNavBar} alt="" className="bg-[#2A2A2A] m-3 w-60"/>
       
        <div className="flex flex-col items-center gap-5">
            <NavLink className={({isActive}) => `${baseLinkClass} ${isActive ? active : inactive}`} to="/overview"><CircleGauge/>Overview</NavLink>        
            <NavLink className={({isActive}) => `${baseLinkClass} ${isActive ? active : inactive}`} to="/ecommerce" ><ShoppingBag />eCommerce</NavLink>        
            <NavLink className={({isActive}) => `${baseLinkClass} ${isActive ? active : inactive}`} to="/projects" >Projects</NavLink>        
            <NavLink className={({isActive}) => `${baseLinkClass} ${isActive ? active : inactive}`} to="/userprofile" >User Profile</NavLink>        
            <NavLink className={({isActive}) => `${baseLinkClass} ${isActive ? active : inactive}`} to="/account" >Account</NavLink>        
            <NavLink className={({isActive}) => `${baseLinkClass} ${isActive ? active : inactive}`} to="/corporate" >Corporate</NavLink>        
            <NavLink className={({isActive}) => `${baseLinkClass} ${isActive ? active : inactive}`} to="/blog" >Blog</NavLink>        
            <NavLink className={({isActive}) => `${baseLinkClass} ${isActive ? active : inactive}`} to="/social" >Social</NavLink>        
                  
  
         
                   
        </div>
    </nav>
    
</>
)
}
