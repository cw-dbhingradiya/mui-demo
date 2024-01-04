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
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import { visuallyHidden } from "@mui/utils";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { Stack } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import product from "../assets/image/product.jpeg";
import TableSecond from "../Components/TableSecond";
import TableThird from "../Components/TableThird";

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
  createData(
    1,
    "Nike Air Force 1 NDESTRUKT",
    "07 Jul 2022",
    7,
    "$67.55",
    "Published"
  ),
  createData(
    2,
    "Foundations Matte Flip Flop",
    "10 Sep 2022",
    25,
    "$35.71",
    "Published"
  ),
  createData(
    3,
    "Nike Air Zoom Pegasus 37 A.I.R. Chaz Bear",
    "03 Sep 2022",
    16,
    "$52.84",
    "Draft"
  ),
  createData(
    4,
    "Arizona Soft Footbed Sandal",
    "22 Oct 2022",
    6,
    "$26.92",
    "Draft"
  ),
  createData(
    5,
    "Boston Soft Footbed Sandal",
    "30 Mar 2022",
    16,
    "$58.07",
    "Published"
  ),
  createData(6, "Zoom Freak 2", "04 Jul 2022", 3.2, "$35.71", "Published"),
  createData(
    7,
    "Gazelle Vintage low-top sneakers",
    "13 May 2022",
    9,
    "$34.30",
    "Published"
  ),
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

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="error"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              "aria-label": "select all desserts",
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
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

  return (
    <Toolbar
      sx={{
        minHeight: 44,
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity
            ),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: "1 1 100%" }}
          color="inherit"
          variant="body2"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: "1 1 100%" }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Product
        </Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon color="error" />
          </IconButton>
        </Tooltip>
      ) : (
        <></>
      )}
    </Toolbar>
  );
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
        sx={{ width: "100%", mb: 2, mt: 10, borderRadius: 4 }}
        elevation={12}
      >
        <Stack direction="row" p={2}>
          <FormControl sx={{ width: 200 }}>
            <InputLabel id="demo-simple-select-label">Stock</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={stock}
              label="Stock"
              onChange={handleChange}
            >
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={20}>20</MenuItem>
              <MenuItem value={30}>30</MenuItem>
              <MenuItem value={40}>40</MenuItem>
              <MenuItem value={50}>50</MenuItem>
              <MenuItem value={60}>60</MenuItem>
            </Select>
          </FormControl>

          <FormControl sx={{ width: 200 }}>
            <InputLabel id="demo-simple-select-label">Publish</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={publish}
              label="Publish"
              onChange={publishHandleChange}
            >
              <MenuItem value={10}>Publish</MenuItem>
              <MenuItem value={20}>Draft</MenuItem>
            </Select>
          </FormControl>

          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IconButton aria-label="search">
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Stack>
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
                    <TableCell padding="checkbox">
                      <Checkbox
                        color="error"
                        checked={isItemSelected}
                        inputProps={{
                          "aria-labelledby": labelId,
                        }}
                      />
                    </TableCell>
                    <TableCell
                      component="th"
                      id={labelId}
                      scope="row"
                      // padding="none"
                    >
                      {row.name}
                    </TableCell>
                    <TableCell align="left">{row.create}</TableCell>
                    <TableCell align="left">{row.stock}</TableCell>
                    <TableCell align="left">{row.price}</TableCell>
                    <TableCell align="left">{row.publish}</TableCell>
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
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <FormControlLabel
        // sx={{ position: "absolute", bottom: "47.5%", left: "15px" }}
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense"
      />

      <TableSecond />
      <TableThird />
    </Box>
  );
}
