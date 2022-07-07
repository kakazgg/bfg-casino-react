
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
import BetModal from "./components/BetModal";


import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// auth & redux
import AuthRoute from "./components/AuthRoute";
import BasicRoute from "./components/BasicRoute";
import { connect } from "react-redux";

import './App.css';

function App({ checked }) {

  return (
      <Router forceRefresh={true}>
        <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route elements={<BasicRoute/>}>
             <Route path="/dashboardnolog" element={<DashboardNoLog />} />
          </Route>
          <Route elements={<BasicRoute/>}>
             <Route path="/dashboard" element={<Dashboard />} />
          </Route>
          <Route elements={<AuthRoute />}>
             <Route path="/sports" element={<Sports />} />
          </Route>
          <Route elements={<BasicRoute/>}>
             <Route path="/currencies" element={<Currencies />} />
          </Route>
          <Route elements={<BasicRoute/>}>
             <Route path="/currencybetdetails" element={<CurrencyBetDetails />} />
          </Route>
          <Route elements={<BasicRoute/>}>
             <Route path="/tournaments" element={<Tournaments />} />
          </Route>
          <Route elements={<BasicRoute/>}>
             <Route path="/tournamentdetails" element={<TournamentDetails />} />
          </Route>
          <Route elements={<BasicRoute/>}>
             <Route path="/affiliate" element={<Affiliate />} />
          </Route>
          <Route elements={<BasicRoute/>}>
             <Route path="/terms" element={<Terms />} />
          </Route>
          <Route elements={<BasicRoute/>}>
             <Route path="/privacy" element={<Privacy />} />
          </Route>
          <Route elements={<BasicRoute/>}>
             <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
        <Footer />
        <LoginModal />
        <BetModal />
        </div>
      </Router>
  );
}
const mapStateToProps = ({ session }) => ({
  checked: session.checked,
});

export default connect(mapStateToProps)(App);
