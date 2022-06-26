import * as React from "react";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Title from "./Title";

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

export default function Deposits() {
  return (
    <React.Fragment>
      <Title>Recent Transactions</Title>
      <Typography component="p" variant="h4">
        73
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        on June 26, 2022
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View Transactions
        </Link>
      </div>
    </React.Fragment>
  );
}
