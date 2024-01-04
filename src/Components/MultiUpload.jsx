import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import DeleteIcon from "@mui/icons-material/Delete";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Box, Button, Stack, Typography } from "@mui/material";

const MultipleAvatarUpload = () => {
  const [avatarImagesMulti, setAvatarImagesMulti] = useState([]);

  const multiHandleAvatarChange = (event) => {
    const files = Array.from(event.target.files);

    const images = files.map((file) => URL.createObjectURL(file));

    setAvatarImagesMulti([...avatarImagesMulti, ...images]);
  };
  const multiHandleRemoveAllAvatars = () => {
    setAvatarImagesMulti([]);
  };

  //   const isUploadButtonDisabled = avatarImagesMulti.length === 0;

  return (
    <div
      style={{
        width: 740,
        border: "2px dashed rgba(145, 158, 171, 0.20)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 40,
        borderRadius: 16,
      }}
    >
      <div style={{ width: 740 }}>
        <input
          accept="image/*"
          id="avatar-upload"
          multiple
          type="file"
          style={{ display: "none" }}
          onChange={multiHandleAvatarChange}
        />
        <label htmlFor="avatar-upload">
          <IconButton
            // disabled={isUploadButtonDisabled}
            sx={{
              background: avatarImagesMulti ? "grey.50014" : "#7e7f80",
              width: "740px",
              height: "312px",
              position: "relative",
              borderRadius: 2,
              border: "1px dashed rgba(145, 158, 171, 0.20)",
            }}
            component="span"
          >
            <Box>
              <PhotoCamera
                sx={{
                  color: "grey.500",
                  position: "absolute",
                  top: "15%",
                  left: "36%",
                  fontSize: "38px",
                  width: 200,
                  height: 150,
                }}
              />
              <Typography
                variant="h6"
                sx={{
                  color: "grey.800",
                  fontStyle: "normal",
                  position: "absolute",
                  bottom: 70,
                  width: "100%",
                  left: 0,
                }}
              >
                Select files
              </Typography>
              <Typography
                sx={{
                  color: "grey.500",
                  fontSize: "14px",
                  fontStyle: "normal",
                  position: "absolute",
                  bottom: 40,
                  width: "100%",
                  left: 0,
                }}
              >
                Drop files here or click browse thorough your machine
              </Typography>
            </Box>
          </IconButton>
        </label>
        <Stack direction="row" mt={4}>
          {avatarImagesMulti.map((image, index) => (
            <Avatar
              key={index}
              src={image}
              alt={`Avatar ${index + 1}`}
              sx={{ width: 72, height: 72, borderRadius: 2 }}
            />
          ))}
        </Stack>
        {avatarImagesMulti.length > 0 && (
          <IconButton
            onClick={multiHandleRemoveAllAvatars}
            sx={{
              float: "right",
              ":hover": {
                background: "transparent",
              },
            }}
          >
            <Button
              variant="outlined"
              color="inherit"
              sx={{
                background: "transparent",
                color: "grey.800",
                border: "1px solid  rgba(145, 158, 171, 0.32)",
              }}
            >
              Remove All
            </Button>
            <input
              accept="image/*"
              id="avatar-upload"
              multiple
              type="file"
              style={{ display: "none" }}
              onChange={multiHandleAvatarChange}
            />
            <label htmlFor="avatar-upload">
              <IconButton component="span" sx={{ background: "transparent" }}>
                <Button variant="contained" color="inherit">
                  <CloudUploadIcon /> Upload
                </Button>
              </IconButton>
            </label>
          </IconButton>
        )}
      </div>
    </div>
  );
};

export default MultipleAvatarUpload;
