import { CountingCardBlue } from "@/components/coutingcards/countingcard";
import { TopBar } from "@/components/topbar/topbar";
import { StyledLineChart } from "@/components/usersgraphic/linegraphic";
import { UsersGraphic } from "@/components/usersgraphic/usergraphic";
import { UsersGraphicTwo } from "@/components/usersgraphic/usergraphictwo";



export function DashboardPage(){
    return(
    <div>
        <header>
          <TopBar/>
        </header>
    <div className="space-y-5">
      <div className="flex ml-80 gap-7">
        <CountingCardBlue/>
        <CountingCardBlue/>
        <CountingCardBlue/>
        <CountingCardBlue/>
      </div>
      <div className="w-375 ml-80">
        <StyledLineChart/>
      </div>
      <div className="flex ml-80 justify-between w-340">
        <UsersGraphic/>
        <UsersGraphicTwo/>
       
      </div>
    </div>
       
       
      
         
    </div>
    )
}