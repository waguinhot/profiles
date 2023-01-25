import { Button , TextButton} from "./style"
import { useFonts, Inter_600SemiBold } from '@expo-google-fonts/inter';
import { Text } from "react-native";


interface Props {
    text: string;
    font: string;
}

export const ButtonAuth = (props: Props) => {

    return(
        <Button>
           <TextButton style={{ fontFamily: props.font}}> {props.text} </TextButton>
        </Button>
    )
}