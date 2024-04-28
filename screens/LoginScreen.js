import React, {useState} from 'react';
import {Text, StyleSheet, View, Alert, TouchableOpacity} from 'react-native';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import {theme} from '../theme';
import {SCREENS} from '../constants/screens';

export default function LoginScreen({navigation}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    navigation.replace(SCREENS.HOME);
    // Alert.alert('Validation Error', 'Please fill all fields');
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
          <TouchableOpacity onPress={() => navigation.navigate(SCREENS.SIGNUP)}>
            <Text style={{color: theme.colors.primary}}>
              Don't have an account ? <Text style={styles.signup}>Sign Up</Text>
            </Text>
          </TouchableOpacity>
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
    color: theme.colors.secondary,
    fontWeight: 'bold',
  },
  formContainer: {
    width: '100%',
  },
  signup: {
    color: theme.colors.secondary,
    fontWeight: 'bold',
  },
});
