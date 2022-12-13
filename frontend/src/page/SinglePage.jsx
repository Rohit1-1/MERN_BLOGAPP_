import {
    Box,
    Heading,
    HStack,
    Image,
    Tag,
    Text,
    Wrap,
    WrapItem,
    Link,
  } from "@chakra-ui/react";
  import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
  import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
  
  const BlogTags = (props) => {
    return (
      <HStack spacing={2} marginTop={props.marginTop}>
        <Tag size={"md"} variant="solid" colorScheme="orange">
        {props.tags}
        </Tag>
      </HStack>
    );
  };
  
  export const BlogAuthor = ({date,avatar,name}) => {
    return (
      <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
        <Image
          borderRadius="full"
          boxSize="40px"
          src={avatar}
          alt={`Avatar of ${name}`}
        />
        <Text fontWeight="medium">{name}</Text>
        <Text>-</Text>
        <Text>{date}</Text>
      </HStack>
    );
  };
  
  const SingleCard = () => {
const {data}=useSelector((store)=>store.appreducer)
const {id}=useParams()
const [blog,setBlog]=useState({})

useEffect(()=>{
let filterdata=data.filter((el)=>id===el._id)
console.log(filterdata);
setBlog(filterdata)
},[id])
console.log(blog,'single')
    return (
        <>
        <Navbar/>
      <Wrap spacing="30px" marginTop="40px" px="2" >
          <Box width="100%"> 
            <Box marginBottom="2rem">
               <BlogAuthor name={blog[0]?.author} date={blog[0]?.date} avatar={blog[0]?.avatar} />
            </Box>
          
        <Box  width="100%"   margin="auto">
         <Heading textAlign="left"  fontSize="xl" marginTop="2">
              <Link textAlign="left" textDecoration="none" _hover={{ textDecoration: "none" }}>
                {blog[0]?.title}
             
              </Link>
            </Heading>
            </Box>
          </Box>
        <WrapItem w={"100%"}>
      
          <Box w="100%">
            <Box borderRadius="lg" w={"100%"} height="300px" overflow={"hidden"}>
              <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
                <Image
                  transform="scale(1.0)"
                  src={blog[0]?.image}
                  alt="some text"
                  objectFit="fill"
                  width="100%"
                  height={"100%"}
                  transition="0.3s ease-in-out"
                  _hover={{
                    transform: "scale(1.05)",
                  }}
                />
              </Link>
            </Box>
            <BlogTags tags={blog[0]?.topic} marginTop="3" />
            <Text as="p" fontSize="md" marginTop="2">
             {blog[0]?.content}
            </Text>
          </Box>
        </WrapItem>
      </Wrap>
      </>
    );
  };
  
  
  
export default SingleCard
