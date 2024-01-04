import PropTypes from "prop-types";

import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import DriveEtaIcon from "@mui/icons-material/DriveEta";

export default function Chips({ variant = "filled" }) {
  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };

  const renderLabel = (text) => (
    <Typography
      variant="overline"
      component="div"
      sx={{ color: "text.secondary", mb: 1 }}
    >
      {text}
    </Typography>
  );

  return (
    <Stack spacing={3}>
      <Stack
        flexWrap="wrap"
        component={Paper}
        variant="outlined"
        alignItems="center"
        justifyContent="center"
        sx={{ p: 5, borderStyle: "dashed" }}
        gap={3}
      >
        <Chip
          variant={variant}
          label="Default"
          icon={<DriveEtaIcon />}
          onDelete={handleDelete}
          color="buttonDefault"
        />

        <Chip
          variant={variant}
          label="Primary"
          avatar={<Avatar src="https://shorturl.at/sKOVW" />}
          color="primary"
          onDelete={handleDelete}
        />

        <Chip
          variant={variant}
          avatar={<Avatar src="https://shorturl.at/sKOVW" />}
          label="Secondary"
          onDelete={handleDelete}
          color="secondary"
        />

        <Chip
          variant={variant}
          avatar={<Avatar src="https://shorturl.at/sKOVW" />}
          label="Info"
          onDelete={handleDelete}
          color="info"
        />

        <Chip
          variant={variant}
          avatar={<Avatar src="https://shorturl.at/sKOVW" />}
          label="Success"
          onDelete={handleDelete}
          color="success"
        />

        <Chip
          variant={variant}
          avatar={<Avatar src="https://shorturl.at/sKOVW" />}
          label="Warning"
          onDelete={handleDelete}
          color="warning"
        />

        <Chip
          variant={variant}
          avatar={<Avatar src="https://shorturl.at/sKOVW" />}
          label="Error"
          onDelete={handleDelete}
          color="error"
        />
      </Stack>

      <div>
        {renderLabel("Custom icon")}

        <Stack
          flexWrap="wrap"
          component={Paper}
          variant="outlined"
          alignItems="center"
          justifyContent="center"
          sx={{ p: 5, borderStyle: "dashed" }}
          gap={3}
        >
          <Chip
            variant={variant}
            avatar={<Avatar src="https://shorturl.at/sKOVW" />}
            label="Custom icon"
            onDelete={handleDelete}
            color="buttonDefault"
          />

          <Chip
            variant={variant}
            icon={<DriveEtaIcon />}
            label="Custom icon"
            onDelete={handleDelete}
            color="info"
          />
        </Stack>
      </div>

      <div>
        {renderLabel("Disabled")}

        <Stack
          spacing={3}
          flexWrap="wrap"
          component={Paper}
          variant="outlined"
          alignItems="center"
          justifyContent="center"
          sx={{ p: 5, borderStyle: "dashed" }}
        >
          <Chip
            disabled
            variant={variant}
            avatar={<Avatar src="https://shorturl.at/sKOVW" />}
            label="Disabled"
            onDelete={handleDelete}
            color="default"
          />

          <Chip
            disabled
            variant={variant}
            icon={<DriveEtaIcon />}
            label="Disabled"
            onDelete={handleDelete}
            color="default"
          />
        </Stack>
      </div>

      <div>
        {renderLabel("Sizes")}

        <Stack
          spacing={3}
          flexWrap="wrap"
          component={Paper}
          variant="outlined"
          alignItems="center"
          justifyContent="center"
          sx={{ p: 5, borderStyle: "dashed" }}
        >
          <Chip
            variant={variant}
            avatar={<Avatar src="https://shorturl.at/sKOVW" />}
            label="Normal"
            onDelete={handleDelete}
            color="info"
          />

          <Chip
            variant={variant}
            size="small"
            icon={<DriveEtaIcon />}
            label="Small"
            onDelete={handleDelete}
            color="info"
          />
        </Stack>
      </div>
    </Stack>
  );
}

Chips.propTypes = {
  variant: PropTypes.string,
};
