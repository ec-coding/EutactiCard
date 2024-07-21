import './App.css'
import AppRoutes from './AppRoutes';
import Header from './components/Header';
import Footer from './components/Footer';
import { CssBaseline } from '@mui/material';
import { BrowserRouter as Router } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: "Fira Sans, sans-serif",
  },
  components: {
    MuiGrid: {
      styleOverrides: {
        root: {
          '&.MuiGrid-item': {
            padding: '0px', // Override padding for Grid items
          },
        },
      },
    },
  },
});

function App() {


  return (
    <>
      <Router>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Header />
          <AppRoutes />
          {/* <Footer /> */}
        </ThemeProvider>
      </Router>
    </>
  )
}

export default App
