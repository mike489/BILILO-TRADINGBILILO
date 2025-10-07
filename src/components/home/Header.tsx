import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useLocation } from "react-router-dom";
import logowhite from "../../assets/image/logo-white.png";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Import", path: "/import" },
    { name: "Export", path: "/export" },
    { name: "Blog", path: "/blog" },
    { name: "Career", path: "/career" },
    { name: "Contact Us", path: "/contact" },
  ];

  const handleDrawerToggle = () => setMobileOpen((prev) => !prev);

  return (
    <>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "white",
          boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
          color: "black",
        }}
      >
        <Toolbar
          sx={{
            maxWidth: "1200px",
            mx: "auto",
            width: "100%",
            px: { xs: 2, md: 4 },
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Logo */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Link to="/">
              <img
                src={logowhite}
                alt="Tropical Pharma Logo"
                style={{ height: 40, width: "auto" }}
              />
            </Link>
          </Box>

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
            {menuItems.map((item) => (
              <Button
                key={item.name}
                component={Link}
                to={item.path}
                sx={{
                  color: location.pathname === item.path ? "black" : "#dc2626",
                  fontWeight: location.pathname === item.path ? 700 : 500,
                  textTransform: "none",
                  "&:hover": {
                    color: "darkred",
                    backgroundColor: "transparent",
                  },
                }}
              >
                {item.name}
              </Button>
            ))}
          </Box>

          {/* Mobile Menu Button */}
          <IconButton
            edge="end"
            onClick={handleDrawerToggle}
            sx={{
              display: { xs: "flex", md: "none" },
              color: "#374151",
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        PaperProps={{
          sx: {
            width: 250,
            backgroundColor: "white",
            color: "black",
          },
        }}
      >
        <Box sx={{ mt: 2 }}>
          <List>
            {menuItems.map((item) => (
              <ListItem key={item.name} disablePadding>
                <ListItemButton
                  component={Link}
                  to={item.path}
                  onClick={handleDrawerToggle}
                  sx={{
                    color:
                      location.pathname === item.path ? "black" : "#dc2626",
                    fontWeight: location.pathname === item.path ? 700 : 500,
                    "&:hover": {
                      color: "darkred",
                      backgroundColor: "rgba(0, 0, 0, 0.04)",
                    },
                  }}
                >
                  <ListItemText primary={item.name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
