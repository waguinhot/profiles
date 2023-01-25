import React from "react";
import { useFonts, Inter_600SemiBold } from '@expo-google-fonts/inter';

import { Text, View } from "react-native";
import { ButtonAuth } from "../components/Button";
import { InputAuth } from "../components/Input";
import Checkbox from 'expo-checkbox';

import { ForgotText, Title, ViewAuth, ViewCheckbox, ViewHeaderRegister, ViewInputs } from "./style";


export const Register = () => {

    const [Checked, setChecked] = React.useState(false);

    let [fontsLoaded] = useFonts({
        Inter_600SemiBold,
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <ViewAuth style={{ justifyContent: "space-between" }}>
            <ViewInputs >
                <ViewHeaderRegister>
                    <Text>X</Text>
                    <Title style={{ fontFamily: 'Inter_600SemiBold' }}>Sing Up</Title>
                    <ForgotText style={{ fontFamily: 'Inter_600SemiBold' }}> Login </ForgotText>
                </ViewHeaderRegister>
                <InputAuth font="Inter_600SemiBold" place="Name" secure={false}/>
                <InputAuth font="Inter_600SemiBold" place="Email" secure={false} />
                <InputAuth font="Inter_600SemiBold" place="Password" secure={true}/>
                <ViewCheckbox >
                    <Checkbox
                        value={Checked}
                        onValueChange={setChecked}
                        color={Checked ? '#5db075' : undefined}
                    />
                    <Text >I would like to receive your newsletter and other promotional information.</Text>
                </ViewCheckbox>
            </ViewInputs>

            <ViewInputs>
                <ButtonAuth font="Inter_600SemiBold" text="Sing Up" />
                <ForgotText style={{ fontFamily: 'Inter_600SemiBold' }}> Forgot your password? </ForgotText>
            </ViewInputs>


        </ViewAuth>

    );
}