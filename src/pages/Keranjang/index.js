import { StyleSheet, Text, View, ScrollView, SafeAreaView, FlatList } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { CartItem, CartPayment } from '../../components'
import { colors } from '../../utils'
import { AuthContext } from '../../context'
import { useFocusEffect } from '@react-navigation/native'
import { showMessage, hideMessage } from "react-native-flash-message";

const Keranjang = ({navigation}) => {

  const {userInfo, setLoading} = useContext(AuthContext);

  const [cart, setCart] = useState([]);

  const [price, setPrice] = useState(0);

  const [uriWeb, setUriWeb] = useState("");

  const getCart = async() => {
    try{
      setLoading(true)
      let result = await fetch('https://www.tricky.masuk.id/api/cart/'+userInfo.id, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          // 'Authorization': "Bearer "+userToken
        }
      });
      let json = await result.json();
  
      setCart(json.data.carts);
      setPrice(json.data.priceTot);
      setLoading(false)
    }catch(e){
      console.log('error', e);
    };
  }

  const deleteCart = async(id) => {
    setLoading(true);
    let result = await fetch('https://www.tricky.masuk.id/api/deleteCart/'+id, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        // 'Authorization': "Bearer "+userToken
      }
    }).then(() => {
      getCart();
      showMessage({
        message: "Berhasil Hapus Barang",
        type: 'success',
        icon: 'success'
      })
    });
    setLoading(false);
  }

  // useEffect(() => {
  //   getCart();
  // }, [])

  const checkout = async() => {
    try{
      setLoading(true);
      let result = await fetch('https://www.tricky.masuk.id/api/transactionProcess/'+userInfo.id, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          // 'Authorization': "Bearer "+userToken
        }
      })

      let json = await result.json();
  
      setUriWeb(json.data);
      // console.log(json.data);
  
      setLoading(false);
      navigation.navigate('TransactionProcess', {uri: json.data});
    }catch(e){
      console.log('error: ', e)
      setLoading(false);
    }
  }
  
  useFocusEffect(
    React.useCallback(() => {
      console.log('onfocused')
      // console.log(cart);
      getCart();
      return () => {
        console.log('not focused')
      }
    }, [])
  )

  return (
    <View style={styles.outer}>
      <View style={styles.container}>
          <Text style={styles.title}>Keranjang</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          {
            cart.length > 0 ? 
            <SafeAreaView style={{paddingHorizontal: 10, paddingTop: -20}}>
                <FlatList 
                  data={cart}
                  keyExtractor={(item) => item.id}
                  renderItem={({item}) => (
                    <CartItem
                      title={item.product.title}
                      color={item.color.color_name}
                      size={item.size.size_name}
                      price={item.product.price}
                      quantity={item.quantity}
                      dataImage={'https://www.tricky.masuk.id/storage/'+item.galleries[0].image}
                      onPress={() => deleteCart(item.id)}
                    />
                  )}
                  scrollEnabled={false}
                />
              </SafeAreaView>
              :
              <View style={styles.containerDataKosong}> 
                <Text style={styles.dataKosong}>Keranjang Kosong.</Text>
              </View>
          }
              {/* {
                price.map((e,index) => {
                  console.log(e,index);
                  <Text key={e}>{index}</Text>
                })
              } */}
        </ScrollView>

        <View style={{padding: 20}}>
          <CartPayment
            itemPrice={price}
            shipping={cart.length > 0 ? 20000 : 0}
            onPress={() => checkout()}
          />
        </View>
      </View>
    </View>
  )
}

export default Keranjang

const styles = StyleSheet.create({
  outer:{
    flex: 1,
    backgroundColor: colors.secondary
  },  
  container:{
    backgroundColor: colors.background,
    flex:1,
    justifyContent: 'space-between',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  title:{
    fontFamily: 'OverpassMono-SemiBold',
    fontSize: 18,
    color: colors.text.default,
    marginBottom: 14,
    padding: 20,
    paddingBottom: -20
  },
  containerDataKosong:{
    alignItems: 'center',
    marginTop: 20
  },
  dataKosong:{
    fontFamily: 'Nunito-SemiBold',
    color: colors.smallTitle,
    fontSize: 16
  }
})