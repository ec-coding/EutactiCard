import {
  AppBar,
  Toolbar,
  Grid,
  Box,
  Button,
  useTheme,
  useMediaQuery,
  Container,
} from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import MobileMenu from '../MobileMenu/MobileMenu';

const Header = () => {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const location = useLocation();
  const isActiveLink = (path) => location.pathname === path;

  const activeLinkStyle = {
    textTransform: 'none',
    color: 'yellow',
    fontWeight: 'bold',
    fontSize: 18,
    transition: 'color 0.3s ease',
    marginLeft: 0.5,
    marginRight: 0.5,
    paddingY: 0.5,
    paddingX: 1.5,
    minWidth: 0,
    textShadow: '1.5px 1.5px 0 black',
  };

  // Default link style
  const linkStyle = {
    textTransform: 'none',
    color: 'white',
    fontWeight: 'normal',
    fontSize: 18,
    transition: 'color 0.3s ease',
    marginLeft: 0.5,
    marginRight: 0.5,
    paddingY: 0.5,
    paddingX: 1.5,
    minWidth: 0,
    textShadow: '1.5px 1.5px 0 black',
  };

  return (
    <Grid>
      <AppBar position="static" color="default">
        <Grid container justifyContent="center" paddingY={0.5}
          sx={{
            background: 'linear-gradient(to bottom, #E83838 60%, #884041 100%)',
            // borderTop: '1px solid #ff6565',
            // borderBottom: '1px solid #ff6565'
          }}
        >
          <Box
            sx={{
              width: {
                xs: '100%',
                sm: '640px',
                md: '768px',
                lg: '1024px',
                xl: '1280px'
              },
              padding: 0
            }}
          >
            <Grid container
              sx={{
              }}>
              <Grid item lg={2} marginTop={1} container>
                <Link to="/">
                  <img
                    src="https://i.imgur.com/HgSy1Gq.png"
                    alt="EutactiCard Logo"
                    style={{ width: isMobile ? 100 : 150 }}
                  />
                </Link>
              </Grid>
              <MobileMenu />
              {!isMobile && ( // Render the following elements if viewport is not below 'sm' breakpoint
                <Grid item lg={10} sx={{ display: 'flex', alignItems: 'center' }} justifyContent="space-between">
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Link to="/">
                      <Button sx={isActiveLink('/') ? activeLinkStyle : linkStyle}>
                        Home
                      </Button>
                    </Link>
                    <Link to="/">
                      <Button sx={isActiveLink('/Search') ? activeLinkStyle : linkStyle}>
                        Search
                      </Button>
                    </Link>
                    <Link to="/AboutUs">
                      <Button sx={isActiveLink('/Expansions') ? activeLinkStyle : linkStyle}>
                        My Decks
                      </Button>
                    </Link>
                    <Link to="/Events">
                      <Button
                        sx={isActiveLink('/Backgrounds') ? activeLinkStyle : linkStyle}
                      >
                        My Collection
                      </Button>
                    </Link>
                    <Link to="/Simulator">
                      <Button
                        sx={isActiveLink('/Backgrounds') ? activeLinkStyle : linkStyle}
                      >
                        Draw Simulator
                      </Button>
                    </Link>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'right', gap: 1 }}>
                    <Link to="/">
                      <Button sx={isActiveLink('/LogIn') ? activeLinkStyle : linkStyle}>
                        Log In
                      </Button>
                    </Link>
                    <Link to="/">
                      <Button sx={isActiveLink('/SignUp') ? activeLinkStyle : linkStyle}>
                        Sign Up
                      </Button>
                    </Link>
                  </Box>
                </Grid>
              )}
            </Grid>
          </Box>
        </Grid>
      </AppBar>
    </Grid>
  )
}

export default Header
