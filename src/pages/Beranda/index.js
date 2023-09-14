import { StyleSheet, Text, View, ScrollView, FlatList, SafeAreaView } from 'react-native'
import React, {useState} from 'react'
import { Hr, Poster, ProdukItem } from '../../components'
import { colors } from '../../utils'


const Beranda = () => {
  const [data, setData] = useState([
    {name: 'Vincent', id: 1},
    {name: 'Vicki', id: 2},
    {name: 'Angelita', id: 3},
    {name: 'Angelita', id: 3},
    {name: 'Angelita', id: 3},
  ]);

  return (
    <View style={styles.outer}>
      <View style={styles.container}>
        <ScrollView  showsVerticalScrollIndicator={false}>
          <View >
            <View style={styles.topContainer}>
              <Text style={styles.hello}>Hallo, User</Text>
              <Poster/>
              <Text style={styles.hello}>Produk Kami</Text>
              <Hr bot={18}/>
            </View>
            <SafeAreaView style={styles.botContainer}>
              <FlatList 
                numColumns={2}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (
                  <ProdukItem style={styles.flatitem}/>
                )} 
                data={data}
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
    fontSize: 16,
    marginBottom: 14
  },
  flatitem:{
  }
})