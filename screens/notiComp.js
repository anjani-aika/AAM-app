import {NavigationContainer} from '@react-navigation/native';
import messaging from '@react-native-firebase/messaging';
import React, {useEffect} from 'react';
import {AuthContext} from './context';
import firestore from '@react-native-firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
const NotiComp = ({fn}) => {
  const {saveT} = React.useContext(AuthContext);
  const requestUserPermission = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log('Authorization status:', authStatus);
    }
    return enabled;
  };

  useEffect(() => {
    if (requestUserPermission()) {
      messaging()
        .getToken()
        .then(async token => {
          AsyncStorage.getItem('ftoken').then(async res => {
            //console.log('res', res);
            //await AsyncStorage.removeItem('ftoken');
            if (!res) {
              await AsyncStorage.setItem(
                'ftoken',
                JSON.stringify({ftoken: token}),
              );
              firestore().collection('usertoken').add({
                token: token,
              });
            }
          });

          //saveT(token);
          // fn(token);
        });
      // sendNoti();
    } else console.log('Not Authorization status', authStatus);
  }, []);
  const sendNoti = () => {
    firestore()
      .collection('usertoken')
      .update({
        tokens: firestore.FieldValue.arrayUnion(token),
      });
    // .get()
    // .then(querySnap => {
    //   const userDevicetoken = querySnap.docs.map(docSnap => {
    //     return docSnap.data().token;
    //   });
    // console.log(userDevicetoken)
    fetch('https://38b2-203-110-242-40.in.ngrok.io/send-noti', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },

      body: JSON.stringify({
        tokens: userDevicetoken,
      }),
    });
  };
  return null;
};

export default NotiComp;
