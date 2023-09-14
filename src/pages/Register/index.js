import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ILLogoPanjang } from '../../assets'
import { Button, Gap, Hr, Input, Link } from '../../components'
import { colors } from '../../utils'
import { ScrollView } from 'react-native-gesture-handler'

const Register = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ILLogoPanjang/>
        <Gap height={32} />
        <Input title="Nama"/>
        <Input title="Email"/>
        <Input title="No.telp"/>
        <Input title="Alamat Lengkap (RT & RW, Kelurahan, Kecamatan, dan Kota)"/>
        <Input title="Kode Pos"/>
        <Input title="Password"/>
        <Hr top={20} bot={20}/>
        <Button title="Register" />
        <View style={{alignItems: 'center'}}>
          <Text style={{paddingTop:12, paddingBottom: 8}}>or</Text>
          <Link title="Login" size={14} onPress={() => navigation.navigate('Login')}/>
        </View>
      </ScrollView>
    </View>
  )
}

export default Register

const styles = StyleSheet.create({
  container: {
      flex : 1,
      padding: 20
  }
})