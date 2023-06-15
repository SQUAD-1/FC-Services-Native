import { Router } from "./router";
import { ThemeProvider } from "styled-components/native";
// import { useFonts } from "expo-font";
import React, { useEffect } from "react";

const App: React.FC = () => {
  // useEffect(() => {
  //   useFonts({
  //     "Inter-Regular": require("./assets/fonts/Inter-Regular.woff"),
  //     "Inter-Bold": require("./fonts/Inter-Bold.woff"),
  //     "Inter-Italic": require("./fonts/Inter-Italic.woff"),
  //     "Inter-BoldItalic": require("./fonts/Inter-BoldItalic.woff"),
  //   });
  // }, []);

  const theme = {
    fontFamily: "Roboto",
    backgroundColor: "#F5F5F5",
  };

  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
};

export default App;
