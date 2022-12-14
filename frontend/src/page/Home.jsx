import { Box, SkeletonCircle, SkeletonText,} from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import BlogCard from '../components/BlogCard'
import Navbar from '../components/Navbar'
import { getpost } from '../store/Appreducer/action'

const Home = () => {
  const dispatch=useDispatch()
  const {data,isLoding}=useSelector((store)=>store.appreducer)
useEffect(()=>{
dispatch(getpost())
},[dispatch])
  return (
    <div>
      <Navbar/>
      {data.lenght<=0 ? <Box padding='6' boxShadow='lg' bg='white'>
  <SkeletonCircle size='10' />
  <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
</Box>:<> {data?.map((el)=><BlogCard key={el._id} _id={el._id} date={el.date} avatar={el.avatar} author={el.author} image={el.image} topic={el.topic} content={el.content} title={el.title}/>) }</>}
    
    </div>
  )
}

export default Home
