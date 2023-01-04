import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  Image,
  TextInput,
  Button,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { black } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';
import {AuthContext} from './context';
const Login = () => {
  const [email, onChangeEmail] = React.useState(null);
  const [password, onChangePassword] = React.useState(null);
  // const navigation = useNavigation();

  const {login} = React.useContext(AuthContext);

  async function loginfn() {
   console.log(email, password);
    try {
      login(email, password);
    } catch (error) {
      console.log(error, 'error');
    }
  }
  return (
    <ScrollView>
    <View style={styles.container}>
      <Image
        style={{
          resizeMode: 'contain',
          height: 200,
          width: 350,
          marginTop: 30,
        }}
        source={require('../images/main-login.png')}
      />
      <Text style={styles.text}>ANNUAL ALUMNI MEET</Text>
      <Image
        style={{
          resizeMode: 'contain',
          height: 50,
          width: 50,
          marginTop: 20,
          marginBottom: 10,
          marginLeft: 150,
        }}
        source={require('../images/login-img.png')}
      />

      <SafeAreaView>
        <Text style={styles.email}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={onChangeEmail}
        />

        <Text style={styles.email}>Password YYYY</Text>
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={onChangePassword}
        />
      </SafeAreaView>
      <Button
        style={styles.button}
        title="LOGIN"
        color="skyblue"
        onPress={() => {
          console.log('text before login');
          loginfn();
        }}
      />
      <Text style={styles.texts1}>Put Dob as Password (YYYY-MM-DD) </Text>
    </View></ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginHorizontal: 16,
    padding: 5,
    //  border:234 solid black,
  },
  text: {
    color: 'black',
    fontSize:28,
    fontWeight: 'bold',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 34,
    elevation: 3,
    backgroundColor: 'black',
  },

  texts: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    textDecorationLine: 'underline',
    color: 'grey',
    paddingTop: 7,
  },

  input: {
    borderRadius: 13,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    marginBottom: 38,
    color: "black",
    
  },

  texts1: {
    fontSize: 15,
    marginTop: 21,
    textAlign: 'center',
    color: '#6B728E',
    // textDecorationLine: 'underline',
  },

  email: {
    marginLeft: 23,
    color:"black",
  },
});

export default Login;
