import { EditIcon } from '@chakra-ui/icons'
import { Box, Button, Menu, MenuButton, MenuItem, MenuList,
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
    Spinner, } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { delete_user_post, get_user_post, update_user_post } from '../store/Appreducer/action'

const Editblog = ({ _id,
    title,
    content,
    topic,
   }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const dispatch=useDispatch()
    const [blog,setBlog]=useState({
      title:title,
      content:content,
      topic:topic,
      content:content
    })
    const toast = useToast()
    const {isLoading}=useSelector((store)=>store.appreducer)
    const handleSubmit=(e)=>{
        e.preventDefault();
      dispatch(update_user_post(_id,blog)).then((res)=>{
        console.log(res,'edit');
        if(res.msg==='post updated successfully'){
            toast({
                title: "Post Updated Successfull",
                description: "We've updated your post for you.",
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
      onClose()
    }
    const handleDelete=(id)=>{
        dispatch(delete_user_post(id)).then((res)=>{
            if(res.msg==='Deleted successfully'){
                toast({
                    title: "Post Deleted Successfull",
                    description: "We've deleted your post for you.",
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
    }
    const handleChange=(e)=>{
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
    }
  return (
    <>
    {isLoading ? <Spinner />: <Menu>
       <MenuButton  colorScheme='blue' as={Button} rightIcon={<EditIcon />}/>
     <MenuList>
         <MenuItem  onClick={onOpen}>Update
   
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Create a new blog</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Stack spacing={4}>
                    <form onSubmit={handleSubmit}>
                      <Stack spacing={2}>
                        <FormControl id="title">
                          <FormLabel>Title</FormLabel>
                          <Input
                            type="text"
                            name="title"
                            value={blog?.title}
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
                        <FormControl id="topic">
                          <FormLabel>Topic</FormLabel>
                          <Input
                            type="text"
                            name="topic"
                            value={blog?.topic}
                            onChange={handleChange}
                          />
                        </FormControl>
                        <FormControl id="content">
                          <FormLabel>Content</FormLabel>
                          <Textarea
                            placeholder="Write your blog here"
                            name="content"
                            value={blog?.content}
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
    </MenuItem>
    <MenuItem onClick={()=>handleDelete(_id)}>Delete</MenuItem>
  </MenuList>
   </Menu>}
     
    </>
  )
}

export default Editblog
