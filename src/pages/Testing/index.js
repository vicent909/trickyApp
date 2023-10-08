import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Button } from '../../components';
import { colors } from '../../utils';
import { ILLogo } from '../../assets';
import { AuthContext } from '../../context';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Testing = ({navigation}) => {
    const {userToken, setUserToken, userInfo, setUserInfo} = useContext(AuthContext);

    const logged = async() => {
        let token = await AsyncStorage.getItem('userToken');
        let info = await AsyncStorage.getItem('userInfo');

        userInfoParse = JSON.parse(info)
        setUserToken(token);
        setUserInfo(userInfoParse);

        console.log('logged', token);
        // console.log('user token testing', userToken);
        // console.log('logged info', info);
        // console.log('user info tensting', userInfo);
        // console.log('user info testing', info);

        if(token !== null){
            navigation.replace('MainApp');
        }else{
            navigation.replace('GetStarted')
        }
    }
  
    const isLogged = () => {
        if(userToken !== null){
          navigation.replace('MainApp');
        }else{
          navigation.replace('GetStarted')
        }
    }

    useEffect(() => {
        logged();
    }, [])

    return (
        <View style={styles.wrapper}>
            <ILLogo/>
            <ActivityIndicator size={'large'} color={colors.primary}/>
          <Text style={styles.text}>Loading</Text>
        </View>
      )
}

export default Testing

const styles = StyleSheet.create({
    wrapper: {
        flex:1,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'rgba(0, 0, 0, 0.5)',
        width: '100%',
        height: '100%',

    },
    text: {
        fontSize: 18,
        fontFamily: 'OverpassMono-SemiBold',
        color: colors.primary
    }
})