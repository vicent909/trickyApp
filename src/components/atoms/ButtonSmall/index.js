import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../../../utils'
import { TouchableOpacity } from 'react-native-gesture-handler'

const ButtonSmall = ({widthBtn, type, title, onPress}) => {
  if(type === 'active'){
    return (
      <TouchableOpacity style={styles.container({widthBtn, type})} onPress={onPress}>
        <Text style={styles.titleButton}>{title}</Text>
      </TouchableOpacity>
    )
  }else{
    return (
      <View style={styles.container({widthBtn, type})} onPress={onPress}>
        <Text style={styles.titleButton}>{title}</Text>
      </View>
    )
  }
}

export default ButtonSmall

const styles = StyleSheet.create({
    container: ({widthBtn, type}) => ({
            backgroundColor: type === 'active' ? colors.button.primary.background : colors.button.inactive.background,
            padding: 5,
            borderRadius: 20,
            width: widthBtn,
            
        }), 
    titleButton:{
        color: colors.button.primary.text,
        textAlign: 'center',
        fontFamily: 'Nunito-SemiBold'
    }
})