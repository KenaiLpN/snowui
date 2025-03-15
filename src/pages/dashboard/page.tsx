import { TopBar } from "@/components/topbar/topbar";
import { TrendingUp } from "lucide-react";

export function DashboardPage(){
    return(
        <div>
        <header>
          <TopBar/>
        </header>
         <div className="bg-gradient-to-b from-blue-500 to-blue-300 h-25 w-70 p-5 ml-90 rounded-2xl grid grid-cols-2 gap-25">
            <p className="text-white">Views</p>
            <button className="flex item-center justify-center text-white inset-shadow-xl-white rounded-2xl w-10 h-7"><TrendingUp/></button>

         </div>
    
    
      </div>
    )
}