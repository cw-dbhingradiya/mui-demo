import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import { Stack } from "@mui/material";
import Table from "@mui/material/Table";
import Paper from "@mui/material/Paper";
import Switch from "@mui/material/Switch";
import Toolbar from "@mui/material/Toolbar";
import { visuallyHidden } from "@mui/utils";
import { alpha } from "@mui/material/styles";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import AdbIcon from "@mui/icons-material/Adb";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import MicrosoftIcon from "@mui/icons-material/Microsoft";
import TableSortLabel from "@mui/material/TableSortLabel";
import TableContainer from "@mui/material/TableContainer";
import TablePagination from "@mui/material/TablePagination";
import FormControlLabel from "@mui/material/FormControlLabel";

import india from "../assets/image/india.png";

function createData(id, name, create, stock, price, publish, sub) {
  return {
    id,
    name,
    create,
    stock,
    price,
    publish,
    sub,
  };
}

const rows = [
  createData(1, "Canada", "73.9k", "86.6k", "$67.55", "Published"),
  createData(2, "France", "58.9k", "63.1k", "$35.71", "Published"),
  createData(3, "India", "45.6k", "88.4k", "$52.84", "Draft"),
  createData(4, "Korean", "73.8k", "88.1k", "$26.92", "Draft"),
  createData(5, "USA", "43.7k", "89.4k", "$58.07", "Published"),
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
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
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
    label: "Product",
  },
  {
    id: "create",
    numeric: true,
    disablePadding: false,
    label: "Create at",
  },
  {
    id: "stock",
    numeric: true,
    disablePadding: false,
    label: "Stock",
  },
  {
    id: "price",
    numeric: true,
    disablePadding: false,
    label: "Price",
  },
  {
    id: "publish",
    numeric: true,
    disablePadding: false,
    label: "Publish",
  },
  {
    id: "sub",
    numeric: true,
    disablePadding: true,
    label: "",
  },
];

function EnhancedTableHead(props) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return <></>;
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
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
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
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      stableSort(rows, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      ),
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
    <Box sx={{ width: "100%", position: "relative" }}>
      <Paper
        sx={{
          width: "100%",
          mt: 5,
          borderRadius: 4,
          boxShadow: "none",
        }}
      >
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? "small" : "medium"}
          >
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
                      sx={{
                        border: "none",
                        paddingLeft: 4,
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                      id={labelId}
                      scope="row"
                      padding="none"
                    >
                      <img src={india} width="35" alt="india" /> {row.name}
                    </TableCell>
                    <TableCell
                      padding="none"
                      align="left"
                      sx={{ border: "none" }}
                      variant="body2"
                      align="center"
                      display="flex"
                    >
                      <AdbIcon sx={{ color: `grey` }} /> {row.create}
                    </TableCell>
                    <TableCell
                      padding="none"
                      align="left"
                      sx={{ border: "none" }}
                      variant="body2"
                    >
                      <MicrosoftIcon sx={{ color: `grey` }} /> {row.stock}
                    </TableCell>
                    <TableCell
                      variant="body2"
                      padding="none"
                      align="left"
                      sx={{ border: "none" }}
                    >
                      {row.price}
                    </TableCell>
                    <TableCell
                      padding="none"
                      align="left"
                      sx={{ border: "none" }}
                    >
                      {row.publish}
                    </TableCell>
                    <TableCell
                      align="left"
                      sx={{ border: "none" }}
                      padding="none"
                    >
                      <IconButton>
                        <MoreVertIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}
