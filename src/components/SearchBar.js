/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View, TextInput, StyleSheet} from 'react-native';

const SearchBar = (props) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={props.placeholder}
        onChangeText={(value) => props.onSearch(value)}
      />
    </View>
  );
};

export {SearchBar};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#d0d0d0',
    margin: 10,
    padding: 10,
    borderRadius: 5,
  },
});
