import { Roboto, Open_Sans, Oswald } from '@next/font/google';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

export const open_sans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

export const oswald = Oswald({
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

let theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1D84D7',
    },
    secondary: {
      main: '#E3655B',
    },
  },
  typography: {
    fontFamily: open_sans.style.fontFamily,
    h1: {
      fontFamily: oswald.style.fontFamily,
    },
    h2: {
      fontFamily: oswald.style.fontFamily,
      fontWeight: '500',
    },
    h3: {
      fontFamily: oswald.style.fontFamily,
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
