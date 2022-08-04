import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        // light: will be calculated from palette.primary.main,
        main: '#f31c3b',
      },
      
    },
    components: {
      MuiPopover: {
        defaultProps: {
          container: rootElement,
        },
      },
      MuiPopper: {
        defaultProps: {
          container: rootElement,
        },
      },
    },
  });

  export default theme;