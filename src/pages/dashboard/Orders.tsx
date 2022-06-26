import * as React from "react";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "./Title";

// Generate Order Data
function createData(
  id: number,
  date: string,
  name: string,
  shipTo: string,
  amount: number
) {
  return { id, date, name, shipTo, amount };
}

const rows = [
  createData(
    0,
    "Jun. 25, 2022",
    "0x0e4206b4118703740a14cbeddea58dd60fbda0af",
    "new user",
    10
  ),
  createData(
    1,
    "Jun. 25, 2022",
    "0x1ae2105330a7343c67cb582686fafea40da78caa",
    "sheldon.eth",
    3
  ),
  createData(
    2,
    "Jun. 25, 2022",
    "0x4b5ac711031ac9e85f70733fb46436ddb433051a",
    "unknown",
    42
  ),
  createData(
    3,
    "Jun. 25, 2022",
    "0x7afd5607bb47fcea710c307841fec04071070d37",
    "existing user",
    2
  ),
  createData(
    4,
    "Jun. 25, 2022",
    "0x88b2e650aa697d784c15be9513f56977cb8cb14a",
    "new user",
    1
  ),
];

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

export default function Orders() {
  return (
    <React.Fragment>
      <Title>Recent Users</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Address</TableCell>
            <TableCell>Tag</TableCell>
            <TableCell>Transaction Count</TableCell>
            <TableCell align="right">Last Seen</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{`${row.amount}`}</TableCell>
              <TableCell align="right">{row.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more users
      </Link>
    </React.Fragment>
  );
}
