import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import { Login } from "../../pages/auth/Login"
import { Register } from "../../pages/auth/Register"
import Profile from "../../pages/profile/Profile"
import { propsNavigationStack } from "./models"

const {Navigator, Screen} = createNativeStackNavigator<propsNavigationStack>();
export default function(){
    return(
        <Navigator initialRouteName="Login">
            <Screen name="Login" component={Login} />
            <Screen name="Register" component={Register} />
            <Screen name="Profile" component={Profile} />
        </Navigator>
    
    );
}

// aprendendo sobre rotas do react native com
//https://www.youtube.com/watch?v=6BDwQJq8z4E