import React from 'react'
import { Container, Heading, Input, VStack, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import img5 from '../assets/5.png';

export const Login = () => {
    return (
        <Container maxW={'container.xl'} h={'100vh'} p={'16'} backgroundImage={img5}>
            <form>
                <VStack alignItems={'stretch'} spacing={'8'} w={['full','96']} m={'auto'} my={'16'}>
                    <u><Heading>Welcome Back</Heading></u>
                    <Input placeholder={'email'} type={'email'} required focusBorderColor={'purple.500'} borderColor={'purple'} />
                    <Input placeholder={'password'} type={'password'} required focusBorderColor={'purple.500'} borderColor={'purple'} />
                    <Button variant={'link'} alignSelf={'flex-end'}>
                        <Link to={'/forgetpassword'}>Forgot Password?</Link>
                    </Button>
                    <Button type='submit' colorScheme={'purple'}>Log-IN</Button>
                    <Button colorScheme={'purple'}>
                        <Link to={'/signup'}>Sign Up</Link>
                    </Button>
                </VStack>
            </form>
        </Container>
    )
}
