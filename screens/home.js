import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Button,
  Modal,
  Pressable,
} from 'react-native';
import { useState } from 'react';


const Home = () => {
  const [modal1, setModalVisible] = useState(false);
  const [modal2, setModalVisible2] = useState(false);
  const [modal3, setModalVisible3] = useState(false);
  const [modal4, setModalVisible4] = useState(false);
  const [modal5, setModalVisible5] = useState(false);
  const [modal6, setModalVisible6] = useState(false);
  const [modal7, setModalVisible7] = useState(false);
  const [modal8, setModalVisible8] = useState(false);
// Modal form the tag
  return (
    <ScrollView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modal1}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modal1);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <TouchableOpacity
              style={styles.crossBu}
              onPress={() => setModalVisible(!modal1)} >
                <Image source={require('../images/cross.png')} style={styles.cross} />
          </TouchableOpacity>
           
          <Image source={require('../images/eia.webp')} style={styles.imq} />
            <Text style={styles.heading}> ENTERTANIA </Text>
            <Text style={styles.modalText}>Good company, laid-back atmosphere, and chill nights. Nothing could be better than a musical night to wash the dust of daily existence from the soul. The music soothes their emotions in the laid-back atmosphere as they enjoy themselves with their pals.</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modal1)}>
              <Text style={styles.textStyle}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modal2}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible2(!modal2);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <TouchableOpacity
              style={styles.crossBu}
              onPress={() => setModalVisible2(!modal2)} >
                <Image source={require('../images/cross.png')} style={styles.cross} />
          </TouchableOpacity>
          <Image source={require('../images/m.webp')} style={styles.imq} />
            <Text style={styles.heading}> 2.2 Marathon </Text>
            <Text style={styles.modalText}>Push yourself to the limit as you conquer the challenging course and celebrate your achievements with fellow alums and runners.</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible2(!modal2)}>
              <Text style={styles.textStyle}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modal3}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible3(!modal3);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
           <TouchableOpacity
              style={styles.crossBu}
              onPress={() => setModalVisible3(!modal3)} >
                <Image source={require('../images/cross.png')} style={styles.cross} />
          </TouchableOpacity>
          <Image source={require('../images/ct.webp')} style={styles.imq} />
            <Text style={styles.heading}> CAMPUS TOUR </Text>
            <Text style={styles.modalText}> A Campus Tour is a great way to feel for the college and remember the places where you spent beautiful days of your life. Visits to campus tours are excellent methods to recall bygone eras. Being in the exact location as one was throughout their most significant moments is evocative. It brings everything back.The alums find it amusing to talk about the developments since they left campus. Walking through those halls, parks, and streets is like stepping back in time.
</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible3(!modal3)}>
              <Text style={styles.textStyle}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modal4}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible4(!modal4);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <TouchableOpacity
              style={styles.crossBu}
              onPress={() => setModalVisible4(!modal4)} >
                <Image source={require('../images/cross.png')} style={styles.cross} />
          </TouchableOpacity>
          <Image source={require('../images/hv.webp')} style={styles.imq} />
            <Text style={styles.heading}> HALL VISIT </Text>
            <Text style={styles.modalText}>Halls play a significant role in KGPian life. Every KGPian has a special place in their heart for the memories of halls. KGPians
have a lifelong emotional bond with and loyalty to their halls. With that said, a trip back to those halls will undoubtedly be enough to bring back fond memories of the amusement, mischief, pranks, friendship, roommates, sleepless nights, and the good old days.</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible4(!modal4)}>
              <Text style={styles.textStyle}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modal5}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible5(!modal5);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <TouchableOpacity
              style={styles.crossBu}
              onPress={() => setModalVisible5(!modal5)} >
                <Image source={require('../images/cross.png')} style={styles.cross} />
          </TouchableOpacity>
          <Image source={require('../images/illu.webp')} style={styles.imq} />
            <Text style={styles.heading}> ILLUMINATION </Text>
            <Text style={styles.modalText}> Festive atmosphere, Good company and Mellow vibes….
