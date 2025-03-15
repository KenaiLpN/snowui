import { Star, Text } from "lucide-react";
import { NavLink } from "react-router-dom";


export function TopBar(){

const defaultbutton = "px-5 py-5 rounded-full  hover:bg-[#323232]"
const defaultpagelink = "text-white"

    return(
       
        <div className=" h-30 w-screen ml-80">
        <div className="flex bg-[#2A2A2A]  ml-10 mt-11 h-20 w-500">
           <button className={defaultbutton}><Text className="text-white"/></button>
           <button className={defaultbutton}><Star className="text-white"/></button>
           <div className="flex items-center ml-10 gap-5"> <NavLink to="/dashboard" className={defaultpagelink}>Dashboards</NavLink> <p className="text-white">/</p> <NavLink to="/overview" className={defaultpagelink}>Overview</NavLink></div>
          
        </div>
           
             
        </div>
        
    

    )
}