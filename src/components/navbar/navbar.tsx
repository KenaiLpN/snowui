import { CircleGauge, CircleUserRound, FolderClosed, IdCard, MessageCircle, NotebookText, ShoppingBag, Users } from 'lucide-react';
import { NavLink } from "react-router-dom";
import ImgNavBar from "../../assets/ab24e416-7abc-439a-9e6d-4102d10e7fbc.jpg"


export function NavBar(){

    const baseLinkClass = "flex bg-[#2A2A2A] text-white gap-3 p-3 py-4 w-55 rounded-2xl items-center"
    const active = "bg-[#3F3F3F] "
    const inactive = "bg-[#2A2A2A]"
    const buttonicon = "flex w-10 h-10 bg-[#323232] items-center justify-center rounded-2xl"
 

return(


<>
    <nav className="flex flex-col bg-[#2A2A2A] w-80 h-screen gap-3 items-center">
             <img src={ImgNavBar} alt="" className="bg-[#2A2A2A] m-3 w-50"/>
       
        <div className="flex flex-col items-center ">
            <NavLink className={({isActive}) => `${baseLinkClass} ${isActive ? active : inactive}`} to="/overview"><div className={buttonicon}><CircleGauge/></div>Overview</NavLink>        
            <NavLink className={({isActive}) => `${baseLinkClass} ${isActive ? active : inactive}`} to="/ecommerce" ><div className={buttonicon}><ShoppingBag/></div>eCommerce</NavLink>        
            <NavLink className={({isActive}) => `${baseLinkClass} ${isActive ? active : inactive}`} to="/projects" ><div className={buttonicon}><FolderClosed/></div>Projects</NavLink>        
            <NavLink className={({isActive}) => `${baseLinkClass} ${isActive ? active : inactive}`} to="/userprofile" ><div className={buttonicon}><CircleUserRound/></div>User Profile</NavLink>        
            <NavLink className={({isActive}) => `${baseLinkClass} ${isActive ? active : inactive}`} to="/account"><div className={buttonicon}><IdCard/></div>Account</NavLink>        
            <NavLink className={({isActive}) => `${baseLinkClass} ${isActive ? active : inactive}`} to="/corporate" ><div className={buttonicon}><Users/></div>Corporate</NavLink>        
            <NavLink className={({isActive}) => `${baseLinkClass} ${isActive ? active : inactive}`} to="/blog"><div className={buttonicon}><NotebookText/></div>Blog</NavLink>        
            <NavLink className={({isActive}) => `${baseLinkClass} ${isActive ? active : inactive}`} to="/social"><div className={buttonicon}><MessageCircle/></div>Social</NavLink>        
                  
  
         
                   
        </div>
    </nav>
    
</>
)
}




// const baseLinkClass = "flex bg-[#2A2A2A] font-bold text-white gap-3 p-3 py-4 w-55 rounded-2xl items-center"
// const active = "bg-[#3F3F3F] "
// const inactive = "bg-[#2A2A2A]"
// const buttonasset = "bg-black p-1 h-10 w-10 rounded-2xl"
