import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Modal,
  StatusBar,
} from 'react-native';
import {useSelector} from 'react-redux';
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native'
const ViewCart = () => {
  const [loading,setLoading] = useState(false);
  const navigation = useNavigation();
  const [modelIsVisible, setModelIsVisible] = useState(false);
  const {items, restaurantName} = useSelector(state => state.selectedItems);
  const total = items
    .map(item => Number(item.price.replace('$', '')))
    .reduce((prev, curr) => prev + curr, 0);

  const totalUSD = total.toLocaleString('en', {
    style: 'currency',
    currency: 'USD',
  });

  const addToFirebase = ()=>{
    setLoading(true)
    firestore()
  .collection('orders')
  .add({
    items:items,restaurantName:restaurantName,
    createdAt: firestore.FieldValue.serverTimestamp()
  })
  .then(() => {
    setTimeout(()=>{
      navigation.navigate('OrderDetails');
      setLoading(false);
    },2500)
    console.log('User added!');
  });
            
   
  }
  const checkOutModelContent = () => {
    return (
      <>
        <View style={styles.modalContainer}>
          <View style={styles.modalCheckoutContainer}>
            <Text style={styles.restaurantName}>{restaurantName}</Text>
            <View>
              {items.map((item, index) => {
                return (
                  <View
                    key={index}
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      padding: 20,
                      borderBottomWidth: 1,
                      borderBottomColor: '#999',
                    }}>
                    <Text
                      style={{fontWeight: '600', fontSize: 16, color: 'black'}}>
                      {item.title}
                    </Text>
                    <Text style={{fontSize: 16, color: 'black'}}>
                      {item.price}
                    </Text>
                  </View>
                );
              })}
            </View>
            <View style={styles.subtotalContainer}>
              <Text style={styles.subtotalText}>Subtotal</Text>
              <Text style={{color: 'black'}}>{totalUSD}</Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <TouchableOpacity
                onPress={() =>{
                  addToFirebase()
                   setModelIsVisible(false);



                }}
                style={{
                  marginTop: 20,
                  backgroundColor: 'black',
                  alignItems: 'center',
                  padding: 13,
                  borderRadius: 30,
                  width: 300,
                  position: 'relative',
                }}>
                <Text style={{color: 'white', fontSize: 20}}>Checkout</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </>
    );
  };
  return (
    <>
      <Modal
       statusBarTranslucent={true}
        animationType="slide"
        visible={modelIsVisible}
        transparent={true}
        onRequestClose={() => setModelIsVisible(false)}>
        {checkOutModelContent()}
      </Modal>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          flexDirection: 'row',
          position: 'absolute',
          justifyContent: 'center',
          bottom: 0,
          zIndex: 999,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            width: '100%',
          }}>
          <TouchableOpacity
            onPress={() => {
              setModelIsVisible(true);
            }}
            style={{
              backgroundColor: 'black',
              alignItems: 'center',
              justifyContent: 'space-evenly',
              flexDirection: 'row',
              padding: 15,
              borderRadius: 30,
              width: 300,
              position: 'relative',
            }}>
            <Text style={{color: 'white', fontSize: 20, marginRight: 15}}>
              View Cart
            </Text>
            <Text style={{color: 'white', fontSize: 20, marginLeft: 15}}>
              {totalUSD}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {loading && 
      (<View style={{flex:1,backgroundColor:'black',position:'absolute',opacity:0.6,justifyContent:'center',alignItems:'center',width:'100%',height:'100%'}}>
      <LottieView style={{height:200}} source={require('../../assets/animations/scanner.json')} autoPlay speed={3}/>
      </View> )}
    </>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.7)',
    // backgroundColor:'black'
  },
  modalCheckoutContainer: {
    backgroundColor: 'white',
    padding: 16,
    height: 500,
    borderWidth: 1,
  },
  restaurantName: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 18,
    marginBottom: 10,
    color: 'black',
  },
  subtotalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  subtotalText: {
    textAlign: 'left',
    fontWeight: '600',
    fontSize: 15,
    marginBottom: 10,
    color: 'black',
  },
});

export default ViewCart;
