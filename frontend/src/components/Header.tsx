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
import MobileMenu from './MobileMenu';

const Header = () => {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const location = useLocation();
  const isActiveLink = (path: string) => location.pathname === path;

  const activeLinkStyle = {
    textTransform: 'none',
    color: 'yellow',
    fontWeight: 'bold',
    fontSize: 20,
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
    fontSize: 20,
    transition: 'color 0.3s ease',
    marginLeft: 0.5,
    marginRight: 0.5,
    paddingY: 0.5,
    paddingX: 1.5,
    minWidth: 0,
    textShadow: '1.5px 1.5px 0 black',
  };

  return (
    <div>
      <AppBar position="static" color="default">
        <Container maxWidth={false}
          sx={{
            background: 'linear-gradient(to right, #ff3333, #ff6666, #ff3333)',
          }}
        >
          <Toolbar
            sx={{
              width: {
                xs: '100%',
                sm: '640px',
                md: '768px',
                lg: '1024px',
                xl: '1280px'
              },
              marginX: 'auto',
            }}
          >
            <Grid container
              sx={{
                gap: 4
              }}>
              <Grid paddingTop={1}>
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
                <Grid lg={10} sx={{ display: 'flex', alignItems: 'center' }} justifyContent="space-between">
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
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  )
}

export default Header
