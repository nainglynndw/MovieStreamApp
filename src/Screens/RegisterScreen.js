import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  ScrollView,
} from 'react-native';
import React from 'react';
import {Colors} from '../Theme/Colors';
import CustomInput from '../Components/CustomInput';

const RegisterScreen = ({navigation}) => {
  const gotoLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContainerStyle}
        showsVerticalScrollIndicator={false}>
        <Image
          source={require('../assets/images/logo/logo.png')}
          resizeMode="contain"
          style={styles.logoImg}
        />
        <Text style={styles.title}>Register</Text>
        <CustomInput
          title="Email"
          placeholder="Enter your email ... "
          icon="user"
        />
        <CustomInput
          secureTextEntry={true}
          title="Password"
          placeholder="Enter your password ... "
          icon="lock"
        />
        <Pressable style={styles.btn}>
          <Text style={styles.btnTitle}>Register</Text>
        </Pressable>
        <Text onPress={gotoLogin} style={styles.gotoLogin}>
          Already have an account ?
        </Text>
      </ScrollView>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  scrollContainerStyle: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  logoImg: {
    width: 100,
    height: 100,
    alignSelf: 'flex-start',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.black,
    alignSelf: 'flex-start',
    marginLeft: 20,
  },
  forgotPassword: {
    marginTop: 20,
    color: Colors.grey,
  },
  btn: {
    width: 100,
    height: 40,
    backgroundColor: Colors.backgroundColor,
    borderRadius: 20,
    elevation: 3,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  btnTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.white,
  },
  gotoLogin: {
    color: Colors.secondaryColor,
    marginTop: 20,
  },
});
