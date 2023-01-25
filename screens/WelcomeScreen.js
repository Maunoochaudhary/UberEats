import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import logo from '../assets/images/icon.png';
import { colors, hr80 } from '../assets/globals/Style';
import auth from '@react-native-firebase/auth';

const WelcomeScreen = ({ navigation }) => {
    const [userlogged, setUserlogged] = useState(null);
    useEffect(() => {
        
                const subscriber  = auth().onAuthStateChanged((user)=>{
          if(user){
               
               setUserlogged(user);

         }                
   
       });

   

return subscriber
     },[]);

const signupHandler = ()=>{
    console.log('hello');
    navigation.navigate('Signup')
}



const handlelogout = () => {
     auth()
     .signOut()
     .then(() => {
         setUserlogged(null);
     }).catch((error)=>{
        console.log(error);
     });

           }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to Foodie</Text>
            <View style={styles.logoout}>
                <Image source={logo} style={styles.logo} />
            </View>
            <View style={hr80} />
            <Text style={styles.text}>Find the best food around you at lowest price.</Text>
            <View style={hr80} />

            {userlogged === null ?

                <View style={styles.btnout}>
                    <TouchableOpacity onPress={signupHandler}>
                        <Text style={styles.btn}>Sign up</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.btn}>Log In</Text>
                    </TouchableOpacity>
                </View>

                :
                <View style={styles.logged}>
                    <Text style={styles.txtlog}>Signed in as <Text style={styles.txtlogin}>{userlogged.email}</Text></Text>
                    <View style={styles.btnout}>
                        <TouchableOpacity onPress={() => navigation.navigate('First')}>
                            <Text style={styles.btn}>Next</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handlelogout()}>
                            <Text style={styles.btn}>Log Out</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ff4242',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 50,
        color: colors.col1,
        textAlign: 'center',
        marginVertical: 10,
        fontWeight: '200',
    },
    logoout: {
        width: "80%",
        height: "30%",
        // backgroundColor: '#fff',
        alignItems: 'center',
    },
    logo: {
        width: '100%',
        height: '100%',
    },
    text: {
        fontSize: 18,
        width: '80%',
        color: colors.col1,
        textAlign: 'center',
    },
    btnout: {
        flexDirection: 'row',
    },
    btn: {
        fontSize: 20,
        color: colors.text1,
        textAlign: 'center',
        marginVertical: 30,
        marginHorizontal: 10,
        fontWeight: '700',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        paddingHorizontal: 20,
    },
    logged: {
        alignItems: 'center',

    },
    txtlog: {
        fontSize: 16,
        color: colors.col1,
    },
    txtlogin: {
        fontSize: 16,
        color: colors.col1,
        fontWeight: '700',
        textDecorationStyle: 'solid',
        textDecorationLine: 'underline',
    }
})
export default WelcomeScreen