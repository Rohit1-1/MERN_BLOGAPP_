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
    VStack,
    Button,
  } from "@chakra-ui/react";
  import React from "react";
  import { useNavigate } from "react-router-dom";
import Editblog from "./Editblog";
  
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
        <Box border="1px solid black" marginLeft={20} justifyContent="right">
       
        </Box>
        
      </HStack>
    );
  };

  const ProfileCard = ({
    _id,
    title,
    image,
    content,
    topic,
    date,
    author,
    avatar,
  }) => {
    const navigate = useNavigate();
  
    const handleClick = (params) => {
      navigate(`/blog/${params}`);
    };
  
    const Show = content.substring(0, 100) + "...";
  
    return (
        <>
        
      <Wrap width="98%" margin="auto" spacing="30px" marginTop="40px" px="2" >
          <Box width="100%"> 
            <Box display="flex"  justifyContent='space-between' marginBottom="2rem">
               <BlogAuthor name={author} date={date} avatar={avatar} />
               <Editblog  _id={_id} date={date} avatar={avatar} author={author} image={image} topic={topic} content={content} title={title}/>
            </Box>
          
        <Box  width="100%"   margin="auto">
         <Heading textAlign="left"  fontSize="xl" marginTop="2">
              <Link textAlign="left" textDecoration="none" _hover={{ textDecoration: "none" }}>
                {title}
             
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
                  src={image}
                  alt="some text"
                  objectFit="fill"
                  width="100%"
                  height={"100%"}
                  transition="0.3s ease-in-out"
                  _hover={{
                    transform: "scale(1.05)",
                  }}
                  onClick={() => handleClick(_id)}
                />
              </Link>
            </Box>
            <BlogTags tags={topic} marginTop="3" />
           
            <Text as="p" fontSize="md" marginTop="2">
             {Show}
              <span onClick={() => handleClick(_id)}>
                <Link color={'blue'}>Read More</Link>
              </span>
            </Text>
          </Box>
        </WrapItem>
      </Wrap>
      </>
    );
  };
  
  
  
  
  
   export default ProfileCard
  