import React from "react";
import { ThemeProvider } from "styled-components";
import { Login } from "./pages";
import { GlobalStyle } from "./Styles/Global";
import { theme } from "./Styles/theme";

const App = () => {
  return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Login/>
      </ThemeProvider>
  );
}

export default App;
