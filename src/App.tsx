import {  Routes, Route, useLocation } from "react-router-dom";
import { LoginPage } from "./pages/loginpage/page";
import { OverviewPage } from "./pages/overview/page";
import { EcommercePage } from "./pages/ecommerce/page";
import { NavBar } from "./components/navbar/navbar";



function App() {
  const location = useLocation()
  const isLoginPage = location.pathname === "/"

 return (
    <div className={isLoginPage ? "w-full h-full" : "flex h-screen"}>
      {!isLoginPage && (
        <aside className="fixed top-0 left-0 w-90">
          <NavBar />
        </aside>
      )}

      <main className={isLoginPage ? "" : "flex-1"}>
     <Routes>
          <Route path="/" element={ <LoginPage />}/>
         <Route path="/overview" element={<OverviewPage />} />
         <Route path="/ecommerce" element={<EcommercePage/>}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
