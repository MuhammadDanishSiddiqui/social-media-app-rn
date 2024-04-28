import React, {useState} from 'react';
import {Text, StyleSheet, View, ScrollView, Alert, Image} from 'react-native';
import {theme} from '../theme';
import Footer from '../components/Footer';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';

export default function Create() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    Alert.alert('Validation Error', 'Please fill all fields');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create</Text>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        style={{width: '100%'}}
        // contentContainerStyle={{
        //   flex: 1,
        //   justifyContent: 'center',
        // }}
      >
        <View style={styles.postListContainer}>
          <CustomInput
            label={'Title'}
            placeholder={'Enter title'}
            onChangeText={text => setTitle(text)}
            value={title}
          />
          <CustomInput
            label={'Description'}
            placeholder={'Enter description'}
            onChangeText={text => setDescription(text)}
            value={description}
          />
          <CustomButton title={'Create Post'} onPress={handleSubmit} />
        </View>
      </ScrollView>
      <View
        style={{
          width: '100%',
          // flex: 1,
          justifyContent: 'flex-end',
          height: 'auto',
        }}>
        <Footer />
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
    fontSize: 20,
    color: theme.colors.secondary,
    fontWeight: 'bold',
  },
  postListContainer: {
    marginTop: 10,
  },
});
