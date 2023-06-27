import { Box,SimpleGrid,Text } from '@chakra-ui/react'
import React from 'react'
import Card from '../components/Card'
const Ourservice = () => {
  return (
    <div id='service'>
    <Box bg={'#2171FF'} >
        <Text as={'h2'} fontSize={30} fontWeight={'bold'} color={'white'} textAlign={'center'} >Our Service</Text>
      
      <SimpleGrid columns={{base:1,lg:4}}pb={10} spacing={2} w={{base:'95%',lg:'80%'}} border={'white'} margin={'auto'} mt={10}>

<Card src='https://img.freepik.com/free-photo/medium-shot-people-wearing-helmets_23-2149366666.jpg?w=740&t=st=1687838115~exp=1687838715~hmac=56c90ea3c3d18053d92414431a0eee9204c3ed55f7c5c27e038a0d1fa63cc3af' title="AC Repair"/>    
<Card src='https://img.freepik.com/free-photo/repairman-doing-air-conditioner-service_1303-26541.jpg?w=740&t=st=1687838171~exp=1687838771~hmac=2e54492be943ebcbb9519f909bef3302fc3c5e40d22173b3616865ecdcc47dc8' title="AC Service"/>    
<Card src='https://expertacmechanical.in/wp-content/uploads/2023/05/3.jpg' title="GAS Filling"/>    
<Card src='https://img.freepik.com/free-photo/hvac-technician-working-capacitor-part-condensing-unit-male-worker-repairman-uniform-repairing-adjusting-conditioning-system-diagnosing-looking-technical-issues_155003-18256.jpg?w=740&t=st=1687838319~exp=1687838919~hmac=b8556f1ef8e2d5f0657d2ec085811fa0a7140da252b91e72d880c130984881de' title="AC Instalation"/>    
   

      </SimpleGrid>

    </Box>
      
    </div>
  )
}

export default Ourservice
