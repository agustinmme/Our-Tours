import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ChakraProvider, Box } from "@chakra-ui/react";
ReactDOM.render(
  <Box bg="gray.700">
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </Box>,
  document.getElementById("root")
);
