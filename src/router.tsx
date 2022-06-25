import { Routes, Route } from "react-router-dom";

import "./App.css";

// Pre auth routes
import Login from "./pages/login/LogIn";
import CatchAll from "./pages/catch/App";

// Post auth routes
import Apps from "./pages/apps/App";
import Contracts from "./pages/contracts/App";
import Crm from "./pages/crm/App";
import Dashboard from "./pages/dashboard/Dashboard";
import Transactions from "./pages/transactions/App";

function AppRouter() {
  // Setting up for pre auth
  if (false) {
    return (
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<CatchAll />} />
      </Routes>
    );
  }

  // Only authenticated routes
  return (
    <Routes>
      <Route path="/app/:API_ID/crm" element={<Crm />} />
      <Route path="/app/:API_ID/contracts" element={<Contracts />} />
      <Route path="/app/:API_ID/transactions" element={<Transactions />} />
      <Route path="/app/:API_ID" element={<Dashboard />} />
      <Route path="/apps" element={<Apps />} />
      <Route path="*" element={<CatchAll />} />
    </Routes>
  );
}

export default AppRouter;
