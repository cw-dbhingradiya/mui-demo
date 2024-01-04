import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";

import PaginationItem from "@mui/material/PaginationItem";

export default function BasicPagination() {
  return (
    <Stack gap={10}>
      <Stack spacing={5}>
        <Typography variant="h4">Circular</Typography>
        <Pagination count={10} color="primary" />
        <Pagination
          count={10}
          color="primary"
          variant="outlined"
          renderItem={(item) => <PaginationItem {...item} />}
        />
        <Pagination count={10} color="primary" />
      </Stack>

      <Stack spacing={5}>
        <Typography variant="h4">Rounded</Typography>
        <Pagination count={10} color="primary" shape="rounded" />
        <Pagination
          count={10}
          color="primary"
          variant="outlined"
          shape="rounded"
        />
        <Pagination count={10} color="primary" variant="soft" shape="rounded" />
      </Stack>

      <Stack spacing={5}>
        <Typography variant="h4">Size</Typography>
        <Pagination count={10} color="primary" shape="rounded" size="small" />
        <Pagination
          count={10}
          color="primary"
          variant="outlined"
          shape="rounded"
        />
        <Pagination
          count={10}
          color="primary"
          variant="soft"
          shape="rounded"
          size="large"
        />
      </Stack>

      <Stack spacing={5}>
        <Typography variant="h4">Size</Typography>
        <Pagination count={10} color="primary" size="small" />
        <Pagination count={10} color="primary" variant="outlined" />
        <Pagination count={10} color="primary" variant="soft" size="large" />
      </Stack>
    </Stack>
  );
}
