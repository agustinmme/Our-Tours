import React ,{useState} from "react";
import {
    Stack,
    Heading,
    Box,
    useColorModeValue,
    Flex,
    Spacer,
    Badge,
    Text,
    Button,
    Image,
  } from "@chakra-ui/react";
function Tour({id,img,name,price,info,remove}) {
    const [showMore, setShowMore] = useState(true);
  return (
    <div>
      <Box mt={5}
        maxW={"445px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.100")}
        boxShadow={"2xl"}
        rounded={"md"}
        overflow={"hidden"}
      ><Box maxH={"200px"}  maxW={"445px"} overflow={"hidden"} w={"full"}>
        <Image src={img} layout={"fill"}  />
        </Box>
        <Stack spacing={5} p={6}>
          <Flex>
            <Heading as="h5" size="sm" color="black">
              {name}
            </Heading>
            <Spacer />
            <Badge colorScheme="blue">{"$"+price}</Badge>
          </Flex>
          <Box>
            <Text as="span" color="gray.600">
              {showMore?info.substring(0, 200)+("... "):info+" "}
            </Text>
            <Box as="button" color="blue.600" fontSize="sm" onClick={() =>(setShowMore(!showMore))}>
              {showMore?" Read More":"Show less"}
            </Box>
          </Box>
          <Button colorScheme="red" variant="outline" onClick={() =>(remove(id))}>
            Not Interested
          </Button>
        </Stack>
      </Box>
    </div>
  );
}

export default Tour;
