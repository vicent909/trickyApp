import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { IconAkun, IconAkunActive, IconBeranda, IconBerandaActive, IconHistory, IconHistoryActive, IconKeranjang, IconKeranjangActive } from '../../../assets'
import { colors } from '../../../utils'

const TabItem = ({title, active, onPress, onLongPress}) => {
    const Icon = () => {
        if(title === 'Beranda'){
            return active ? <IconBerandaActive/> : <IconBeranda/>
        }
        if(title === 'Keranjang'){
            return active ? <IconKeranjangActive/> : <IconKeranjang/>
        }
        if(title === 'History'){
            return active ? <IconHistoryActive/> : <IconHistory/>
        }
        if(title === 'Akun'){
            return active ? <IconAkunActive/> : <IconAkun/>
        }
        return <IconBeranda/>;
    }
  return (
    <TouchableOpacity style={styles.container} onPress={onPress} onLongPress={onLongPress}>
        <Icon/>
      <Text style={styles.text(active)}>{title}</Text>
    </TouchableOpacity>
  )
}

export default TabItem

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
    },
    text: (active) => ({
        color: active ? colors.text.active : colors.text.inactive,
        fontFamily: 'Nunito-SemiBold',
        fontSize: 12,
        marginTop: 2
    })
})