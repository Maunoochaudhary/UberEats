import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View, StyleSheet,Text,Image, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
export const localRestaurants = [
   
       {
          name:'Beachside Bar',
          image_url:"https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
          categories:['Cafe','Bar'],
          price:'$$',
          reviews:1244,
          rating:'4.5'
        },
        {
          name:'Benihana',
          image_url:"https://images.unsplash.com/photo-1587574293340-e0011c4e8ecf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
          categories:['Indiam','Bar'],
          price:'$$',
          reviews:700,
          rating:'4.9'
        },
        {
          name:"India's Grill",
          image_url:"https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
          categories:['Cafe','Bar'],
          price:'$$',
          reviews:1244,
          rating:'4.5'
        },
        {
          name:'The Taj',
          image_url:"https://images.unsplash.com/photo-1544148103-0773bf10d330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
          categories:['Hotel','Bar'],
          price:'$$',
          reviews:1540,
          rating:'5.0'
        },
 ]
const RestaurantItem = (props) => {
   const navigation=  useNavigation();

     return (
         
               props.restaurantData.map((restaurants,index)=>{
               
                    return (
                       <TouchableOpacity onPress={()=>{navigation.navigate('RestaurantDetails',{
                         name:restaurants.name,
                         image:restaurants.image_url,
                         price:restaurants.price,
                         reviews:restaurants.review_count,
                         rating:restaurants.rating,
                         categories:restaurants.categories
                       })}} key={index} style={{marginTop:10,backgroundColor:'white',padding:15}}>
                         <RestaurantImage image={restaurants.image_url} />
                         <RestaurantInfo name={restaurants.name} rating = {restaurants.rating}/>
                       </TouchableOpacity>
                    )
               })
             
     );
     return<Text>No result</Text>

}


const RestaurantImage = (props)=>{
     return (
          <>
            <Image source={{uri:props.image}} style={{height:180,width:'100%'}}/> 
            <TouchableOpacity style={{position:'absolute' ,right:20,top:20}}>
            <MaterialCommunityIcons name='heart-outline' size={25} color='#fff'/>  
            </TouchableOpacity>
          </>
     )
     }

     const RestaurantInfo = (props)=>{
          return(
               <View style={{flexDirection:'row',justifyContent:'space-between' , alignItems:'center', marginTop:10}}>
                    <View>
                         <Text style={{fontSize:15,fontWeight:'bold',color:'black'}}>{props.name}</Text>
                         <Text style={{fontSize:13,color:'gray',color:'black'}}>30-45 min</Text>
                    </View>
                    <View  style={{backgroundColor:'#eee' ,height:30,width:30,alignItems:'center', borderRadius:15,justifyContent:'center'}}>
                    <Text style={{color:'black'}}>{props.rating}</Text>

                    </View>
               </View>
          )
     }


export default RestaurantItem;

const styles = StyleSheet.create({
     container:{
          margin:16,
          borderRadius:8,
          overflow:'hidden',
          backgroundColor:'white',
          elevation:4
     },
     image:{
          height:200,
          width:'100%'
     }
})