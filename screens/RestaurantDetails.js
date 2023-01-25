import { View, Text } from "react-native";
import React from "react";
import About from "../components/RestaurantDetails/About";
import { Divider } from "react-native-elements";
import MenuItem from "../components/RestaurantDetails/MenuItem";
import ViewCart from "../components/RestaurantDetails/ViewCart";
import { useSelector } from "react-redux";
const RestaurantDetails = ({route}) => {
  const cartItem = useSelector((state)=>state.selectedItems.items);
     
  return (
    <View style={{flex:1}}>
    <About route ={route}/>
    <Divider width={1.8} style={{marginVertical:20}}/>
    <MenuItem  restaurantName={route.params.name}/>
      
    {cartItem.length > 0 && <ViewCart restaurantName={route.params.name}/>}
    </View>
  );
};

export default RestaurantDetails;
