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
import {useEffect} from 'react';
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

const Notification = () => {
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
      <Text style={styles.headtext}>Notifications</Text>
    </View> */}

      {/* <Text style={styles.textf}>Notification Title</Text>
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
      /> */}

      {/* <View style={styles.buttonContainer1}>
        <Button title="Noti" onPress={() => sendNoti()} />
      </View> */}

      <View style={styles.card}>
        <View style={styles.cardContent}>
          <View style={styles.Content}>
            <Text style={styles.textf}>   Event: Institute Function</Text>
            <Text style={styles.textf}>   Time: 1:30-3:30 pm</Text>
            <Text style={styles.textf}>   Venue: Kalidas Audi</Text>
          </View>
          <View style={styles.buttonContainer}>
            <Button
              title="Map"
              onPress={() => {
                Linking.openURL(
                  `https://www.google.com/maps?q=kalidas+auditorium+iit+kharagpur&sa=X&ved=2ahUKEwj0o4bElPn7AhVn4DgGHWxwBJgQ0pQJegQICBAB`,
                );
              }}
              color="#afbfe1"
            />
          </View>
        </View>
      </View>
      <View style={styles.card}>
        <View style={styles.cardContent}>
          <View style={styles.Content}>
            <Text style={styles.textf}>   Event: Department Visit</Text>
            <Text style={styles.textf}>   Time: 3:30-5:30</Text>
            <Text style={styles.textf}>   Venue: Pickup from Arena</Text>
          </View>
          <View style={styles.buttonContainer}>
            <Button
              title="Map"
              onPress={() => {
                Linking.openURL(
                  `https://www.google.com/maps?q=kalidas+auditorium+iit+kharagpur&sa=X&ved=2ahUKEwj0o4bElPn7AhVn4DgGHWxwBJgQ0pQJegQICBAB`,
                );
              }}
              color="#afbfe1"
            />
          </View>
        </View>
      </View>
      <View style={styles.card}>
        <View style={styles.cardContent}>
          <View style={styles.Content}>
            <Text style={styles.textf}>   Event: Hall Visit</Text>
            <Text style={styles.textf}>   Time: 10-11:30 pm</Text>
            <Text style={styles.textf}>   Venue: Pickup from Arena</Text>
          </View>
          <View style={styles.buttonContainer}>
            <Button
              title="Map"
              onPress={() => {
                Linking.openURL(
                  `https://www.google.com/maps?q=kalidas+auditorium+iit+kharagpur&sa=X&ved=2ahUKEwj0o4bElPn7AhVn4DgGHWxwBJgQ0pQJegQICBAB`,
                );
              }}
              color="#afbfe1"
            />
          </View>
        </View>
      </View>
      <View style={styles.card}>
        <View style={styles.cardContent}>
          <View style={styles.Content}>
            <Text style={styles.textf}>   Event: Campus Tour</Text>
            <Text style={styles.textf}>   Time: 9:30-12:30 pm</Text>
            <Text style={styles.textf}>   Venue: Pickup from Arena</Text>
          </View>
          <View style={styles.buttonContainer}>
            <Button
              title="Map"
              onPress={() => {
                Linking.openURL(
                  `https://www.google.com/maps?q=kalidas+auditorium+iit+kharagpur&sa=X&ved=2ahUKEwj0o4bElPn7AhVn4DgGHWxwBJgQ0pQJegQICBAB`,
                );
              }}
              color="#afbfe1"
            />
          </View>
        </View>
      </View>
      <View style={styles.card}>
        <View style={styles.cardContent}>
          <View style={styles.Content}>
            <Text style={styles.textf}>  Event:  Entertainia</Text>
            <Text style={styles.textf}>  Time:   4:30 -7 pm</Text>
            <Text style={styles.textf}>  Venue:  Starts TOAT         </Text>
          </View>
          <View style={styles.buttonContainer}>
            <Button
              title="Map"
              onPress={() => {
                Linking.openURL(
                  `https://www.google.com/maps/place/Tagore+Open+Air+Theatre/@22.3187495,87.3069661,17z/data=!3m1!4b1!4m5!3m4!1s0x3a1d44048a057481:0x3981045c96c19252!8m2!3d22.3187495!4d87.3091548`,
                );
              }}
              color="#afbfe1"
            />
          </View>
        </View>
      </View>


      <View style={styles.card}>
        <View style={styles.cardContent}>
          <View style={styles.Content}>
            <Text style={styles.textf}> Event:     GALA  Dinner </Text>
            <Text style={styles.textf}> Time:      8:00 - 10:00 pm </Text>
            <Text style={styles.textf}> Venue:     Arena  </Text>
          </View>
          <View style={styles.buttonContainer}>
            <Button
              title="Map"
              onPress={() => {
                Linking.openURL(
                  `https://www.google.com/maps?q=kalidas+auditorium+iit+kharagpur&sa=X&ved=2ahUKEwj0o4bElPn7AhVn4DgGHWxwBJgQ0pQJegQICBAB`,
                );
              }}
              color="#afbfe1"
            />
          </View>
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.cardContent}>
          <View style={styles.Content}>
            <Text style={styles.textf}>    Event: Run for KGP</Text>
            <Text style={styles.textf}>    Time: 7-8:15 pm</Text>
            <Text style={styles.textf}>    Venue: Starts Gymkhana</Text>
          </View>
          <View style={styles.buttonContainer}>
            <Button
              title="Map"
              onPress={() => {
                Linking.openURL(
                  `https://www.google.com/maps/place/Technology+Students'+Gymkhana/@22.3187312,87.3003411,17z/data=!3m1!4b1!4m5!3m4!1s0x3a1d4407422c1675:0xa2d9d15d09ca4c4!8m2!3d22.3187312!4d87.3025298`,
                );
              }}
              color="#afbfe1"
            />
          </View>
        </View>
      </View>
      <View style={styles.card}>
        <View style={styles.cardContent}>
          <View style={styles.Content}>
            <Text style={styles.textf}> Event:  Closing Ceremony</Text>
            <Text style={styles.textf}> Time:  10-12:00 pm</Text>
            <Text style={styles.textf}> Venue:  Kalidas Audi</Text>
          </View>
          <View style={styles.buttonContainer}>
            <Button
              title="Map"
              onPress={() => {
                Linking.openURL(
                  `https://www.google.com/maps?q=kalidas+auditorium+iit+kharagpur&sa=X&ved=2ahUKEwj0o4bElPn7AhVn4DgGHWxwBJgQ0pQJegQICBAB`,
                );
              }}
              color="#afbfe1"
            />
          </View>
        </View>
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
    marginVertical: 8,
    borderRadius: 8,

    backgroundColor: '#82AAE3',
  },
  cardContent: {
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  headtext: {
    fontSize: 30,
    marignLeft: 60,
    fontWeight: 200,
  },
  textf: {
    color: 'white',
    fontWeight: '400',
    fontSize: 15,
  },

  buttonContainer: {
    width: 50,
    borderColor: 'transparent',
    borderRadius: 3,
    marginTop: 25,
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
  Content: {
    marginRight: 90,
  },
});

export default Notification;

//https://www.google.com/maps?q=iit+kharagpur&sa=X&ved=2ahUKEwi5kvrlkvn7AhVc6jgGHXM2CdMQ0pQJegQICBAB
//https://www.google.com/maps?q=kalidas+auditorium+iit+kharagpur&sa=X&ved=2ahUKEwj0o4bElPn7AhVn4DgGHWxwBJgQ0pQJegQICBAB