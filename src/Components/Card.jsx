import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import AppleIcon from "@mui/icons-material/Apple";
import GoogleIcon from "@mui/icons-material/Google";
import AddToDriveIcon from "@mui/icons-material/AddToDrive";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import GroupIcon from "@mui/icons-material/Group";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ChatIcon from "@mui/icons-material/Chat";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import ShareIcon from "@mui/icons-material/Share";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import PropTypes from "prop-types";
import LinearProgress from "@mui/material/LinearProgress";
import cardImg from "../assets/image/cardimg.png";
import CardTable from "../Components/CardTable";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

function LinearProgressWithLabel(props) {
  return (
    <>
      <Box mb={4}>
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="overline">Pending</Typography>
          <Box sx={{ minWidth: 35 }}>
            <Typography variant="subtitle1">86.6k</Typography>
          </Box>
        </Stack>
        <Box sx={{ width: "100%", mr: 1 }}>
          <LinearProgress
            color="warning"
            variant="determinate"
            {...props}
            sx={{ height: 8, borderRadius: 16, backgroundColor: "#919EAB29" }}
          />
        </Box>
      </Box>

      <Box mb={4}>
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="overline">Canceled</Typography>
          <Box sx={{ minWidth: 35 }}>
            <Typography variant="subtitle1">8.2k</Typography>
          </Box>
        </Stack>
        <Box sx={{ width: "100%", mr: 1 }}>
          <LinearProgress
            color="error"
            variant="determinate"
            {...props}
            sx={{ height: 8, borderRadius: 16, backgroundColor: "#919EAB29" }}
          />
        </Box>
      </Box>

      <Box>
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="overline">Sold</Typography>
          <Box sx={{ minWidth: 35 }}>
            <Typography variant="subtitle1">79k</Typography>
          </Box>
        </Stack>
        <Box sx={{ width: "100%", mr: 1 }}>
          <LinearProgress
            color="success"
            variant="determinate"
            {...props}
            sx={{ height: 8, borderRadius: 16, backgroundColor: "#919EAB29" }}
          />
        </Box>
      </Box>
    </>
  );
}

LinearProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
};

