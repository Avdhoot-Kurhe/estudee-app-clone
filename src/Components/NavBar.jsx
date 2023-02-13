import React from 'react'
import {Box,Heading,Button, Image} from "@chakra-ui/react"
import ham from "../assets/ham.jpg"
const NavBar = () => {
  return (
    <Box className='nav'>
        <Heading className='.logo' width={{base:"102px" ,lg:"202px"} } as={"h3"} height={{base:"32px" ,lg:"48px"}} fontSize={{base:"24px" ,lg:"40px"}} lineHeight={{base:"32px" ,lg:"48px"}} >estudee</Heading>
        <Box className='noham'>
        <Box  display={"flex"} fontFamily={"DM Sans"} fontWeight={700} w="185px" gap="20px" fontSize={"16px"} h={"24px"} >
            <Box>About</Box>
            <Box>services</Box>
        </Box>
        <Button className='noham' w={"170px"} h={"48px"} color={"white"} border={"1px solid white"} bgColor={"#434CCC"}>Contact Us</Button>
        </Box>
        <Box className='ham'><Image w={50}  src={ham} alt="Ham"/></Box>
    </Box>
  )
}

export default NavBar