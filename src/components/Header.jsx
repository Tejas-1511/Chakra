import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  VStack,
  HStack
} from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import { BiMenuAltLeft } from 'react-icons/bi'

export const Header = () => {

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button pos={'fixed'} top={'4'} left={'4'} p={'0'} w={10} h={'10'} colorScheme={'purple'} onClick={onOpen} zIndex={'overlay'}>
        <BiMenuAltLeft size={'20'}/>
      </Button>
      <Drawer isOpen={isOpen} onClose={onClose} placement={'left'}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader>Video Studio</DrawerHeader>
          <DrawerCloseButton />
          <DrawerBody>
            <VStack alignItems={'flex-start'}> { /*by default in Vstack alignItems={'center'} */}
              <Button colorScheme={'purple'} variant={'ghost'} onClick={onClose}>
                <Link to={'/'}>Home</Link>
              </Button>
              <Button colorScheme={'purple'} variant={'ghost'} onClick={onClose}>
                <Link to={'/videos'}>Videos</Link>
              </Button>
              <Button colorScheme={'purple'} variant={'ghost'} onClick={onClose}>
                <Link to={'/videos?category=free'}>Free Videos</Link>
              </Button>
              <Button colorScheme={'purple'} variant={'ghost'} onClick={onClose}>
                <Link to={'/upload'}>Upload</Link>
              </Button>
            </VStack>
            <HStack pos={'absolute'} bottom={'10'} left={'0'} w={'full'} justifyContent={'space-evenly'}>
              <Button colorScheme={'purple'} onClick={onClose}>
                <Link to={'/login'}>Login</Link>
              </Button>
              <Button colorScheme={'purple'} variant={'outline'} onClick={onClose}>
                <Link to={'/signup'}>Sign-Up</Link>
              </Button>
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}
