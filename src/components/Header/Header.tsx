import './Header.css'
import {
    ChakraProvider,
    Box,
    Center
} from '@chakra-ui/react'
import {Welcome_button} from "../Button/welcome_button";

export const Header = () => {
    return (
        <ChakraProvider>
            <Box minHeight='10vh' backgroundColor='#9413dc' padding='25px'>
                <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='15px'>
                    <Center>
                        <h1>Dio Bank</h1>
                    </Center>
                    <Welcome_button/>
                </Box>
            </Box>
        </ChakraProvider>
    );
}