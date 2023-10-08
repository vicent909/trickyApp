import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context'

const PraKeranjang = ({navigation}) => {
    const {userInfo} = useContext(AuthContext);
    const [data, setData] = useState([]);
    const $data = data;
    const getData  = async() => {
        try{
            let result = await fetch('https://www.tricky.masuk.id/api/cart/'+userInfo.id, {
              method: 'GET',
              headers: {
                'Accept': 'application/json',
                // 'Authorization': "Bearer "+userToken
              }
            });
            let json = await result.json();
        
            setData(json.data);
            
            console.log(json.data.carts);

            navigation.replace('Keranjang', $data);
          }catch(e){
            console.log('error', e);
          };
    }


  return (
    <View>
      <Text>PraKeranjang</Text>
      <ActivityIndicator size={'large'}/>
    </View>
  )
}

export default PraKeranjang

const styles = StyleSheet.create({})