// // src/screens/FeedListScreen.js
// import React from 'react';
// import {View, FlatList, TouchableOpacity, Image, StyleSheet} from 'react-native';
// import {useNavigation} from '@react-navigation/native';

// const FeedListScreen = () => {
//   const navigation = useNavigation();

//   const feeds = [
//     {
//       image: 'https://images.pexels.com/photos/159211/headache-pain-pills-medication-159211.jpeg?auto=compress&cs=tinysrgb&w=600',
//       description: 'This is the description for image 1',
//     },
//     {
//       image: 'https://images.pexels.com/photos/4047077/pexels-photo-4047077.jpeg?auto=compress&cs=tinysrgb&w=600',
//       description: 'This is the description for image 2',
//     },
//     // Add more feed objects as needed
//   ];

//   const renderItem = ({item}) => (
//     <TouchableOpacity onPress={() => navigation.navigate('FeedDetailScreen', {feed: item})}>
//       <Image source={{uri: item.image}} style={styles.feedImage} />
//     </TouchableOpacity>
//   );

//   return (
//     <FlatList
//       data={feeds}
//       renderItem={renderItem}
//       keyExtractor={(item, index) => index.toString()}
//     />
//   );
// };

// const styles = StyleSheet.create({
//   feedImage: {
//     width: '100%',
//     height: 200,
//   },
// });

// export default FeedListScreen;
