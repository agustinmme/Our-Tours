import React from "react";
import {
    Stack,
    Box,
    Skeleton,
    SkeletonText,Flex,useColorModeValue,Spacer
  } from "@chakra-ui/react";
function Loading() {
  return (
    <>
      <Box
        mt={5}
        maxW={"445px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.100")}
        boxShadow={"2xl"}
        rounded={"md"}
        overflow={"hidden"}
      >
        <Box maxH={"200px"} maxW={"445px"} overflow={"hidden"} w={"full"}>
        <Skeleton  height="200px" ></Skeleton>
        </Box>
        <Stack spacing={3} p={6}>
          <Flex>
          <Skeleton width="150px" height="10px"/>
          <Spacer/>
          <Skeleton width="50px" height="10px"/>
          </Flex>
          <Box>
          <SkeletonText mt="5" noOfLines={4} spacing="3" />
          </Box>
          <Skeleton width="395px" height="30px"/>
        </Stack>
      </Box>
    </>
  );
}

export default Loading;
