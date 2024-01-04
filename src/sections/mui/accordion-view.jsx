import { useState } from "react";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Accordion from "@mui/material/Accordion";
import Typography from "@mui/material/Typography";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import ComponentBlock from "../component-block";

// ----------------------------------------------------------------------

const _accordions = [...Array(4)].map((_, index) => ({
  value: `panel${index + 1}`,
  heading: `Accordion ${index + 1}`,
}));

// ----------------------------------------------------------------------

export default function AccordionView() {
  const [controlled, setControlled] = useState(false);

  const handleChangeControlled = (panel) => (event, isExpanded) => {
    setControlled(isExpanded ? panel : false);
  };

  return (
    <>
      <Container sx={{ my: 10 }}>
        <Stack spacing={5}>
          <ComponentBlock title="Simple" spacing={0}>
            {_accordions.map((accordion, index) => (
              <Accordion key={accordion.value}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography variant="subtitle1">
                    {accordion.heading}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Occaecati est et illo quibusdam accusamus qui. Incidunt aut
                    et molestiae ut facere aut. Est quidem iusto praesentium
                    excepturi harum nihil tenetur facilis. Ut omnis voluptates
                    nihil accusantium doloribus eaque debitis.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </ComponentBlock>

          <ComponentBlock title="Controlled" spacing={0}>
            {_accordions.map((item, index) => (
              <Accordion
                key={item.value}
                expanded={controlled === item.value}
                onChange={handleChangeControlled(item.value)}
              >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography
                    variant="subtitle1"
                    sx={{ width: "33%", flexShrink: 0 }}
                  >
                    {item.heading}
                  </Typography>
                  <Typography sx={{ color: "text.secondary" }}>
                    10 Essential Tips for Healthy Living
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Occaecati est et illo quibusdam accusamus qui. Incidunt aut
                    et molestiae ut facere aut. Est quidem iusto praesentium
                    excepturi harum nihil tenetur facilis. Ut omnis voluptates
                    nihil accusantium doloribus eaque debitis.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </ComponentBlock>
        </Stack>
      </Container>
    </>
  );
}
