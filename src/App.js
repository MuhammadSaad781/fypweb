import "./App.css";
import { Routes, Route } from "react-router-dom";
import SignUp from "./Components/SignUp";
import SignIn from "./Components/SignIn";
import Donate from "./Components/Donate";
import LandingPage from "./Components/LandingPage";
import NewCampaign from "./Components/NewCampaign";
import UpdateCampaign from "./Components/UpdateCampaign";
import CampaignStarted from "./Components/CampaignStarted";
import DonatedSuccessfully from "./Components/DonatedSuccessfully";
import CampaignCard from "./Components/CampaignCard";
import HowitWorks from "./Components/HowitWorks";
import Categories from "./Components/Categories";

function App() {
  return <CampaignStarted />;
}

export default App;
