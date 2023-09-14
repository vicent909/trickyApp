import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { CartItem, CartPayment } from '../../components'
import { colors } from '../../utils'

const Keranjang = () => {
  return (
    <View style={styles.outer}>
      <View style={styles.container}>
          <Text style={styles.title}>Keranjang</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          <CartItem/>
          <CartItem/>
          <CartItem/>
          <CartItem/>
        </ScrollView>
        <CartPayment/>
      </View>
    </View>
  )
}

export default Keranjang

const styles = StyleSheet.create({
  outer:{
    flex: 1,
    backgroundColor: colors.secondary
  },  
  container:{
    backgroundColor: colors.background,
    padding: 20,
    flex:1,
    justifyContent: 'space-between',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,

  },
  title:{
    fontFamily: 'OverpassMono-SemiBold',
    fontSize: 16,
    color: colors.text.default,
    marginBottom: 14
  }
})