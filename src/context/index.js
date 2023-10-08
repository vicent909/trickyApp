import React, {createContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [loading, setLoading] = useState(false);
    const [userToken, setUserToken] = useState(null);
    const [userInfo, setUserInfo] = useState(null);

    const isLoggedIn = async() => {
        try{
            setLoading(true);
            let userToken= await AsyncStorage.getItem('userToken');
            let userInfo= await AsyncStorage.getItem('userInfo');

            userInfoParse = JSON.parse(userInfo);

            if(userInfoParse){
                setUserInfo(userInfoParse);
                setUserToken(userToken);
            }

            setLoading(false);
        }catch(e){
            setLoading(true);
            console.log('isLogged', e);
            setLoading(false);
        }
    }

    const logout = () => {
        setLoading(true);
        setUserToken(null);
        setUserInfo(null);
        AsyncStorage.removeItem('userToken');
        AsyncStorage.removeItem('userInfo');
        setLoading(false)
    }

    useEffect(() => {
        isLoggedIn();
        // console.log('user token context', userToken)
    }, [])

    return(
        <AuthContext.Provider value={{loading, setLoading, userToken, setUserToken, setUserInfo, userInfo}}>
            {children}
        </AuthContext.Provider>
    )
}