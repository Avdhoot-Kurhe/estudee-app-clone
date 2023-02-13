import { Box } from '@chakra-ui/react'
import React from 'react'
import AboutBanner from '../Components/AboutBanner'
import FirstBlock from '../Components/FirstBlock'
import NavBar from '../Components/NavBar'
import SecondBlock from '../Components/SecondBlock'

const AboutPage = () => {
  return (
    <Box>
        <NavBar/>
        <FirstBlock/>
        <AboutBanner/>
        <SecondBlock/>
    </Box>
  )
}

export default AboutPage