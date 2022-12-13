
import { Box,  Heading, HStack, Image } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from '../components/Navbar'
import NewBlog from '../components/Newblog'
import ProfileCard from '../components/ProfileCard'
import {  get_user_post } from '../store/Appreducer/action'

const Profile = () => {
  const dispatch=useDispatch()
  const {userblogdata}=useSelector((store)=>store.appreducer)

useEffect(()=>{
dispatch(get_user_post())
},[dispatch])
  return (
    <>
    <Navbar/>
    <ProfileInfo/>
    <div>
      {userblogdata?.map((el)=><ProfileCard key={el._id} _id={el._id} date={el.date} avatar={el.avatar} author={el.author} image={el.image} topic={el.topic} content={el.content} title={el.title}/>) }
    </div>
    </>
  )
}
const ProfileInfo=()=>{
  const {user,isAuth}=useSelector((store)=>store.authreducer)
  return(
  <Box width="98%" margin="auto" marginTop={4}>
      <HStack marginTop="2" spacing="4" display="flex" >
      <Image
        borderRadius="full"
        boxSize="15rem"
        src={user?.avatar}
        alt={`Avatar of ${user?.name}`}
      />
      <Heading>{user?.name}</Heading>
      </HStack>
      <Box  marginBottom="6" marginTop="8" width="100%" >
          <NewBlog/>
      </Box>
      <hr/>
  </Box>
  )
}
export default Profile
