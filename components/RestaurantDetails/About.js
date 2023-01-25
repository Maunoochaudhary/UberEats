import { View, Text,Image,StatusBar } from "react-native";
import React from "react";

const About = ({route}) => {
    const {name,image,price,reviews,rating,categories} = route.params;
    const formattedCategories = categories.map((cat) => cat.title).join(" • ");

    const description = `${formattedCategories} ${
      price ? " • " + price : ""
    } • 🎫 • ${rating} ⭐ (${reviews}+)`;
  return (
    <View>
    <RestaurantImage image={image}/>
    <RestaurantName name={name}/>
    <RestaurantDescription description={description}/>
    </View>
  );
};

const RestaurantImage = (props)=>{
     return(
          <Image source={{uri:props.image}} style={{width:'100%',height:180}}/>
     )
};
const RestaurantName = (props)=>{
     return(
          <Text style={{color:'black',
          fontSize:25,
           fontWeight:'bold',marginTop:10,marginHorizontal:15}}>{props.name}</Text>
     )
}
const RestaurantDescription = (props)=>{
     return(
          <Text style={{color:'black',marginTop:10,marginHorizontal:15,fontWeight:'600',fontSize:15.5}}>{props.description}</Text>
     )
}
export default About;
