import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { colors } from '../../../utils'

const Input = ({title, type, placeholder}) => {
  return (
    <View>
        <Text style={styles.text}>{title}</Text>
        <TextInput height={type} style={styles.input} placeholder={placeholder}/>
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
    text:{
        color: colors.text.secondary,
        paddingLeft: 2,
        fontFamily: 'Nunito-Regular'
    },
    input:{
        borderRadius: 10,
        borderWidth: 1,
        borderColor: colors.border,
        backgroundColor: colors.white,   
        elevation: 5,
        shadowColor: '#000',
        paddingHorizontal: 14, 
        marginBottom: 8,
    }
})