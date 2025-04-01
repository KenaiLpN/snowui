import { Search, Sun } from "lucide-react";

export function SearchBar(){
    return(
        <div className="flex w-50 text-white bg-[#3F3F3F] h-8 rounded items-center justify-center gap-2">
           <div  className=""> <Search/></div>
        <div>    
             <input className="flex items-center justify-center w-30"
                    placeholder="Search"
                     /> 
        </div>
        
           
        
        </div>
    )
}