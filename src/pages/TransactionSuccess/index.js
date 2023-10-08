import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { ButtonSmall } from '../../components'
import { ILSuccess } from '../../assets'
import { colors } from '../../utils'

const TransactionSuccess = ({navigation}) => {
  return (
    <View style={styles.container}>
        <Image source={ILSuccess} />
        <Text style={styles.title}>Yay! Success</Text>
        <Text style={styles.email}>Please check your email.</Text>
        <ButtonSmall type="active" widthBtn={180} title="Back to Home" onPress={() => navigation.navigate('MainApp')}/>
    </View>
  )
}

export default TransactionSuccess

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    title:{
        fontFamily: 'Nunito-SemiBold',
        color: colors.text.default,
        fontSize: 20,
        marginTop: 4
    },
    email:{
        fontFamily: 'Nunito-SemiBold',
        color: colors.text.secondary,
        fontSize: 12,
        marginBottom: 10
    }
})