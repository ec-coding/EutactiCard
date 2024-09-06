// Needs refactoring and better botton implementation and styling

// Libraries & Frameworks ///////////////////////////////////////////////
import { Container, Grid, Typography, Button, Paper, styled, useMediaQuery } from '@mui/material';

// Main Component ///////////////////////////////////////////////
const Footer = () => {
  const MobileWidthBreakpoint = useMediaQuery('(max-width: 600px)');
  const showElementBelow600px = useMediaQuery('(max-width: 600px)');

  const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    width: '100%',
    height: '100%',
    borderRadius: '4px',
    objectFit: 'cover',
    objectPosition: 'center',
    background: 'none'
  });

  const FooterNav = {
    minWidth: '0px',
    textTransform: 'none',
    color: 'white',
    display: 'block',
    paddingX: '0px',
    textShadow: '0.5px 0.5px 0 black, -0.5px -0.5px 0 black, 0.5px -0.5px 0 black, -0.5px 0.5px 0 black'
  }

  const LegalText = {
    color: 'white',
    textAlign: 'left',
    textShadow: '0.5px 0.5px 0 black, -0.5px -0.5px 0 black, 0.5px -0.5px 0 black, -0.5px 0.5px 0 black'
  }

  // Render ///////////////////////////////////////////////////////////////
  return (
      <Grid
        container
        alignItems="center"
        sx={{
          paddingY: '1.5rem',
          background: 'linear-gradient(to bottom, #465DF0 0%, #1F2E93 100%)',
          // borderTop: '1px solid #0CF1FA',
          // borderBottom: '1px solid #0CF1FA'
        }}
      >
        <Grid
          sx={{
            justifyContent: 'space-between',
            width: {
              xs: '100%',
              sm: '640px',
              md: '768px',
              lg: '1024px',
              xl: '1280px'
            },
            margin: 'auto',
          }}
        >
          <Grid container gap={3} textAlign="left"
          >
            <Button
              href="/"
              sx={FooterNav}
            >
              About
            </Button>
            <Button
              href="/AboutUs"
              sx={FooterNav}
            >
              Help
            </Button>
            <Button
              href="/Events"
              sx={FooterNav}
            >
              Contact
            </Button>
            <Button
              href="/Events"
              sx={FooterNav}
            >
              Terms of Use
            </Button>
          </Grid>
          <hr />
          <Grid container marginTop={3} gap={3}>
            <Typography variant="body2"
              sx={LegalText}
            >
              Wizards of the Coast, Pokémon, and their logos are trademarks of Wizards of the Coast LLC in the United States and other countries. © 1995-2024 Wizards. All Rights Reserved.
            </Typography>
            <Typography variant="body2"
              sx={LegalText}
            >
              PokéDrafts is not affiliated with, endorsed, sponsored, or specifically approved by Wizards of the Coast LLC. PokéDrafts may use the trademarks and other intellectual property of Wizards of the Coast LLC, which is permitted under Wizards' Fan Site Policy. Pokémon® is a trademark of Wizards of the Coast. For more information about Wizards of the Coast or any of Wizards' trademarks or other intellectual property, please visit their website at https://company.wizards.com/.
            </Typography>
            <Typography variant="body2"
              sx={LegalText}
            >
              Copyright© 2024 ByteStrafe Labs LLC
            </Typography>
          </Grid>
        </Grid>
      </Grid>
  );
};

export default Footer;