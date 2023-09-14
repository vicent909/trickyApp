import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ILHeader, ILLogoPanjang2, ILPoster } from '../../../assets'
import Hr from '../Hr'
import { colors } from '../../../utils'

const Poster = () => {
  return (
        <ImageBackground source={ILHeader} style={styles.container}>
            <View style={styles.background}>
                <ILLogoPanjang2 style={styles.logo}/>
                <View style={{flex: 1 ,justifyContent: 'center', marginTop: -19}}>
                    <Text style={styles.textTop}>Wear Different Everyday</Text>
                    <Hr color="white" hor={150} />
                    <Text style={styles.textBot}>With a Cool T-Shirt</Text>
                </View>
            </View>
        </ImageBackground>
    
  )
}

export default Poster

const styles = StyleSheet.create({
    background:{
        height: 165,
        borderRadius: 10,
    },
    logo: { 
        margin: 4
    },
    textTop:{
        textAlign: 'center',
        color: colors.white,
        fontFamily: 'Nunito-SemiBold',
        fontSize: 16,
        marginBottom: 12
    },
    textBot:{
        textAlign: 'center',
        color: colors.white,
        fontFamily: 'Nunito-SemiBold',
        fontSize: 16,
        marginTop: 12
    }
})