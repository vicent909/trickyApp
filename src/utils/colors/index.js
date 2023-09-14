const mainColor = {
    chocolate1 : '#DAC0A3',
    chocolate2: '#EADBC8',
    chocolate3: '#8E622A',
    dark1 : '#102C57',
    grey1 : '#B3B3B3',
    grey2 : '#E9E9E9',
    grey3: '#495A75',
    grey4: '#F5F5F5'
    
}

export const colors = {
    primary: mainColor.chocolate1,
    secondary : mainColor.chocolate2,
    white: 'white',
    shadow: 'black',
    text: {
        default: mainColor.dark1,
        secondary: mainColor.grey1,
        inactive: mainColor.grey3,
        active: mainColor.chocolate3
    },
    button: { 
        primary: {
            background: mainColor.chocolate1,
            text: mainColor.dark1
        },
        secondary: {
            background: 'white',
            text: mainColor.dark1
        }
    },
    border : mainColor.grey2,
    background: mainColor.grey4,
 }