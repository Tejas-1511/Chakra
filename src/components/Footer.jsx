import React from 'react'
import { Box, Button, Heading, HStack, Input, Stack, Text, VStack } from '@chakra-ui/react'
import { AiOutlineSend, AiOutlineYoutube, AiOutlineInstagram,AiOutlineLinkedin } from 'react-icons/ai'

export const Footer = () => {
    return (
        <Box bgColor={'blackAlpha.900'} minH={'40'} p={'16'} color={'white'}>
            <Stack direction={['column', 'row']}>{/*  column if screen big else row> */}
                <VStack alignItems={'stretch'} w={'full'} px={'4'}>
                    <Heading size={'md'} textTransform={'uppercase'}>
                        Subscribe To get updates
                    </Heading>
                    <HStack borderBottom={'4px solid white'} py={'2'}>
                        <Input placeholder='Enter Email' border={'none'} borderRadius={'none'} outline={'none'} focusBorderColor={'none'} />
                        <Button p={'0'} colorScheme={'purple'} variant={'ghost'} borderRadius={'0 20px 20px 0'}>
                            <AiOutlineSend size={'20'} />
                        </Button>
                    </HStack>
                </VStack>
                <VStack w={'full'} borderLeft={['none, 1px solid white']} borderRight={['none, 1px solid white']}>
                   <Heading textTransform={'uppercase'} textAlign={'center'}>
                    Video Hub
                   </Heading>
                   <Text>All rights reserved</Text>
                </VStack>
                <VStack w={'full'} >
                   <Heading textTransform={'uppercase'} size={'md'}>
                    Social Media
                   </Heading>
                   <Button variant={'link'} colorScheme={'whiteAlpha'} color={'white'}> 
                     <AiOutlineYoutube size={'40px'}/>
                     <a href='https://youtube.com'>Youtube</a>
                   </Button>
                   <Button variant={'link'} colorScheme={'whiteAlpha'} color={'white'}> 
                     <AiOutlineInstagram size={'40px'}/>
                     <a href='https://instagram.com/tejas_00009'>Instagram</a>
                   </Button>
                   <Button variant={'link'} colorScheme={'whiteAlpha'} color={'white'}> 
                     <AiOutlineLinkedin size={'40px'}/>
                     <a href='https://www.linkedin.com/in/tejas-samant-862594220/'>LinkedIn</a>
                   </Button>
                </VStack>
            </Stack>
        </Box>
    )
}
