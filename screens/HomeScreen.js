import React from 'react';
import {Text, StyleSheet, View, ScrollView} from 'react-native';
import {theme} from '../theme';
import PostCard from '../components/PostCard';
import Footer from '../components/Footer';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Total Posts: 6</Text>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        style={{width: '100%'}}>
        <View style={styles.postListContainer}>
          <PostCard
            title={'first post'}
            description={'some test description for post'}
            username={'test'}
            createdAt={'04.02.2023'}
          />
          <PostCard
            title={'first post'}
            description={'some test description for post'}
            username={'test'}
            createdAt={'04.02.2023'}
          />
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
