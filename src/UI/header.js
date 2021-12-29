import * as React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink, Link } from "react-router-dom";
import "./header.css";

const pages = ["Episodes", "Locations"];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar sx={{ position: "float" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            component={Link}
            to={"/home"}
            variant="h5"
            noWrap
            sx={[
              {
                "&:hover": {
                  color: "white",
                },
              },
              { mr: 2, display: { xs: "none", md: "flex" }, color: "#FFFFFF" },
            ]}
          >
            Rick & Morty
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <Box>
                <MenuItem key="Characters">
                  <NavLink
                    className="menuItemMobile"
                    to="/home"
                    onClick={handleCloseNavMenu}
                  >
                    <Typography textAlign="center">Characters</Typography>
                  </NavLink>
                </MenuItem>
                {pages.map((page) => (
                  <MenuItem key={page}>
                    <NavLink
                      className="menuItemMobile"
                      to={`/${page}`}
                      onClick={handleCloseNavMenu}
                    >
                      <Typography textAlign="center">{page}</Typography>
                    </NavLink>
                  </MenuItem>
                ))}
                <MenuItem key="My watch list">
                  <NavLink
                    className="menuItemMobile"
                    to={"/watch-list"}
                    onClick={handleCloseNavMenu}
                  >
                    <Typography textAlign="center">My watch list</Typography>
                  </NavLink>
                </MenuItem>
              </Box>
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            Rick and Morty
          </Typography>
          <Box
            sx={{
              marginLeft: "45%",
              maxWidth: "600px",
              flexGrow: 1,
              justifyContent: "space-around",
              display: { xs: "none", md: "flex" },
            }}
          >
            <NavLink key="characters" to={"/home"} className="menuItemDesktop">
              Characters
            </NavLink>
            {pages.map((page, pages, index) => (
              <NavLink
                className="menuItemDesktop"
                key={pages}
                to={`/${page}`}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </NavLink>
            ))}
            <NavLink
              className="menuItemDesktop"
              key="My watch list"
              to={"/watch-list"}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              My watch list
            </NavLink>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
