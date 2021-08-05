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
      <Center >
          <Stack
            direction={"column"}
            spacing={4}
          >
              <Center>
              <Stack spacing="3" align={"center"}>
            <Heading color="white">Our Tours</Heading>
            <div className="underline" />
            </Stack>
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
          spacing={4}
        >
            <Center>
            <Stack spacing="3" align={"center"}>
            <Heading color="white">Our Tours</Heading>
            <div className="underline" />
            </Stack>
          </Center>
          <Stack><Heading as="h5" color="white" size="md">No hay mas tours</Heading>
          <Button colorScheme={"green"} onClick={() => fetchAll()}>
            Recargar
          </Button></Stack>
          
        </Stack>
    </Center>

    )
  }
  return (
    <Center>
        <Stack
          direction={"column"}
          spacing={4}
        >
            <Center>
              <Stack spacing="3" align={"center"}>
            <Heading color="white">Our Tours</Heading>
            <div className="underline" />
            </Stack>
          </Center>
          <List lista={data} remove={removeTour}/>
        </Stack>
    </Center>
  );
}

export default App;
