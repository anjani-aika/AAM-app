import * as React from 'react';
import { useState } from 'react';
import {StyleSheet, Text, View, Dimensions, FlatList, SafeAreaView, TouchableOpacity,} from 'react-native';
import Constants from 'expo-constants';

// or any pure javascript modules available in npm
const listTab = [
  {
    title: 'Time',
  },
  {
    title: 'Event',
  },
  {
    title: 'Venue',
  }
];

const data = [
  {
    time: '8:00 am to 9:30 am',
    event: 'Breakfast',
    venue: 'Arena',
  },
  {
    time: '9:30 am to 12:00 pm ',
    event: 'Campus Tour',
    venue: 'Starts from Arena',
  },
  {
    time: '12:00 pm to 1:30 pm',
    event: 'Classroom unveiling',
    venue: 'Nalanda Complex',
  },
  {
    time: '1:30 pm to 3:00 pm',
    event: 'Lunch',
    venue: 'Arena',
  },
  {
    time: '3:00 pm to 4:30 pm',
    event: 'Free Time / Networking Snacks',
    venue: 'Arena',
  },
  {
    time: '4:30 pm to 7:00 pm',
    event: 'Enterntania',
    venue: 'TOAT',
  },
  {
    time: '7:00 pm to 8:00 pm',
    event: 'Illumination',
    venue: 'Arena',
  },
  {
    time: '8:00 pm to 10:00 pm',
    event: 'Gala Dinner with DJ, Bonfire',
    venue: 'Arena',
  },
];

const Daytwo = () => {
  const [title, settitle] = useState();
  const [datalist, setDatalist] = useState(data);

  const renderItem = ({ item, index }) => {
    return (
      <View key={index} style={styles.itemContainer}>
        <Text style={styles.textContainer}> {item.time} </Text>
        <Text style={styles.textContainer}> {item.event} </Text>
        <Text style={styles.textContainer}> {item.venue} </Text>
      </View>
    );
  };


  const separator = () => {
    return <View style={{ height: 1 }} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.listTab}>
        {listTab.map((e) => (
          <View
            style={[styles.btnTab]} >
            <Text
              style={(styles.textTab)}>
              {e.title}
            </Text>
          </View>
        ))}
      </View>
      <FlatList
        data={datalist}
        keyExtractor={(e, i) => i.toString()}
        renderItem={renderItem}
        ItemSeparatorComponent={separator}
      />
    </SafeAreaView>
  );
};

export default Daytwo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  listTab: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginBottom: 10,
  },
  btnTab: {
    width: Dimensions.get('window').width / 3.1,
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius:4,
    borderColor: '#C2CFD8',
    backgroundColor: '#205295',
    padding: 10,
    justifyContent: 'center',
    opacity: 1,

  },
  textTab: {
    fontSize: 20,
    color: 'white',
    fontWeight: "bold",
  },
  itemContainer:{
    flexDirection: 'row',
  },
  textContainer:{
    width: Dimensions.get('window').width / 3.1,
    borderWidth: 2,
    borderRadius: 7,
    borderColor: 'white',
    backgroundColor: '#2C74B3',
    padding: 10,
    justifyContent: 'center',
    opacity: 1,
    fontSize: 16,
    color: 'white',
  },
});
 