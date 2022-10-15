/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useEffect} from 'react';
import {Colors} from '../Theme/Colors';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [{name: 'Login'}],
      });
    }, 3000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/logo/logo.png')}
        resizeMode="contain"
        style={styles.img}
      />
      <Text style={styles.appTitle}>Movie Stream App</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
  img: {
    width: 200,
    height: 200,
  },
  appTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.black,
  },
});
