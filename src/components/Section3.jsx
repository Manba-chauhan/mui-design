import {
  Grid,
  Box,
  FormControlLabel,
  TextField,
  InputLabel,
  ThemeProvider,
  Checkbox,
  Button,
} from "@mui/material";
import React from "react";
import big from "../assets/img/big.png";
import Theme from "./Theme";

const Section3 = () => {
  return (
    <ThemeProvider theme={Theme}>
      <Grid
        container
        direction={{ xs: "column", md: "row" }}
        justifyContent="center"
        alignItems={{ xs: "center", sm: "start" }}
        spacing={{ xs: 1, sm: 2, md:3 }}
        sx={{ p: { xs: 2, sm: 4, md: 6 } }}
      >
        <Grid item xs={12} md={6} container justifyContent="center">
          <Box>
            <img src={big} alt="" width="100%" style={{ maxWidth: "600px" }} />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              width: "100%",
              maxWidth: "400px",
              mx: "auto",
              px: { xs: 2, sm: 4 },
            }}
          >
            <Box mb={4}>
              <InputLabel>Name</InputLabel>
              <TextField
                variant="standard"
                sx={{ width: "100%" }}
                color="secondary"
                placeholder="Enter Your name"
              />
            </Box>
            <Box mb={4}>
              <InputLabel>Email</InputLabel>
              <TextField
                variant="standard"
                sx={{ width: "100%" }}
                color="secondary"
                placeholder="Enter Your email"
              />
            </Box>
            <Box mb={4}>
              <InputLabel>Message</InputLabel>
              <TextField
                variant="standard"
                sx={{ width: "100%" }}
                color="secondary"
                multiline
                rows={6}
              />
            </Box>
            <Box mb={4}>
              <FormControlLabel
                control={<Checkbox color="secondary" />}
                label="I accept the Terms of Service"
              />
            </Box>
            <Box>
              <Button
                variant="contained"
                color="secondary"
                sx={{ width: "100%", py: 2 }}
              >
                Submit
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default Section3;
