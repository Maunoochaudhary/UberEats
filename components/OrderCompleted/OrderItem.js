import { View, Text,StyleSheet,Image, ScrollView,FlatList } from "react-native";
import { Divider } from "react-native-elements";
const foods = [
     
     {
       title: "Tandoori Chicken",
       description:
         "Amazing Indian dish with tenderloin chicken off the sizzles 🔥",
       price: "$19.20",
       image: "https://i.ytimg.com/vi/BKxGodX9NGg/maxresdefault.jpg",
     },
     {
       title: "Chilaquiles",
       description:
         "Chilaquiles with cheese and sauce. A delicious mexican dish 🇲🇽",
       price: "$14.50",
       image:
         "https://i2.wp.com/chilipeppermadness.com/wp-content/uploads/2020/11/Chilaquales-Recipe-Chilaquiles-Rojos-1.jpg",
     },
     {
       title: "Chilaquiles",
       description:
         "Chilaquiles with cheese and sauce. A delicious mexican dish 🇲🇽",
       price: "$14.50",
       image:
         "https://i2.wp.com/chilipeppermadness.com/wp-content/uploads/2020/11/Chilaquales-Recipe-Chilaquiles-Rojos-1.jpg",
     },
     {
       title: "Chilaquiles",
       description:
         "Chilaquiles with cheese and sauce. A delicious mexican dish 🇲🇽",
       price: "$14.50",
       image:
         "https://i2.wp.com/chilipeppermadness.com/wp-content/uploads/2020/11/Chilaquales-Recipe-Chilaquiles-Rojos-1.jpg",
     },
     // {
     //   title: "Chilaquiles",
     //   description:
     //     "Chilaquiles with cheese and sauce. A delicious mexican dish 🇲🇽",
     //   price: "$14.50",
     //   image:
     //     "https://i2.wp.com/chilipeppermadness.com/wp-content/uploads/2020/11/Chilaquales-Recipe-Chilaquiles-Rojos-1.jpg",
     // },
         

     
];

          

const OrderItem = ({order}) => {
   return (
     <View>
               {order.map((item,index)=>{
                    return(
                         <View key={index}>
               <View style={styles.menuItemStyle}>
               
                 <View style={{width:240,justifyContent:'space-evenly' }}> 
          <Text style={styles.titleStyle}>{item.title}</Text>
          <Text style={styles.descriptionStyle}>{item.description}</Text>
          <Text style={styles.priceStyle}>{item.price}</Text>
               </View>
               <Image source={{uri:item.image}} style={{height:100,width:100,borderRadius:8}}/> 
                  
      </View>
      <Divider width={0.5} />
      </View>
          ) } ) }
          </View>

          )
          } 
   

export default OrderItem;

const styles = StyleSheet.create({
     menuItemStyle:{
          flexDirection:'row',
          justifyContent:'space-between',
          margin:20,
          // backgroundColor:'red'
     },
     titleStyle:{
          fontSize:19,
          fontWeight:'600',
          color:'black'
     },
     descriptionStyle:{
          color:'black'
     },
     priceStyle:{
          color:'black'
     }} )
