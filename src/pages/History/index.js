import { StyleSheet, Text, View, ScrollView, SafeAreaView, FlatList } from 'react-native'
import React, { useContext, useState } from 'react'
import { HistoryItem } from '../../components'
import { colors } from '../../utils'
import { AuthContext } from '../../context'
import { useFocusEffect } from '@react-navigation/native'

const History = () => {
  const {userInfo, setLoading} = useContext(AuthContext);
  const [dataHistory, setDataHistory] = useState([]);
  const [dataItem, setDataItem] = useState([]);

  const getHistory = async() => {
    try{
      setLoading(true);
      let result = await fetch('https://www.tricky.masuk.id/api/history/'+userInfo.id, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          // 'Authorization': "Bearer "+userToken
        }
      });
      let json = await result.json();

      setDataHistory(json.data);
      if(json.data.length > 0){
        // setDataItem(json.data[0].details);
        // console.log(json.data[0].details);
      }
      // console.log(dataItem);
      // console.log('data item:', json.data[0].details);
      setLoading(false);
    }catch(e){
      console.log('error', e)
    }
  }

  const transactionSuccess = async(id) => {
    try{
      setLoading(true);
      let result = await fetch('https://www.tricky.masuk.id/api/historySuccess/'+id, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          // 'Authorization': "Bearer "+userToken
        }
      }).then(() => getHistory());
      setLoading(false);
    }catch(e){
      console.log(e)
    }
  }

  useFocusEffect(
    React.useCallback(() => {
      console.log('onfocused')
      getHistory();
      return () => {
        console.log('not focused')
      }
    }, [])
  )

  return (
    <View style={styles.outer}>
      <View style={styles.container}>
          <Text style={styles.title}>Halaman Pembelian</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          { 
            dataItem.length > 0 ? 
              <SafeAreaView style={{paddingHorizontal: 10, paddingTop: -20}}>
                <FlatList 
                  data={dataHistory}
                  keyExtractor={(item) => item.id}
                  renderItem={({item}) => (
                    <HistoryItem
                        item={item.details}
                        idTransaksi={item.id}
                        time={item.created_at}
                        statusPackage={item.handle_status}
                        statusPayment={item.transaction_status}
                        onPress={() => transactionSuccess(item.id)}
                    />
                  )}
                  scrollEnabled={false}
                />
              </SafeAreaView>
              : 
              <View style={styles.containerDataKosong}> 
                <Text style={styles.dataKosong}>Ups, kamu belum ada riwayat belanja,</Text>
                <Text style={styles.dataKosong}>Yuk Belanja di "TRICKY"</Text>
              </View>
          }
        </ScrollView>
      </View>
    </View>
  )
}

export default History

const styles = StyleSheet.create({ 
  outer: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  container:{
    backgroundColor: colors.background,
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  title:{
    fontFamily: 'OverpassMono-SemiBold',
    color: colors.text.default,
    fontSize: 18,
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