import React from 'react';
import {View, StyleSheet, Text, FlatList, Image} from 'react-native';

const items = [
  {
    image: require('../../assets/images/shopping-bag.png'),
    text: 'Pick-up',
  },
  {
    image: require('../../assets/images/soft-drink.png'),
    text: 'Soft-drink',
  },
  {
    image: require('../../assets/images/bread.png'),
    text: 'Bakery-Items',
  },
  {
    image: require('../../assets/images/fast-food.png'),
    text: 'Fast-Foods',
  },
  {
    image: require('../../assets/images/deals.png'),
    text: 'Deals',
  },
  {
    image: require('../../assets/images/coffee.png'),
    text: 'Coffee $ Tea',
  },
  {
    image: require('../../assets/images/desserts.png'),
    text: 'Desserts',
  },
  
];
const Categories = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => {
          return (
            <View style={{marginRight:20, alignItems: 'center'}}>
              <Image
                source={item.image}
                style={{height: 40, width: 50, resizeMode: 'contain'}}
              />
              <Text style={{fontSize: 13, fontWeight: '900', color: 'black'}}>
                {item.text}
              </Text>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginTop: 5,
    paddingVertical: 10,
    paddingLeft:20
  },
});

export default Categories;
