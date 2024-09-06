import {
  Box,
  Button,
  Card,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  Radio,
  Typography,
  TextField,
} from '@mui/material';
import './SplashScreen.scss'

const SplashScreen = () => {

  const splashPanel = {
    height: '30rem',
    width: '20rem',
    margin: '0 1rem',
    border: '5px solid white'
  }

  return (
    <Grid className="splash-container"
      sx={{
        height: '95vh',
      }}
    >
      <Grid container className="splash-inner" justifyContent="center" alignItems="center">

        <Grid sx={splashPanel}>
          <Typography>Search Cards</Typography>
        </Grid>
        <Grid sx={splashPanel}>
          <Typography>Adv Search</Typography>
        </Grid>
        <Grid sx={splashPanel}>
          <Typography>Search Decks</Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default SplashScreen
