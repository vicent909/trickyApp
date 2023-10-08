import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../../../utils'
import { ILMarun } from '../../../assets'

const ProdukItem = ({onPress, title, price, dataImage, slug}) => {

  let $dataImage = dataImage;
  return (
    <TouchableOpacity style={styles.container} onPress={onPress} >
      <Image source={{uri: $dataImage}} style={styles.image} />
      <Text style={styles.title} numberOfLines={1}>{title}</Text>
      <Text style={styles.price}>Rp. {price}</Text>
    </TouchableOpacity>
  )
}

export default ProdukItem

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    width: '45%' ,
    height: 'auto',
    borderRadius: 10,
    marginBottom: 10,
    marginHorizontal: 10,
    elevation: 5,
    shadowColor: colors.shadow
  },
  image:{
    height: 180,
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