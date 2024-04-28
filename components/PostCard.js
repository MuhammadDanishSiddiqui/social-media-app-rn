import React from 'react';
import {Text, StyleSheet, View, TextInput} from 'react-native';
import {theme} from '../theme';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function PostCard({
  title,
  description,
  username,
  createdAt,
  myPost = false,
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Title: {title}</Text>
      <Text style={styles.description}>{description}</Text>
      <View style={styles.infoContainer}>
        {!myPost && (
          <View style={styles.info}>
            <Icon
              name="user"
              color={theme.colors.secondary}
              style={{marginRight: 5}}
            />
            <Text style={{color: theme.colors.primary}}>{username}</Text>
          </View>
        )}
        <View style={styles.info}>
          <Icon
            name="clock"
            color={theme.colors.secondary}
            style={{marginRight: 5}}
          />
          <Text style={{color: theme.colors.primary}}>{createdAt}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: theme.colors.primary,
    borderBottomWidth: 1,
    paddingBottom: 5,
    borderColor: theme.colors.secondary,
  },
  description: {
    marginTop: 5,
    color: theme.colors.primary,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
