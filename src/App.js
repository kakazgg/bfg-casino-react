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
import HeaderLog from "./components/HeaderLog";
import Footer from "./components/Footer";
import LoginModal from "./components/LoginModal";
import BetModal from "./components/BetModal";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// auth & redux
import BasicRoute from "./components/BasicRoute";
import { connect } from "react-redux";

import "./App.css";

function App({ authenticated, checked }) {
  return (
    <Router forceRefresh={true}>
      {checked && (
        <div>
          {!authenticated ? <Header /> : <HeaderLog />}
          <Routes>
            <Route path="/" element={<Home />} />
            {authenticated ? (
              <Route path="/dashboard" element={<Dashboard />} />
            ) : (
              <Route path="/dashboard" element={<DashboardNoLog />} />
            )}
            <Route elements={<BasicRoute />}>
              <Route path="/sports" element={<Sports />} />
            </Route>
            <Route elements={<BasicRoute />}>
              <Route path="/currencies" element={<Currencies />} />
            </Route>
            <Route elements={<BasicRoute />}>
              <Route
                path="/currencybetdetails"
                element={<CurrencyBetDetails />}
              />
            </Route>
            <Route elements={<BasicRoute />}>
              <Route path="/tournaments" element={<Tournaments />} />
            </Route>
            <Route elements={<BasicRoute />}>
              <Route
                path="/tournamentdetails"
                element={<TournamentDetails />}
              />
            </Route>
            <Route elements={<BasicRoute />}>
              <Route path="/affiliate" element={<Affiliate />} />
            </Route>
            <Route elements={<BasicRoute />}>
              <Route path="/terms" element={<Terms />} />
            </Route>
            <Route elements={<BasicRoute />}>
              <Route path="/privacy" element={<Privacy />} />
            </Route>
            <Route elements={<BasicRoute />}>
              <Route path="/contact" element={<Contact />} />
            </Route>
          </Routes>
          <Footer />
          <LoginModal />
          <BetModal />
        </div>
      )}
    </Router>
  );
}
const mapStateToProps = ({ session }) => ({
  checked: session.checked,
  authenticated: session.authenticated,
});

export default connect(mapStateToProps)(App);
