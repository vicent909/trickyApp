import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { HistoryItem } from '../../components'
import { colors } from '../../utils'

const History = () => {
  return (
    <View style={styles.outer}>
      <View style={styles.container}>
          <Text style={styles.title}>Halaman Pembelian</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{padding: 20, paddingTop: -20}}>
            <HistoryItem/>
            <HistoryItem/>
            <HistoryItem/>
          </View>
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
  }
})