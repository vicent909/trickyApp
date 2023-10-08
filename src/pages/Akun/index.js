import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { colors } from '../../utils'
import { AccountItem } from '../../components'
import { IconArrow, IconWa } from '../../assets'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { AuthContext } from '../../context'
import AsyncStorage from '@react-native-async-storage/async-storage/';

const Akun = ({navigation}) => {
  const {loading, setLoading, userToken, setUserToken, setUserInfo} = useContext(AuthContext);

  const logout = async() => {
    setLoading(true);

      let result = await fetch('http://tricky.masuk.id/api/logoutApi',{
      method:"GET",
      headers:{
        "Accept":"application/json",
        "Authorization": "Bearer "+userToken
      }
    })

    if(result.status === 200){
      console.log('berhasil delete token')
      setUserToken(null);
      // setUserInfo(null);
      AsyncStorage.removeItem('userToken');
      AsyncStorage.removeItem('userInfo');
      setLoading(false);
      navigation.replace('GetStarted')
    }else{
      console.log('gagal delete token');
      setLoading(false)
    }
    // AsyncStorage.removeItem('userToken');
    // AsyncStorage.removeItem('userInfo');
  }

  return (
    <View style={styles.outer}>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Akun</Text>
          <AccountItem/>
          <Text style={styles.helpText}>Butuh Bantuan? hubungi kami</Text>
          <TouchableOpacity style={styles.helpContainer}>
            <IconWa/>
            <Text style={styles.contact}>Contact Us</Text>
            <IconArrow/>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.helpContainer} onPress={() => {logout()}}>
            <Text style={styles.logout}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Akun

const styles = StyleSheet.create({
  outer:{
    backgroundColor: colors.secondary,
    flex: 1
  },
  container:{
    backgroundColor: colors.background,
    flex: 1,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    padding: 20,
    justifyContent: 'space-between'
  },
  title:{
    fontFamily: 'OverpassMono-SemiBold',
    fontSize: 18,
    color: colors.text.default,
    marginBottom: 14
  },
  helpText:{
    color: colors.text.secondary,
    fontFamily: 'Nunito-Regular',
    fontSize: 14,
    marginTop: 12
  },
  helpContainer:{
    backgroundColor: colors.white,
    padding: 8,
    borderRadius:10,
    elevation: 5,
    shadowColor: colors.shadow,
    marginTop: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  contact:{
    flex:1, 
    paddingLeft: 6,
    fontFamily: 'Nunito-Regular',
    fontSize: 14,
    color: colors.text.secondary
  },
  logout:{
    paddingLeft: 6,
    fontFamily: 'Nunito-Regular',
    fontSize: 14,
    color: colors.text.secondary,
    height: 24
  }
})