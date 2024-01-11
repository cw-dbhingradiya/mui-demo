// import * as React from "react";
// import Accordion from "@mui/material/Accordion";
// import AccordionSummary from "@mui/material/AccordionSummary";
// import AccordionDetails from "@mui/material/AccordionDetails";
// import Typography from "@mui/material/Typography";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import { Box, Stack } from "@mui/material";

// export default function BasicAccordion() {
//   return (
//     <Stack>
//       <Box>
//         <Typography variant="h4">Simple</Typography>
//         <Accordion>
//           <AccordionSummary
//             expandIcon={<ExpandMoreIcon />}
//             aria-controls="panel1a-content"
//             id="panel1a-header"
//           >
//             <Typography variant="subtitle1">Item 1</Typography>
//           </AccordionSummary>
//           <AccordionDetails>
//             <Typography variant="body1">
//               Donec id justo. Curabitur blandit mollis lacus. Vivamus quis mi.
//               In ut quam vitae odio lacinia tincidunt. In consectetuer turpis ut
//               velit.
//             </Typography>
//           </AccordionDetails>
//         </Accordion>
//         <Accordion>
//           <AccordionSummary
//             expandIcon={<ExpandMoreIcon />}
//             aria-controls="panel2a-content"
//             id="panel2a-header"
//           >
//             <Typography variant="subtitle1">Item 2</Typography>
//           </AccordionSummary>
//           <AccordionDetails>
//             <Typography variant="body1">
//               Donec id justo. Curabitur blandit mollis lacus. Vivamus quis mi.
//               In ut quam vitae odio lacinia tincidunt. In consectetuer turpis ut
//               velit.
//             </Typography>
//           </AccordionDetails>
//         </Accordion>
//         <Accordion>
//           <AccordionSummary
//             expandIcon={<ExpandMoreIcon />}
//             aria-controls="panel3a-content"
//             id="panel3a-header"
//           >
//             <Typography variant="subtitle1">Item 3</Typography>
//           </AccordionSummary>
//           <AccordionDetails>
//             <Typography variant="body1">
//               Donec id justo. Curabitur blandit mollis lacus. Vivamus quis mi.
//               In ut quam vitae odio lacinia tincidunt. In consectetuer turpis ut
//               velit.
//             </Typography>
//           </AccordionDetails>
//         </Accordion>
//         <Accordion>
//           <AccordionSummary
//             expandIcon={<ExpandMoreIcon />}
//             aria-controls="panel3a-content"
//             id="panel3a-header"
//           >
//             <Typography variant="subtitle1">Item 4</Typography>
//           </AccordionSummary>
//           <AccordionDetails>
//             <Typography variant="body1">
//               Donec id justo. Curabitur blandit mollis lacus. Vivamus quis mi.
//               In ut quam vitae odio lacinia tincidunt. In consectetuer turpis ut
//               velit.
//             </Typography>
//           </AccordionDetails>
//         </Accordion>
//       </Box>

//       <Box>
//         <Typography variant="h4">Controlled</Typography>

//         <Accordion>
//           <AccordionSummary
//             expandIcon={<ExpandMoreIcon />}
//             aria-controls="panel1a-content"
//             id="panel1a-header"
//           >
//             <Typography
//               variant="subtitle1"
//               sx={{ width: "33%", flexShrink: 0 }}
//             >
//               Item 1
//             </Typography>
//             <Typography color="grey">I am an accordion</Typography>
//           </AccordionSummary>
//           <AccordionDetails>
//             <Typography variant="body1">
//               Donec id justo. Curabitur blandit mollis lacus. Vivamus quis mi.
//               In ut quam vitae odio lacinia tincidunt. In consectetuer turpis ut
//               velit.
//             </Typography>
//           </AccordionDetails>
//         </Accordion>
//         <Accordion>
//           <AccordionSummary
//             expandIcon={<ExpandMoreIcon />}
//             aria-controls="panel2a-content"
//             id="panel2a-header"
//           >
//             <Typography
//               variant="subtitle1"
//               sx={{ width: "33%", flexShrink: 0 }}
//             >
//               Item 2
//             </Typography>
//             <Typography color="grey">I am an accordion</Typography>
//           </AccordionSummary>
//           <AccordionDetails>
//             <Typography variant="body1">
//               Donec id justo. Curabitur blandit mollis lacus. Vivamus quis mi.
//               In ut quam vitae odio lacinia tincidunt. In consectetuer turpis ut
//               velit.
//             </Typography>
//           </AccordionDetails>
//         </Accordion>
//         <Accordion>
//           <AccordionSummary
//             expandIcon={<ExpandMoreIcon />}
//             aria-controls="panel3a-content"
//             id="panel3a-header"
//           >
//             <Typography
//               variant="subtitle1"
//               sx={{ width: "33%", flexShrink: 0 }}
//             >
//               Item 3
//             </Typography>
//             <Typography color="grey">I am an accordion</Typography>
//           </AccordionSummary>
//           <AccordionDetails>
//             <Typography variant="body1">
//               Donec id justo. Curabitur blandit mollis lacus. Vivamus quis mi.
//               In ut quam vitae odio lacinia tincidunt. In consectetuer turpis ut
//               velit.
//             </Typography>
//           </AccordionDetails>
//         </Accordion>
//         <Accordion>
//           <AccordionSummary
//             expandIcon={<ExpandMoreIcon />}
//             aria-controls="panel3a-content"
//             id="panel3a-header"
//           >
//             <Typography
//               variant="subtitle1"
//               sx={{ width: "33%", flexShrink: 0 }}
//             >
//               Item 4
//             </Typography>
//             <Typography color="grey">I am an accordion</Typography>
//           </AccordionSummary>
//           <AccordionDetails>
//             <Typography variant="body1">
//               Donec id justo. Curabitur blandit mollis lacus. Vivamus quis mi.
//               In ut quam vitae odio lacinia tincidunt. In consectetuer turpis ut
//               velit.
//             </Typography>
//           </AccordionDetails>
//         </Accordion>
//       </Box>
//     </Stack>
//   );
// }

import AccordionView from "../../sections/mui/accordion-view";

// ----------------------------------------------------------------------

export default function AccordionPage() {
  return (
    <>
      <AccordionView />
    </>
  );
}
