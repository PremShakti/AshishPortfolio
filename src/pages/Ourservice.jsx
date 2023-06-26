import { Box,SimpleGrid,Text } from '@chakra-ui/react'
import React from 'react'
import Card from '../components/Card'
const Ourservice = () => {
  return (
    <div id='service'>
    <Box bg={'#2171FF'} >
        <Text as={'h2'} fontSize={30} fontWeight={'bold'} color={'white'} textAlign={'center'} >Our Service</Text>
      
      <SimpleGrid columns={{base:1,lg:4}} spacing={2} w={{base:'95%',lg:'80%'}} border={'white'} margin={'auto'} mt={10}>

<Card src='https://expertacmechanical.in/wp-content/uploads/2023/05/1.jpg' title="AC Repair"/>    
<Card src='https://expertacmechanical.in/wp-content/uploads/2023/05/2.jpg' title="AC Service"/>    
<Card src='https://expertacmechanical.in/wp-content/uploads/2023/05/3.jpg' title="GAS Filling"/>    
<Card src='https://expertacmechanical.in/wp-content/uploads/2023/05/4.jpg' title="AC Instalation"/>    
   

      </SimpleGrid>

    </Box>
      
    </div>
  )
}

export default Ourservice
