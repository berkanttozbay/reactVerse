import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const CommunityScreen = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: 'John Doe',
      title: 'My First React Native App',
      description: 'Just launched my weather app using React Native!',
      likes: 24,
      comments: 8,
      imageUrl: 'https://api.a0.dev/assets/image?text=weather%20app%20mobile%20ui&aspect=16:9'
    },
    {
      id: 2,
      author: 'Jane Smith',
      title: 'E-commerce Template',
      description: 'Created a reusable e-commerce template with React Native',
      likes: 45,
      comments: 12,
      imageUrl: 'https://api.a0.dev/assets/image?text=ecommerce%20app%20mobile%20ui&aspect=16:9'
    }
  ]);

  const handleLike = (postId) => {
    setPosts(posts.map(post => 
      post.id === postId ? {...post, likes: post.likes + 1} : post
    ));
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Community Projects</Text>
      </View>

      {posts.map(post => (
        <View key={post.id} style={styles.postCard}>
          <View style={styles.authorSection}>
            <MaterialCommunityIcons name="account-circle" size={40} color="#4c669f" />
            <Text style={styles.authorName}>{post.author}</Text>
          </View>
          
          <Text style={styles.postTitle}>{post.title}</Text>
          <Text style={styles.postDescription}>{post.description}</Text>
          
          <Image source={{ uri: post.imageUrl }} style={styles.postImage} />
          
          <View style={styles.interactionBar}>
            <TouchableOpacity 
              style={styles.interactionButton}
              onPress={() => handleLike(post.id)}
            >
              <MaterialCommunityIcons name="heart" size={24} color="#4c669f" />
              <Text style={styles.interactionText}>{post.likes}</Text>
            </TouchableOpacity>
            
            <View style={styles.interactionButton}>
              <MaterialCommunityIcons name="comment" size={24} color="#4c669f" />
              <Text style={styles.interactionText}>{post.comments}</Text>
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 20,
    paddingTop: 40,
    backgroundColor: '#4c669f',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  postCard: {
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 15,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  authorSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  authorName: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  postTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  postDescription: {
    color: '#666',
    marginBottom: 10,
  },
  postImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  interactionBar: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 10,
    marginTop: 10,
  },
  interactionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  interactionText: {
    marginLeft: 5,
    color: '#666',
  },
});

export default CommunityScreen;