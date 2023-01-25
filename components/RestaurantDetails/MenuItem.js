import { View, Text,StyleSheet,Image, ScrollView,FlatList } from "react-native";
import { Divider } from "react-native-elements";
import BouncyCheckBox from 'react-native-bouncy-checkbox';
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/index";
import { useSelector } from "react-redux";
const foods = [
     {
       title: "Lasagna",
       description: "With butter lettuce, tomato and sauce bechamel",
       price: "$13.50",
       image:
         "https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg",
     },
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
       title: "Chicken Caesar Salad",
       description:
         "One can never go wrong with a chicken caesar salad. Healthy option with greens and proteins!",
       price: "$21.50",
       image:
         "https://images.themodernproper.com/billowy-turkey/production/posts/2019/Easy-italian-salad-recipe-10.jpg?w=1200&h=1200&q=82&fm=jpg&fit=crop&fp-x=0.5&fp-y=0.5&dm=1614096227&s=c0f63a30cef3334d97f9ecad14be51da",
     },
     {
       title: "Full Veg Thali",
       description: " and sauce bechamel and Rice",
       price: "$17.50",
       image:
         "https://thestayathomechef.com/wp-content/uploads/2017/08/Most-Amazing-Lasagna-2-e1574792735811.jpg",
     }
];

          

const MenuItem = ({restaurantName}) => {
  const checkItem= useSelector((state)=>state.selectedItems.items)
  const dispatch = useDispatch();
  const selectItem = (item,checkboxValue)=>{
    dispatch(cartActions.addtoCart({...item,restaurantName:restaurantName,checkboxValue:checkboxValue}))
  }
  const isFoodInCart = (checkItem,food)=>{
    return (
      Boolean(checkItem.find((item)=>item.title === food.title))
    )
  }
  return (
     <FlatList data={foods} showsVerticalScrollIndicator={false} renderItem={({item,index})=>{
          return (
               <View key={index}>
               <View style={styles.menuItemStyle}>
                 <BouncyCheckBox 
                 onPress={(checkboxValue)=>selectItem(item,checkboxValue)} 
                 isChecked={isFoodInCart(checkItem,item)}
                 iconStyle={{ borderRadius:0, }}
                 innerIconStyle={{borderRadius:0,borderColor:'lightgray'}} fillColor='green'/>
                 <View style={{width:240,justifyContent:'space-evenly' }}> 
          <Text style={styles.titleStyle}>{item.title}</Text>
          <Text style={styles.descriptionStyle}>{item.description}</Text>
          <Text style={styles.priceStyle}>{item.price}</Text>
               </View>
               <Image source={{uri:item.image}} style={{height:100,width:100,borderRadius:8}}/> 
                  
      </View>
      <Divider width={0.5} />
      </View>
          )
     }}/>
     /* <ScrollView>
     
      {foods.map((food,index)=>(
      <View style={styles.menuItemStyle} key={index}>
       <FoodInfo food={food}/>
       <FoodImage food={food}/>
      </View>
      ))}
      </ScrollView>
     */
  );
};


export default MenuItem;

const styles = StyleSheet.create({
     menuItemStyle:{
          // height:150,
          // width:150,
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
     }
})