import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { ILLogoPanjang } from '../../assets'
import { Button, Gap, Hr, Input, Link } from '../../components'
import { colors } from '../../utils'
import { ScrollView } from 'react-native-gesture-handler'

const Register = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddrress] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [password, setPassword] = useState('');

  const register = async() => {
    let result = await fetch('http://tricky.masuk.id/api/register',{
      method:"POST",
      headers:{
        "Accept":"application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        'name': name,
        'email': email,
        'phone': phone,
        'address': address,
        'postal_code': postalCode,
        'password': password
      })
    })
    // .then(result => result.json())
    // .then(res => console.log(res))
    // result.status = await result.json()
      if(result.status === 200){
        console.log('berhasil');
        navigation.replace('Login')
      }else{
        result = result.json().then(res => console.warn(res.message));
      }
  }

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ILLogoPanjang/>
        <Gap height={32} />
        <Input title="Nama" value={name} onChangeText={(text) => setName(text)}/>
        <Input title="Email" value={email} onChangeText={(text) => setEmail(text)}/>
        <Input title="No.telp" value={phone} onChangeText={(text) => setPhone(text)}/>
        <Input title="Alamat Lengkap (RT & RW, Kelurahan, Kecamatan, dan Kota)" value={address} onChangeText={(text) => setAddrress(text)}/>
        <Input title="Kode Pos" value={postalCode} onChangeText={(text) => setPostalCode(text)}/>
        <Input title="Password" value={password} onChangeText={(text) => setPassword(text)}/>
        <Hr top={20} bot={20}/>
        <Button title="Register" onPress={register}/>
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