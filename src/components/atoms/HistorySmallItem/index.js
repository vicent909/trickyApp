import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { ILMarun } from '../../../assets'
import { colors } from '../../../utils'

const HistorySmallItem = ({title, size, color, quantity, dataImage}) => {
    let $dataImage = dataImage;
  return (
    <View style={styles.product}>
            <View>
                <Image source={{uri: $dataImage}} style={styles.picture}/>
            </View>
            <View style={styles.rightContainer}>
                <Text style={styles.productTitle}>{title}</Text>
                <Text style={styles.size}>{color}, {size}</Text>
                <Text style={styles.size}>{quantity} Pcs</Text>
            </View>
        </View>
  )
}

export default HistorySmallItem

const styles = StyleSheet.create({
    picture:{
        width: 50,
        height: 50,
        borderRadius: 10
    },
    product: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 4
    },
    rightContainer: {
        flex:1,
        paddingLeft: 4
    },
    productTitle: {
        fontFamily: 'Nunito-SemiBold',
        fontSize: 12,
        color: colors.text.default
    },
    size: {
        fontFamily: 'Nunito-Regular',
        fontSize: 10,
        color: colors.text.default
    },
})