import React from "react";
import { useFonts, Inter_600SemiBold } from '@expo-google-fonts/inter';

import { Text, View } from "react-native";
import { ButtonAuth } from "../components/Button";
import { InputAuth } from "../components/Input";
import { ForgotText, Title, ViewAuth, ViewInputs } from "./style";


export const Login = () => {
    let [fontsLoaded] = useFonts({
        Inter_600SemiBold,
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <ViewAuth style={{ justifyContent: "space-between" }}>
            <ViewInputs >
            <Title style={{ fontFamily: 'Inter_600SemiBold' }}>Log in</Title>
                <InputAuth font="Inter_600SemiBold" place="Email" secure={false}/>
                <InputAuth font="Inter_600SemiBold" place="Password" secure={true}/>
            </ViewInputs>
                
           <ViewInputs>
           <ButtonAuth font="Inter_600SemiBold" text="Log In" />
           <ForgotText style={{fontFamily: 'Inter_600SemiBold'}}> Forgot your password? </ForgotText>
           </ViewInputs>


        </ViewAuth>

    );
}