export default function BasicCard() {
  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 10 : prevProgress + 10
      );
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Stack direction="row" alignItems="start" gap={8}>
      <Stack gap={5}>
        <Card sx={{ width: 370 }} elevation={24}>
          <CardContent>
            <Typography variant="subtitle2" gutterBottom>
              Order Timeline
            </Typography>
            <Timeline position="right">
              <TimelineItem
                sx={{
                  ":before": {
                    display: "contents",
                  },
                }}
              >
                <TimelineSeparator>
                  <TimelineDot color="primary" />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="subtitle1">
                    1983, orders, $4220
                  </Typography>
                  <Typography variant="caption" color="grey.500">
                    19 Jan 2022
                  </Typography>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem
                sx={{
                  ":before": {
                    display: "contents",
                  },
                }}
              >
                <TimelineSeparator>
                  <TimelineDot color="warning" />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="subtitle1">
                    12 Invoices have been paid
                  </Typography>
                  <Typography variant="caption" color="grey.500">
                    08 Apr 2022
                  </Typography>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem
                sx={{
                  ":before": {
                    display: "contents",
                  },
                }}
              >
                <TimelineSeparator>
                  <TimelineDot color="info" />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="subtitle1">
                    Order #37745 from September
                  </Typography>
                  <Typography variant="caption" color="grey.500">
                    10 Sep 2022
                  </Typography>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem
                sx={{
                  ":before": {
                    display: "contents",
                  },
                }}
              >
                <TimelineSeparator>
                  <TimelineDot color="error" />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="subtitle1">
                    New order placed #XF-2356
                  </Typography>
                  <Typography variant="caption" color="grey.500">
                    07 Jul 2022
                  </Typography>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem
                sx={{
                  ":before": {
                    display: "contents",
                  },
                }}
              >
                <TimelineSeparator>
                  <TimelineDot color="secondary" />
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="subtitle1">
                    New order placed #XF-2356.
                  </Typography>
                  <Typography variant="caption" color="grey.500">
                    11 Jul 2022
                  </Typography>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </CardContent>
        </Card>

        <Card sx={{ width: 370 }} elevation={24}>
          <CardContent>
            <Stack direction="row" justifyContent="space-between">
              <Stack direction="row" gap={3}>
                <Avatar src="https://shorturl.at/rsCJ4" />
                <Box>
                  <Typography variant="subtitle2">Jayvion Simon</Typography>
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    display="flex"
                    alignItems="center"
                  >
                    <GroupIcon sx={{ marginRight: 1, fontSize: 14 }} />
                    23 guests
                  </Typography>
                  <IconButton color="error" sx={{ background: "#FF563014" }}>
                    <CallIcon sx={{ fontSize: 18 }} />
                  </IconButton>
                  <IconButton
                    color="info"
                    sx={{ background: "#00B8D914", ml: 1.6, mr: 1.6 }}
                  >
                    <ChatIcon sx={{ fontSize: 18 }} />
                  </IconButton>
                  <IconButton color="primary" sx={{ background: "#00A76F14" }}>
                    <EmailIcon sx={{ fontSize: 18 }} />
                  </IconButton>
                </Box>
              </Stack>
              <Button variant="outlined" color="neutralBorder">
                Approve
              </Button>
            </Stack>
          </CardContent>
        </Card>

        <Card sx={{ width: 370 }} elevation={24}>
          <CardContent>
            <Typography variant="h6" width="auto">
              Top Installed Countries subheader
            </Typography>
            <CardTable />
          </CardContent>
        </Card>
      </Stack>

      <Stack direction="row" alignItems="start" flexWrap="wrap" gap={5}>
        <Card elevation={24}>
          <CardContent>
            <Typography variant="subtitle2" gutterBottom>
              Your Current Balance
            </Typography>
            <Typography variant="h3" component="div">
              $18,765
            </Typography>
            <Stack direction="row" justifyContent="space-between">
              <Typography variant="body2" color="text.secondary">
                Order Total
              </Typography>
              <Typography variant="body2">$28,765</Typography>
            </Stack>
            <Stack direction="row" justifyContent="space-between">
              <Typography variant="body2" color="text.secondary">
                Earning
              </Typography>
              <Typography variant="body2">$2,765</Typography>
            </Stack>
            <Stack direction="row" justifyContent="space-between">
              <Typography variant="body2" color="text.secondary">
                Refunded
              </Typography>
              <Typography variant="body2">-$2,765</Typography>
            </Stack>
          </CardContent>
          <CardActions>
            <Button variant="contained" color="warning" fullWidth>
              Request
            </Button>
            <Button variant="contained" color="primary" fullWidth>
              Transfer
            </Button>
          </CardActions>
        </Card>

        <Card elevation={24}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Top Authors
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Stack direction="row" alignItems="center" gap={3}>
                <Avatar src="https://shorturl.at/rsCJ4" />
                <Box>
                  <Typography variant="subtitle2">Jayvion Simon</Typography>
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    display="flex"
                    alignItems="center"
                  >
                    <FavoriteIcon sx={{ marginRight: 1, fontSize: 14 }} />
                    2.6k
                  </Typography>
                </Box>
              </Stack>
              <IconButton
                variant="text"
                color="primary"
                sx={{
                  backgroundColor: "#00A76F14",
                  color: "#00A76F",
                }}
              >
                <EmojiEventsIcon />
              </IconButton>
            </Stack>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Stack direction="row" alignItems="center" gap={3}>
                <Avatar src="https://shorturl.at/rsCJ4" />
                <Box>
                  <Typography variant="subtitle2">Jayvion Simon</Typography>
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    display="flex"
                    alignItems="center"
                  >
                    <FavoriteIcon sx={{ marginRight: 1, fontSize: 14 }} />
                    58.9k
                  </Typography>
                </Box>
              </Stack>
              <IconButton
                variant="text"
                color="info"
                sx={{
                  backgroundColor: "#00B8D914",
                }}
              >
                <EmojiEventsIcon />
              </IconButton>
            </Stack>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Stack direction="row" alignItems="center" gap={3}>
                <Avatar src="https://shorturl.at/rsCJ4" />
                <Box>
                  <Typography variant="subtitle2">Jayvion Simon</Typography>
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    display="flex"
                    alignItems="center"
                  >
                    <FavoriteIcon sx={{ marginRight: 1, fontSize: 14 }} />
                    1.1k
                  </Typography>
                </Box>
              </Stack>
              <IconButton
                variant="text"
                color="error"
                sx={{
                  backgroundColor: "#FF563014",
                }}
              >
                <EmojiEventsIcon />
              </IconButton>
            </Stack>
          </CardContent>
        </Card>

        <Card elevation={24}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Top Related Applications
            </Typography>
            <Stack gap={5}>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Stack direction="row" alignItems="center" gap={3}>
                  <Avatar
                    variant="rounded"
                    sx={{
                      bgcolor: "grey.200",
                      color: "#000",
                      borderRadius: 3,
                      width: 48,
                      height: 48,
                    }}
                  >
                    <GoogleIcon />
                  </Avatar>
                  <Box>
                    <Typography variant="subtitle2">Chrome</Typography>
                    <Box display="flex" alignItems="center">
                      <Typography
                        variant="caption"
                        color="text.secondary"
                        display="flex"
                        alignItems="center"
                      >
                        <AppleIcon sx={{ fontSize: 14, marginRight: 1 }} />
                        Mac
                      </Typography>
                      <Button
                        variant="text"
                        color="primary"
                        size="small"
                        sx={{
                          width: 38,
                          minWidth: 38,
                          height: 24,
                          backgroundColor: "#22C55E29",
                          marginLeft: 1,
                        }}
                      >
                        Free
                      </Button>
                    </Box>
                  </Box>
                </Stack>
                <Box lineHeight="normal">
                  <Rating
                    sx={{ fontSize: 16 }}
                    name="text-feedback"
                    value={2}
                    readOnly
                    emptyIcon={
                      <StarIcon style={{ opacity: 0.55, fontSize: 16 }} />
                    }
                  />
                  <Typography variant="caption" color="text.secondary">
                    73.9k reviews
                  </Typography>
                </Box>
              </Stack>

              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Stack direction="row" alignItems="center" gap={3}>
                  <Avatar
                    variant="rounded"
                    sx={{
                      bgcolor: "grey.200",
                      color: "#000",
                      borderRadius: 3,
                      width: 48,
                      height: 48,
                    }}
                  >
                    <AddToDriveIcon />
                  </Avatar>
                  <Box>
                    <Typography variant="subtitle2">Drive</Typography>
                    <Box display="flex" alignItems="center">
                      <Typography
                        variant="caption"
                        color="text.secondary"
                        display="flex"
                        alignItems="center"
                      >
                        <AppleIcon sx={{ fontSize: 14, marginRight: 1 }} />
                        Mac
                      </Typography>
                      <Button
                        variant="text"
                        color="primary"
                        size="small"
                        sx={{
                          width: 38,
                          minWidth: 38,
                          height: 24,
                          backgroundColor: "#22C55E29",
                          marginLeft: 1,
                        }}
                      >
                        Free
                      </Button>
                    </Box>
                  </Box>
                </Stack>
                <Box lineHeight="normal">
                  <Rating
                    sx={{ fontSize: 16 }}
                    name="text-feedback"
                    value={1}
                    readOnly
                    emptyIcon={
                      <StarIcon style={{ opacity: 0.55, fontSize: 16 }} />
                    }
                  />
                  <Typography variant="caption" color="text.secondary">
                    50.1k reviews
                  </Typography>
                </Box>
              </Stack>

              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Stack direction="row" alignItems="center" gap={3}>
                  <Avatar
                    variant="rounded"
                    sx={{
                      bgcolor: "grey.200",
                      color: "#000",
                      borderRadius: 3,
                      width: 48,
                      height: 48,
                    }}
                  >
                    <GoogleIcon />
                  </Avatar>
                  <Box>
                    <Typography variant="subtitle2">Dropbox</Typography>
                    <Box display="flex" alignItems="center">
                      <Typography
                        variant="caption"
                        color="text.secondary"
                        display="flex"
                        alignItems="center"
                      >
                        <AppleIcon sx={{ fontSize: 14, marginRight: 1 }} />
                        Mac
                      </Typography>
                      <Button
                        variant="text"
                        color="error"
                        size="small"
                        sx={{
                          width: 38,
                          minWidth: 38,
                          height: 24,
                          backgroundColor: "#FF563029",
                          marginLeft: 1,
                        }}
                      >
                        $15
                      </Button>
                    </Box>
                  </Box>
                </Stack>
                <Box lineHeight="normal">
                  <Rating
                    sx={{ fontSize: 16 }}
                    name="text-feedback"
                    value={3}
                    readOnly
                    emptyIcon={
                      <StarIcon style={{ opacity: 0.55, fontSize: 16 }} />
                    }
                  />
                  <Typography variant="caption" color="text.secondary">
                    90.5k reviews
                  </Typography>
                </Box>
              </Stack>

              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Stack direction="row" alignItems="center" gap={3}>
                  <Avatar
                    variant="rounded"
                    sx={{
                      bgcolor: "grey.200",
                      color: "#000",
                      borderRadius: 3,
                      width: 48,
                      height: 48,
                    }}
                  >
                    <GoogleIcon />
                  </Avatar>
                  <Box>
                    <Typography variant="subtitle2">Evernote</Typography>
                    <Box display="flex" alignItems="center">
                      <Typography
                        variant="caption"
                        color="text.secondary"
                        display="flex"
                        alignItems="center"
                      >
                        <AppleIcon sx={{ fontSize: 14, marginRight: 1 }} />
                        Mac
                      </Typography>
                      <Button
                        variant="text"
                        color="error"
                        size="small"
                        sx={{
                          width: 38,
                          minWidth: 38,
                          height: 24,
                          backgroundColor: "#FF563029",
                          marginLeft: 1,
                        }}
                      >
                        $15
                      </Button>
                    </Box>
                  </Box>
                </Stack>
                <Box lineHeight="normal">
                  <Rating
                    sx={{ fontSize: 16 }}
                    name="text-feedback"
                    value={4}
                    readOnly
                    emptyIcon={
                      <StarIcon style={{ opacity: 0.55, fontSize: 16 }} />
                    }
                  />
                  <Typography variant="caption" color="text.secondary">
                    73.9k reviews
                  </Typography>
                </Box>
              </Stack>

              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Stack direction="row" alignItems="center" gap={3}>
                  <Avatar
                    variant="rounded"
                    sx={{
                      bgcolor: "grey.200",
                      color: "#000",
                      borderRadius: 3,
                      width: 48,
                      height: 48,
                    }}
                  >
                    <GitHubIcon />
                  </Avatar>
                  <Box>
                    <Typography variant="subtitle2">Github</Typography>
                    <Box display="flex" alignItems="center">
                      <Typography
                        variant="caption"
                        color="text.secondary"
                        display="flex"
                        alignItems="center"
                      >
                        <AppleIcon sx={{ fontSize: 14, marginRight: 1 }} />
                        Mac
                      </Typography>
                      <Button
                        variant="text"
                        color="primary"
                        size="small"
                        sx={{
                          width: 38,
                          minWidth: 38,
                          height: 24,
                          backgroundColor: "#22C55E29",
                          marginLeft: 1,
                        }}
                      >
                        Free
                      </Button>
                    </Box>
                  </Box>
                </Stack>
                <Box lineHeight="normal">
                  <Rating
                    sx={{ fontSize: 16 }}
                    name="text-feedback"
                    value={5}
                    readOnly
                    emptyIcon={
                      <StarIcon style={{ opacity: 0.55, fontSize: 16 }} />
                    }
                  />
                  <Typography variant="caption" color="text.secondary">
                    25.k reviews
                  </Typography>
                </Box>
              </Stack>
            </Stack>
          </CardContent>
        </Card>

        <Card elevation={24}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Traffic by Site
            </Typography>
            <Stack gap={3}>
              <Stack direction="row" gap={3}>
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  flexDirection="column"
                  textAlign="center"
                  border="1px solid rgba(145, 158, 171, 0.16)"
                  borderRadius={2}
                  width={119}
                  height={86}
                >
                  <FacebookIcon color="info" />
                  <Typography variant="h6">34.9k</Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ lineHeight: "normal" }}
                  >
                    FaceBook
                  </Typography>
                </Box>

                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  flexDirection="column"
                  textAlign="center"
                  border="1px solid rgba(145, 158, 171, 0.16)"
                  borderRadius={2}
                  width={119}
                  height={86}
                >
                  <GoogleIcon />
                  <Typography variant="h6">91.4k</Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ lineHeight: "normal" }}
                  >
                    Google
                  </Typography>
                </Box>
              </Stack>

              <Stack direction="row" gap={3}>
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  flexDirection="column"
                  textAlign="center"
                  border="1px solid rgba(145, 158, 171, 0.16)"
                  borderRadius={2}
                  width={119}
                  height={86}
                >
                  <LinkedInIcon color="info" />
                  <Typography variant="h6">50.1k</Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ lineHeight: "normal" }}
                  >
                    Linkedin
                  </Typography>
                </Box>

                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  flexDirection="column"
                  textAlign="center"
                  border="1px solid rgba(145, 158, 171, 0.16)"
                  borderRadius={2}
                  width={119}
                  height={86}
                >
                  <TwitterIcon color="info" />
                  <Typography variant="h6">90.5k</Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ lineHeight: "normal" }}
                  >
                    Twitter
                  </Typography>
                </Box>
              </Stack>
            </Stack>
          </CardContent>
        </Card>

        <Card elevation={24}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Booked
            </Typography>
            <Box sx={{ width: "100%" }}>
              <LinearProgressWithLabel value={50} />
            </Box>
          </CardContent>
        </Card>

        <Card sx={{ width: 620 }} elevation={24}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Sales Overview
            </Typography>
            <Box sx={{ width: "100%" }}>
              <LinearProgressWithLabel value={50} />
            </Box>
          </CardContent>
        </Card>

        <Card sx={{ width: 590 }} elevation={24}>
          <CardContent sx={{ position: "relative" }}>
            <Stack direction="row" justifyContent="space-between">
              <Box>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Button sx={{ color: `info.darker`, bgcolor: "#00B8D929" }}>
                    Published
                  </Button>
                  <Typography variant="caption" color="text.secondary">
                    12 Aug 2022 10:00 PM
                  </Typography>
                </Box>
                <Typography variant="subtitle2">
                  Apply These 7 Secret Techniques To Improve Event
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Best 30 Tips For Event
                </Typography>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  position="absolute"
                  bottom="20px"
                  width="58%"
                >
                  <IconButton>
                    <MoreHorizIcon />
                  </IconButton>
                  <Stack direction="row">
                    <Typography
                      color="text.secondary"
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                      variant="caption"
                    >
                      <ChatIcon sx={{ fontSize: 16, mr: 1 }} /> 5
                    </Typography>
                    <Typography
                      color="text.secondary"
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                      variant="caption"
                    >
                      <RemoveRedEyeIcon sx={{ fontSize: 16, mr: 1 }} /> 12
                    </Typography>
                    <Typography
                      color="text.secondary"
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                      variant="caption"
                    >
                      <ShareIcon sx={{ fontSize: 16, mr: 1 }} /> 4
                    </Typography>
                  </Stack>
                </Box>
              </Box>
              <img
                src={cardImg}
                style={{ borderRadius: 12 }}
                alt="mastercard"
              />
              <Avatar
                sx={{ position: "absolute", right: 35, top: 35 }}
                src="https://shorturl.at/rsCJ4"
              />
            </Stack>
          </CardContent>
        </Card>
      </Stack>
    </Stack>
  );
}
