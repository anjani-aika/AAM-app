import * as React from 'react';
import { useState } from 'react';
import {StyleSheet, Text, View, Dimensions, FlatList, SafeAreaView, TouchableOpacity,} from 'react-native';
import Accoy from './year';
import Accogh from './hall';

// or any pure javascript modules available in npm

const listTab = [
  {
    choice: 'Guest House',
  },
  {
    choice: 'Year',
  },
];

const data = [
  {
    choice: 'Guest House',
    display: <Accogh />,
  },
  {
    choice: 'Year',
    display: <Accoy />,
  },
];

const data2 = [
  {
    choice: 'Guest House',
    display: <Accogh />,
  },
];

export default function App() {
  const [choice, setChoice] = useState('Guest House');
  const [datalist, setDatalist] = useState(data2);
  const setChoiceFilter = (choice) => {
    setDatalist([...data.filter((e) => e.choice === choice)]);
    setChoice(choice);
  };

  const renderItem = ({ item, index }) => {
    return (
      <View key={index} style={styles.itemContainer}>
        {item.display}
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
            style={[styles.btnTab, choice === e.choice && styles.btnTabActive]}
            onPress={() => setChoiceFilter(e.choice)}>
            <Text
              style={(styles.textTab, choice === e.choice && styles.textTabActive)}>
              {e.choice}
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  listTab: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginBottom: 0.01,
  },
  btnTab: {
    width: Dimensions.get('window').width /2.1,
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius:4,
    borderColor: '#C2CFD8',
    padding: 10,
    justifyContent: 'center',
    opacity: 0.5,
  },
  textTab: {
    fontWeight: "bold",
    fontSize: 20 ,
    color:'black'
  },
  btnTabActive: {
    backgroundColor: '#82AAE3',
    borderColor: '#543A3A',
    //borderBottomWidth: 3.5,
    opacity: 1,
  },
  textTabActive: {
    color: 'black',
  },
  itemContainer: {
    flexDirection: 'row',
    paddingVertical: 15,
  },
});
 