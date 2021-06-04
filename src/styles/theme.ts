import { BreakpointOverrides } from '@material-ui/core/styles/createBreakpoints';
import createMuiTheme, { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';

declare module '@material-ui/core/styles/createBreakpoints' {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    l: true;
    xl: true;
  }
}
declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    appDrawer: {
      width: React.CSSProperties['width'];
      breakpoint: BreakpointOverrides;
    };
  }
  // allow configuration using `createMuiTheme`
  interface ThemeOptions {
    appDrawer?: {
      width?: React.CSSProperties['width'];
      breakpoint?: BreakpointOverrides;
    };
  }
}

function createTheme(options: ThemeOptions) {
  return createMuiTheme({
    // We can add defaults here
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        l: 1440,
        xl: 1920
      }
    },
    ...options
  });
}

const theme = createTheme({
  palette: {},
  overrides: {}
});

export default theme;
