import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Stack } from "@mui/material";

const handleButtonClick = () => {
  // Handle the action when the button is clicked
  console.log("Button clicked!");
};

const DotBreadcrumb = () => {
  return (
    <Stack gap={5}>
      <Typography variant="h4">Text</Typography>
      <Breadcrumbs aria-label="breadcrumb" separator="•">
        <Link underline="none" variant="body2" color="buttonDefault.main">
          Root
        </Link>
        <Link underline="none" variant="body2" color="breadText.main">
          Current
        </Link>
      </Breadcrumbs>

      <Breadcrumbs aria-label="breadcrumb" separator="•">
        <Link underline="none" variant="body2" color="buttonDefault.main">
          Root
        </Link>
        <Link underline="none" variant="body2" color="buttonDefault.main">
          Link
        </Link>
        <Link underline="none" variant="body2" color="breadText.main">
          Current
        </Link>
      </Breadcrumbs>

      <Breadcrumbs aria-label="breadcrumb" separator="•">
        <Link underline="none" variant="body2" color="buttonDefault.main">
          Root
        </Link>
        <Link underline="none" variant="body2" color="buttonDefault.main">
          Link
        </Link>
        <Link underline="none" variant="body2" color="buttonDefault.main">
          Link
        </Link>
        <Link underline="none" variant="body2" color="breadText.main">
          Current
        </Link>
      </Breadcrumbs>

      <Typography variant="h4">Icon</Typography>
      <Breadcrumbs aria-label="breadcrumb" separator="•">
        <Link underline="none" variant="body2" color="buttonDefault.main">
          <LinkedInIcon /> Root
        </Link>
        <Link underline="none" variant="body2" color="breadText.main">
          <LinkedInIcon color="breadText.main" />
          Current
        </Link>
      </Breadcrumbs>

      <Breadcrumbs aria-label="breadcrumb" separator="•">
        <Link underline="none" variant="body2" color="buttonDefault.main">
          <LinkedInIcon /> Root
        </Link>
        <Link underline="none" variant="body2" color="buttonDefault.main">
          <LinkedInIcon /> Link
        </Link>
        <Link underline="none" variant="body2" color="breadText.main">
          <LinkedInIcon color="breadText.main" /> Current
        </Link>
      </Breadcrumbs>

      <Breadcrumbs aria-label="breadcrumb" separator="•">
        <Link underline="none" variant="body2" color="buttonDefault.main">
          <LinkedInIcon /> Root
        </Link>
        <Link underline="none" variant="body2" color="buttonDefault.main">
          <LinkedInIcon /> Link
        </Link>
        <Link underline="none" variant="body2" color="buttonDefault.main">
          <LinkedInIcon /> Link
        </Link>
        <Link underline="none" variant="body2" color="breadText.main">
          <LinkedInIcon color="breadText.main" /> Current
        </Link>
      </Breadcrumbs>

      <Typography variant="h4">Cases</Typography>
      <Typography variant="h3">Title</Typography>
      <Breadcrumbs separator="•" aria-label="breadcrumb">
        <Link underline="none" variant="body2" color="buttonDefault.main">
          <LinkedInIcon /> Root
        </Link>
        <Link underline="none" variant="body2" color="buttonDefault.main">
          <LinkedInIcon /> Link
        </Link>
        <Link underline="none" variant="body2" color="breadText.main">
          <LinkedInIcon color="breadText.main" /> Current
        </Link>
      </Breadcrumbs>

      <Typography variant="h3">Title + Action</Typography>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Breadcrumbs separator="•" aria-label="breadcrumb">
          <Link underline="none" variant="body2" color="buttonDefault.main">
            <LinkedInIcon /> Root
          </Link>
          <Link underline="none" variant="body2" color="buttonDefault.main">
            <LinkedInIcon /> Link
          </Link>
          <Link underline="none" variant="body2" color="breadText.main">
            <LinkedInIcon color="breadText.main" /> Current
          </Link>
        </Breadcrumbs>
        <Button variant="contained" color="neutral" onClick={handleButtonClick}>
          Action
        </Button>
      </Stack>

      <Typography variant="h3">On Mobile</Typography>
      <Breadcrumbs separator="•" aria-label="breadcrumb">
        <Link underline="none" variant="body2" color="buttonDefault.main">
          <LinkedInIcon /> Root
        </Link>
        <Link underline="none" variant="body2" color="buttonDefault.main">
          <LinkedInIcon /> Link
        </Link>
        <Link underline="none" variant="body2" color="breadText.main">
          <LinkedInIcon color="breadText.main" /> Current
        </Link>
      </Breadcrumbs>
      <Button
        variant="contained"
        color="neutral"
        sx={{ width: "fit-content" }}
        onClick={handleButtonClick}
      >
        Action
      </Button>
    </Stack>
  );
};

export default DotBreadcrumb;
