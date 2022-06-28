import Home from "./pages/Home";
import DashboardNoLog from "./pages/DashboardNoLog";
import Dashboard from "./pages/Dashboard";
import Sports from "./pages/Sports";
import Currencies from "./pages/Currencies";
import Tournaments from "./pages/Tournaments";
import Affiliate from "./pages/Affiliate";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Contact from "./pages/Contact";

import Header from "./components/Header";
import Footer from "./components/Footer";


import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import './App.css';

function App() {
  return (
    <div>
      <Router forceRefresh={true}>
      <Header />
      <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/dashboardnolog" element={<DashboardNoLog/>}/>
         <Route path="/dashboard" element={<Dashboard/>}/>
         <Route path="/sports" element={<Sports/>}/>
         <Route path="/currencies" element={<Currencies/>}/>
         <Route path="/tournaments" element={<Tournaments/>}/>
         <Route path="/affiliate" element={<Affiliate/>}/>
         <Route path="/terms" element={<Terms/>}/>
         <Route path="/privacy" element={<Privacy/>}/>
         <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
