
import Home from "./pages/Home";
import DashboardNoLog from "./pages/DashboardNoLog";
import Dashboard from "./pages/Dashboard";
import Sports from "./pages/Sports";
import Currencies from "./pages/Currencies";
import CurrencyBetDetails from "./pages/CurrencyBetDetails";
import Tournaments from "./pages/Tournaments";
import TournamentDetails from "./pages/TournamentDetails";
import Affiliate from "./pages/Affiliate";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Contact from "./pages/Contact";

import Header from "./components/Header";
import Footer from "./components/Footer";
import LoginModal from "./components/LoginModal";


import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// auth & redux
import AuthRoute from "./components/AuthRoute";
import BasicRoute from "./components/BasicRoute";
import { connect } from "react-redux";

import './App.css';

function App({ checked }) {

  return (
    <div>
      <Router forceRefresh={true}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboardnolog" element={<DashboardNoLog />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/currencies" element={<Currencies />} />
          <Route path="/currencybetdetails" element={<CurrencyBetDetails />} />
          <Route path="/tournaments" element={<Tournaments />} />
          <Route path="/tournamentdetails" element={<TournamentDetails />} />
          <Route path="/affiliate" element={<Affiliate />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        <LoginModal />
      </Router>
    </div>
  );
}
const mapStateToProps = ({ session }) => ({
  checked: session.checked,
});

export default connect(mapStateToProps)(App);
