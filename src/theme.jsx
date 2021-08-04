import {extendTheme, theme} from "@chakra-ui/react";
import {mode} from "@chakra-ui/theme-tools";

export default extendTheme({
  styles: {
    global: (props) => ({
      body: {
        backgroundColor: "#2D3748",
        padding: {
          base: 0,
          md: 4,
        },
      },
    }),
  }
});