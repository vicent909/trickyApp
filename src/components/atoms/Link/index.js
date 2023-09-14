import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../../../utils'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Link = ({title, size, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.text(size)}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Link

const styles = StyleSheet.create({
    text: (size) => ({
        fontSize: size,
        fontFamily: 'Nunito-Regular',
        color: colors.text.default,
        textDecorationLine: 'underline'
    })
})