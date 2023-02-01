import React from 'react';
import { useState } from 'react';
import { TextInput } from 'react-native';
import {View, StyleSheet,Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const Input = ({iconName,password,error,...props}) => {
     const[hidePassword,setHidePassword] = useState(true);
     const[isFocused,setIsFocused] = useState(false);
    
     console.log(props);
     return (
          <>
          <View style={[styles.textInput,{borderColor:error?'red':'black'}]}>
          <View style={{width:'10%',paddingLeft:10}} >
               <Icon name={iconName} size={22} color={isFocused?'red':'black'}/>

          </View>
          <View style={{width:'80%'}}>
               <TextInput {...props} onFocus={()=>{props.type==='email'?!error:error}} onBlur={()=>{}} secureTextEntry={password?hidePassword:false} />

          </View>
          <View style={{width:'10%',alignItems:'flex-end',paddingRight:10}}>
             {password &&  <Icon name={hidePassword ? 'eye-outline' :'eye-off-outline'} size={22} color='black' onPress={()=>{setHidePassword(!hidePassword)}}/> 
             }
          </View >
          
          </View>
          
          <View style={{width:'90%',alignSelf:'center',height:20,justifyContent:'center'}}>
          {error && <Text style={{color:'red'}}>{error}</Text>}
           
          </View>
          </>        
     );
}

const styles = StyleSheet.create({
     textInput:{
          marginTop:30,
          alignSelf:'center',
          borderRadius:10,
          borderWidth:1,
          width:'90%',
          // paddingHorizontal:10,
          height:50,
          flexDirection:'row',
          alignItems:'center',
          // backgroundColor:'black'
          // alignSelf:'flex-end'
          // justifyContent:'space-evenly'
     }
})

export default Input;
