import Box from "@mui/material/Box";
import Masonry from "@mui/lab/Masonry";
import Container from "@mui/material/Container";

import DeleteDialog from "./delete-file";
import AlertDialog from "./alert-dialog";
import AdvertisingDialog from "./advertising-dialog";
import CardsDialog from "./card-dialong";
import EventDialog from "./event-dialong";
import ComponentBlock from "../../component-block";
import ProposeDialog from "./propose-dialog";
import FormDialog from "./form-dialong";

// ----------------------------------------------------------------------

export default function CardDialog() {
  return (
    <>
      <Container sx={{ my: 10 }}>
        <Masonry columns={{ xs: 1, md: 3 }} spacing={5}>
          <ComponentBlock title="Alerts">
            <AlertDialog />
          </ComponentBlock>

          <ComponentBlock title="Delete">
            <DeleteDialog />
          </ComponentBlock>

          <ComponentBlock title="Advertising">
            <AdvertisingDialog />
          </ComponentBlock>

          <ComponentBlock title="Card">
            <CardsDialog />
          </ComponentBlock>

          <ComponentBlock title="New Event">
            <EventDialog />
          </ComponentBlock>

          <ComponentBlock title="Propose">
            <ProposeDialog />
          </ComponentBlock>

          <ComponentBlock title="Form">
            <FormDialog />
          </ComponentBlock>
        </Masonry>
      </Container>
    </>
  );
}
