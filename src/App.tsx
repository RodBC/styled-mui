import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./Styles/Global";
import { theme } from "./Styles/theme";

const App = () => {
  return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
      </ThemeProvider>
  );
}

export default App;
