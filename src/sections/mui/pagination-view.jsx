import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";

import Masonry from "@mui/lab/Masonry";
import Container from "@mui/material/Container";
import PaginationItem from "@mui/material/PaginationItem";

import ComponentBlock from "../component-block";

export default function BasicPagination() {
  return (
    <>
      <Container sx={{ my: 10 }}>
        <Masonry columns={{ xs: 1, md: 2 }} spacing={5}>
          <ComponentBlock title="Circular">
            <Pagination count={10} color="primary" />
            <Pagination count={10} color="primary" variant="outlined" renderItem={(item) => <PaginationItem {...item} />} />
            <Pagination count={10} color="primary" />
          </ComponentBlock>

          <ComponentBlock title="Rounded">
            <Pagination count={10} color="primary" shape="rounded" />
            <Pagination count={10} color="primary" variant="outlined" shape="rounded" />
            <Pagination count={10} color="primary" variant="soft" shape="rounded" />
          </ComponentBlock>

          <ComponentBlock title="Size + Rounded">
            <Stack spacing={5}>
              <Pagination count={10} color="primary" shape="rounded" size="small" />
              <Pagination count={10} color="primary" variant="outlined" shape="rounded" />
              <Pagination count={10} color="primary" variant="soft" shape="rounded" size="large" />
            </Stack>
          </ComponentBlock>

          <ComponentBlock title="Size + Circular">
            <Stack spacing={5}>
              <Pagination count={10} color="primary" size="small" />
              <Pagination count={10} color="primary" variant="outlined" />
              <Pagination count={10} color="primary" variant="soft" size="large" />
            </Stack>
          </ComponentBlock>
        </Masonry>
      </Container>
    </>
  );
}
