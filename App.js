import { View, StyleSheet,StatusBar,Text, FlatList,Image} from "react-native";
import React from "react";
import Home from "./screens/Home";
import { NavigationContainer} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Browse from "./screens/Browse";
import Grocery from "./screens/Grocery";
import Orders from "./screens/Orders";
import Account from "./screens/Account";
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import RestaurantDetails from "./screens/RestaurantDetails";
import { Provider } from "react-redux";
import store from "./store/index";
import OrderCompleted from "./screens/OrderCompleted";
const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
const App = () => {
 
   
  // const [data,setData] = useState([])
  //   function getPhoto(){
  //   fetch("https://api.unsplash.com/search/photos?page=1&query=office&client_id=Kmet07HQG1V52pJj8JYznqh3qfvnIAyY9MVZ45uHj24").then((response)=> response.json()).then((jason)=>{
  //     // console.log(jason.results);
  //    const photoData = jason.results;
  //    setData(photoData)
  //   //  console.log(data);
  //   }).catch((error)=>{
  //     console.log(error);
  //   })
  // }
  //     useEffect(()=>{
  //      getPhoto()

  //     },[])
  const FirstComponent =()=>{
    return(
      <BottomTabs.Navigator screenOptions={{tabBarStyle:{backgroundColor:'#eee',height:60,paddingTop:5},tabBarActiveTintColor:'black',tabBarLabelStyle:{fontSize:15,marginBottom:5}}}>
        <BottomTabs.Screen name="Home" component={Home} options={{headerShown:false,tabBarIcon:({color})=>(
          <FontAwesome name="home" size={25} color={color}/>
        )}}/>
        <BottomTabs.Screen name="Browse" component={Browse} options={{headerShown:false,tabBarIcon:({color})=>(
          <FontAwesome name="search" size={25} color={color}/>
        )}}/>
        <BottomTabs.Screen name="Grocery" component={Grocery} options={{headerShown:false,tabBarIcon:({color})=>(
          <FontAwesome name="shopping-bag" size={25} color={color}/>
        )}}/>
        <BottomTabs.Screen name="Orders" component={Orders} options={{headerShown:false,tabBarIcon:({color})=>(
          <FontAwesome name="receipt" size={25} color={color}/>
        )}}/>
        <BottomTabs.Screen name="Account" component={Account} options={{headerShown:false,tabBarIcon:({color})=>(
          <FontAwesome name="user" size={25} color={color}/>
        )}}/>
      </BottomTabs.Navigator>
    )
  }
  return (
    <>
    <StatusBar translucent backgroundColor='transparent' barStyle='dark-content' />
    <Provider store={store}>
    <NavigationContainer>
         <Stack.Navigator>
         {/* <Stack.Screen name="Welcome" component={WelcomeScreen}options={{headerShown:false}}/> */}
          <Stack.Screen name ='First' component = {FirstComponent} options={{headerShown:false}}/>
          <Stack.Screen name="RestaurantDetails" component={RestaurantDetails} options={{headerShown:false}}/>
          <Stack.Screen name="OrderDetails" component={OrderCompleted} options={{headerShown:false}}/>
          <Stack.Screen name="Login"  component={LoginScreen} options={{headerShown:false}}/>
          <Stack.Screen name="Signup"  component={SignupScreen} options={{headerShown:false}}/>
         </Stack.Navigator>  
    </NavigationContainer>
    </Provider>   
    </>
  );
};
export default App;
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#eee'
  }
})

