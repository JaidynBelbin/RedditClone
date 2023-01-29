import "@fontsource/open-sans/300.css";
import "@fontsource/open-sans/400.css";
import "@fontsource/open-sans/700.css";
import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { Button } from "./button";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: true,
};

const colors = {
  brand: {
    100: "#FF3c00",
  },
};

const fonts = {
  body: "Open Sans, sans-serif",
};

const styles = {
  global: () => ({
    body: {
      bg: "gray.200",
    },
  }),
};

const components = {
  Button,
};

export const theme = extendTheme({ config, colors, fonts, styles, components });
