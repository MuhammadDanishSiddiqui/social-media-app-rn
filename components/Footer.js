import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import {theme} from '../theme';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {SCREENS} from '../constants/screens';
import {useNavigation, useRoute} from '@react-navigation/native';

export default function Footer() {
  const route = useRoute();
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate(SCREENS.HOME)}>
        <View style={styles.menu}>
          <Icon
            name="home"
            color={
              route.name == SCREENS.HOME
                ? theme.colors.secondary
                : theme.colors.primary
            }
            size={20}
          />
          <Text
            style={{
              fontWeight: 'bold',
              color:
                route.name == SCREENS.HOME
                  ? theme.colors.secondary
                  : theme.colors.primary,
            }}>
            Home
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate(SCREENS.CREATE)}>
        <View style={styles.menu}>
          <Icon
            name="plus-circle"
            color={
              route.name == SCREENS.CREATE
                ? theme.colors.secondary
                : theme.colors.primary
            }
            size={20}
          />
          <Text
            style={{
              fontWeight: 'bold',
              color:
                route.name == SCREENS.CREATE
                  ? theme.colors.secondary
                  : theme.colors.primary,
            }}>
            Create
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate(SCREENS.MYPOSTS)}>
        <View style={styles.menu}>
          <Icon
            name="list"
            color={
              route.name == SCREENS.MYPOSTS
                ? theme.colors.secondary
                : theme.colors.primary
            }
            size={20}
          />
          <Text
            style={{
              fontWeight: 'bold',
              color:
                route.name == SCREENS.MYPOSTS
                  ? theme.colors.secondary
                  : theme.colors.primary,
            }}>
            My Posts
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate(SCREENS.ACCOUNT)}>
        <View style={styles.menu}>
          <Icon
            name="user"
            color={
              route.name == SCREENS.ACCOUNT
                ? theme.colors.secondary
                : theme.colors.primary
            }
            size={20}
          />
          <Text
            style={{
              fontWeight: 'bold',
              color:
                route.name == SCREENS.ACCOUNT
                  ? theme.colors.secondary
                  : theme.colors.primary,
            }}>
            Account
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  menu: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
