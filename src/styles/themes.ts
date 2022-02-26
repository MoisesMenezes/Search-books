import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    gray: {
      "300": "#F5F8FA",
      "400": "#DADADA",
      "500": "#999999",
      "800": "#47585B"
    },

    purple: {
      "500": "#330F74"
    }
  },

  styles: {
    global: {
      'html, body': {
        height: "100%",
      },

      body: {
        bg: "gray.300",
        fontFamily: "Poppins",

        "#__next": {
          height: "100%",
          display: "flex",
          flexDir:"column",
        }
      }
    }
  }
});
