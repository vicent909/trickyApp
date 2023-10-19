import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, {useContext, useState} from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { Button, Hr, Input } from '../../components'
import { colors } from '../../utils'
import { AuthContext } from '../../context'
import { IconBack } from '../../assets'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { showMessage, hideMessage } from "react-native-flash-message";

const EditProfile = ({navigation}) => {
    const {userInfo, setUserInfo, setLoading} = useContext(AuthContext);

    const [name, setName] = useState(userInfo.name);
    const [email, setEmail] = useState(userInfo.email);
    const [phone, setPhone] = useState(userInfo.phone);
    const [address, setAddrress] = useState(userInfo.address);
    const [postalCode, setPostalCode] = useState(userInfo.postal_code);

    const editUser = async() => {
        setLoading(true)
        let result = await fetch('http://tricky.masuk.id/api/editUser/'+userInfo.id,{
          method:"POST",
          headers:{
            "Accept":"application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            'name': name,
            'phone': phone,
            'address': address,
            'postal_code': postalCode,
          })
        })
        // .then(result => result.json())
        // .then(res => console.log(res))
        // result.status = await result.json()
          if(result.status === 200){
            result = result.json()
            .then(res => {
              setUserInfo(res.data[0]);
              // console.log('user info di edit:', res.data[0]);
              AsyncStorage.setItem('userInfo', JSON.stringify(res.data[0]));
              navigation.goBack();
              showMessage({
                message: 'Berhasil Merubah Profile',
                type: 'success',
                icon: 'success'
              })
              setLoading(false);
            });
            // navigation.replace('Login')
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
    <View style={styles.container}>
        <View style={styles.topContainer}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <IconBack/>
            </TouchableOpacity>
            <Text style={styles.title}>Edit Profile</Text>
        </View>
        <ScrollView style={styles.scrollViewContainer} showsHorizontalScrollIndicator={false}>
            <Hr bot={20}/>
            <Input title={'Nama'} value={name} onChangeText={(text) => setName(text)}/>
            <Input title={'Email'} value={email} editable={false}/>
            <Input title={'No. telp'} value={phone} onChangeText={(text) => setPhone(text)}/>
            <Input title={'Alamat'} value={address} onChangeText={(text) => setAddrress(text)}/>
            <Input title={'Kode Pos'} value={postalCode} onChangeText={(text) => setPostalCode(text)}/>

            <Hr top={12} bot={12}/>
            <View style={{marginBottom: 10}}>
                <Button title={'Save'} onPress={editUser}/>
            </View>
        </ScrollView>
    </View>
  )
}

export default EditProfile

const styles = StyleSheet.create({
    container: {
        // padding: 20
    },
    topContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 20
    },  
    scrollViewContainer: {
        padding: 15
    },
    title:{
        fontFamily: 'OverpassMono-SemiBold',
        color: colors.text.default,
        fontSize: 18,
        marginLeft: 14
    }
})