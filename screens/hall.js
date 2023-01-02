import React from 'react';
import {useState} from 'react';
import { StyleSheet, Text, View, Dimensions, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';
import axios from 'axios'

async function getData(){
  try{
    const response=await axios.get('localhost:5000/acco');
    console.log(response.data);
  }catch(error){
    console.error(error);
  }
}

getData();

// or any pure javascript modules available in npm


const Accogh = () => {

  const listTab = [
    {
      gh: 'TGH',
    },
    {
      gh: 'SAM',
    },
  ];
  
  const data = [
    {
      name: 'Luffy',
      year: '1973',
      gh: 'TGH',
    },
    {
      name: 'Naruto',
      year: '1983',
      gh: 'SAM',
    },
    {
      name: 'Goku',
      year: '1998',
      gh: 'TGH',
    },
    {
      name: 'Sasuke',
      year: '1983',
      gh: 'SAM',
    }
  ];
  
  const data2 = [
    {
      name: 'Luffy',
      year: '1973',
      gh: 'TGH',
    },
    {
      name: 'Goku',
      year: '1998',
      gh: 'TGH',
    },
];

  
  const [gh, setGh] = useState()
  const [datalist, setDatalist] = useState()
  const setGhFilter = gh => { 
      setDatalist([...data.filter(e => e.gh === gh)])
      setGh(gh)
  }

  const renderItem = ({item, index}) => {
    return(
      <View key={index} style={styles.itemContainer}>
        <Text> {item.name} </Text>
      </View> 
    )
  }

  const separator = () =>{
    return (
      <View style={{height:1}} />
    )
  }

  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.listTab}>{
        listTab.map(e => (
          <TouchableOpacity 
          style={[styles.btnTab, gh === e.gh && styles.btnTabActive]} 
          onPress={() => setGhFilter(e.gh)}
          >
          <Text style = {[styles.textTab, gh === e.gh && styles.textTabActive]}>
            {e.gh}
          </Text>
        </TouchableOpacity>) ) 
      }
      </View>
      <FlatList
        data = {datalist}
        keyExtractor={(e, i) => i.toString() }
        renderItem = {renderItem}
        ItemSeparatorComponent = {separator}
      />
    </SafeAreaView>
  )
}

export default Accogh


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  listTab: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginBottom: 20,
  },
  btnTab: {
    width: Dimensions.get('window').width /2.15,
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius:4,
    borderColor: '#C2CFD8',
    padding: 10,
    justifyContent: 'center',
    opacity: 0.5,
  },
  textTab: {
    fontSize: 20 ,
  },
  btnTabActive: {
    backgroundColor: '#91D8E4',
    borderColor: '#543A3A',
    opacity: 1,
  },
  textTabActive: {

  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#EAFDFC',
    backgroundOpacity: 0.1,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15, 
    paddingVertical: 15,
  },
});