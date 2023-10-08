import { StyleSheet, Text, View } from 'react-native'
import React, {useContext, useEffect} from 'react'
import { ILLogo } from '../../assets'
import { colors } from '../../utils'
import { AuthContext } from '../../context'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Splash = ({navigation}) => {
    useEffect(() => {
      setTimeout(() => {
        navigation.replace('Testing');
      }, 3000)
    }, [navigation])
    
    return (
        <View style={styles.pages}>
            <ILLogo/>
          <Text style={styles.title}>TRICKY</Text>
        </View>
      )
}

export default Splash;

const styles = StyleSheet.create({
    pages : { 
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      },
      title: {
        fontSize: 20,
        fontFamily: 'OverpassMono-SemiBold',
        color: colors.text.default
      }
})