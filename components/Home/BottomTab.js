import React from 'react';
import { useState } from 'react';
import {View, StyleSheet, Text,TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
const BottomTab = () => {
     const [activeTab,setActiveTab] = useState('Home')
  return (
    <View style={styles.container}>
      <Icons icon='home' text='Home' activeTab ={activeTab} setActiveTab={setActiveTab} />
      <Icons icon='search' text='Browse' activeTab ={activeTab} setActiveTab={setActiveTab}/>
      <Icons icon='shopping-bag' text='Grocery' activeTab ={activeTab} setActiveTab={setActiveTab}/>
      <Icons icon='receipt' text='Orders' activeTab ={activeTab} setActiveTab={setActiveTab}/>
      <Icons icon='user' text='Account' activeTab ={activeTab} setActiveTab={setActiveTab}/>
      
       
    </View>
  );
};

const Icons = (props) =>{
     return(
     <TouchableOpacity onPress={()=>{props.setActiveTab(props.text)}}>
          <FontAwesome name={props.icon} size={25} style={{alignSelf:'center',marginBottom:3,color:props.activeTab === props.text ?'black':'gray'}}/>
          <Text style={{color:props.activeTab === props.text ?'black':'gray'}}>{props.text}</Text>
     </TouchableOpacity>)
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
    marginHorizontal: 20,
  },
});


export default BottomTab;
