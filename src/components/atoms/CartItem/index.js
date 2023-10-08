import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { ILMarun, IconTrash } from '../../../assets'
import { colors } from '../../../utils'
import { TouchableOpacity } from 'react-native-gesture-handler'

const CartItem = ({title, dataImage, color, size, quantity, price, onPress}) => {
    let $dataImage = dataImage

    let $price = price*quantity;
  return (
    <View style={styles.container}>
        <View style={styles.topContainer}>
            <Image source={{uri: $dataImage}} style={styles.image}/>
        </View>
        <View style={styles.botContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.additional}>{color}, {size}</Text>
            <Text style={styles.additional}>{quantity} Pcs</Text>
            <View style={styles.priceNTrash}>
                <Text style={styles.price}>Rp. {$price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}</Text>
                <TouchableOpacity onPress={onPress}>
                    <IconTrash/>
                </TouchableOpacity>
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
        alignItems: 'center',
        marginHorizontal:10
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