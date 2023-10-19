import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Hr from '../Hr'
import Button from '../Button'
import { colors } from '../../../utils'

const CartPayment = ({itemPrice, shipping, grandTotal, onPress}) => {
  $total = itemPrice+shipping; 
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Payment</Text>
      <Hr top={8} bot={4}/>
      <View style={styles.unfinishPrice}>
        <View >
            <Text style={styles.price}>Harga Barang</Text>
            <Text style={styles.price}>Ongkos Kirim</Text>
        </View>
        <View>
            <Text style={styles.price}>Rp. {itemPrice}</Text>
            <Text style={styles.price}>Rp. {shipping}</Text>
        </View>
      </View>
      <Hr top={8} bot={8}/>
      <View style={styles.finishPriceContainer}>
        <Text style={styles.finalPrice}>Total Dibayarkan</Text>
        <Text style={styles.finalPrice}>Rp. {$total}</Text>
      </View>
      <Button title="Checkout" onPress={onPress}/>
    </View>
  )
}

export default CartPayment

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.white,
        padding: 8,
        borderRadius: 10,
        elevation: 5,
        shadowColor: colors.shadow,
    },
    title: {
        fontFamily: 'Nunito-SemiBold',
        color: colors.text.default,
        fontSize: 16
    },
    unfinishPrice:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    price:{
        fontFamily: 'Nunito-Regular',
        fontSize: 12,
        color: colors.text.default,
    },
    finishPriceContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8
    },  
    finalPrice:{
        fontFamily: 'Nunito-SemiBold',
        fontSize: 14,
        color: colors.text.default,
        marginBottom: 4
    }
})