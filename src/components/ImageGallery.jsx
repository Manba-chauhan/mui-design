import React from "react";
import {
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Stack,
  Grid,
  Box
  
} from "@mui/material";
import g1 from "../assets/img/g1.png";
import g2 from "../assets/img/g2.png";
import g3 from "../assets/img/g3.png";
import g4 from "../assets/img/g4.png";

const itemData = [
  { img: g1, title: "Image 1", author: "author" },
  { img: g2, title: "Image 2", author: "author" },
  { img: g3, title: "Image 3", author: "author" },
  { img: g4, title: "Image 4", author: "author" },
];

const ImageGallery = () => {
  return (
    <Box>
      <Grid
        container
        direction={{ xs: "column", sm: "row", md:"row" }}
        justifyContent="center"
        // alignItems="center"
        rowSpacing={2}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Grid xs={8} sm={6} md={6}>
          <img src={g1} alt="img" width={250} height={300} />
        </Grid>
        <Grid
          xs={8}
          sm={6}
          sx={{ position: "relative", top: { xs: 10, sm: 20, md: 40 } }}
        >
          <img src={g2} alt="img" width={250} height={300} />
        </Grid>
        <Grid xs={8} sm={6} sx={{ position: "relative", top: 20 }}>
          <img src={g3} alt="img" width={250} height={300} />
        </Grid>
        <Grid xs={8} sm={6} sx={{ position: "relative", top: 60 }}>
          <img src={g4} alt="img" width={250} height={300} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ImageGallery;
