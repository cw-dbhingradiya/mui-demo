import * as React from "react";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import DriveEtaIcon from "@mui/icons-material/DriveEta";
import Masonry from "@mui/lab/Masonry";
import Container from "@mui/material/Container";

import ComponentBlock from "../component-block";

export default function HalfRating() {
  return (
    <Container sx={{ my: 10 }}>
      <Masonry columns={{ xs: 1, sm: 2, md: 3 }} spacing={3}>
        <ComponentBlock title="Controlled">
          <Rating name="default-rating" emptyIcon={<StarIcon />} defaultValue={2} />
        </ComponentBlock>
        <ComponentBlock title="Read Only">
          <Rating name="two-rating" emptyIcon={<StarIcon />} defaultValue={2} color="warning" readOnly />
        </ComponentBlock>
        <ComponentBlock title="Disabled">
          <Rating name="two-rating" emptyIcon={<StarIcon />} defaultValue={2} color="warning" readOnly disabled />
        </ComponentBlock>
        <ComponentBlock title="Pristine">
          <Rating name="two-rating" emptyIcon={<StarIcon />} defaultValue={2} color="warning" />
        </ComponentBlock>
        <ComponentBlock title="Custom icon and color">
          <Rating
            name="enabled"
            icon={<DriveEtaIcon />}
            emptyIcon={<DriveEtaIcon />}
            defaultValue={4}
            precision={0.5}
            sx={{
              color: "info.main",
              "&:hover": { color: "info.dark" },
            }}
          />
        </ComponentBlock>
        <ComponentBlock title="Sizes">
          <Rating name="size-small" defaultValue={2} size="small" />

          <Rating name="size-medium" defaultValue={2} />

          <Rating name="size-large" defaultValue={2} size="large" />
        </ComponentBlock>
      </Masonry>
    </Container>
  );
}
