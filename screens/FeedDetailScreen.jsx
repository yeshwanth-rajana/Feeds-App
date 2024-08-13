import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';

const FeedDetailScreen = ({ route }) => {
  const { feed } = route.params;

  // Dummy data for likes and comments
  const likes = 123;
  const comments = 45;

  return (
    <View style={styles.container}>
      <Image source={{ uri: feed }} style={styles.image} />

      <View style={styles.iconContainer}>
        {/* Like Button */}
        <TouchableOpacity style={styles.iconButton}>
          <Image
            source={{ uri: 'https://img.icons8.com/ios-filled/50/ff0000/like.png' }}
            style={styles.icon}
          />
          <Text style={styles.iconLabel}>{likes}</Text>
        </TouchableOpacity>
        
        {/* Comment Button */}
        <TouchableOpacity style={styles.iconButton}>
          <Image
            source={{ uri: 'https://cdn-icons-png.flaticon.com/128/1947/1947247.png' }}
            style={styles.icon}
          />
          <Text style={styles.iconLabel}>{comments}</Text>
        </TouchableOpacity>

        {/* Share Button */}
        <TouchableOpacity style={styles.iconButton}>
          <Image
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2099/2099085.png' }}
            style={styles.icon}
          />
          <Text style={styles.iconLabel}>Share</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '60%',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
    marginTop: 20,
  },
  iconButton: {
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  icon: {
    width: 30,
    height: 30,
  },
  iconLabel: {
    marginTop: 5,
    fontSize: 14,
    color: '#000',
  },
});

export default FeedDetailScreen;
