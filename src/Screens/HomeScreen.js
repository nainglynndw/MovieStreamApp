import {Image, StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import {Colors} from '../Theme/Colors';
import CategoryContainer from '../Components/CategoryContainer';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            source={require('../assets/images/logo/logo.png')}
            style={styles.logoImg}
            resizeMode="contain"
          />
          <Text style={styles.appTitle}>Movie Stream App</Text>
          <View style={styles.logoImg} />
        </View>
        <CategoryContainer />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    width: '100%',
    flex: 1,
  },
  header: {
    backgroundColor: Colors.backgroundColor,
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logoImg: {
    width: 70,
    height: 70,
  },
  appTitle: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
