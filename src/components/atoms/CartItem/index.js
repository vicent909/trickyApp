import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { ILMarun, IconTrash } from '../../../assets'
import { colors } from '../../../utils'

const CartItem = () => {
  return (
    <View style={styles.container}>
        <View style={styles.topContainer}>
            <Image source={ILMarun} style={styles.image}/>
        </View>
        <View style={styles.botContainer}>
            <Text style={styles.title}>Kaos Wanita Raglan Lengan 3/4</Text>
            <Text style={styles.additional}>Navy, M</Text>
            <Text style={styles.additional}>1 Pcs</Text>
            <View style={styles.priceNTrash}>
                <Text style={styles.price}>Rp. 40.000</Text>
                <IconTrash/>
            </View>
        </View>
    </View>
  )
}

export default CartItem

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.white,
        elevation: 5,
        shadowColor: colors.shadow,
        padding: 8,
        borderRadius: 10,
        marginBottom: 8,
        flexDirection: 'row', 
        alignItems: 'center'
    },
    image:{
        width: 68,
        height: 68,
        borderRadius: 10
    },
    topContainer:{
        marginRight: 8
    },
    botContainer:{
        flex: 1
    },
    priceNTrash:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    title:{
        fontFamily: 'Nunito-SemiBold',
        color: colors.text.default,
        fontSize: 12
    },
    additional:{
        fontFamily: 'Nunito-Regular',
        color: colors.text.default,
        fontSize: 10
    },
    price:{
        fontFamily: 'Nunito-SemiBold',
        color: colors.text.default,
        fontSize: 12
    }
})