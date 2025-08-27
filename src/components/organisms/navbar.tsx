import {
  AppBar,
  Toolbar,
  Typography,
  Stack,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Analyze", path: "/analyze" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const [open, setOpen] = useState(false);

  return (
    <>
      <AppBar
        color="transparent"
        elevation={0}
        sx={{
          width: "100%",
          position: { xs: "relative", md: isHome ? "absolute" : "relative" },
          px: { xs: 0, md: 4 },
        }}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
            minHeight: { xs: 60, md: 72 },
          }}
        >
          <Box flex={1}>
            <Typography
              variant="h5"
              color="primary"
              sx={{ px: { xs: 1, md: 0 } }}
            >
              DaunTektif
            </Typography>
          </Box>
          <Stack
            flex={1}
            spacing={8}
            direction="row"
            justifyContent="flex-end"
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            {navLinks.map(({ label, path }) => (
              <Typography
                component={NavLink}
                variant="body1"
                key={path}
                to={path}
                sx={{
                  textDecoration: "none",
                  color: "#00393B",
                  "&.active": {
                    fontWeight: 600,
                    borderBottom: "2px solid #00393B",
                  },
                }}
              >
                {label}
              </Typography>
            ))}
          </Stack>
          <IconButton
            sx={{ display: { xs: "flex", md: "none" } }}
            onClick={() => setOpen(true)}
          >
            <MenuIcon fontSize="large" color="primary" />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        slotProps={{
          paper: { sx: { width: "50vw" } },
        }}
        sx={{ zIndex: 1500 }}
      >
        <List>
          {navLinks.map(({ label, path }) => (
            <ListItemButton
              key={path}
              component={NavLink}
              to={path}
              onClick={() => setOpen(false)}
            >
              <ListItemText primary={label} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
