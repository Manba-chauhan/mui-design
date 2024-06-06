import React from 'react';
import Card from './CardComp.jsx';
import { IconButton, Stack } from '@mui/material';
import CardComp from './CardComp.jsx';
import CallIcon from "@mui/icons-material/Call";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
const Section4 = () => {
    const carddata = [
      {
        id: 1,
        icon: <CallIcon sx={{ color: "white" }} />,
        text: "CALL US",
        para1: "1 (234) 567-891 ",
        para2: "1 (234) 987-654",
      },
      {
        id: 2,
        icon: <LocationOnIcon sx={{ color: "white" }} />,
        text: "LOCATION",
        para1: "121 Rock Sreet, 21 Avenue, New York, NY",
        para2: "92103-9000",
      },
      {
        id: 1,
        icon: <WatchLaterIcon sx={{ color: "white" }} />,
        text: "CALL US",
        para1: "Mon – Fri …… 11 am – 8 pm, Sat, Sun  ……",
        para2: "6 am – 8 pm",
      },
    ];
  return (
    <Stack
      sx={{ Width: "100%", mx: "auto" }}
      direction={{ xs: "column", sm: "row" }}
      spacing={{ xs: 1, sm: 2, md: 4 }}
      justifyContent="center"
      alignItems={{ xs: "center", sm: "flex-start" }}
    //   spacing={2}
    >
      {carddata.map((item) => {
        return (
          <CardComp
            icon={item.icon}
            text={item.text}
            para1={item.para1}
            para2={item.para2}
          />
        );
      })}
    </Stack>
  );
}

export default Section4;
