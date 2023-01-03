import React from 'react';
import{useState} from 'react';
import {StyleSheet, Text, View, Dimensions, FlatList, SafeAreaView, TouchableOpacity,} from 'react-native';
import Dayone from './components/Dayone';
import Daytwo from './components/Daytwo';
import Daythree from './components/Daythree';

const listTab = [
  {
    choice: '6th Jan',
  },
  {
    choice: '7th Jan',
  },
  {
    choice: '8th Jan',
  },
];

const data = [
  {
    choice: '6th Jan',
     display: <Dayone/>,
  },
   {
     choice: '7th Jan',
     display: <Daytwo />,
   },
  {
    choice: '8th Jan',
    display: <Daythree />,
  },
];

const data2 = [
  {
    choice: '6th Jan',
    display: <Dayone />,
  },
];



const Events = () => {
  const [choice, setChoice] = useState('6th Jan');
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
    width: Dimensions.get('window').width /3.1,
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
  },
  btnTabActive: {
    backgroundColor: '#144272',
    borderColor: '#543A3A',
    //borderBottomWidth: 3.5,
    opacity: 1,
  },
  textTabActive: {
    color: 'white',
    fontWeight: "bold",
  },
  itemContainer: {
    flexDirection: 'row',
    paddingVertical: 15,
  },
});

export default Events;