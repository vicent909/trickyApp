import { ActivityIndicator, Dimensions, Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { ILMarun, IconBack } from '../../assets';
import { colors } from '../../utils';
import { DetailProdukItem, Hr, RadioButton } from '../../components';
import { AuthContext } from '../../context';
import { showMessage, hideMessage } from "react-native-flash-message";



const sizes = ['M','L'];
const colorItems = ['Hitam','putih'];

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const ProdukDetail = ({navigation, route}) => {
    // const [data, setData] = useState(0);
    const {userInfo, userToken} = useContext(AuthContext);
    const [size, setSize] = useState(0)
    const [colorItem, setColorItem] = useState(0)
    const [jumlah, setJumlah] = useState(1)
    const trueSize = size+1;
    const trueColor = colorItem+1;
    
    // useEffect(() => {
    //     const getData = async() => {
    //         try{
    //           let response = await fetch('https://www.tricky.masuk.id/api/products/'+slug);
    //           response.json().then(json => {setData(json.data)});

    //         //   console.log(data)
    //         }catch(error){
    //           console.error(error)
    //         }
    //     };
    //     getData()
    // }, []);

    

    const {slug, title, price, about, galleries, id} = route.params;
    const img = galleries.map(function(a){return 'https://www.tricky.masuk.id/storage/'+a.image.toString()});
    const images = img;
    const [imgActive, setimgActive] = useState(0);


    onchange = (nativeEvent) => {
        if(nativeEvent){
            const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width)
            if(slide != imgActive){
                setimgActive(slide);
            }
        }
    }
    
    const storeCart = async() => {
        let result = await fetch('https://www.tricky.masuk.id/api/storeCart', {
            method: 'POST',
            headers:{
                "Accept":"application/json",
                "Content-Type": "application/json",
                "Authorization": "Bearer "+userToken
            },
            body: JSON.stringify({
                "user_id" : userInfo.id,
                "products_id": id,
                "color_id": trueColor,
                "size_id": trueSize,
                "quantity": jumlah,
                "total_price": jumlah*price
            })
        })

        if(result.status === 200){
            console.log('berhasil');
            showMessage({
                message: "Berhasil Tambah ke Keranjang",
                type: "success",
                icon: 'success'
              });
            navigation.navigate('Keranjang')
          }else{
            result = result.json().then(res => console.warn(res.message));
          }
    }
    // if(data === 0){
    //     return(
    //         <Text style={styles.titleContainer}>Loading</Text>
    //     )
    // }else{
  return (
    <View style={styles.container}>
        <View style={styles.titleContainer}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <IconBack/>
            </TouchableOpacity>
            <Text style={styles.title}>Detail Produk</Text>
        </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <SafeAreaView>
            <View style={styles.wrap}>
                <ScrollView
                    onScroll={({nativeEvent}) => onchange(nativeEvent)}
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    horizontal
                    style={styles.wrap} >
                    {
                        images.map((e, index) => 
                            <Image
                                key={e}
                                resizeMode='stretch'
                                style={styles.wrap}
                                source={{uri: e}}
                            />
                        )
                    }
                </ScrollView>
                <View style={styles.wrapDot}>
                    {
                        images.map((e, index) => 
                            <Text
                                key={e}
                                style={ imgActive == index ? styles.dotActive : styles.dot}
                            >
                                ●
                            </Text>
                        )
                    }
                </View>
            </View>
        </SafeAreaView>
        <View style={styles.description}>
            <Text style={styles.produkTitle}>{title}</Text>
            {/* <Text style={styles.produkTitle}>{data.product.title}</Text> */}
            <Hr top={8} bot={8}/>
            <Text style={styles.price}>Rp. {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}</Text>
            <View style={styles.size}>
                <Text style={styles.descTitle}>Ukuran</Text>
                <View style={{flex:1, flexDirection: 'row'}}>
                    {
                        sizes.map((e, index) => 
                            <DetailProdukItem key={e} sizeName={e} width={60} a={size === index ? true : false}
                                onPress={() => {
                                    setSize(index);
                                    console.log('ukuran', size);
                                }}/>
                        )
                    }
                </View>
            </View>
            <View style={styles.size}>
                <Text style={styles.descTitle}>Warna</Text>
                <View style={{flex:1, flexDirection: 'row'}}>
                    {
                        colorItems.map((e, index) => 
                            <DetailProdukItem key={e} sizeName={e} width={90} a={colorItem === index ? true : false}
                                onPress={() => {
                                    setColorItem(index);
                                    console.log('warna', colorItem);
                                }}/>
                        )
                    }
                </View>
            </View>
            <View style={styles.size}>
                <Text style={styles.descTitle}>Jumlah</Text>
                <View style={{flex:1}}>
                    <DetailProdukItem type='jumlah' jumlah={jumlah} onPressMin={() => setJumlah(jumlah-1)} onPressPlus={() => setJumlah(jumlah+1)}/>
                </View>
            </View>
            <Hr top={8} bot={8}/>
            <Text style={styles.deskripsiProduk}>
                {about}
            </Text>
        </View>
      </ScrollView>
        <TouchableOpacity style={styles.button} onPress={() => storeCart()} >
            <Text style={styles.buttonTitle}>Tambah ke Keranjang</Text>
        </TouchableOpacity>
    </View>
  )
    // }
}

export default ProdukDetail

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    wrap:{
        width: WIDTH,
        height: WIDTH
    },
    titleContainer:{
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    title:{
        fontFamily: 'OverpassMono-SemiBold',
        fontSize: 18,
        color: colors.text.default,
        marginLeft: 14
    },
     wrapDot: {
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        alignSelf: 'center'
    },
    dotActive: {
        color: 'black',
        margin: 3
    }, 
    dot: {
        color: 'white',
        margin: 3
    }, 
    description: {
        paddingHorizontal: 20,
        paddingTop: 12
    },
    size: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 4,
        justifyContent: 'space-between'
    },
    descTitle:{
        width: 80,
        fontFamily: 'Nunito-Regular',
        color: colors.text.default,
        fontSize: 16
    },
    produkTitle:{
        fontFamily: 'Nunito-SemiBold',
        color: colors.text.default,
        fontSize: 18
    },
    price:{
        fontFamily: 'Nunito-Medium',
        color: colors.text.default,
        fontSize: 16,
        marginBottom: 8
    },
    deskripsiProduk:{
        fontFamily: 'Nunito-Regular',
        color: colors.text.default,
        fontSize: 14,
    },
    button:{
        backgroundColor: colors.button.primary.background,

    },
    buttonTitle:{
        fontFamily: 'Nunito-Bold',
        color: colors.text.default,
        fontSize: 16,
        textAlign: 'center',
        justifyContent: 'center',
        paddingVertical: 12
    }
})