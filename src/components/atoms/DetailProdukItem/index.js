import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../../../utils'

const DetailProdukItem = ({onPress, sizeName, num, a, width, type, jumlah, onPressMin, onPressPlus}) => {
    if(type === 'jumlah'){
        return(
            <View style={styles.containerJumlah}>
                <TouchableOpacity onPress={onPressMin}>
                    <Text style={styles.plusmin}>-</Text>
                </TouchableOpacity>
                <Text style={styles.plusmin}>{jumlah}</Text>
                <TouchableOpacity onPress={onPressPlus}>
                    <Text style={styles.plusmin}>+</Text>
                </TouchableOpacity>
            </View>
        )
    }else{
        return (
          <TouchableOpacity key={num} style={styles.containerSize({a, width})} onPress={onPress}>
              <Text style={styles.title}>{sizeName}</Text>
          </TouchableOpacity>
        )}

}

export default DetailProdukItem

const styles = StyleSheet.create({
    containerSize:({a, width}) => ({
        backgroundColor: a === true ? colors.button.sizeColor.background : colors.button.secondary.background,
        padding: 4,
        borderRadius: 20,
        marginRight: 4,
        width: width
    }),
    containerJumlah:{
        backgroundColor: colors.button.sizeColor.background,
        padding: 4,
        borderRadius: 20,
        marginRight: 4,
        width: 100,
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10
    },
    title:{
        textAlign: 'center'
    },
    plusmin: {
        color: colors.text.default,
        fontSize: 15,
        fontFamily: 'OverpassMono-SemiBold'
    }
})