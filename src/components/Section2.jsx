import React from 'react';
import ImageGallery from './ImageGallery';
import { Stack ,Box, Typography, Button, ThemeProvider } from '@mui/material';
import Theme from './Theme';

const Section2 = () => {
  return (
    <ThemeProvider theme={Theme}>
      <Stack sx={{ bgcolor: "primary.light" }}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent="center"
          alignItems={{ xs: "center", sm: "start" }}
          sx={{
            maxWidth: "1500px",
            mx: "auto",
            display: "flex",
            mt: 10,
            p: { xs: 1, sm: 5, md: 8 },
            // bgcolor: "primary.light",
          }}
        >
          <Box sx={{ flex: 1 }}>
            <ImageGallery />
          </Box>
          <Box
            sx={{
              flex: 1,
              p: { xs: 2, sm: 3, lg: 10 },
              textAlign: { xs: "center", sm: "center", md: "left" },
              mt: { xs: 10 },
              ml: { md: "100px" },
            }}
          >
            <Typography
              variant="h3"
              component="div"
              sx={{
                fontStyle: "revert",
                fontWeight: "semibold",
                fontSize: { xs: "25px", lg: "50px" },
              }}
            >
              Achieve Your Goals With Purpose & Strategy
            </Typography>
            <Box sx={{ width: { xs: "100%", md: "80%" } }}>
              <Typography
                variant="p"
                component="div"
                sx={{
                  mt: 4,
                  color: "gray",
                  fontWeight: 500,
                  lineClamp: "revert-layer",
                  lineHeight: "25px",
                }}
              >
                Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit nullam nunc justo sagittis suscipit ultrices
              </Typography>
            </Box>
            <Button
              variant="contained"
              color="secondary"
              sx={{ mt: 5, px: "40px", py: "15px" }}
            >
              View More
            </Button>
          </Box>
        </Stack>
      </Stack>
    </ThemeProvider>
  );
}

export default Section2;
