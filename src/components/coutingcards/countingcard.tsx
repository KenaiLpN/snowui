import { TrendingUp } from "lucide-react";
import { Button } from "../ui/button";

export function CountingCardBlue(){
    return(

        <Button className="h-40 w-80 p-5 rounded-2xl grid grid-cols-2 gap-7 ">
        <p className="text-white">Views</p>
        <button className="flex item-center justify-center text-white inset-shadow-xl-white rounded-2xl w-10 h-7 ml-10"><TrendingUp/></button>
        <p className=" text-white font-medium text-3xl">7,542</p>
        <p className=" text-white font-medium mt-1.5 ">+11.01%</p>
        </Button>
    )
}