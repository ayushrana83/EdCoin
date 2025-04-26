import React from "react";
import WalletConnect from "./components/WalletConnet";
import Navbar from "./components/Navbar";
import EdCoinDashboard from "./components/EdCoinsApp";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import RewardsPage from "./components/RewardPage";
import ActivitiesPage from "./components/ActiviesPage";
import { Route , Routes } from "react-router-dom";
import Protected from "./components/Protected";

function App() {
  return (
    <div className="bg-slate-900 h-screen ">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/home"
          element={
            <Protected>
              <EdCoinDashboard />
            </Protected>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/activity" element={<Protected><ActivitiesPage /></Protected>} />
        <Route path="/rewards" element={<Protected><RewardsPage /></Protected>} />
        {/* <Navbar/> */}
        {/* <div className='flex items-center justify-center m-10'> */}
        {/* <WalletConnect/> */}
        {/* </div> */}
        {/* <EdCoinDashboard/> */}
        {/* <Home /> */}
        {/* <Login/> */}
        {/* <SignUp/> */}
        {/* <RewardsPage /> */}
        {/* <ActivitiesPage/> */}
      </Routes>
    </div>
  );
}

export default App;
