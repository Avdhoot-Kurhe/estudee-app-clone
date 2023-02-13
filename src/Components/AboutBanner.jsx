import { Box, Heading, Image} from '@chakra-ui/react'
import React from 'react'
import assignment from "../assets/assignment.jpg"

const FeatureBanner = () => {
  return (
    <Box className='featureBanner' display={{base:"block", lg:"flex"}} >
        <Box w={{base:"356px",lg:"375px"}} m="auto">
          <Heading className='heading' fontSize={{base:"56px" ,lg:"72px"}} lineHeight={{base:"64px" ,lg:"80px"}} as={"h1"}>Features</Heading>
          <Box>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In laborum minima nisi deleniti voluptatem cupiditate, id soluta natus nobis nulla placeat dignissimos temporibus eius, doloremque libero. Quia voluptates tempora voluptas!</Box>      
        </Box>
        <Box className="gird" w={{base:"356px",lg:"755px"}} m="auto" >
          <Box background= "white" borderRadius="15px" color= "gray" p="10px">
            <Image w="100px" src={assignment} alt="test"/>
            <Box fontSize="24px" fontWeight="550">Assignment</Box>
            <Box>Lorem ipsum dolor sit amet consectetur, adipisicing elit!</Box>
          </Box>
          <Box background= "white" borderRadius="15px" color= "gray" p="10px">
            <Image w="100px" src={assignment} alt="test"/>
            <Box fontSize="24px" fontWeight="550">Assignment</Box>
            <Box>Lorem ipsum dolor sit amet consectetur, adipisicing elit!</Box>
          </Box>
          <Box background= "white" borderRadius="15px" color= "gray" p="10px">
            <Image w="100px" src={assignment} alt="test"/>
            <Box fontSize="24px" fontWeight="550">Assignment</Box>
            <Box>Lorem ipsum dolor sit amet consectetur, adipisicing elit!</Box>
          </Box>
          <Box background= "white" borderRadius="15px" color= "gray" p="10px">
            <Image w="100px" src={assignment} alt="test"/>
            <Box fontSize="24px" fontWeight="550">Assignment</Box>
            <Box>Lorem ipsum dolor sit amet consectetur, adipisicing elit!</Box>
          </Box>
          <Box background= "white" borderRadius="15px" color= "gray" p="10px">
            <Image w="100px" src={assignment} alt="test"/>
            <Box fontSize="24px" fontWeight="550">Assignment</Box>
            <Box>Lorem ipsum dolor sit amet consectetur, adipisicing elit!</Box>
          </Box>
          <Box background= "white" borderRadius="15px" color= "gray" p="10px">
            <Image w="100px" src={assignment} alt="test"/>
            <Box fontSize="24px" fontWeight="550">Assignment</Box>
            <Box>Lorem ipsum dolor sit amet consectetur, adipisicing elit!</Box>
          </Box>
        </Box>
    </Box>
  )
}

export default FeatureBanner