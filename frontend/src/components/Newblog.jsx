import { AddIcon } from "@chakra-ui/icons";
import {
    Button,
    FormControl,
    FormLabel,
    HStack,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    Select,
    Stack,
    Textarea,
    useDisclosure,
    useToast,
  } from "@chakra-ui/react";
  import React, { useState } from "react";
  import { useDispatch, useSelector } from "react-redux";
import { get_user_post, user_new_post } from "../store/Appreducer/action";

  
  const NewBlog = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [blog,setBlog]=useState({})
    const dispatch = useDispatch();
    const toast=useToast()
    const {iscreating}=useSelector((store)=>store.appreducer)
    const handleChange = (e) => {
      const { name, value, type, files } = e.target;
      if (type === "file") {
        setBlog({
          ...blog,
          [name]: files[0],
        });
      } else {
        setBlog({
          ...blog,
          [name]: value,
        });
      }
    };
  
    const handleSubmit = (e) => {
      //const userId = getData("userId");
      e.preventDefault();
      dispatch(user_new_post(blog)).then((res)=>{
        if(res.msg==='post created successfully'){
          toast({
            title: "Post Created Successfull",
            description: "We've created your post for you.",
            status: 'success',
            position: 'top',
            duration: 5000,
            isClosable: true,
          })
          dispatch(get_user_post())
        }
        else{
          toast({
            title: "Something went wrong",
            description: "Try again later",
            status: 'error',
            position: 'top',
            duration: 5000,
            isClosable: true,
          })
        }
      })
    //   await dispatch(createBlog(userId, blog)).then((r) => {
    //     if (r.status === CREATE_BLOG_SUCCESS) {
    //       alert(r.payload);
    //       window.location.reload();
    //     } else if (r.status === CREATE_BLOG_FAILURE) {
    //       alert(r.payload);
    //     }
    //   });
    console.log(blog)
      onClose();
    };
  
    return (
      <>
      
            <Button
              fontSize={{ base: "lg", md: "lg", lg: "xl", xl: "xl" }}
              mt={5}
              colorScheme='blue'
               width="80%"
              onClick={onOpen}
              isLoading={iscreating}
            >
             <AddIcon marginRight="3" boxSize={4}/>Create new blog
            </Button>
  
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Create a new blog</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Stack spacing={4}>
                    <form onSubmit={handleSubmit}>
                      <Stack spacing={2}>
                        <FormControl id="title" isRequired>
                          <FormLabel>Title</FormLabel>
                          <Input
                            type="text"
                            name="title"
                            onChange={handleChange}
                          />
                        </FormControl>
                        <FormControl id="blog_img">
                          <FormLabel>Image</FormLabel>
                          <Input
                            type="file"
                            name="blog_img"
                            onChange={handleChange}
                          />
                        </FormControl>
                        <FormControl id="topic" isRequired>
                          <FormLabel>Topic</FormLabel>
                          <Input
                            type="text"
                            name="topic"
                            onChange={handleChange}
                          />
                        </FormControl>
                        <FormControl id="content" isRequired>
                          <FormLabel>Content</FormLabel>
                          <Textarea
                            placeholder="Write your blog here"
                            name="content"
                            onChange={handleChange}
                          />
                        </FormControl>
                        <HStack justifyContent="flex-end" py={2}>
                          <Button
                            p={{
                              base: "1rem 1rem",
                              lg: "1rem 2rem",
                              xl: "1rem 2rem",
                            }}
                            // isLoading={isLoading}
                            type="submit"
                            colorScheme="blue"
                            mr={3}
                          >
                            Submit
                          </Button>
                          <Button
                            p={{
                              base: "1rem 1rem",
                              lg: "1rem 2rem",
                              xl: "1rem 2rem",
                            }}
                            colorScheme="red"
                            onClick={onClose}
                          >
                            Cancel
                          </Button>
                        </HStack>
                      </Stack>
                    </form>
                  </Stack>
                </ModalBody>
              </ModalContent>
            </Modal>
          </>
  
    )
  };
  
  export default NewBlog;
  