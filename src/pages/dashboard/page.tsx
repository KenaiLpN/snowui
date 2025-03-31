import { CountingCardBlue } from "@/components/coutingcards/countingcard";
import { TopBar } from "@/components/topbar/topbar";
import { LineGraphic } from "@/components/usersgraphic/linegraphic";
import { UsersGraphic } from "@/components/usersgraphic/usergraphic";


export function DashboardPage(){
    return(
    <div>
        <header>
          <TopBar/>
        </header>
         <div className="flex ml-90 gap-5">
          <CountingCardBlue/>
          <CountingCardBlue/>
          <CountingCardBlue/>
          <CountingCardBlue/>
         </div>
         <div className="w-375 ml-90 mt-10  space-y-6">
       
          <LineGraphic/>
       
         </div>
      
         
    </div>
    )
}