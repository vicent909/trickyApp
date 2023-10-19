import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { IconEdit } from '../../../assets'
import { colors } from '../../../utils'
import Hr from '../Hr'
import { TouchableOpacity } from 'react-native-gesture-handler'

const AccountItem = ({name, email, phone, address, postalNumber, onPress}) => {
  return (
    <View style={styles.container}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
            <Text style={styles.title}>Profile</Text>
            <TouchableOpacity onPress={onPress}>
                <IconEdit/>
            </TouchableOpacity>
        </View>
        <Hr top={8} bot={8}/>
        <View>
            <Text style={styles.top}>
                Nama
            </Text>
            <Text style={styles.bottom}>
                {name}
            </Text>
        </View>
        <View>
            <Text style={styles.top}>
                Email
            </Text>
            <Text style={styles.bottom}>
                {email}
            </Text>
        </View>
        <View>
            <Text style={styles.top}>
                No. Telp
            </Text>
            <Text style={styles.bottom}>
                {phone}
            </Text>
        </View>
        <View>
            <Text style={styles.top}>
                Alamat
            </Text>
            <Text style={styles.bottom}>
                {address}
            </Text>
        </View>
        <View>
            <Text style={styles.top}>
                Kode Pos
            </Text>
            <Text style={styles.bottom}>
                {postalNumber}
            </Text>
        </View>
    </View>
  )
}

export default AccountItem

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        padding: 8,
        borderRadius: 10,
        elevation: 5,
        shadowColor: colors.shadow
    },
    title:{
        fontFamily: 'Nunito-SemiBold',
        fontSize: 16,
        color: colors.text.default,
    },
    top:{
        fontFamily: 'Nunito-Regular',
        fontSize: 10,
        color: colors.smallTitle,
    },
    bottom:{
        fontFamily: 'Nunito-SemiBold',
        fontSize: 14,
        color: colors.text.default,
    }
})