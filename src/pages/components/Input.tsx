import { Text } from "react-native";
import { Input } from "./style";

interface Props {
    place: string;
    font:  string;
    secure: boolean;
}
export const InputAuth = (props: Props) =>{
    return(
        <Input style={{fontFamily: props.font}}   placeholder={props.place} secureTextEntry={props.secure}/>
    );
}