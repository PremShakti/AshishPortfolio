import { FormControl, Input, Textarea,Button } from '@chakra-ui/react'
import React from 'react'


const Form = () => {
  return (
   <FormControl pt={5} pb={5} boxShadow={'rgba(0, 0, 0, 0.24) 0px 3px 8px'} w={{base:'100%',lg:'40%'}} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} gap={5}>
 
 <Input  w={"90%"}  type='text' placeholder='Full Name'/>
 <Input w={"90%"}  type='email' placeholder='Email'/>
 <Input  w={"90%"} type='Number' placeholder='Mobile Number'/>
 <Input w={"90%"}  type='text' placeholder='Subject'/>
 <Textarea w={"90%"} type='text' placeholder='Message'></Textarea>
 <Button type='submit' color={"white"} bg={'#61CE70'} >Submit</Button>
   </FormControl>
  )
}

export default Form
