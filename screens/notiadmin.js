import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  Linking,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import messaging from '@react-native-firebase/messaging';
import firestore from '@react-native-firebase/firestore';
import {text} from 'express';

// const sendNoti = () => {
//   firestore()
//     .collection('usertoken')
//     .get()
//     .then(querySnap => {
//       const userDevicetoken = querySnap.docs.map(docSnap => {
//         return docSnap.data().token;
//       });
//       console.log(userDevicetoken);
//       fetch('https://26ad-202-142-65-225.in.ngrok.io/send-noti', {
//         method: 'post',
//         headers: {
//           Accept: 'application/json',
//           'Content-Type': 'application/json',
//         },

//         body: JSON.stringify({
//           tokens: userDevicetoken,
//           title:"title",
//           subTitle:"subTitle",
//         }),
//       });
//     });
// };

const Notiadmin = () => {
  const [text, setText] = useState('');
  const [text2, settext2] = useState('');
  const sendNoti = () => {
    firestore()
      .collection('usertoken')
      .get()
      .then(querySnap => {
        const userDevicetoken = querySnap.docs.map(docSnap => {
          return docSnap.data().token;
        });
        console.log(userDevicetoken);
        fetch('https://471a-203-110-242-40.ngrok.io/send-noti', {
          method: 'post',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },

          body: JSON.stringify({
            tokens: userDevicetoken,
            title: text, //Event name
            subTitle: text2, // Venue  andTime
          }),
        });
      });
  };

  return (
    <ScrollView style={styles.container}>
      {/* <View style={{flexDirection:'row'}}>
    <Image
        style={{
          resizeMode: 'contain',
          height: 30,
          width: 30,
          margin:10,
          

          
        }}
        source={require('../images/bell.png')}
      />
      <Text style={styles.headtext}>Notiadmins</Text>
    </View> */}

      <Text style={styles.textf}>Notification Title</Text>
      <TextInput
        style={styles.input}
        placeholder="Notification Title"
        onChangeText={newText => setText(newText)}
        defaultValue={text}
      />
      <Text style={styles.textf}>Notification Body</Text>
      <TextInput
        style={styles.input}
        placeholder="Notification Title"
        onChangeText={newText2 => settext2(newText2)}
        defaultValue={text2}
      />

      <View style={styles.buttonContainer1}>
        {/* <TextInput
        style={{height: 40}}
        placeholder="Type here the title!"
        onChangeText={newTitle => setText(newTitle)}
        defaultValue={title}
    /> */}
        <Button title="Noti" onPress={() => sendNoti()} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F9F9F9',
  },
  card: {
    marginHorizontal: 20,
    marginVertical: 10,

    backgroundColor: 'rgba(0,255,0,0.2)',
  },
  cardContent: {
    marginHorizontal: 18,
    marginVertical: 20,
  },
  headtext: {
    fontSize: 30,
    marignLeft: 60,
    fontWeight: 200,
  },
  textf: {
    color: 'black',
    fontWeight: '400',
    fontSize: 20,
  },

  buttonContainer: {
    width: 50,
    borderColor: 'transparent',
    borderRadius: 3,
  },
  buttonContainer1: {
    width: 50,
    fontColor: 'black',
    borderColor: 'transparent',
    marginLeft: 40,
  },

  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
  },
});

export default Notiadmin;

//https://www.google.com/maps?q=iit+kharagpur&sa=X&ved=2ahUKEwi5kvrlkvn7AhVc6jgGHXM2CdMQ0pQJegQICBAB
//https://www.google.com/maps?q=kalidas+auditorium+iit+kharagpur&sa=X&ved=2ahUKEwj0o4bElPn7AhVn4DgGHWxwBJgQ0pQJegQICBAB
