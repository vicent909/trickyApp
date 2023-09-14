import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ILLogo } from '../../assets'
import { Button, Gap } from '../../components'
import { colors } from '../../utils'

const GetStarted = ({navigation}) => {
  return (
    <View style={styles.container}>
            <View style={styles.topContainer}></View>
            <View style={styles.botContainer}>
                <View style={styles.miniContainer}>
                    <ILLogo/>
                    <Text style={styles.welcome}>Welcome to TRICKY!</Text>
                </View>
                <View>
                    <Button title="Get Started" onPress={() => navigation.navigate('Register')}/>
                    <Gap height={16}/>
                    <Button title="Sign In" type="secondary" onPress={() => navigation.navigate('Login')}/>
                </View>
            </View>
    </View>
  )
}

export default GetStarted

const styles = StyleSheet.create({
    container:{ 
        flex: 1
    },
    topContainer:{
        backgroundColor: colors.secondary,
        height: '45%',
        borderBottomLeftRadius: 150,
        borderBottomRightRadius: 150,
    },
    botContainer:{
        flex:1,
        marginTop: '-18%',
        paddingHorizontal: 20,
        paddingBottom: 26,
        justifyContent: 'space-between',
    },
    welcome:{
        fontSize: 24,
        color: colors.text.default,
        fontFamily: 'OverpassMono-SemiBold'
    },
    miniContainer:{
        alignItems: 'center',
    }
})