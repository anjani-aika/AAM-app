
import { useState } from 'react';
import {StyleSheet, Text, View, Dimensions, FlatList, SafeAreaView, TouchableOpacity,} from 'react-native';


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
import * as React from 'react';
const data = [
  {
    time: '7:00 am to 8:15 am',
    event: '2.2 Marathon',
    venue: 'Starts from Gymkhana',
  },
  {
    time: '8:00 am to 9:30 pm ',
    event: 'Breakfast',
    venue: 'Arena',
  },
  {
    time: '10:00 pm to 12:00 pm',
    event: 'Closing Ceremony',
    venue: 'Kalidas Auditorium',
  },
  {
    time: '12:00 pm to 2:20 pm',
    event: 'Lunch',
    venue: 'Arena',
  },
];

const Dayone = () => {
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
          <TouchableOpacity 
            style={[styles.btnTab]} >
            <Text
              style={(styles.textTab)}>
              {e.title}
            </Text>
          </TouchableOpacity>
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

export default Dayone;

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