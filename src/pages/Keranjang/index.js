import { StyleSheet, Text, View, ScrollView, SafeAreaView, FlatList } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { CartItem, CartPayment } from '../../components'
import { colors } from '../../utils'
import { AuthContext } from '../../context'
import { useFocusEffect } from '@react-navigation/native'

const Keranjang = () => {

  const {userInfo, setLoading} = useContext(AuthContext);

  const [cart, setCart] = useState([]);

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
    }).then(() => getCart());
    setLoading(false);
  }

  // useEffect(() => {
  //   getCart();
  // }, [])
  
  useFocusEffect(
    React.useCallback(() => {
      console.log('onfocused')
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
        </ScrollView>
        <View style={{padding: 20}}>
          <CartPayment
            // itemPrice={20000}
            // shipping={20000}
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
  }
})