import * as React from 'react';
import { useState } from 'react';
import {StyleSheet, Text, View, Dimensions, FlatList, SafeAreaView, TouchableOpacity,} from 'react-native';


// or any pure javascript modules available in npm
const listTab = [
  {
    year: '1973',
  },
  {
    year: '1983',
  },
  {
    year: '1998',
  },
];

const data = [
  /* 1973 */
{
    name: 'TAPOJYOTI PAL',
    year: '1973',
    gh: 'TGH',
  },
{
    name: 'Jayanta Sengupta',
    year: '1973',
    gh: 'TGH',
  },
{
    name: 'Vimal kumar Fialoke',
    year: '1973',
    gh: 'TGH',
  },
{
    name: 'Debabrata Chakraborti ',
    year: '1973',
    gh: 'TGH',
  },
{
    name: 'Rear Admiral MK Badhwar AVSM VSM IN Retd ',
    year: '1973',
    gh: 'TGH',
  },
{
    name: 'Tuhin Kumar Mukherjee',
    year: '1973',
    gh: 'TGH',
  },
{
    name: 'Dinesh Kumar Jain',
    year: '1973',
    gh: 'TGH',
  },
{
    name: 'SUDHANSHU SHEKHAR BAKSHI',
    year: '1973',
    gh: 'TGH',
  },
{
    name: 'TARUN CHAKRABORTY',
    year: '1973',
    gh: 'TGH',
  },
{
    name: 'SANJOY DASGUPTA',
    year: '1973',
    gh: 'TGH',
  },
{
    name: 'MRINAL KANTI ROY',
    year: '1973',
    gh: 'TGH',
  },
{
    name: 'Kunal Niyogi',
    year: '1973',
    gh: 'TGH',
  },
{
    name: 'ARUNABHA BHATTASALI ',
    year: '1973',
    gh: 'TGH',
  },
{
    name: 'Prahlad Chandra Das',
    year: '1973',
    gh: 'TGH',
  },
{
    name: 'AMITABHA BANERJEE',
    year: '1973',
    gh: 'TGH',
  },
{
    name: 'PARTHA BHATTACHARYA',
    year: '1973',
    gh: 'TGH',
  },
{
    name: 'Sujata Roy',
    year: '1973',
    gh: 'TGH',
  },
{
    name: 'Sourirajan Srinivasan ',
    year: '1973',
    gh: 'TGH',
  },
{
    name: 'Jawaharlal Nehru Karamchetti',
    year: '1973',
    gh: 'TGH',
  },




/* 1974 */
  {
    name: 'Rajesh Pandit',
    year: '1974',
    gh: 'TGH',
  },



/* 1983 */  
  {
    name: 'Rajendra Prasad Vedula',
    year: '1983',
    gh: 'SAM',
  },
  {
    name: 'Debashis Chowdhury',
    year: '1983',
    gh: 'TGH',
  },
  {
    name: 'PRADIP DUTTA',
    year: '1983',
    gh: 'TGH',
  },
  {
    name: 'Nandkumar Rane',
    year: '1983',
    gh: 'TGH',
  },
  {
    name: 'Suvasa C Mahapatra',
    year: '1983',
    gh: 'TGH',
  },
  {
    name: 'Rahul Banerjee',
    year: '1983',
    gh: 'TGH',
  },
  {
    name: 'Sunil Gaitonde',
    year: '1983',
    gh: 'TGH',
  },
  {
    name: 'Jaskan Hemram',
    year: '1983',
    gh: 'TGH',
  },
  {
    name: 'Arijit Das',
    year: '1983',
    gh: 'TGH',
  },
  {
    name: 'Sudhansu Chandra Panigrahi',
    year: '1983',
    gh: 'TGH',
  },
  {
    name: 'Punya Brata Palit',
    year: '1983',
    gh: 'TGH',
  },
  {
    name: 'DEBASHIS SEN',
    year: '1983',
    gh: 'TGH',
  },
  {
    name: 'ARUN KUMAR SARKAR',
    year: '1983',
    gh: 'TGH',
  },
  {
    name: 'Kishore Kanti Majumdar',
    year: '1983',
    gh: 'TGH',
  },
  {
    name: 'Chandra Shekhar Bhaskarabhatta',
    year: '1983',
    gh: 'TGH',
  },
  {
    name: 'Pillalamarri Sridhar',
    year: '1983',
    gh: 'TGH',
  },
  {
    name: 'Rama Prasad Chaudhury',
    year: '1983',
    gh: 'TGH',
  },
  {
    name: 'Gopal Krishna Nayak',
    year: '1983',
    gh: 'TGH',
  },
  {
    name: 'K. Krishnan Unni',
    year: '1983',
    gh: 'TGH',
  },
  {
    name: 'Rajan Kumar Sharma',
    year: '1983',
    gh: 'TGH',
  },
  {
    name: 'Soumya Banerjee',
    year: '1983',
    gh: 'TGH',
  },
  {
    name: 'Bhaskar Mukhopadhyay',
    year: '1983',
    gh: 'TGH',
  },
  {
    name: 'Devendra Jalihal',
    year: '1983',
    gh: 'TGH',
  },
  {
    name: 'Anamika Das',
    year: '1983',
    gh: 'TGH',
  },



  
/* 1984 */
  {
    name: 'Romi R Singh',
    year: '1984',
    gh: 'TGH',
  },




/* 1986 */
  {
    name: 'DB',
    year: '1986',
    gh: 'TGH',
  },



/* 1992 */  
  {
    name: 'Suman Kishore',
    year: '1992',
    gh: 'TGH',
  },


/* 1997 */
    {
        name: 'Abhishek Dhoreliya',
        year: '1992',
        gh: 'TGH',
    },



/* 1998 */
  {
    name: 'Prof Sremmant Basu',
    year: '1998',
    gh: 'TGH',
  },
  {
    name: 'Iiijoh',
    year: '1998',
    gh: 'TGH',
  },
  {
    name: 'Niladri Sekhar Bose',
    year: '1998',
    gh: 'TGH',
  },
  {
    name: 'Rajnil Mallik',
    year: '1998',
    gh: 'TGH',
  },
  {
    name: 'Sripal reddy',
    year: '1998',
    gh: 'TGH',
  },
  {
    name: 'Karthikeyan M',
    year: '1998',
    gh: 'SAM',
  },
  {
    name: 'Pratyush Tiwari ',
    year: '1998',
    gh: 'SAM',
  },
  {
    name: 'Vivek Ratna',
    year: '1998',
    gh: 'TGH',
  },
  {
    name: 'vineet goyal',
    year: '1998',
    gh: 'TGH',
  },
  {
    name: 'Abhisha Shrivastava',
    year: '1998',
    gh: 'TGH',
  },
  {
    name: 'Sharath Kumar Rekhapalli Naga',
    year: '1998',
    gh: 'TGH',
  },
  {
    name: 'Nitin Jyoti',
    year: '1998',
    gh: 'TGH',
  },
  {
    name: 'Suman Nandy',
    year: '1998',
    gh: 'TGH',
  },
  {
    name: 'Chandrika',
    year: '1998',
    gh: 'TGH',
  },
  {
    name: 'Suranjan Ghosh',
    year: '1998',
    gh: 'TGH',
  },
  {
    name: 'Vivekbrata Basu',
    year: '1998',
    gh: 'TGH',
  },
  {
    name: 'Udyan Kumar',
    year: '1998',
    gh: 'TGH',
  },
  {
    name: 'Suman Sharma',
    year: '1998',
    gh: 'TGH',
  },
  {
    name: 'Raveendranath Kamath',
    year: '1998',
    gh: 'TGH',
  },
  {
    name: 'Archi Bagchi',
    year: '1998',
    gh: 'TGH',
  },
  {
    name: 'Ajay Gautam',
    year: '1998',
    gh: 'TGH',
  },
  {
    name: 'Dibyajyoti Banerjee',
    year: '1998',
    gh: 'TGH',
  },
  {
    name: 'Rajarshi Das',
    year: '1998',
    gh: 'TGH',
  },
  {
    name: 'Avik Kumar Pal',
    year: '1998',
    gh: 'TGH',
  },
  {
    name: 'Sushant Upadhyay',
    year: '1998',
    gh: 'TGH',
  },
  {
    name: 'Naveen Gupta',
    year: '1998',
    gh: 'TGH',
  },
  {
    name: 'Arunav Kumar Verma',
    year: '1998',
    gh: 'TGH',
  },
  {
    name: 'Niladri Banerjee',
    year: '1998',
    gh: 'TGH',
  },
  {
    name: 'Adarsh Das',
    year: '1998',
    gh: 'TGH',
  },
  {
    name: 'Sumit Dev',
    year: '1998',
    gh: 'TGH',
  },
  {
    name: 'Neeraj Jewalkar',
    year: '1998',
    gh: 'TGH',
  },
  {
    name: 'Saurabh Prasad',
    year: '1998',
    gh: 'TGH',
  },
  {
    name: 'Rhishi Pethe',
    year: '1998',
    gh: 'TGH',
  },
  {
    name: 'Anshuman Anshuman',
    year: '1998',
    gh: 'TGH',
  },
  {
    name: 'Saurabh Mukherjee',
    year: '1998',
    gh: 'TGH',
  },
  {
    name: 'Arindam Bhattacharya',
    year: '1998',
    gh: 'TGH',
  },
  {
    name: 'Johny C Paul',
    year: '1998',
    gh: 'TGH',
  },
  {
    name: 'Dipak Singh',
    year: '1998',
    gh: 'TGH',
  },
  {
    name: 'Anirvan Saha',
    year: '1998',
    gh: 'TGH',
  },
  {
    name: 'Jyoti Jain',
    year: '1998',
    gh: 'TGH',
  },
  {
    name: 'Vineet goyal',
    year: '1998',
    gh: 'TGH',
  },
  {
    name: 'Amitabh Banerjee ',
    year: '1998',
    gh: 'TGH',
  },
  {
    name: 'Radha Iyer',
    year: '1998',
    gh: 'TGH',
  },
  {
    name: 'P.D.Sundar',
    year: '1998',
    gh: 'TGH',
  },
  {
    name: 'Amit Singh',
    year: '1998',
    gh: 'TGH',
  },
  {
    name: 'Chakradhar Reddy Gampala ',
    year: '1998',
    gh: 'TGH',
  },
  {
    name: 'Vishwanath Mantha',
    year: '1998',
    gh: 'TGH',
  },
  {
    name: 'Mainak Biswas',
    year: '1998',
    gh: 'TGH',
  },
  {
    name: 'Saurabh Tandon',
    year: '1998',
    gh: 'TGH',
  },
  {
    name: 'Lokesh Gakhar',
    year: '1998',
    gh: 'TGH',
  },
  {
    name: 'Pradish Mathews',
    year: '1998',
    gh: 'TGH',
  },
  {
    name: 'Gautam Goenka',
    year: '1998',
    gh: 'TGH',
  },
  {
    name: 'Krishan Gopal Dhall',
    year: '1998',
    gh: 'TGH',
  },
  {
    name: 'Sadiq Shaik',
    year: '1998',
    gh: 'TGH',
  },
  {
    name: 'Shibabrata Mondal',
    year: '1998',
    gh: 'TGH',
  },
  {
    name: 'RAJESH KUMAR CHOUDHARY',
    year: '1998',
    gh: 'TGH',
  },
  {
    name: 'Abhishek Saraf',
    year: '1998',
    gh: 'TGH',
  },
  {
    name: 'Bikram Banerjee',
    year: '1998',
    gh: 'TGH',
  },
  {
    name: 'Ritesh Singh',
    year: '1998',
    gh: 'TGH',
  },
  {
    name: 'Sujoyjeet Mondal',
    year: '1998',
    gh: 'TGH',
  },
  {
    name: 'Nishit Kumar',
    year: '1998',
    gh: 'TGH',
  },
  {
    name: 'Binay Kumar Pathak',
    year: '1998',
    gh: 'TGH',
  },
  {
    name: 'Raghunath Tripasuri',
    year: '1998',
    gh: 'TGH',
  },
  {
    name: 'Sanjit Kumar Adhya',
    year: '1998',
    gh: 'TGH',
  },
  {
    name: 'Aniket Manohar Shende',
    year: '1998',
    gh: 'TGH',
  },
  {
    name: 'Chandrasekhar KG',
    year: '1998',
    gh: 'TGH',
  },
  {
    name: 'Kanishka Lahiri',
    year: '1998',
    gh: 'TGH',
  },
  {
    name: 'Himanshu Bhatnagar',
    year: '1998',
    gh: 'TGH',
  },
  {
    name: 'Koushik Kumar Das',
    year: '1998',
    gh: 'TGH',
  },
  {
    name: 'Bivash Karjee',
    year: '1998',
    gh: 'TGH',
  },
  {
    name: 'SUMIT PAL',
    year: '1998',
    gh: 'TGH',
  },
  {
    name: 'Aasheesh Chhiber',
    year: '1998',
    gh: 'TGH',
  },
  {
    name: 'Prateek Solapurker',
    year: '1998',
    gh: 'TGH',
  },
  {
    name: 'Siva Vanapalli',
    year: '1998',
    gh: 'TGH',
  },
  {
    name: 'Rohit Singh',
    year: '1998',
    gh: 'TGH',
  },
  {
    name: 'Dr Shirish M Kerur ',
    year: '1998',
    gh: 'SAM',
  },
  {
    name: 'Subramanya Shankar',
    year: '1998',
    gh: 'TGH',
  },
  {
    name: 'Chandrakanth Prasanna',
    year: '1998',
    gh: 'TGH',
  },
  {
    name: 'Poushali Biswas Jha',
    year: '1998',
    gh: 'TGH',
  },




/* 1999 */
  {
    name: 'Srivatsava sunkara',
    year: '1999',
    gh: 'TGH',
  },
  {
    name: 'MANISH KUMAR',
    year: '1999',
    gh: 'TGH',
  },
  {
    name: 'Ramana reddy ',
    year: '1999',
    gh: 'TGH',
  },
  {
    name: 'Padam Singh',
    year: '1999',
    gh: 'TGH',
  },
  {
    name: 'Saket Sarraf',
    year: '1999',
    gh: 'TGH',
  },
  {
    name: 'Rohit Singh',
    year: '1999',
    gh: 'TGH',
  },
  {
    name: 'Vishal Sureka',
    year: '1999',
    gh: 'TGH',
  },
];

