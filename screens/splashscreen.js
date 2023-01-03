import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const SplashScreen = () => {
  useEffect(() => {
    setTimeout(() => {
      // Navigate to the main screen
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/logo.png')}
        style={styles.splashImage}
      />
      <Text style={styles.splashText}>Welcome to my app!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  splashImage: {
    width: 200,
    height: 200,
  },
  splashText: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 20,
  },
});

export default SplashScreen;