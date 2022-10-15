/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import {Colors} from '../Theme/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';

const CustomInput = ({title, placeholder, icon, secureTextEntry}) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.inputTitle}>{title}</Text>
      <View style={styles.bottomRowContainer}>
        <TextInput
          secureTextEntry={secureTextEntry}
          placeholder={placeholder}
          style={styles.input}
          placeholderTextColor={Colors.grey}
        />
        <Icon name={icon} color={Colors.black} size={30} />
      </View>
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    padding: 20,
    borderRadius: 10,
    elevation: 2,
    backgroundColor: Colors.white,
    marginTop: 20,
  },
  inputTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.black,
  },
  bottomRowContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderBottomColor: Colors.grey,
    borderBottomWidth: 1,
    flex: 1,
    color: Colors.black,
  },
});
