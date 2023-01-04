import React from 'react';
import {useState, useEffect} from 'react';
import {View, SafeAreaView, StyleSheet, Button, ScrollView} from 'react-native';
import {AuthContext} from './context';
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import Notiadmin from './notiadmin';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Profile = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');
  const [guest, setGuest] = useState('');
  const [hall, setHall] = useState('');
  const [yor, setYor] = useState('');
  const getProfile = () => {
    AsyncStorage.getItem('userInfo').then(res=>{
      if(res){
        const {name,email,city,guest,hall,yor,phone}=JSON.parse(res);
          setName(name);
          setEmail(email);
          setCity(city);
          setGuest(guest);
          setHall(hall);
          setYor(yor);
          setPhone(phone);
      }else{
        AsyncStorage.getItem('userToken').then(async res => {
          if (res) {
            const {username} = JSON.parse(res);
            if (username) {
              //console.log(username);
              const data = await axios.post(
                'https://471a-203-110-242-40.ngrok.io/profile',
                {
                  email: username,
                },
              );
              console.log(data.data);
              setName(data.data[0].name);
              setEmail(data.data[0].email);
              setCity(data.data[0].city);
              setGuest(data.data[0].guest);
              setHall(data.data[0].hall);
              setYor(data.data[0].yor);
              setPhone(data.data[0].phone);
              await AsyncStorage.setItem('userInfo',JSON.stringify({
                name:data.data[0].name ,
                email:data.data[0].email,
                city:data.data[0].city ,
                guest:data.data[0].guest ,
                hall:data.data[0].hall ,
                yor:data.data[0].yor ,
                phone: data.data[0].phone
              }));
            }
          }
        });

      }
    })
    
  };

  useEffect(() => {
    getProfile();
  });

  const {logOut} = React.useContext(AuthContext);
  const logout = () => {
    try {
      logOut();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <ScrollView>
        <SafeAreaView style={styles.container}>
          <View style={styles.userInfoSection}>
            <View style={{flexDirection: 'row', marginTop: 30,justifyContent:'center',alignItems:'center'}}>
              <Avatar.Image
                style={{marginTop: 0, marginRight: 10, marginBottom: 20}}
                source={require('../assets/profile.png')}
                size={80}
              />
              <View style={{marginLeft: 10, borderRadius: 20}}>
                <Text
                  style={[
                    styles.Text,
                    {
                      color:'white',
                      fontSize:18,
                      marginTop: 6,
                      fontWeight:'700',
                      marginBottom: 0,
                    },
                  ]}>
                  {' '}
                  {name}{' '}
                </Text>
                <Caption style={styles.caption}>{email} </Caption>
              </View>
            </View>
          </View>

          <View style={styles.userInfoSection2}>
            <View style={styles.row}>
              <Text style={{color: '#6B728E', marginLeft: 25, marginTop: 0}}>
                Address
              </Text>
            </View>
            <View style={styles.row}>
              {/* <Icon name="map-marker-radius" color="#777777" size={35} style={{marginTop:0}}/> */}
              <Text
                style={{
                  color: '#2C74B3',
                  marginLeft: 25,
                  marginTop: 0,
                  fontWeight: 'bold',
                  fontSize: 16,
                }}>
                {city}
              </Text>
            </View>
            <View style={styles.row}>
              <Text style={{color: '#6B728E', marginLeft: 25, marginTop: 5}}>
                Contact
              </Text>
            </View>
            <View style={styles.row}>
              {/* <Icon name="phone" color="#777777" size={35} style={{marginTop:0}}/> */}
              <Text
                style={{
                  color: '#2C74B3',
                  marginLeft: 25,
                  marginTop: 0,
                  fontWeight: 'bold',
                  fontSize: 16,
                }}>
                {phone==null?'--':phone}
              </Text>
            </View>
            <View style={styles.row}>
              <Text style={{color: '#6B728E', marginLeft: 25, marginTop: 0}}>
                Email Id
              </Text>
            </View>
            <View style={styles.row}>
              {/* <Icon name="email" color="#777777" size={35} style={{marginTop:0}}/> */}
              <Text
                style={{
                  color: '#2C74B3',
                  marginLeft: 25,
                  marginTop: 0,
                  fontWeight: 'bold',
                  fontSize: 16,
                }}>
                {email}
              </Text>
            </View>
            <View style={styles.row}>
              <Text style={{color: '#6B728E', marginLeft: 25, marginTop: 5}}>
                Guest House
              </Text>
            </View>
            <View style={styles.row}>
              {/* <Icon name="home" color="#777777" size={35} style={{marginTop:0}}/> */}
              <Text
                style={{
                  color: '#2C74B3',
                  marginLeft: 25,
                  marginTop: 0,
                  marginBottom: 0,
                  fontWeight: 'bold',
                  fontSize: 16,
                }}>
                {guest==null?'--':guest}
              </Text>
            </View>
            <View style={styles.row}>
              <Text style={{color: '#6B728E', marginLeft: 25, marginTop: 5}}>
                Batch
              </Text>
            </View>
            <View style={styles.row}>
              {/* <Icon name="phone" color="#777777" size={35} style={{marginTop:0}}/> */}
              <Text
                style={{
                  color: '#2C74B3',
                  marginLeft: 25,
                  marginTop: 0,
                  fontWeight: 'bold',
                  fontSize: 16,
                }}>
                {yor==null?'--':yor}
              </Text>
            </View>
            <View style={styles.row}>
              <Text style={{color: '#6B728E', marginLeft: 25, marginTop: 5}}>
                Hall of Residence
              </Text>
            </View>
            <View style={styles.row}>
              {/* <Icon name="phone" color="#777777" size={35} style={{marginTop:0}}/> */}
              <Text
                style={{
                  color: '#2C74B3',
                  marginLeft: 25,
                  marginTop: 0,
                  fontWeight: 'bold',
                  fontSize: 16,
                }}>
                {hall}
              </Text>
            </View>
            <View style={{flex:1,marginTop:30,width:150,paddingLeft:25}}>
            <Button
              style={{marginLeft:25,width:20}}
              title="LogOut"
              onPress={() => {
                logout();
              }}
            />
            </View>
          </View>

         
          {email == 'admin@gmail.com' ? <Notiadmin /> : null}
        </SafeAreaView>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent:'center',
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 30,
    marginTop:40,
    backgroundColor: '#205295',
    borderRadius: 0,
  },
  userInfoSection2: {
    marginLeft: 20,
    marginTop: 0,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    //fontWeight:'bold',
    color: 'white',
    //fontSize: 20,
    lineHeight: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    //backgroundColor: "#ADE792",
    marginBottom: 0,
  },
  caption: {
    fontSize: 16,
    lineHeight: 16,
    fontWeight: '500',
    marginBottom: 35,
    marginTop: 0,
    fontFamily: 'sans-serif',
    marginRight: 10,
    color: 'white',
  },

  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#205295',
    borderBottomWidth: 1,
    borderTopColor: '#205295',
    borderTopWidth: 1,
    flexDirection: 'column',
    height: 122,
  },
  infoBox: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // menuWrapper:{
  //   marginTop:10,
  // },
  // menuItem:{
  //   flexDirection:'row',
  //   paddingVertical:15,
  //   paddingHorizontal:30,
  // },
  // menuItemText:{
  //   color:'#777777',
  //   marginLeft:20,
  //   fontWeight:'600',
  //   fontSize:16,
  //   lineHeight:26
  // },
});

export default Profile;
