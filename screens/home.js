import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  Button,
  Modal,
  Pressable,
} from 'react-native';
import { useState } from 'react';

const Home = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <ScrollView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <Image source={require('../images/a1.webp')} style={styles.img} />
          
            <Text style={styles.modalText}>The Students' Alumni Cell, IIT Kharagpur is a voluntary student body working under the aegis of the Dean, Outreach. It strives to bridge the gap between IIT Kharagpur and its esteemed alumni community. The Students' Alumni Cell continuously endeavours to strengthen the relations of the alumni of this Institute and their alma mater. It has been instrumental in organising the Annual Alumni Meet, Regional Student Alumni Meet, regular guest lectures by distinguished alumni in the campus, publishing the annual literary magazine (Yearnings of Yore) & the annual yearbook. The Students' Alumni Cell also operates the Student - Alumni Mentorship Programme, My Imprint (Giving Back - Alumni contribution) and organises Alvida (the annual farewell dinner).</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <View>
        <Text style={styles.blue}><Text style={{fontWeight:'bold'}}>Greetings!{"\n"}</Text>Welcome to 19th Annual Alumni   Meet</Text>
        
      </View>
      <Text style={styles.para}>
        Thank you for registering with us.Hope you reunite with your old
        memories and enjoy this meet Thank you for registering with us.Hope you
        reunite with your old memories and enjoy this meet
      </Text>
      <View>
        <Text style={styles.alum}>Events</Text>
      </View>
      <View style={styles.second}>
        <View style={styles.first}>
          <Image source={require('../images/a1.webp')} style={styles.img} />
          {/* <Text style={styles.imp}>ARENA</Text> */}
          <Button
            onPress={() => setModalVisible(!modalVisible)}
            title="click"
          />
        </View>
        <View style={styles.first1}>
          <Image source={require('../images/illu1.webp')} style={styles.img} />
          <Text style={styles.imp}>ILLUMINATION</Text>
        </View>
      </View>
      <View style={styles.second}>
        <View style={styles.first}>
          <Image source={require('../images/a1.webp')} style={styles.img} />
          <Text style={styles.imp}>ARENA</Text>
        </View>
        <View style={styles.first1}>
          <Image source={require('../images/illu1.webp')} style={styles.img} />
          <Text style={styles.imp}>ILLUMINATION</Text>
        </View>
      </View>
      <View style={styles.foot}></View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {backgroundColor: 'white'},
  red: {
    color: 'black',
    fontWeight: 'bold',
    marginLeft: 40,
    fontSize: 30,
  },
  blue: {
    marginLeft: 40,
    marginTop: 15,
    fontSize: 25,
    color: 'black',
    fontWeight: '400',
  },
  para: {
    marginLeft: 40,
    marginTop: 40,
    fontSize: 18,
    marginRight: 40,
    fontWeight: '500',
    color: 'black',
  },
  alum: {
    marginTop: 40,
    marginLeft: 40,
    marginRight: 20,
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
  first: {
    width: 150,
    height: 210,
    backgroundColor: 'rgba(0,255,0,0.2)',
    marginTop: 20,
    marginLeft: 18,
    marginRight:0,
    borderRadius: 20,
  },
  first1: {
    width: 150,
    height: 210,
    backgroundColor: 'rgba(180,200,120,0.3)',
    marginTop: 20,
    marginLeft: 25,

    borderRadius: 20,
  },
  second: {
    display: 'flex',
    flexDirection: 'row',
  },
  imp: {
    marginTop: 5,
    textAlign: 'center',
    fontWeight: '700',
    color: 'rgba(0,0,0,0.7)',
    
  },
  modal: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#00ff00',
    padding: 100,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  img: {
    width: 150,
    height: 180,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  foot: {
    width: 100,
    height: 50,
  },
});

export default Home;
