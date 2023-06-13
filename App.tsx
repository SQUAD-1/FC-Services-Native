import Router from "./router";
import { ThemeProvider } from "styled-components/native";
import { useFonts } from "expo-font";
import React, { useEffect } from "react";

const App: React.FC = () => {
  async function loadFonts() {
    await useFonts({
      "Inter-Regular": require("./fonts/Inter-Regular.woff"),
      "Inter-Bold": require("./fonts/Inter-Bold.woff"),
      "Inter-Italic": require("./fonts/Inter-Italic.woff"),
      "Inter-BoldItalic": require("./fonts/Inter-BoldItalic.woff"),
    });
  }

  useEffect(() => {
    loadFonts();
  }, []);

  const theme = {
    fontFamily: "Inter-Regular",
    backgroundColor: "#f8fcf6",
  };

  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
};

export default App;
