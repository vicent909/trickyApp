import { Image, StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native'
import React, { useState } from 'react'
import { ILMarun } from '../../../assets'
import Hr from '../Hr'
import Button from '../Button'
import { colors } from '../../../utils'
import ButtonSmall from '../ButtonSmall'
import HistorySmallItem from '../HistorySmallItem'

const HistoryItem = ({idTransaksi, time, statusPackage, item, statusPayment, onPress}) => {
    const dataItem = item;

    // console.log('data item in small:', dataItem)
  return (
    <View style={styles.container}>
        {
            dataItem.map((e, index) => {
                // console.log('e:', e);
                return(
                    <HistorySmallItem 
                        key={e.id} 
                        title={e.product_title}
                        size={e.sizes.size_name}
                        color={e.colors.color_name}
                        quantity={e.quantity}
                        dataImage={'https://www.tricky.masuk.id/storage/'+e.product.galleries[0].image}
                    />
                )
            })
        }
      <Hr top={8} bot={8}/>
      <View style={styles.botContainer}>
        <View>
            <Text style={styles.priceLeft}>Id Transaksi</Text>
            <Text style={styles.priceLeft}>Waktu Transaksi</Text>
            <Text style={styles.priceLeft}>Status Pembayaran</Text>
            <Text style={styles.priceLeft}>Status Pesanan</Text>
        </View>
        <View style={{marginBottom: 8,}}>
            <Text style={styles.priceRight}>TRICKY-{idTransaksi}</Text>
            <Text style={styles.priceRight}>{time}</Text>
            <Text style={styles.priceRight}>{statusPayment}</Text>
            <Text style={styles.priceRight}>{statusPackage}</Text>
        </View>
      </View>
      <View style={{alignItems: 'flex-end'}}>
        <ButtonSmall widthBtn={180} title="Pesanan Diterima" type={statusPackage === 'SENT' ? 'active' : ''} onPress={onPress}/>
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
        marginBottom: 8,
        marginHorizontal: 10
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