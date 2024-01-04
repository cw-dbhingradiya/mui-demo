import * as React from "react";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { MobileTimePicker } from "@mui/x-date-pickers/MobileTimePicker";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { MobileDateTimePicker } from "@mui/x-date-pickers/MobileDateTimePicker";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { useLocaleText } from "@mui/x-date-pickers/internals";
import { Button, MenuItem, Stack } from "@mui/material";
import DialogActions from "@mui/material/DialogActions/DialogActions";

function CustomActionBar(props) {
  const { onAccept, onCancel, actions, className } = props;
  const localeText = useLocaleText();
  if (actions == null || actions.length === 0) {
    return null;
  }
  const menuItems = actions?.map((actionType) => {
    switch (actionType) {
      case "cancel":
        return (
          <Button
            color="neutral"
            variant="text"
            onClick={() => {
              onCancel();
            }}
            key={actionType}
          >
            {localeText.cancelButtonLabel}
          </Button>
        );
      case "ok":
        return (
          <Button
            variant="contained"
            color="neutral"
            onClick={() => {
              onAccept();
            }}
            key={actionType}
          >
            {localeText.okButtonLabel}
          </Button>
        );
      default:
        return null;
    }
  });
  return (
    <DialogActions className={className}>
      <Button sx={{ ":hover": { background: "none" }, padding: 0, gap: 2 }}>
        {menuItems}
      </Button>
    </DialogActions>
  );
}

export default function ResponsiveTimePickers() {
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Stack spacing={5}>
          {/* date */}
          <DemoContainer components={["DatePicker"]}>
            <DemoItem label="Date picker Desktop">
              <DatePicker format="DD - MM - YYYY" label="Date" />
            </DemoItem>
          </DemoContainer>
          {/* Mobile Date */}
          <DemoContainer components={["MobileDatePicker"]}>
            <DemoItem label="Date picker Mobile">
              <MobileDatePicker
                format="DD - MM - YYYY"
                defaultValue={dayjs(new Date())}
                slots={{ actionBar: CustomActionBar }}
                slotProps={{
                  // pass props `actions={['clear']}` to the actionBar slot
                  actionBar: { actions: ["cancel", "ok"] },
                }}
              />
            </DemoItem>
          </DemoContainer>
          {/* Mobile Date Landscape */}
          <DemoContainer components={["MobileDatePicker"]}>
            <DemoItem label="Date picker Mobile Landscape">
              <MobileDatePicker
                format="DD - MM - YYYY"
                orientation="landscape"
                defaultValue={dayjs(new Date())}
                slots={{ actionBar: CustomActionBar }}
                slotProps={{
                  // pass props `actions={['clear']}` to the actionBar slot
                  actionBar: { actions: ["cancel", "ok"] },
                }}
              />
            </DemoItem>
          </DemoContainer>
          {/* Date Time picker  */}
          <DemoContainer components={["MobileDateTimePicker"]}>
            <DemoItem label="Date Time picker ">
              <MobileDateTimePicker
                sx={{ width: 220 }}
                defaultValue={dayjs(new Date())}
                slots={{ actionBar: CustomActionBar }}
                slotProps={{
                  // pass props `actions={['clear']}` to the actionBar slot
                  actionBar: { actions: ["cancel", "ok"] },
                }}
              />
            </DemoItem>
          </DemoContainer>
          {/* Mobile Time Picker */}
          <DemoContainer components={["MobileTimePicker"]}>
            <DemoItem label="Time picker">
              <MobileTimePicker
                defaultValue={dayjs(new Date())}
                slots={{ actionBar: CustomActionBar }}
                slotProps={{
                  // pass props `actions={['clear']}` to the actionBar slot
                  actionBar: { actions: ["cancel", "ok"] },
                }}
              />
            </DemoItem>
          </DemoContainer>
          {/* Mobile Time Picker landscape */}
          <DemoContainer components={["MobileTimePicker"]}>
            <DemoItem label="Time picker Landscape">
              <MobileTimePicker
                defaultValue={dayjs(new Date())}
                orientation="landscape"
                slots={{ actionBar: CustomActionBar }}
                slotProps={{
                  // pass props `actions={['clear']}` to the actionBar slot
                  actionBar: { actions: ["cancel", "ok"] },
                }}
              />
            </DemoItem>
          </DemoContainer>
          {/* 2 calendars */}
          <DemoContainer components={["DateRangePicker"]}>
            <DemoItem label="2 calendars" component="DateRangePicker">
              <DateRangePicker
                format="DD - MM - YYYY"
                calendars={2}
                sx={{ width: 400 }}
              />
            </DemoItem>
          </DemoContainer>
        </Stack>
      </LocalizationProvider>
    </>
  );
}

// import PickerView from "../sections/picker-view";

// // ----------------------------------------------------------------------

// export default function PickerPage() {
//   return (
//     <>
//       <PickerView />
//     </>
//   );
// }
