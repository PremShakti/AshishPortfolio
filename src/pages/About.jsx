import { Box, Flex,Image,ListItem,Text, UnorderedList } from '@chakra-ui/react'
import React from 'react'

const About = () => {
  return (
    <Flex w={'90%'} m={'auto'} id='about' gap={8} mt={5} mb={5} flexDirection={{base:'column',lg:'row'}}>
      <Box w={{base:"100%",lg:"30%"}} ><Image src='https://www.shutterstock.com/image-photo/worker-repairing-ceiling-air-conditioning-260nw-640261102.jpg'/></Box>

<Box>
    <Text as={'h2'} fontSize={{base:20,lg:30}} fontWeight={'bold'} textAlign={{base:"center" ,lg:"left"}} >Expert AC Mechanical - Your One-Stop Solution for All Air Conditioning Needs in Bhubaneswar, Cuttack</Text>
    <UnorderedList fontSize={'sm'}mt={5}>
        <ListItem>Our services include AC repair, AC service, gas filling, and AC installation. We understand the importance of a properly functioning AC unit, especially during the hot and humid summers in Odisha.</ListItem>

        <ListItem>At Expert AC Mechanical, we are committed to providing our customers with high-quality services at competitive prices. </ListItem>
        <ListItem>Contact us today for all your air conditioning needs in Bhubaneswar, Cuttack. </ListItem>
    </UnorderedList>
</Box>

    </Flex>
  )
}

export default About
