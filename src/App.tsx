import {  Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/loginpage/page";
import { DashboardPage } from "./pages/dashboard/page";

function App() {
  return (
    <>
      <main>
        <div>
        
        </div>

        <Routes>
          <Route path="/" element={ <LoginPage />}/>
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
