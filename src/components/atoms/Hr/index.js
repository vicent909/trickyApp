import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../../../utils'

const Hr = ({top, bot, color, hor}) => {
  return (
    <View style={styles.container({top, bot, color, hor})}>
      
    </View>
  )
}

export default Hr

const styles = StyleSheet.create({
  container: ({color, top, bot, hor }) => ({
    backgroundColor: color === 'white' ? colors.white : colors.secondary,
    height: 2,
    marginTop: top,
    marginBottom: bot,
    marginHorizontal: hor
})
})