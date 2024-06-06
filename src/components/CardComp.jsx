import { CardContent, IconButton, Typography,Card, ThemeProvider } from '@mui/material';
import React from 'react';
import CallIcon from "@mui/icons-material/Call";
import Theme from './Theme';

const CardComp = (props) => {
  return (
    <ThemeProvider theme={Theme}>
      <Card
        sx={{ bgcolor: "secondary.main", width: { xs: "300px", sm: "400px" } }}
      >
        <CardContent>
          <Typography
            component="div"
            variant="h5"
            color="white"
            sx={{ lineClamp: 10, letterSpacing: 2, fontFamily: "sans-serif" }}
          >
            <IconButton size="large">{props.icon}</IconButton>
            {props.text}
          </Typography>
          <Typography
            component="div"
            variant="span"
            color="white"
            sx={{ fontSize: "18px", ml: 2, mt: 4, textWrap: { md: "nowrap" } }}
          >
            {props.para1},
          </Typography>
          <Typography
            component="div"
            variant="span"
            color="white"
            sx={{ fontSize: "18px", ml: 2, mt: 2, textWrap: { md: "nowrap" } }}
          >
            {props.para2}
          </Typography>
        </CardContent>
      </Card>
    </ThemeProvider>
  );
}

export default CardComp;
