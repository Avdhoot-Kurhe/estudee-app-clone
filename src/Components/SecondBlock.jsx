import { Box} from '@chakra-ui/react'
import React from 'react'
const SecondBlock = () => {
  return (
    <Box bgColor={"whitesmoke"} className='secondBlock'>
        <Box fontFamily={"DM Serif Display"}  height={{base:"128px" ,lg:"64px"}} fontSize={{base:"30px" ,lg:"56px"}} lineHeight={{base:"48px" ,lg:"64px"}} as="h3">What Kind of benifits from this app</Box>
        <Box display={"block"} m="auto" w={{base:"346px" ,lg:"570px"}} height={{base:"101px" ,lg:"83px"}} fontSize={"20px"} lineHeight={"32px"} >Eu minim movet quodsi eum. Et vim dolore epicurei, ut aeque postea nam, at posse dicta est.</Box>
    </Box>
  )
}

export default SecondBlock