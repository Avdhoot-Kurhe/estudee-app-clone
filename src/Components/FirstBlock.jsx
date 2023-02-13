import { Box, Button, Heading, Image } from '@chakra-ui/react'
import React from 'react'
import we from "../assets/clip-done.jpg"

const FirstBlock = () => {
  return (
    <Box textAlign={{base:'center',lg:"left"}} display={{base:"block", lg:"flex"}} className='firstBlock'>
        <Box>
        <Box textAlign={{base:'center',lg:"left"}} width={{base:"294px" ,lg:"441px"} } height={{base:"98px" ,lg:"195px"}} fontWeight={650} fontSize={{base:"32px" ,lg:"54px"}} lineHeight={{base:"32px" ,lg:"58px"}} as="h1">Degital Platform for all student activity.</Box>
        <Box textAlign={{base:'center',lg:"left"}} width={{base:"346px" ,lg:"570px"} } height={{base:"50px" ,lg:"50px"}} color={"gray"}  fontSize={"14px"} lineHeight={"32px"} as="p">Networking with lecturer and also collegiate.</Box>
        <Button bg="blue" color={"white"}>Download App</Button>
        <Box display={'flex'} m={"40px 0px"} textAlign={"left"} justifyContent={"space-evenly"}>
            <Box>
                <Heading>4.3</Heading>
                <Box>Reviews</Box>
            </Box>
            <Box>
                <Heading>4.3</Heading>
                <Box>Good Responces</Box>
            </Box>
        </Box>
        </Box>
        <Box>
            <Image w={{base:"500px"}} src={we} alt=''/>
        </Box>
    </Box>
  )
}

export default FirstBlock