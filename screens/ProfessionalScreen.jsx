import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';

function ProfessionalScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: 'https://images.pexels.com/photos/3184463/pexels-photo-3184463.jpeg?auto=compress&cs=tinysrgb&w=600' }}
        style={styles.imageBackground}
        imageStyle={styles.imageStyle}
      >
        <View style={styles.overlay}>
          <Text style={styles.title}>Professional Excellence</Text>
          <Text style={styles.description}>
            Committed to delivering top-notch professional services, our team leverages expertise and innovation to drive success across industries.
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    opacity: 0.7, // Slight transparency to enhance text visibility
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Darker overlay for contrast
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});

export default ProfessionalScreen;
