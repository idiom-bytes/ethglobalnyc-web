import * as React from "react";
import { Link } from "react-router-dom";

import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Divider from "@mui/material/Divider";
import PeopleIcon from "@mui/icons-material/People";
import ContractsIcon from "@mui/icons-material/ReceiptLong";
import TransactionsIcon from "@mui/icons-material/AutoAwesomeMotion";

export const mainListItems = (
  <React.Fragment>
    <Link to={"/app"}>
      <ListItemButton sx={{ mt: 3, mb: 3 }}>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
    </Link>
    <Divider />
    <Link to={"/app/:API_ID/crm"}>
      <ListItemButton sx={{ mt: 3, mb: 3 }}>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="CRM" />
      </ListItemButton>
    </Link>
    <Divider />
    <Link to={"/app/:API_ID/contracts"}>
      <ListItemButton sx={{ mt: 3, mb: 3 }}>
        <ListItemIcon>
          <ContractsIcon />
        </ListItemIcon>
        <ListItemText primary="Contracts" />
      </ListItemButton>
    </Link>
    <Divider />
    <Link to={"/app/:API_ID/transactions"}>
      <ListItemButton sx={{ mt: 3, mb: 3 }}>
        <ListItemIcon>
          <TransactionsIcon />
        </ListItemIcon>
        <ListItemText primary="Transactions" />
      </ListItemButton>
    </Link>
    <Divider />
  </React.Fragment>
);
