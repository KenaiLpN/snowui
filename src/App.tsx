import {  Routes, Route, useLocation } from "react-router-dom";
import { LoginPage } from "./pages/loginpage/page";
import { OverviewPage } from "./pages/overview/page";
import { EcommercePage } from "./pages/ecommerce/page";
import { NavBar } from "./components/navbar/navbar";
import { DashboardPage } from "./pages/dashboard/page";



function App() {
  const location = useLocation()
  const isLoginPage = location.pathname === "/"

 return (
    <div className={isLoginPage ? "w-full h-full" : "flex h-screen"}>
      
      {!isLoginPage && (
        <aside className="fixed left-0 top-0 w-90">
          <NavBar />
        </aside>
        
      )}

      <main className={isLoginPage ? "" : "flex-1 bg-[#2A2A2A] w-screen"} >
     <Routes>
          <Route path="/" element={ <LoginPage />}/>
         <Route path="/overview" element={<OverviewPage />} />
         <Route path="/ecommerce" element={<EcommercePage/>}/>
         <Route path="/dashboard" element={<DashboardPage/>}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
