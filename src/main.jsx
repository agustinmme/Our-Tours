import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ChakraProvider,Box } from "@chakra-ui/react"
ReactDOM.render(
<ChakraProvider>
<Box bg="gray.700" >
          <App />
      </Box>
    </ChakraProvider>,
  document.getElementById('root')
)
