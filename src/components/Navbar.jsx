import React, { useState } from 'react';
import {
  Box,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Button,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { Link } from 'react-router-dom';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'Projects', path: '/projects' },
  { label: 'About', path: '/about' },
];

function Navbar({ toggleTheme, mode }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const NavLinks = () => (
    <Box sx={{ display: 'flex', gap: 4 }}>
      {navItems.map(({ label, path }) => (
        <Typography
          key={label}
          component={Link}
          to={path}
          sx={{
            color: 'inherit',
            textDecoration: 'none',
            fontSize: '1rem',
            fontWeight: 500,
            position: 'relative',
            '&::after': {
              content: '""',
              position: 'absolute',
              left: 0,
              bottom: -2,
              width: '0%',
              height: '2px',
              bgcolor: 'primary.main',
              transition: 'width 0.3s ease-in-out',
            },
            '&:hover::after': {
              width: '100%',
            },
          }}
        >
          {label}
        </Typography>
      ))}
    </Box>
  );

  return (
    <Box
      component="nav"
      sx={{
        width: '100%',
        px: 4,
        py: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'fixed',
        top: 0,
        left: 0,
        bgcolor: 'background.paper',
        zIndex: (theme) => theme.zIndex.appBar + 1,
        boxShadow: 1,
      }}
    >
      {!isMobile ? (
        <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
          {/* Left: Logo */}
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h6"
              component={Link}
              to="/"
              sx={{
                textDecoration: 'none',
                color: 'inherit',
                fontWeight: 700,
                letterSpacing: '0.05em',
              }}
            >
              ArtOselya
            </Typography>
          </Box>

          {/* Center: Nav links */}
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
            <NavLinks />
          </Box>

          {/* Right: Buttons */}
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: 1 }}>
            <Button
              variant="outlined"
              color="primary"
              component={Link}
              to="/contact"
              sx={{
                borderRadius: 2,
                textTransform: 'none',
                fontWeight: 500,
                px: 3,
              }}
            >
              Get in Touch
            </Button>
            <IconButton onClick={toggleTheme}>
              {mode === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
            </IconButton>
          </Box>
        </Box>
      ) : (
        <>
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              textDecoration: 'none',
              color: 'inherit',
              fontWeight: 700,
              letterSpacing: '0.05em',
            }}
          >
            ArtOselya
          </Typography>
          <IconButton onClick={toggleDrawer(true)} sx={{ color: 'inherit' }}>
            <MenuIcon />
          </IconButton>
          <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
            <List sx={{ width: 250 }}>
              {navItems.map(({ label, path }) => (
                <ListItem button key={label} component={Link} to={path} onClick={toggleDrawer(false)}>
                  <ListItemText primary={label} />
                </ListItem>
              ))}
              <ListItem button component={Link} to="/contact" onClick={toggleDrawer(false)}>
                <ListItemText primary="Get in Touch" />
              </ListItem>
              <ListItem>
                <IconButton onClick={toggleTheme}>
                  {mode === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
                </IconButton>
              </ListItem>
            </List>
          </Drawer>
        </>
      )}
    </Box>
  );
}

export default Navbar;
