import { View, Text,SafeAreaView, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import firestore from '@react-native-firebase/firestore';
import LottieView from 'lottie-react-native'
import OrderItem from "../components/OrderCompleted/OrderItem";
const OrderCompleted = () => {
     const [order,setOrder] = useState([]);
     const {items, restaurantName} = useSelector(state => state.selectedItems);
  const total = items
    .map(item => Number(item.price.replace('$', '')))
    .reduce((prev, curr) => prev + curr, 0);

  const totalUSD = total.toLocaleString('en', {
    style: 'currency',
    currency: 'USD',
  });
  useEffect(()=>{
     const subscriber = firestore()
     .collection('orders')
     .orderBy('createdAt','desc')
     .limit(1)
     .onSnapshot(documentSnapshot => {
          // console.log(documentSnapshot.size);
          // console.log(documentSnapshot.docs.length);
        documentSnapshot.docs.map((doc)=>{
          console.log(doc.id);
          // console.log(doc.data().items);
          setOrder(doc.data().items)
       });
     });

//     firestore()
//     .collection('orders')
//     .limit(1)
//     .get()
//     .then(querySnapshot => {
//       console.log('Total users: ', querySnapshot);
  
//       querySnapshot.forEach(documentSnapshot => {
//         console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
//       });
//     });
 
    return () => subscriber();
  },[])
  return (
    <View style={{flex:1,marginTop:35,backgroundColor:'white'}}>
    <View style={{alignItems:'center',height:'100%',margin:15}}>
    <LottieView style={{height:100,alignSelf:'center',marginBottom:30,marginTop:10}} source={require('../assets/animations/check-mark.json')} autoPlay speed={0.5} loop={false}/>

    
      <Text style={{color:'black',fontSize:20,fontWeight:'bold'}}>Your Order at {restaurantName} has been placed for {totalUSD}</Text>
      <ScrollView showsVerticalScrollIndicator={false}>

      <OrderItem order={order}/>
      <LottieView style={{height:200,alignSelf:'center'}} source={require('../assets/animations/cooking.json')} autoPlay speed={0.5} />
      </ScrollView>
      </View>
    </View>
  );
};

export default OrderCompleted;
