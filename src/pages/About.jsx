import { Box, Flex,Image,ListItem,Text, UnorderedList } from '@chakra-ui/react'
import React from 'react'

const About = () => {
  return (
    <Flex w={'90%'} m={'auto'} id='about' gap={8} mt={5} mb={5} flexDirection={{base:'column',lg:'row'}}>
      <Box w={{base:"100%",lg:"30%"}} ><Image src='https://img.freepik.com/free-vector/household-renovation-professions_52683-46107.jpg?w=740&t=st=1687838049~exp=1687838649~hmac=6eb6ed0ac9c218b4ab6fc334896ff9354a4a633035c3c971b845bef553698c10'/></Box>

<Box>
    <Text as={'h2'} fontSize={{base:20,lg:30}} fontWeight={'bold'} textAlign={{base:"center" ,lg:"left"}} >Expert AC Mechanical - Your One-Stop Solution for All Air Conditioning Needs in Bhubaneswar, Cuttack</Text>
    <UnorderedList fontSize={'sm'}mt={5} spacing={3} fontFamily= "Georgia, serif"
>
        <ListItem>Our services include AC repair, AC service, gas filling, and AC installation. We understand the importance of a properly functioning AC unit, especially during the hot and humid summers in Odisha.</ListItem>

        <ListItem>At Expert AC Mechanical, we are committed to providing our customers with high-quality services at competitive prices. </ListItem>
        <ListItem>Contact us today for all your air conditioning needs in Bhubaneswar, Cuttack. </ListItem>
    </UnorderedList>
</Box>

    </Flex>
  )
}

export default About
