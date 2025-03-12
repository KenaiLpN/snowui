import { NavLink } from "react-router-dom"

export function LoginPage(){
 

   return(
   
    <div className="flex bg-[#2A2A2A] w-screen h-screen justify-center items-center">
        <div className="flex flex-col bg-[#656565] h-110 w-100 rounded justify-center items-center gap-10">

            <h1 className="text-white font-bold text-6xl p-5">Login</h1>

             <input type="email" 
             className="bg-white text-center rounded w-70 h-10"
             placeholder="email@email.com"
             />
             
             <input 
             type="password" 
             className="bg-white text-center rounded w-70 h-10"
             placeholder="senha"
             />

            <div className="flex flex-col gap-1 items-center">
            <NavLink to="/overview" className="bg-blue-500 w-50 h-8 rounded text-white font-bold hover:bg-blue-600 text-center">Login</NavLink>
            <span className="text-[#44B7FF] hover:text-white">Esqueceu a senha?</span>
            </div>
        </div>
        
    </div>
  
   )
}