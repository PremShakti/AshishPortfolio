import { SimpleGrid,Image,Box,Text,Button, Flex } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import {FiPhoneCall}
 from 'react-icons/fi'
import AOS from "aos";
import 'aos/dist/aos.css'


const Home = () => {
  useEffect(()=>{
    AOS.init({duration:1000})
    },[])
  return (
    <div id='home'>
    <SimpleGrid columns={{base:1,lg:2}}>
        <Box>
        <Image src='https://img.freepik.com/free-vector/air-conditioner-repair-repairman-with-tools_33099-272.jpg?w=740&t=st=1687801009~exp=1687801609~hmac=372bec63414c344e2622fec71bdb1a54c73ec10ae6255d896baa99a9f07e32ed'/>
        </Box>
        <Box bg={"#2171FF"} display={'flex'} alignItems={"center"} justifyContent={"center"} >
          <Box w={"70%"}  color={'white'} m={10}>
           <Text as={"h2"} fontSize={30} fontWeight={'bold'}>Top AC Repair Service In Bhubaneswar & Cuttac</Text>
           <Text lineHeight={6} mt={6} mb={7}>At Ecpret Ac Mechanical Services, our team of highly trained and dedicated specialists offer a100% statisfaction gurantee on all AC repair and servicing work.</Text>
<Button bg={'#61CE70'} color={"white"} >Schedule Today</Button>
          </Box>

        </Box>
    </SimpleGrid>
    <Flex bg={'black'}pl={{base:"20px"}} pt={10} pb={10} color={'white'} align={'center'} justify={'center'} gap={5} fontSize={'larger'}><FiPhoneCall  /><Text fontWeight={'bold'}>Call Today For A Free Estimate +91-6370007961 </Text> </Flex>
      
    </div>
  )
}

export default Home
