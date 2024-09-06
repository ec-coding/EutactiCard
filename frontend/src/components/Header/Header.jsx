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
    border: '1px solid rgb(0, 0, 0, 0.5)',
    borderRadius: '0.25em',
    padding: '0.15em 2em',
    background: 'linear-gradient(to bottom, #465DF0 0%, #1F2E93 100%)',
    textTransform: 'none',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    transition: 'color 0.3s ease',
    textShadow: '1.5px 1.5px 0 black',
    boxShadow: 'inset -1.5px -1.5px 0 rgba(255, 255, 255, .75), inset 1.5px 1.5px 0 rgba(0, 0, 0, 0.75)'
  };

  const linkStyle = {
    border: '1px solid rgb(0, 0, 0, 0.5)',
    borderRadius: '0.25em',
    padding: '0.15em 2em',
    background: 'linear-gradient(to bottom, #E83838 60%, #884041 100%)',
    textTransform: 'none',
    color: 'white',
    fontWeight: 'normal',
    fontSize: 18,
    transition: 'color 0.3s ease',
    textShadow: '1.5px 1.5px 0 black',
    boxShadow: 'inset 1.5px 1.5px 0 rgba(255, 255, 255, .75), inset -1.5px -1.5px 0 rgba(0, 0, 0, 0.75)'
  };

  return (
    <Grid
      sx={{
        position: 'fixed',
        zIndex: '1',
        width: '100%'
      }}
    >
      <AppBar position="static" color="default">
        <Grid container justifyContent="center" paddingY={0.5}
          sx={{
            background: 'rgb(0, 0, 0, 0.1)'
            // background: 'linear-gradient(to bottom, #E83838 60%, #884041 100%)',
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
              <Grid item lg={1.75} marginTop={1} container justifyContent="center">
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
                <Grid item lg={10.25} sx={{ display: 'flex', alignItems: 'center' }} justifyContent="space-between">
                  <Box px={2} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Link to="/">
                      <Grid sx={isActiveLink('/') ? activeLinkStyle : linkStyle} >
                        Home
                      </Grid>
                    </Link>
                    <Link to="/">
                      <Grid sx={isActiveLink('/Search') ? activeLinkStyle : linkStyle} >
                        Search
                      </Grid>
                    </Link>
                    <Link to="/AboutUs">
                      <Grid sx={isActiveLink('/Decks') ? activeLinkStyle : linkStyle} >
                        My Decks
                      </Grid>
                    </Link>
                    {/* <Link to="/Events">
                      <Button
                        sx={isActiveLink('/Backgrounds') ? activeLinkStyle : linkStyle}
                      >
                        My Collection
                      </Button>
                    </Link> */}
                    {/* <Link to="/Simulator">
                      <Button
                        sx={isActiveLink('/Backgrounds') ? activeLinkStyle : linkStyle}
                      >
                        Draw Simulator
                      </Button>
                    </Link> */}
                  </Box>
                  <Box mx={1} sx={{ display: 'flex', alignItems: 'right', gap: 1 }}>
                    <Link to="/">
                      <Grid sx={isActiveLink('/LogIn') ? activeLinkStyle : linkStyle}>
                        Log In
                      </Grid>
                    </Link>
                    <Link to="/">
                      <Grid sx={isActiveLink('/SignUp') ? activeLinkStyle : linkStyle}>
                        Sign Up
                      </Grid>
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
