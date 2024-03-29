import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Typography } from "@mui/material";
import FaceIcon from "@mui/icons-material/Face";
import Container from "@mui/material/Container";
import Masonry from "@mui/lab/Masonry";

import ComponentBlock from "../component-block";

const TIMELINES = [
  {
    key: 1,
    title: "1983, orders, $4220",
    des: "19 Jan 2022",
    color: "primary",
    icon: <FaceIcon />,
  },
  {
    key: 2,
    title: "12 Invoices have been paid",
    des: "08 Apr 2022",
    color: "warning",
    icon: <FaceIcon />,
  },
  {
    key: 3,
    title: "Order #37745 from September",
    des: "10 Sep 2022",
    color: "info",
    icon: <FaceIcon />,
  },
  {
    key: 4,
    title: "New order placed #XF-2356",
    des: "07 Jul 2022",
    color: "error",
    icon: <FaceIcon />,
  },
  {
    key: 5,
    title: "New order placed #XF-2356",
    des: "11 Jul 2022",
    color: "secondary",
    icon: <FaceIcon />,
  },
];

export default function ColorsTimeline() {
  const lastItem = TIMELINES[TIMELINES.length - 1].key;

  const reduceTimeLine = TIMELINES.slice(TIMELINES.length - 3);

  return (
    <Container sx={{ my: 10 }}>
      <Masonry columns={{ xs: 1, md: 1 }} spacing={3}>
        <ComponentBlock title="Right">
          <Timeline position="right">
            {TIMELINES.map((item) => (
              <TimelineItem key={item.key}>
                <TimelineSeparator>
                  <TimelineDot color={item.color} />
                  {lastItem === item.key ? null : <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="subtitle1">{item.title}</Typography>
                  <Typography variant="caption" color="grey.500">
                    {item.des}
                  </Typography>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </ComponentBlock>

        <ComponentBlock title="Left">
          <Timeline position="left">
            {TIMELINES.map((item) => (
              <TimelineItem key={item.key}>
                <TimelineSeparator>
                  <TimelineDot color={item.color} />
                  {lastItem === item.key ? null : <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="subtitle1">{item.title}</Typography>
                  <Typography variant="caption" color="grey.500">
                    {item.des}
                  </Typography>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </ComponentBlock>

        <ComponentBlock title="Alternate">
          <Timeline position="alternate">
            {TIMELINES.map((item) => (
              <TimelineItem key={item.key}>
                <TimelineSeparator>
                  <TimelineDot color={item.color} />
                  {lastItem === item.key ? null : <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="subtitle1">{item.title}</Typography>
                  <Typography variant="caption" color="grey.500">
                    {item.des}
                  </Typography>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </ComponentBlock>

        <ComponentBlock title="Outlined">
          <Timeline position="right">
            {TIMELINES.map((item) => (
              <TimelineItem key={item.key}>
                <TimelineSeparator>
                  <TimelineDot color={item.color} variant="outlined" />
                  {lastItem === item.key ? null : <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="subtitle1">{item.title}</Typography>
                  <Typography variant="caption" color="grey.500">
                    {item.des}
                  </Typography>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </ComponentBlock>

        <ComponentBlock title="Customized">
          <Timeline position="left">
            {TIMELINES.map((item) => (
              <TimelineItem key={item.key}>
                <TimelineSeparator>
                  <TimelineDot color={item.color}>{item.icon}</TimelineDot>
                  {lastItem === item.key ? null : <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent>
                  <Typography variant="subtitle1">{item.title}</Typography>
                  <Typography variant="caption" color="grey.500">
                    {item.des}
                  </Typography>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </ComponentBlock>
      </Masonry>
    </Container>
  );
}
