import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Tabs from './navigation/tabs';
import messaging from '@react-native-firebase/messaging';
import React, {useEffect, useMemo, useReducer} from 'react';
import firestore from '@react-native-firebase/firestore';
import Login from './screens/login';
import NotiComp from './screens/notiComp';
import {AuthContext} from './screens/context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
const Stack = createNativeStackNavigator();
const App = () => {
  const initialLoginState = {
    username: null,
    userToken: null,
  };
  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case 'RETRIVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
        };
      case 'LOGIN':
        console.log(action);
        return {
          ...prevState,
          username: action.id,
          userToken: action.token,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          username: null,
          userToken: null,
        };
    }
  };
  const [loginState, dispatch] = useReducer(loginReducer, initialLoginState);
  const authContext = useMemo(() => ({
    login: async (email, password) => {
      try {
        const data = await axios.post(
          'https://10dd-203-110-242-40.in.ngrok.io/loginn',
          {
            email: email,
            dob: password,
          },
        );
        console.log(data.data[0]);
        if (data.data) {
          await AsyncStorage.setItem(
            'userToken',
            JSON.stringify({
              userToken: data.data[0].email,
              username: data.data[0].email,
            }),
          );
          dispatch({
            type: 'LOGIN',
            id: data.data.email,
            token: data.data.email,
          });
          console.log('LOginState', loginState);
        }
      } catch (err) {
        console.log(err);
      }
    },
    logOut: async () => {
      try {
        await AsyncStorage.removeItem('userToken');
        dispatch({type: 'LOGOUT'});
      } catch (err) {
        console.log(err);
      }
    },
  }));

  useEffect(() => {
    const timeOut = setTimeout(() => {
      let userToken1 = null;
      try {
        AsyncStorage.getItem('userToken').then(res => {
          userToken1 = res;
          if (userToken1) {
            const {userToken} = JSON.parse(userToken1);
            dispatch({type: 'RETRIVE_TOKEN', token: userToken});
          }
        });
      } catch (err) {
        console.log(err);
      }
      return () => {
        clearTimeout(timeOut);
      };
    }, 1000);
  }, []);
  return (
    <AuthContext.Provider value={authContext}>
      <NotiComp />
      <NavigationContainer>
        <Stack.Navigator>
          {loginState.userToken != null ? (
            <Stack.Screen name="home" component={Tabs} />
          ) : (
            // console.log(loginState)
            <Stack.Screen name="login" component={Login} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default App;
