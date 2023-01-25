import React, { useState } from 'react';
import {View, StyleSheet,TextInput,Text,TouchableOpacity} from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
const SearchBar = ({cityHandler}) => {
     const [restaurant,setRastaurant] = useState('');
     const searchRestaurantHandler = ()=>{
          cityHandler(restaurant);
          
     }
     const textInputHandler = (restaurant)=>{
          setRastaurant(restaurant)
     }
     return (
          <View style={styles.container}>
                    <Ionicons name='location-sharp' size={24} color='black'style={{marginLeft:10}}/>
                    <TextInput placeholder='Search' onChangeText={textInputHandler} style={{fontWeight:'700',width:'50%'}}/>
                    <TouchableOpacity activeOpacity={1} onPress={searchRestaurantHandler} style={{backgroundColor:'white',padding:9,borderRadius:30,alignItems:'center',marginLeft:70,width:80,justifyContent:'center',flexDirection:'row'}}>
                    <AntDesign name='clockcircle' size={11}  style={{marginRight:6,color:'black'}}/>
                    <Text style={{color:'black', fontWeight:'700'}}>Search</Text>
               </TouchableOpacity>
          {/* <GooglePlacesAutocomplete placeholder='Search' styles={{textInput:{
           backgroundColor:'#eee',
           borderRadius:20,
           fontWeight:'700',
           marginTop:7
          },
          textInputContainer:{
               backgroundColor:'#eee',
               borderRadius:50,
               flexDirection:'row',
               alignItems:'center',
               marginRight:10
          }} } renderLeftButton ={()=>(
               <View style={{marginLeft:10}}>
                    <Ionicons name='location-sharp' size={24} color='black'/>
               </View>

          )} renderRightButton={()=>(
               <View style={{flexDirection:'row',marginRight:8,backgroundColor:'white',padding:9,borderRadius:30,alignItems:'center'}}>
                    <AntDesign name='clockcircle' size={11}  style={{marginRight:6,color:'black'}}/>
                    <Text style={{color:'black', fontWeight:'700'}}>Search</Text>
               </View>
          )}/> */}
          </View>
     );
}

export default SearchBar;

const styles = StyleSheet.create({
     container:{
          marginTop:15,
          flexDirection:'row',
          backgroundColor:'#eee',
          height:60,
          maxWidth:'100%',
          borderRadius:50,
          alignItems:'center',
          // justifyContent:'space-around'
     }
})
