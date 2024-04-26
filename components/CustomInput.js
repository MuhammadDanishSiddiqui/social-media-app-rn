import React from 'react';
import {Text, StyleSheet, View, TextInput} from 'react-native';

export default function CustomInput({
  label,
  placeholder,
  onChangeText,
  secureTextEntry = false,
  value,
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
  },
  input: {
    borderWidth: 1,
    fontSize: 16,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginTop: 10,
  },
});
