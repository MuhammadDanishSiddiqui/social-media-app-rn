import React, {useState} from 'react';
import {Text, StyleSheet, View, Alert} from 'react-native';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';

export default function LoginScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    Alert.alert('Validation Error', 'Please fill all fields');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <View style={styles.formContainer}>
        <CustomInput
          label={'Name'}
          placeholder={'Enter your name'}
          onChangeText={text => setName(text)}
          value={name}
        />
        <CustomInput
          label={'Email'}
          placeholder={'Enter your email'}
          onChangeText={text => setEmail(text)}
          value={email}
        />
        <CustomInput
          label={'Password'}
          placeholder={'Enter your password'}
          onChangeText={text => setPassword(text)}
          value={password}
          secureTextEntry
        />
        <CustomButton title={'Login'} onPress={handleSubmit} />
        <View style={{marginVertical: 15, alignItems: 'center'}}>
          <Text>
            Don't have an account ? <Text style={styles.signup}>Sign Up</Text>
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
  title: {
    fontSize: 30,
    color: '#9F29D7',
    fontWeight: 'bold',
  },
  formContainer: {
    width: '100%',
  },
  signup: {
    color: '#9F29D7',
    fontWeight: 'bold',
  },
});
