import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../../../utils'
import { ILMarun } from '../../../assets'

const ProdukItem = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={ILMarun} style={styles.image} />
      <Text style={styles.title}>Kaos Wanita Raglan Leng..</Text>
      <Text style={styles.price}>Rp. 40.000</Text>
    </TouchableOpacity>
  )
}

export default ProdukItem

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    width: '45%' ,
    height: 230,
    borderRadius: 10,
    marginBottom: 10,
    marginHorizontal: 10,
    elevation: 5,
    shadowColor: colors.shadow
  },
  image:{
    maxHeight: 170,
    width: '100%',
    borderRadius:10
  },
  title:{
    fontFamily: 'Nunito-Regular',
    fontSize: 12,
    color: colors.text.default,
    paddingVertical: 6,
    paddingHorizontal: 8
  },
  price:{
    fontFamily: 'Nunito-Medium',
    fontSize: 16,
    color: colors.text.default,
    paddingHorizontal: 8,
    paddingBottom: 8
  }
})