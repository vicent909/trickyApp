import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useContext } from 'react'
import { ILLogoPanjang } from '../../assets'
import { Button, Hr, Input, Link, Loading } from '../../components'
import { AuthContext } from '../../context'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { showMessage, hideMessage } from "react-native-flash-message";


const Login = ({navigation}) => {
  const {loading, setLoading, userToken, setUserToken, setUserInfo} = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginFunction = async() => {
    setLoading(true);
    let result = await fetch('http://tricky.masuk.id/api/apiLogin',{
      method:"POST",
      headers:{
        "Accept":"application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        'email': email,
        'password': password
      })
    })

      if(result.status === 200){
        // result = result.json().then(res => {
        //   setUserToken(res);
        // });

        result = result.json()
          .then(res => {
            setUserToken(res.data.token);
            setUserInfo(res.data.user);
            console.log('user token', res.data.token);
            console.log('user info:', res.data.user);
            AsyncStorage.setItem('userToken', res.data.token);
            AsyncStorage.setItem('userInfo', JSON.stringify(res.data.user));
            navigation.replace('MainApp')
            showMessage({
              message: "Login Berhasil",
              type: 'success',
              icon: 'success'
            })
          });
        setLoading(false);
      }else{
        result = result.json().then(res => {
          console.log(res.message);
          showMessage({
            message: res.message,
            type: 'danger',
            icon: 'danger'
          })
        });
        setLoading(false);
      }
  }

  return (
    <>
      <View style={styles.container}>
        <View  style={styles.logo}>
          <ILLogoPanjang/>
        </View>
        <Input placeholder="Email" value={email} onChangeText={(text) => setEmail(text)}/>
        <Input placeholder="Password" value={password} secureTextEntry={true} onChangeText={(text) => setPassword(text)}/>
        <Hr top={20} bot={20} />
        <Button title="Login" onPress={loginFunction} />
        <View style={{alignItems: 'center'}}>
          <Text style={{paddingTop:12, paddingBottom: 8}}>or</Text>
          <Link title="Register" size={14} onPress={() => navigation.navigate('Register')}/>
        </View>
      </View>
    </>
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