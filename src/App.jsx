import React, { useState,useEffect } from "react";
import "./App.css";
import List from "./List";
import Loading from "./Loading";
import axios from 'axios';
import {
  Stack,
  Heading,
  StackDivider,Button,
Center
} from "@chakra-ui/react";
function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAll();
  }, []);

  const fetchAll = async () => {
    try {
      setLoading(true);
      const response = await axios.get("https://course-api.com/react-tours-project", {
        params: {
            origin: "*"
        }
    })
    setData(response.data);
    setLoading(false);
    } catch (error) {
      console.log(error)
    }
  };
  const removeTour = (id) => {
    const filtrado = data.filter((date) => date.id !== id);
    setData(filtrado);
  };
  if(loading){
    return (
      <Center>
          <Stack
            direction={"column"}
            divider={<StackDivider borderColor="white" />}
            spacing={4}
          >
              <Center>
            <Heading>Our Tours</Heading>
            </Center>
            <Loading/>
          </Stack>
      </Center>
    );
  }
  if (data.length === 0) {
    return (
      <Center>
              <Stack
          direction={"column"}
          divider={<StackDivider borderColor="white" />}
          spacing={4}
        >
            <Center>
          <Heading>Our Tours</Heading>
          </Center>
          <Button colorScheme={"green"} onClick={() => fetchAll()}>
            Resetear
          </Button>
        </Stack>
    </Center>

    )
  }
  return (
    <Center>
        <Stack
          direction={"column"}
          divider={<StackDivider borderColor="white" />}
          spacing={4}
        >
            <Center>
          <Heading>Our Tours</Heading>
          </Center>
          <List lista={data} remove={removeTour}/>
        </Stack>
    </Center>
  );
}

export default App;
