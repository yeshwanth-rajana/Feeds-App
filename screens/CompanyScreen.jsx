import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';

function CompanyScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: 'https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=600' }}
        style={styles.imageBackground}
        imageStyle={styles.imageStyle}
      >
        <View style={styles.overlay}>
          <Text style={styles.title}>Welcome!</Text>
          <Text style={styles.description}>
            We are dedicated to innovation and excellence. Our team works tirelessly to bring the best products and services to our customers worldwide.
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
    //width:380,
  },
  imageStyle: {
    opacity: 0.8, // Makes the image slightly transparent for better text readability
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay for readability
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 15,
    textAlign: 'center',
  },
  description: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});

export default CompanyScreen;
