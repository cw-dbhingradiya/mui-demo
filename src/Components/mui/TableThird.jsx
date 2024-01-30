// import * as React from "react";
// import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
// import { useDemoData } from "@mui/x-data-grid-generator";
// import { DataGrid } from "@mui/x-data-grid";
// import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

// export function CustomFooterStatusComponent(props) {
//   return (
//     <Box sx={{ p: 1, display: "flex" }}>
//       <FiberManualRecordIcon
//         fontSize="small"
//         sx={{
//           mr: 1,
//           color: props.status === "connected" ? "#4caf50" : "#d9182e",
//         }}
//       />
//       Status {props.status}
//     </Box>
//   );
// }

// export default function CustomFooter() {
//   const [status, setStatus] = React.useState("connected");
//   const { data } = useDemoData({
//     dataSet: "Employee",
//     rowLength: 4,
//     maxColumns: 6,
//   });
//   return (
//     <Box sx={{ width: "100%" }}>
//       <Box sx={{ height: 350, width: "100%", mb: 1 }}>
//         <DataGrid
//           {...data}
//           slots={{
//             footer: CustomFooterStatusComponent,
//           }}
//           slotProps={{
//             footer: { status },
//           }}
//         />
//       </Box>
//       <Button
//         variant="contained"
//         onClick={() =>
//           setStatus((current) =>
//             current === "connected" ? "disconnected" : "connected"
//           )
//         }
//       >
//         {status === "connected" ? "Disconnect" : "Connect"}
//       </Button>
//     </Box>
//   );
// }

import * as React from "react";
import PropTypes from "prop-types";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import { visuallyHidden } from "@mui/utils";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import india from "../../../public/assets/image/india.png";
import { Button } from "@mui/material";

function createData(id, name, create, price, publish, sub) {
  return {
    id,
    name,
    create,
    price,
    publish,
    sub,
  };
}

const rows = [
  createData(1, "INV-17067", "Mac", "$67.55", "Paid"),
  createData(2, "INV-17068", "Windows", "$35.71", "Progress"),
  createData(3, "INV-17069", "Windows", "$52.84", "Out Of Date"),
  createData(4, "INV-17062", "Android", "$26.92", "Paid"),
  createData(5, "INV-17064", "Android", "$58.07", "Paid"),
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc" ? (a, b) => descendingComparator(a, b, orderBy) : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: "name",
    numeric: false,
    disablePadding: true,
    label: "Invoice ID",
  },
  {
    id: "create",
    numeric: true,
    disablePadding: false,
    label: "Category",
  },
  {
    id: "country",
    numeric: true,
    disablePadding: false,
    label: "Price",
  },
  {
    id: "publish",
    numeric: true,
    disablePadding: false,
    label: "Status",
  },
  {
    id: "sub",
    numeric: true,
    disablePadding: true,
    label: "",
  },
];

function EnhancedTableHead(props) {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            sx={{ border: "none" }}
            key={headCell.id}
            align={headCell.numeric ? "left" : "left"}
            // padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

function EnhancedTableToolbar(props) {
  const { numSelected } = props;

  return <></>;
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default function EnhancedTable() {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("create");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = React.useMemo(
    () => stableSort(rows, getComparator(order, orderBy)).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
    [order, orderBy, page, rowsPerPage]
  );

  const [stock, setStock] = React.useState("");

  const handleChange = (event) => {
    setStock(event.target.value);
  };

  const [publish, setPublish] = React.useState("");

  const publishHandleChange = (event) => {
    setPublish(event.target.value);
  };

  return (
    <Box
      sx={{
        display: "block",
        margin: "auto",
      }}
    >
      <Paper
        sx={{
          width: "100%",
          mb: 2,
          borderRadius: 4,
          bgcolor: `paperBackground.main`,
        }}
        elevation={12}
      >
        <Typography variant="h6" width="auto" padding={5}>
          New Invoice
        </Typography>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer sx={{ borderRadius: "0 0 16px 16px" }}>
          <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle" size={dense ? "small" : "medium"}>
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {visibleRows.map((row, index) => {
                const isItemSelected = isSelected(row.id);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    onClick={(event) => handleClick(event, row.id)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.id}
                    selected={isItemSelected}
                    sx={{ cursor: "pointer" }}
                  >
                    <TableCell
                      component="th"
                      id={labelId}
                      scope="row"
                      // padding="none"
                    >
                      {row.name}
                    </TableCell>
                    <TableCell align="left">{row.create}</TableCell>
                    <TableCell align="left">{row.price}</TableCell>
                    <TableCell align="left">
                      <Button
                        sx={{
                          color: `primary.dark`,
                          bgcolor: "success.soft",
                        }}
                      >
                        {row.publish}
                      </Button>
                    </TableCell>
                    <TableCell align="left">
                      <IconButton>
                        <MoreVertIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}
