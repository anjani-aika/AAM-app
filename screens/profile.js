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
    AsyncStorage.getItem('userToken').then(async res => {
      if (res) {
        const {username} = JSON.parse(res);
        if (username) {
          //console.log(username);
          const data = await axios.post(
            'https://0842-203-110-242-41.in.ngrok.io/profile',
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
        }
      }
    });
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
            <View style={{flexDirection: 'row', marginTop: 30}}>
              <Avatar.Image
                style={{marginTop: 0, marginRight: 10, marginBottom: 6}}
                source={require('../assets/profile.png')}
                size={80}
              />
              <View style={{marginLeft: 10, borderRadius: 20}}>
                <Text
                  style={[
                    styles.Text,
                    {
                      marginTop: 6,
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
                {phone}
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
                {guest}
              </Text>
            </View>
          </View>

          <View style={styles.infoBoxWrapper}>
            <View
              style={[
                styles.infoBox,
                {
                  borderRightColor: '#91D8E4',
                  // borderRightWidth:1
                },
              ]}>
              <Title
                style={{
                  fontWeight: 'bold',
                  color: '#0A2647',
                  marginRight: 240,
                }}>
                {' '}
                {yor}{' '}
              </Title>
              <Caption style={{fontWeight: 'bold', marginRight: 250}}>
                Batch
              </Caption>
            </View>
            <View style={styles.infoBox}>
              <Title
                style={{
                  marginRight: 135,
                  fontWeight: 'bold',
                  color: '#0A2647',
                }}>
                {hall == 'select' ? '-' : hall}
              </Title>
              <Caption style={{marginRight: 180, fontWeight: 'bold'}}>
                Hall of Residence
              </Caption>
            </View>
          </View>
          <Button
            title="LogOut"
            onPress={() => {
              logout();
            }}
          />
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
    backgroundColor: '#205295',
    borderRadius: 6,
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
