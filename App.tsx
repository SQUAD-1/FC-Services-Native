import { ViewCallRequest } from "./src/pages/ViewCallRequest";
import { ThemeProvider } from 'styled-components/native';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    async function loadFonts() {
      await useFonts({
        'Inter-Regular': require("./fonts/Inter-Regular.woff"),
        'Inter-Bold': require('./fonts/Inter-Bold.woff'),
        'Inter-Italic': require('./fonts/Inter-Italic.woff'),
        'Inter-BoldItalic': require('./fonts/Inter-BoldItalic.woff'),
      });
    }

    loadFonts();
  }, []);

  const theme = {
    fontFamily: 'Inter-Regular',
    backgroundColor: '#f8fcf6',
  }

  return (
    <ThemeProvider theme={theme}>
      <ViewCallRequest />
    </ThemeProvider>
  );
}
