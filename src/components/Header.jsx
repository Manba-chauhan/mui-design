import { AppBar, Toolbar, Typography,Box, ThemeProvider, Stack, Button, Drawer, IconButton, List,ListItem, ListItemText, Divider } from '@mui/material';
import React, { useState } from 'react';
import Theme from './Theme';
import MenuIcon from "@mui/icons-material/Menu";
const Header = () => {

const [open ,setOpen]=useState(false)
 const toggleDrawer = (newOpen) => () => {
   setOpen(newOpen);
 };
  return (
    <ThemeProvider theme={Theme}>
      <Box sx={{ bgcolor: "white" }}>
        <AppBar sx={{ bgcolor: "white", px: { xs: 2, sm: 10 } }}>
          <Toolbar sx={{ bgcolor: "white" }}>
            <Typography
              component="div"
              variant="h5"
              fontFamily="monospace"
              //   sx={{ flexGrow: 1 }}
              flexDirection={{ xs: "column", sm: "row" }}
              flexGrow="1"
              //   justifyContent='space-between'
              //   flexGrow={{xs:"column",sm:1}}
            >
              Logo
            </Typography>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 1, sm: 5 }}
              component="div"
              sx={{ display: { xs: "none", sm: "flex" } }}
            >
              {/* > */}
              <Button
                sx={{
                  color: "black",
                  fontSize: "16px",
                  fontFamily: "sans-serif",
                  fontWeight: "bold",
                }}
              >
                Home
              </Button>
              <Button
                sx={{
                  color: "black",
                  fontSize: "16px",
                  fontFamily: "sans-serif",
                  fontWeight: "bold",
                }}
              >
                About
              </Button>
              <Button
                sx={{
                  color: "black",
                  fontSize: "16px",
                  fontFamily: "sans-serif",
                  fontWeight: "bold",
                }}
              >
                Contact
              </Button>
              {/* </> */}
            </Stack>
            <Stack sx={{ display: { xs: "flex", sm: "none" }  }}>
              <IconButton onClick={toggleDrawer(true)}>
                <MenuIcon />
              </IconButton>
              <Drawer
                sx={{ width: "200px", position: "absolute"  }}
                role="presentation"
                anchor="right"
                open={open}
                onClose={toggleDrawer(false)}
              >
                <List>
                  <ListItem >

                  </ListItem>
                  <ListItem>
                    <ListItemText
                      primary={
                        <Button
                          sx={{
                            color: "black",
                            fontSize: "16px",
                            fontFamily: "sans-serif",
                            fontWeight: "bold",
                          }}
                          onClick={toggleDrawer(false)}
                        >
                          Home
                        </Button>
                      }
                    />
                  </ListItem>
                  <Divider />
                  <ListItem>
                    <ListItemText
                      primary={
                        <Button
                          sx={{
                            color: "black",
                            fontSize: "16px",
                            fontFamily: "sans-serif",
                            fontWeight: "bold",
                          }}
                          onClick={toggleDrawer(false)}
                        >
                          About
                        </Button>
                      }
                    />
                  </ListItem>
                  <Divider />
                  <ListItem>
                    <ListItemText
                      primary={
                        <Button
                          sx={{
                            color: "black",
                            fontSize: "16px",
                            fontFamily: "sans-serif",
                            fontWeight: "bold",
                          }}
                          onClick={toggleDrawer(false)}
                        >
                          Contact
                        </Button>
                      }
                    />
                  </ListItem>
                  <Divider />
                </List>
              </Drawer>
            </Stack>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}

export default Header;
