import {
    Center, Button
} from '@chakra-ui/react'
import {welcome_alert} from "../../services/welcome_alert";

export const Welcome_button = () => {
    return (
            <Center>
                <Button onClick={welcome_alert} colorScheme='teal' size='sm' width='100%' marginTop='5px'>
                    Sobre
                </Button>
            </Center>
    );
}