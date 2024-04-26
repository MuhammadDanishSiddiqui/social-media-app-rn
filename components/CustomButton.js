import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';

export default function CustomButton({title, onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#9F29D7',
    padding: 10,
    borderRadius: 50,
  },
  title: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
