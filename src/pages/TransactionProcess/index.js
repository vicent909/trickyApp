import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Button, WebViewComponent } from '../../components'
import { WebView } from 'react-native-webview';
import { IconArrow } from '../../assets';
import { colors } from '../../utils';


const TransactionProcess = ({route, navigation}) => {
  const {uri} = route.params;
  // console.log('uriweb ',uri);

  return (
    <View style={{flex: 1}}>
      <WebView
        source={{uri: uri }}
      />
      <TouchableOpacity style={styles.container} onPress={() => navigation.replace('MainApp')}>
        <View></View>
        <Text style={styles.text}>Back to Home</Text>
        <IconArrow/>
      </TouchableOpacity>
    </View>
  )
}

export default TransactionProcess

const styles = StyleSheet.create({
  container:{
    padding: 12,
    backgroundColor: colors.button.primary.background,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  text:{
    color: colors.button.primary.text,
    fontSize: 16,
    fontFamily: 'Nunito-Bold'
  }
})