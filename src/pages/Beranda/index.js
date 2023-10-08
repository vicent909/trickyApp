import { StyleSheet, Text, View, ScrollView, FlatList, SafeAreaView, Image } from 'react-native'
import React, {useContext, useEffect, useState} from 'react'
import { Hr, Poster, ProdukItem } from '../../components'
import { colors } from '../../utils'
import { AuthContext } from '../../context'


const Beranda = ({navigation}) => {
  
  const {userToken, userInfo} = useContext(AuthContext);
  const [data, setData] = useState([]);

  const getData = async() => {
    try{
      let response = await fetch('https://www.tricky.masuk.id/api/products', {
        method: 'GET',
        headers:{
          'Accept': 'application/json',
          'Authorization': "Bearer "+userToken
        }
      });
      let json = await response.json();

      setData(json.data);
      
    }catch(error){
      console.error(error)
    }
  }
  useEffect(() => {
    getData()
  }, [])

  
  return (
    <View style={styles.outer}>
      <View style={styles.container}>
        <ScrollView  showsVerticalScrollIndicator={false}>
          <View >
            <View style={styles.topContainer}>
              <Text style={styles.hello}>Hallo, {userInfo.name}</Text>
              <Poster/>
              <Text style={styles.hello}>Produk Kami</Text>
              <Hr bot={18}/>
            </View>
            <SafeAreaView style={styles.botContainer}>
              <FlatList 
                data={data}
                numColumns={2}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (
                  <ProdukItem 
                    style={styles.flatitem}  
                    title={item.title}
                    dataImage={'https://www.tricky.masuk.id/storage/'+item.galleries[0].image}
                    price={item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
                    onPress={() => navigation.navigate('ProdukDetail', item)}/>
                    
                )}
                scrollEnabled={false}
              />
            </SafeAreaView>
          </View>
        </ScrollView>
      </View>

    </View>
  )
}

export default Beranda

const styles = StyleSheet.create({
  outer:{
    flex:1,
    backgroundColor: colors.secondary
  },
  container:{
    flex:1,
    backgroundColor: colors.background,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  topContainer:{
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    flex: 1,
  },
  botContainer:{
    paddingHorizontal: 10,
    flex: 1
  },
  hello:{
    fontFamily: 'OverpassMono-SemiBold',
    color: colors.text.default,
    fontSize: 18,
    marginBottom: 14
  },
  flatitem:{
  }
})