const data2 = [
/* 1973 */
{
    name: 'TAPOJYOTI PAL',
    year: '1973',
    gh: 'TGH',
  },
{
    name: 'Jayanta Sengupta',
    year: '1973',
    gh: 'TGH',
  },
{
    name: 'Vimal kumar Fialoke',
    year: '1973',
    gh: 'TGH',
  },
{
    name: 'Debabrata Chakraborti ',
    year: '1973',
    gh: 'TGH',
  },
{
    name: 'Rear Admiral MK Badhwar AVSM VSM IN Retd ',
    year: '1973',
    gh: 'TGH',
  },
{
    name: 'Tuhin Kumar Mukherjee',
    year: '1973',
    gh: 'TGH',
  },
{
    name: 'Dinesh Kumar Jain',
    year: '1973',
    gh: 'TGH',
  },
{
    name: 'SUDHANSHU SHEKHAR BAKSHI',
    year: '1973',
    gh: 'TGH',
  },
{
    name: 'TARUN CHAKRABORTY',
    year: '1973',
    gh: 'TGH',
  },
{
    name: 'SANJOY DASGUPTA',
    year: '1973',
    gh: 'TGH',
  },
{
    name: 'MRINAL KANTI ROY',
    year: '1973',
    gh: 'TGH',
  },
{
    name: 'Kunal Niyogi',
    year: '1973',
    gh: 'TGH',
  },
{
    name: 'ARUNABHA BHATTASALI ',
    year: '1973',
    gh: 'TGH',
  },
{
    name: 'Prahlad Chandra Das',
    year: '1973',
    gh: 'TGH',
  },
{
    name: 'AMITABHA BANERJEE',
    year: '1973',
    gh: 'TGH',
  },
{
    name: 'PARTHA BHATTACHARYA',
    year: '1973',
    gh: 'TGH',
  },
{
    name: 'Sujata Roy',
    year: '1973',
    gh: 'TGH',
  },
{
    name: 'Sourirajan Srinivasan ',
    year: '1973',
    gh: 'TGH',
  },
{
    name: 'Jawaharlal Nehru Karamchetti',
    year: '1973',
    gh: 'TGH',
  },
];

