import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {getImageColors} from 'react-native-image-colors';

const mockData = {
  backgroundImage:
    'https://images.pexels.com/photos/1658967/pexels-photo-1658967.jpeg?auto=compress&cs=tinysrgb&w=600',
  profileImage:
    'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600',
  name: 'Dr. Vishnu Reddy',
  role: 'ENT',
  location: 'Hyderabad, India',
  followers: 70060,
  description: 'Talks about MicroSurgery, ENT, etc...',
  hashtags: '#MicroSurgery #ENT #ENT',
  feedImages: [
    'https://images.pexels.com/photos/159211/headache-pain-pills-medication-159211.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/4047077/pexels-photo-4047077.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/1436102/pexels-photo-1436102.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/20427308/pexels-photo-20427308/free-photo-of-entrance-of-hotel-le-bellevue-in-biarritza.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    'https://images.pexels.com/photos/27531110/pexels-photo-27531110/free-photo-of-turkish-coffee.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    'https://images.pexels.com/photos/27586893/pexels-photo-27586893/free-photo-of-station.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    'https://images.pexels.com/photos/4167542/pexels-photo-4167542.jpeg?auto=compress&cs=tinysrgb&w=600',
  ],
};

const PersonalScreen = ({navigation}) => {
  const [bgColor, setBgColor] = useState('#000');

  useEffect(() => {
    const fetchColors = async () => {
      const result = await getImageColors(mockData.profileImage, {
        fallback: '#000',
        quality: 'low',
      });

      setBgColor(result.average || '#000');
    };

    fetchColors();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <ImageBackground
        source={{uri: mockData.backgroundImage}}
        style={[styles.backgroundContainer, {backgroundColor: bgColor}]}
      >
        <View style={styles.overlay}></View>

        {/* Top Tabs */}
        <View style={styles.topTabs}>
          <TouchableOpacity
            style={styles.tabButton}
            onPress={() => navigation.navigate('Personal')}
          >
            <Text style={styles.tabButtonText}>Personal</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.tabButton}
            onPress={() => navigation.navigate('Professional')}
          >
            <Text style={styles.tabButtonText}>Professional</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.tabButton}
            onPress={() => navigation.navigate('Company')}
          >
            <Text style={styles.tabButtonText}>Company</Text>
          </TouchableOpacity>
        </View>

        {/* Followers Section */}
        <View style={styles.followersSection}>
          <Text style={styles.followersText}>
            <Image
              source={{uri: 'https://img.icons8.com/?size=256w&id=19411&format=png'}}
              style={styles.followersImage}
            />
            <Text> </Text>
            {mockData.followers} followers
          </Text>

          {/* Follow and Share Button Container */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.followersText}>Follow</Text>
            </TouchableOpacity>
            <View style={styles.dot}>
              <Text>|</Text>
            </View>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.followersText}>Share</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Profile Header */}
        <View style={styles.profileHeader}>
          <View style={styles.profileTextContainer}>
            <Text style={styles.name}>{mockData.name}</Text>
            <Text style={styles.role}>{mockData.role}</Text>
            <Text style={styles.location}>
              <Image
                source={{uri: 'https://img.icons8.com/?size=48&id=13778&format=png'}}
                style={styles.followersImage}
              />{' '}
              {mockData.location}
            </Text>
            <Text style={styles.description}>{mockData.description}</Text>
            <Text style={styles.hashtags}>{mockData.hashtags}</Text>
          </View>
          <View style={styles.profileImageContainer}>
            <Image
              source={{uri: mockData.profileImage}}
              style={styles.profileImage}
            />
            <Image
              source={{
                uri: 'https://img.icons8.com/ios-filled/50/228BE6/instagram-verification-badge.png',
              }}
              style={styles.badgeImage}
            />
          </View>
        </View>
      </ImageBackground>

      {/* Feed Grid */}
      <View style={styles.feedGrid}>
        {mockData.feedImages.map((feed, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => navigation.navigate('FeedDetail', {feed})}
          >
            <Image source={{uri: feed}} style={styles.feedItem} />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    alignItems: 'center',
    paddingBottom: 20,
    backgroundColor: '#000',
  },
  backgroundContainer: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: 20,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topTabs: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 8,
    paddingHorizontal: 12,
  },
  tabButton: {
    paddingVertical: 6,
    paddingHorizontal: 16,
    marginHorizontal: 5,
    backgroundColor: 'orange',
    borderRadius: 10,
  },
  tabButtonText: {
    fontSize: 15,
    fontWeight: '800',
    color: '#333',
  },
  followersSection: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginTop: 20,
    marginBottom: 20,
    paddingHorizontal: 20,
    width: '100%',
  },
  followersImage: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  followersText: {
    fontSize: 15,
    color: '#fff',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    marginVertical: 10,
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 60,
    backgroundColor: 'transparent',
    width: '40%',
    alignSelf: 'flex-start',
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
    backgroundColor: 'transparent',
    borderRadius: 10,
  },
  dot: {
    color: 'white',
  },
  profileHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  profileTextContainer: {
    flex: 1,
    marginRight: 15,
  },
  profileImageContainer: {
    position: 'relative',
    justifyContent: 'center',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 120,
    borderWidth: 3,
    borderColor: 'black',
  },
  badgeImage: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 20,
    height: 20,
  },
  name: {
    marginTop: 100,
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: -15,
  },
  role: {
    fontSize: 18,
    color: '#fff',
    marginLeft: -15,
  },
  location: {
    fontSize: 18,
    color: '#fff',
    marginLeft: -15,
  },
  description: {
    fontSize: 15,
    marginTop: 10,
    color: '#fff',
    textAlign: 'left',
    marginLeft: -15,
  },
  hashtags: {
    fontSize: 14,
    marginTop: 5,
    color: '#fff',
    marginLeft: -15,
  },
  feedGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    backgroundColor: 'white',
  },
  feedItem: {
    width: 130,
    height: 150,
    borderWidth: 5,
  },
});

export default PersonalScreen;
