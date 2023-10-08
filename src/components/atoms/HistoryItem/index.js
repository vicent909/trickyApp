import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ILMarun } from '../../../assets'
import Hr from '../Hr'
import Button from '../Button'
import { colors } from '../../../utils'
import ButtonSmall from '../ButtonSmall'

const HistoryItem = () => {
  return (
    <View style={styles.container}>
        <View style={styles.product}>
            <View>
                <Image source={ILMarun} style={styles.picture}/>
            </View>
            <View style={styles.rightContainer}>
                <Text style={styles.productTitle}>Kaos Wanita Raglan Lengan 3/4</Text>
                <Text style={styles.size}>Marun, M</Text>
                <Text style={styles.size}>1 Pcs</Text>
            </View>
        </View>
        <View style={styles.product}>
            <View>
                <Image source={ILMarun} style={styles.picture}/>
            </View>
            <View style={styles.rightContainer}>
                <Text style={styles.productTitle}>Kaos Wanita Raglan Lengan 3/4</Text>
                <Text style={styles.size}>Marun, M</Text>
                <Text style={styles.size}>1 Pcs</Text>
            </View>
        </View>
        <View style={styles.product}>
            <View>
                <Image source={ILMarun} style={styles.picture}/>
            </View>
            <View style={styles.rightContainer}>
                <Text style={styles.productTitle}>Kaos Wanita Raglan Lengan 3/4</Text>
                <Text style={styles.size}>Marun, M</Text>
                <Text style={styles.size}>1 Pcs</Text>
            </View>
        </View>
      <Hr top={8} bot={8}/>
      <View style={styles.botContainer}>
        <View>
            <Text style={styles.priceLeft}>Id Transaksi</Text>
            <Text style={styles.priceLeft}>Waktu Transaksi</Text>
            <Text style={styles.priceLeft}>Status Pesanan</Text>
        </View>
        <View style={{marginBottom: 8,}}>
            <Text style={styles.priceRight}>TRICKY-01</Text>
            <Text style={styles.priceRight}>30-08-2023, 17:58</Text>
            <Text style={styles.priceRight}>Terkirim</Text>
        </View>
      </View>
      <View style={{alignItems: 'flex-end'}}>
        <ButtonSmall widthBtn={180} title="Pesanan Diterima" type="active"/>
      </View>
    </View>
  )
}

export default HistoryItem

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        borderRadius: 10,
        padding: 8,
        elevation: 5,
        shadowColor: colors.shadow,
        marginBottom: 8
    },
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
    botContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    priceLeft: {
        fontFamily: 'Nunito-SemiBold',
        fontSize: 14,
        color: colors.text.default,
    },
    priceRight:{
        fontFamily: 'Nunito-SemiBold',
        fontSize: 14,
        color: colors.text.default,
        textAlign: 'right'
    }
})