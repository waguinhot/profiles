import { Button , TextButton} from "./style"
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';


interface Props {
    text: string;
}

export const Buttongreen = (props: Props) => {

    let [fontsLoaded] = useFonts({
        Inter_900Black,
      });

      if (!fontsLoaded) {
        return null;
      }

    return(
        <Button>
           <TextButton style={{ fontFamily: 'Inter_900Black'}}> {props.text} </TextButton>
        </Button>
    )
}