import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { colors } from '../../../utils'
import ButtonSmall from '../ButtonSmall'


const RadioButton = ({type, onPress}) => {
    const sizes = ['M', 'L']
    const colors = ['Hitam', 'Putih']

    
    const [selectedSize, setSelectedSize] = useState(selectedSize);
    const [selectedColor, setSelectedColor] = useState(selectedColor);
    const [value, setValue] = useState(0);
    
    const size = selectedSize;

    if(type === 'size'){
        return (
          <View style={styles.outer}>
              {
                  sizes.map((e, index) => 
                      <TouchableOpacity size={size} style={styles.containerSize({index, selectedSize})} key={index} 
                          onPress={
                            () => {
                              setSelectedSize(index);
                              ;
                          }}>
                          <Text style={styles.title}>{e}</Text>
                      </TouchableOpacity>
                  )
              }
          </View>
        )
    }if(type === 'color'){
        return (
            <View style={styles.outer}>
                {
                    colors.map((e, index) => 
                        <TouchableOpacity style={styles.containerColor({index, selectedColor})} key={index} 
                            onPress={() => {
                                setSelectedColor(index);
                                setValue(index+1);
                                console.log('value warna :' + value);
                            }}>
                            <Text style={styles.title}>{e}</Text>
                        </TouchableOpacity>
                    )
                }
            </View>
          )
    }
}
export default RadioButton

const styles = StyleSheet.create({
    outer:{
        flexDirection: 'row',
    },
    containerSize:({index, selectedSize}) => ({
        backgroundColor: selectedSize === index ? colors.button.sizeColor.background : colors.button.secondary.background,
        padding: 4,
        width: 50,
        borderRadius: 20,
        marginRight: 4
    }),
    containerColor:({index, selectedColor}) => ({
        backgroundColor: selectedColor === index ? colors.button.sizeColor.background : colors.button.secondary.background,
        padding: 4,
        width: 80,
        borderRadius: 20,
        marginRight: 4
    }),
    title:{
        textAlign: 'center'
    }
})