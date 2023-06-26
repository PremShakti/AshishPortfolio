import { Box,ListItem,Text, UnorderedList } from '@chakra-ui/react'
import React from 'react'
import Form from '../components/Form'


const Contact = () => {
  return (
    <Box id='contact' mt={10} pt={6} >
      <Text as={'h2'} mb={10} fontSize={30} fontWeight={'bold'} textAlign={'center'} >Contact us</Text>
      <Box display={'flex'} mb={7} flexDirection={{base:'column',lg:'row'}} alignItems={'center'} justifyContent={'center'} gap={10} >

   <UnorderedList spacing={5} pl={{base:'20px',lg:"0px"}} >
    <ListItem>Mobile Number: +91-7909077847</ListItem>
    <ListItem>mail : ashishvishwakarma073@gmail.com</ListItem>
    <ListItem>Location : Patia Bhubaneswar odisha 701024</ListItem>
    <ListItem>Services Location : Bhubaneswar, Cuttack, and Kendrapara </ListItem>
   </UnorderedList>

 <Form/>

      </Box>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3850.3132505208523!2d85.81824792798683!3d20.35391535279686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19093d69c9edc1%3A0x4f11974507a587f3!2sKIIT%20Campus%206!5e0!3m2!1sen!2sin!4v1687798209520!5m2!1sen!2sin" width="100%" height="350" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

    </Box>
  )
}

export default Contact