Illumination is one of the oldest and most unique traditions of KGP culture. The illumination with diyas, followed by the release of sky lanterns, creates an aura of happiness. Alums enjoy themselves in the company of their friends as the luminous nights with twinkling lights, and smiling faces soften their hearts in the relaxed ambience. </Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible5(!modal5)}>
              <Text style={styles.textStyle}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>


        
      <Modal
        animationType="slide"
        transparent={true}
        visible={modal6}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible6(!modal6);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <TouchableOpacity
              style={styles.crossBu}
              onPress={() => setModalVisible6(!modal6)} >
                <Image source={require('../images/cross.png')} style={styles.cross} />
          </TouchableOpacity>
          <Image source={require('../images/depv.webp')} style={styles.imq} />
            <Text style={styles.heading}> DEP. VISIT </Text>
            <Text style={styles.modalText}> Visits to departments are excellent methods to recall bygone eras. Being in the same location as one was throughout their most significant moments is evocative. It brings everything back.
The alumni find it amusing to talk about the developments since they left campus. Walking through those halls, parks, and streets is like stepping back in time. Everyone looks forward to department visits because that is where they began their careers. </Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible6(!modal6)}>
              <Text style={styles.textStyle}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modal7}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible7(!modal7);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <TouchableOpacity
              style={styles.crossBu}
              onPress={() => setModalVisible7(!modal7)} >
                <Image source={require('../images/cross.png')} style={styles.cross} />
          </TouchableOpacity>
          <Image source={require('../images/iff.webp')} style={styles.imq} />
            <Text style={styles.heading}>Institute Function</Text>
            <Text style={styles.modalText}> The inauguration ceremony marks the beginning of the Annual Alumni meet, which witnesses the presence and participation of all the alums attending the meet with their families. The event is graced with the presence of the respected Director and Deans of IIT Kharagpur. The whole auditorium is filled with electrifying vibes. The event is under media coverage, where batch photos are taken and souvenirs are distributed. </Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible7(!modal7)}>
              <Text style={styles.textStyle}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

   
      <Modal
        animationType="slide"
        transparent={true}
        visible={modal8}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible8(!modal8);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <TouchableOpacity
              style={styles.crossBu}
              onPress={() => setModalVisible8(!modal8)} >
                <Image source={require('../images/cross.png')} style={styles.cross} />
          </TouchableOpacity>
          <Image source={require('../images/depv.webp')} style={styles.imq} />
            <Text style={styles.heading}>Gala Dinner</Text>
            <Text style={styles.modalText}> An evening of elegance and sophistication - The 19th Annual Alumni Gala Dinner, where we celebrate the enduring bond of our IIT Kharagpur community and toast the achieved success. Don your finest attire and raise a glass to the achievements of our esteemed alums as we come together to revive old memories and create new ones.</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible8(!modal8)}>
              <Text style={styles.textStyle}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>


      <View style={styles.container}>
        <Text style={styles.blue}>Greetings,</Text>
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
        <TouchableOpacity
        onPress={() => setModalVisible7(!modal7)}>
          <Image source={require('../images/iff.webp')} style={styles.img} />
          {/* <Text style={styles.imp}>ARENA</Text> */}
        </TouchableOpacity>
          <Button
            style={styles.imp}
            onPress={() => setModalVisible7(!modal7)}
            title="INSTI FUNCN."
          />
        </View>

        <View style={styles.first}>
        <TouchableOpacity
        onPress={() => setModalVisible8(!modal8)}>
          <Image source={require('../images/m.webp')} style={styles.img} />
          {/* <Text style={styles.imp}>ARENA</Text> */}
        </TouchableOpacity>
          <Button
            style={styles.imp}
            onPress={() => setModalVisible8(!modal8)}
            title="GALA DINNER"
          />
        </View>

      </View>

      
      <View style={styles.second}>
        <View style={styles.first}>
        <TouchableOpacity
        onPress={() => setModalVisible(!modal1)}>
          <Image source={require('../images/eia.webp')} style={styles.img} />
          {/* <Text style={styles.imp}>ARENA</Text> */}
        </TouchableOpacity>
          <Button
            style={styles.imp}
            onPress={() => setModalVisible(!modal1)}
            title="ENTERTANIA"
          />
        </View>

        <View style={styles.first}>
        <TouchableOpacity
        onPress={() => setModalVisible2(!modal2)}>
          <Image source={require('../images/m.webp')} style={styles.img} />
          {/* <Text style={styles.imp}>ARENA</Text> */}
        </TouchableOpacity>
          <Button
            style={styles.imp}
            onPress={() => setModalVisible2(!modal2)}
            title="2.2 MARATHON"
          />
        </View>

      </View>

      <View style={styles.second}>
        <View style={styles.first}>
        <TouchableOpacity
        onPress={() => setModalVisible3(!modal3)}>
          <Image source={require('../images/ct.webp')} style={styles.img} />
        </TouchableOpacity>
          {/* <Text style={styles.imp}>ARENA</Text> */}
          <Button
            style={styles.imp}
            onPress={() => setModalVisible3(!modal3)}
            title="CAMPUS TOUR"
          />
        </View>

        <View style={styles.first}>
        <TouchableOpacity
        onPress={() => setModalVisible4(!modal4)}>
          <Image source={require('../images/hv.webp')}
            style={styles.img} 
            onPress={() => setModalVisible4(!modal4)}
          />
        </TouchableOpacity>
          {/* <Text style={styles.imp}>ARENA</Text> */}
          <Button
            style={styles.imp}
            onPress={() => setModalVisible4(!modal4)}
            title="HALL VISIT"
          />
        </View>
      </View>

      <View style={styles.second}>
        <View style={styles.first}>
        <TouchableOpacity
        onPress={() => setModalVisible5(!modal5)}>
          <Image source={require('../images/illu.webp')} style={styles.img} />
          {/* <Text style={styles.imp}>ARENA</Text> */}
        </TouchableOpacity>
          <Button
            style={styles.imp}
            onPress={() => setModalVisible5(!modal5)}
            title="ILLUMINATION"
          />
        </View>

        <View style={styles.first}>
        <TouchableOpacity
        onPress={() => setModalVisible6(!modal6)}>
          <Image source={require('../images/depv.webp')} style={styles.img} />
          {/* <Text style={styles.imp}>ARENA</Text> */}
        </TouchableOpacity>
          <Button
            style={styles.imp}
            onPress={() => setModalVisible6(!modal6)}
            title="DEP. VISIT"
          />
        </View>
      </View>
      <View style={styles.foot}></View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: '7.5%',
    },
  blue: {
    marginLeft: 40,
    marginTop: 15,
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold',
  },
  para: {
    marginLeft: 40,
    marginTop: 10,
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
    backgroundColor: '#82AAE3',
    marginTop: 20,
    marginLeft: 40,
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
  heading:{
    margin:5,
    //flex:1,
    justifyContent: "center",
    fontSize: 35,
    color:"#144272",
    //padding: 7,
    fontWeight: "bold",
  },

  cross:{
    maxWidth: 30,
    maxHeight: 30,
    marginLeft:160, 
marginTop:-25,
  },

  crossBu:{
width:23,
height:23,
color:"white",
  },
  modalView: {
    margin: 20,
    borderWidth: 2.0, // border of image
    borderColor: "#205295",
    //backgroundColor: "white",
    backgroundColor: "#82AAE3", // Background color of modal.
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
    flerx:1,
    width: 150,
    height: 50,
    borderRadius: 15,
    padding: 10,
    elevation: 2,
    justifyContent: 'center',
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    margin: 5,
    fontWeight: "bold",
    color: "#0A2647",// color of text
    textAlign: 'center',
  },
  imq: {
    maxWidth: '110%',
    maxHeight: '40%',
    borderWidth: 2,
    borderColor: "#205295",
    //width: 280,
    // height: 210,
    borderRadius: 5,
    //borderTopRightRadius: 20,
    paddingBottom: 20,
    shadowColor: "#205295",
    shadowOffset: {width: 1, height: 10},
  },
  img:{
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

export default Home;