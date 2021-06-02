import createMuiTheme, {
  ThemeOptions,
} from "@material-ui/core/styles/createMuiTheme";

function createTheme(options: ThemeOptions) {
  return createMuiTheme({
    // We can add defaults here
    ...options,
  });
}

const theme = createTheme({
  palette: {},
  overrides: {},
});

export default theme;
