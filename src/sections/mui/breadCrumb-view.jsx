import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Stack } from "@mui/material";

import Masonry from "@mui/lab/Masonry";
import Container from "@mui/material/Container";

import ComponentBlock from "../component-block";

const handleButtonClick = () => {
  // Handle the action when the button is clicked
  console.log("Button clicked!");
};

const DotBreadcrumb = () => {
  return (
    <Container sx={{ my: 10 }}>
      <Stack spacing={3}>
        <ComponentBlock title="Text" sx={{ flexDirection: "column" }}>
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
        </ComponentBlock>

        <ComponentBlock title="Icon" sx={{ flexDirection: "column" }}>
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
        </ComponentBlock>

        <ComponentBlock title="Title">
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
        </ComponentBlock>

        <ComponentBlock title="Title + Action">
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
        </ComponentBlock>

        <ComponentBlock title="On Mobile">
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
          <Button variant="contained" color="neutral" sx={{ width: "fit-content" }} onClick={handleButtonClick}>
            Action
          </Button>
        </ComponentBlock>
      </Stack>
    </Container>
  );
};

export default DotBreadcrumb;
