import { Avatar, ImageList ,Box, ThemeProvider, Stack, 
    Paper,Grid, Typography, Drawer, Divider} from '@mui/material';
import React from 'react';
import Theme from './Theme';
// import bg from '../assets/img/bg.png'

const Section1 = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "500px",
          backgroundImage: "url('https://assets.nicepagecdn.com/d2cc3eaa/64465/images/women-thinking-about-new-ideas-work-project-laptop1.jpg')",
          backgroundSize: "cover",
          p:0,
          m:0,
          boxSizing:'border-box',

          backgroundPosition: "center",
          
        }}
      ></Box>
      <Box
        sx={{
          maxWidth: "80%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          //   border: "1px solid",
          //   borderColor: "divider",
          borderRadius: 2,
          bgcolor: "background.paper",
          color: "text.secondary",
          "& svg": {
            m: 1,
          },
          mx: "auto",
          mt: "-50px",
          px: 5,
          py:2
        }}
      >
        {/* <FormatBoldIcon /> */}
        <Grid
          container
          direction={{ xs: "column", sm: "row" }}
          //   justifyContent="center"
          //   alignItems="center"

          //   spacing={2}
        >
          <Grid
            item
            xs
            sx={{ borderLeft: "2px solid red", p:{ xs: 1, sm: 4 }, mt: 4 }}
          >
            <Box>
              <Typography
                variant="p"
                component="div"
                sx={{ py: 2, fontSize: "20px", textWrap: "nowrap" }}
              >
                EXPERIENCED TEAM
              </Typography>
              <Typography variant="p" component="div">
                Cursus ultrices diam
              </Typography>
            </Box>
          </Grid>

          <Grid
            item
            xs
            sx={{ borderLeft: "2px solid red", p:{ xs: 2, sm: 4 }, mt: 4 }}
          >
            <Box>
              <Typography
                variant="p"
                component="div"
                sx={{ py: 2, fontSize: "20px", textWrap: "nowrap" }}
              >
                DIGITAL SOLUTIONS
              </Typography>
              <Typography variant="p" component="div">
                Cursus ultrices diam
              </Typography>
            </Box>
          </Grid>
          <Grid item xs sx={{ borderLeft: "2px solid red", p: 4, mt: 4 }}>
            <Box>
              <Typography
                variant="p"
                component="div"
                sx={{ py: 2, fontSize: "20px", fontFamily: "revert-layer" }}
              >
                24/7 SUPPORT
              </Typography>
              <Typography variant="p" component="div">
                Cursus ultrices diam
              </Typography>
            </Box>
          </Grid>
        </Grid>
        {/* <FormatItalicIcon /> */}
      </Box>
    </>
  );
}

export default Section1;
