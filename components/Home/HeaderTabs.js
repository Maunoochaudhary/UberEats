import { View, Text, TouchableOpacity,StyleSheet,} from "react-native";
import React, { useState } from "react";

const HeaderTabs = (props) => {
     const [activeTab,setActiveTab] = useState('Delivery')

  return (
    <View
     style={styles.container}>
    <HeaderButton text ='Delivery' activeTab ={activeTab} setActiveTab={setActiveTab}  />
    <HeaderButton text ='Pickup'  activeTab={activeTab} setActiveTab={setActiveTab}  />
    </View>
  );
};

export default HeaderTabs;

const HeaderButton = (props) =>{

     return (
          <TouchableOpacity style={[styles.touch,{backgroundColor:props.activeTab === props.text ? 'black':'white'}]} onPress={()=>{
               props.setActiveTab(props.text);
               
                }}>
               <Text style={[styles.text,{color:props.activeTab === props.text ? 'white':'black'}]}>{props.text}</Text>
               
          </TouchableOpacity>
     )
}

const styles = StyleSheet.create({
     container:{
          flexDirection:'row',
          justifyContent:'center',
          

     },
     touch:{
          borderRadius:30,
          
     },

     text:{
         fontSize:15,
         fontWeight:'900',
         paddingHorizontal:16,
         paddingVertical:6,
          // textAlign:'center',
          // textAlignVertical:'center'
          
          
          
     },
    
})