const Accoy = () => {
  const [year, setYear] = useState();
  const [datalist, setDatalist] = useState();
  const setYearFilter = (year) => {
    setDatalist([...data.filter((e) => e.year === year)]);
    setYear(year);
  };

  const renderItem = ({ item, index }) => {
    return (
      <View key={index} style={styles.itemContainer}>
        <Text> {item.name} </Text>
        <Text> {item.gh} </Text>
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
            style={[styles.btnTab, year === e.year && styles.btnTabActive]}
            onPress={() => setYearFilter(e.year)}>
            <Text
              style={(styles.textTab, year === e.year && styles.textTabActive)}>
              {e.year}
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

export default Accoy;

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  listTab:{
    flexDirection: 'row',
    alignSelf: 'center',
    marginBottom: 20, 
  },
  btnTab:{
    width: Dimensions.get('window').width / 3.15,
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius:4,
    borderColor: '#205295',
    padding: 10,
    justifyContent: 'center',
    opacity: 0.5,
    color:'black'
  },
  textTab:{
    fontSize: 16,
    color:'black'
     
  },
  btnTabActive:{
    backgroundColor: '#205295',
    borderColor: '#2C74B3',
    //borderBottomWidth: 3.5,
    opacity: 1,
  },
  textTabActive:{
    color: 'white',
  },
  itemContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor:'#2C74B3',
    backgroundOpacity: 0.1,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 15,
    fontWeight:'bold',
    color:'black'
  }
})