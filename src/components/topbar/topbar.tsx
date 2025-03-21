import { Search, Star, Text } from "lucide-react";
import { NavLink } from "react-router-dom";




export function TopBar(){

const defaultbutton = "px-5 py-5 rounded-full  hover:bg-[#323232]"
const baseLinkClass = "text-white"
const active = "text-gray-500"
const inactive = "text-white"


    return(
       
        <div className=" h-30 w-screen ml-80">
         <div className="flex bg-[#2A2A2A]  ml-10 mt-11 h-20 w-350">
            <button className={defaultbutton}><Text className="text-white"/></button>
            <button className={defaultbutton}><Star className="text-white"/></button>
            <div className="flex items-center ml-10 gap-5"> 
               <NavLink to="/dashboard" className={({isActive}) => `${baseLinkClass} ${isActive ? active : inactive}`}>Dashboards</NavLink>
                 <p className="text-white">/</p> 
               <NavLink to="/overview" className={({isActive}) => `${baseLinkClass} ${isActive ? active : inactive}`}>Overview</NavLink>


               <div className="flex w-50 text-white bg-[#3F3F3F] h-8 rounded">
               <Search className="mt-1"/>
               <input className="" 
               placeholder="Search" />
               </div>
            </div>
         </div>
        </div>
        
    

    )
}




// bg-[#2A2A2A]