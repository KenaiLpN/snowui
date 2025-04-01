import { Bell, History, Search, Star, Sun, Text } from "lucide-react";
import { NavLink } from "react-router-dom";
import { SearchBar } from "../searchbar/searchbar";




export function TopBar(){

const defaultbutton = "px-5 py-5 rounded-full hover:bg-[#323232]"
const baseLinkClass = "text-white"
const active = "text-gray-500"
const inactive = "text-white"


    return(
       
        <div className=" h-20 ml-70">
         <div className="flex bg-[#2A2A2A]  ml-10 mt-11 h-20">
            <button className={defaultbutton}><Text className="text-white"/></button>
            <button className={defaultbutton}><Star className="text-white"/></button>
            <div className="flex items-center ml-10 gap-5"> 
               <NavLink to="/dashboard" className={({isActive}) => `${baseLinkClass} ${isActive ? active : inactive}`}>Dashboards</NavLink>
                 <p className="text-white">/</p> 
               <NavLink to="/overview" className={({isActive}) => `${baseLinkClass} ${isActive ? active : inactive}`}>Overview</NavLink>

              <div className="ml-145 mr-7">
                <SearchBar/>
                
              </div>
              <div className="flex gap-7">
                 <button className="text-white"><Sun /></button>
                 <button className="text-white"><History /></button>
                 <button className="text-white"><Bell /></button>
              </div> 
             
               </div>
            </div>
         </div>
      
        
    

    )
}




// bg-[#2A2A2A]