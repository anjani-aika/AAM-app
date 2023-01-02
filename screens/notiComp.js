import {NavigationContainer} from '@react-navigation/native';
import messaging from '@react-native-firebase/messaging';
import {useEffect} from 'react';
import firestore from '@react-native-firebase/firestore';
const NotiComp = () => {
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
        .then(token => {
          firestore().collection('usertoken').add({
            token: token,
          });
        });
      sendNoti();
    } else console.log('Not Authorization status', authStatus);
  }, []);
  const sendNoti = () => {
    firestore()
      .collection('usertoken')
      .get()
      .then(querySnap => {
        const userDevicetoken = querySnap.docs.map(docSnap => {
          return docSnap.data().token;
        });
        // console.log(userDevicetoken)
        fetch('https://8c31-202-142-65-225.in.ngrok.io/send-noti', {
          method: 'post',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },

          body: JSON.stringify({
            tokens: userDevicetoken,
          }),
        });
      });
  };
  return null;
};

export default NotiComp;
