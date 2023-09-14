import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ILLogoPanjang } from '../../assets'
import { Button, Hr, Input, Link } from '../../components'

const Login = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View  style={styles.logo}>
        <ILLogoPanjang/>
      </View>
      <Input placeholder="Nama" />
      <Input placeholder="Password"/>
      <Hr top={20} bot={20} />
      <Button title="Login" onPress={() => navigation.replace('MainApp')} />
      <View style={{alignItems: 'center'}}>
        <Text style={{paddingTop:12, paddingBottom: 8}}>or</Text>
        <Link title="Register" size={14} onPress={() => navigation.navigate('Register')}/>
      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container:{ 
    padding: 20,
    flex: 1,
    justifyContent: 'center'
  },
  logo:{
    alignItems: 'center',
  }
})