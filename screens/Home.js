import React, {useEffect, useState} from 'react';
import {View, StyleSheet, ScrollView, SafeAreaView} from 'react-native';
import {BottomSheet, Divider} from 'react-native-elements';
import BottomTab from '../components/Home/BottomTab';
import Categories from '../components/Home/Categories';
import HeaderTabs from '../components/Home/HeaderTabs';
import RestaurantItem from '../components/Home/RestaurantItem';
import SearchBar from '../components/Home/SearchBar';
const YELP_API_KEY =
  'NtX-qY4CBLFGVK2Y3A8u4s3V03vjGxzG287wLM2Y3iQiaOny0YaOY0Qdf_2_LMxWshb05iGZjha74X_hf1RyVX0YxeWGPSgAmL7H9aYouIuxAhiDvycTnPC6bKylY3Yx';
const Home = ({navigation}) => {
  const [city, setCity] = useState('San Francisco');
  const [restaurantData, setRestaurantData] = useState([]);
  const [activeTab, setActiveTab] = useState('Delivery');
  const getRestaurantsFromYelpApi = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;
    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };

    fetch(yelpUrl, apiOptions)
      .then(response => response.json()).then((res)=>{

        setRestaurantData(res.businesses)
      })

      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    getRestaurantsFromYelpApi();
  }, [city]);

  return (
    <View style={{flex: 1, marginTop: 30}}>
      <View style={styles.container}>
        <HeaderTabs />
        <SearchBar cityHandler={setCity} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItem restaurantData={restaurantData} />
      </ScrollView>
      
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    marginTop: 10,
    
  },
});
