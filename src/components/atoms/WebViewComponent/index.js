import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { WebView } from 'react-native-webview';

const WebViewComponent = ({uriWeb}) => {
  return (
    <View>
      <WebView 
        source={{ uri: uriWeb }}
        style={{flex: 1, backgroundColor: 'red'}}
      />
      <Text>WebViewComponent</Text>
    </View>
  )
}

export default WebViewComponent

const styles = StyleSheet.create({})