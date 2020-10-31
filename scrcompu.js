import React  from 'react';
import {Text , StyleSheet,View} from 'react-native'
 
const componentscreens = () => {
    
    const greetName = <Text style = {{fontSize:20}}>my name is ankit!!!</Text>;

    return(
        <View>
        <Text style={styles.textStyle}>Get started with react native!!!!</Text>
        {greetName}
        </View>
        
    )
}

const styles= StyleSheet.create({
    textStyle:{
        fontSize: 45
    }
})

export default componentscreens;
