import { Routes, Route } from "react-router-dom";

import "./App.css";

// Pre auth routes
import Login from "./pages/login/LogIn";

// Post auth routes
import Transactions from "./pages/transactions/App";
import CatchAll from "./pages/catch/App";
import Dashboard from "./pages/dashboard/Dashboard";

function AppRouter() {
  return (
    <Routes>
      <Route path="/app">
        <Dashboard />
      </Route>
      <Route path="/app/:API_ID/crm">
        <Dashboard />
      </Route>
      <Route path="/app/:API_ID/contracts">
        <Dashboard />
      </Route>
      <Route path="/app/:API_ID/transactions">
        <Transactions />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="*">
        <CatchAll />
      </Route>
    </Routes>
  );
}

export default AppRouter;
