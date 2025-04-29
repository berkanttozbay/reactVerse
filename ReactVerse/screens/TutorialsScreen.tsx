import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const tutorials = [
  {
    id: 1,
    title: 'Getting Started with React Native',
    duration: '15 min',
    level: 'Beginner',
    description: 'Learn the basics of React Native and set up your development environment.',
  },
  {
    id: 2,
    title: 'Components & Props',
    duration: '20 min',
    level: 'Beginner',
    description: 'Understanding React Native components and how to use props effectively.',
  },
  {
    id: 3,
    title: 'State Management',
    duration: '25 min',
    level: 'Intermediate',
    description: 'Learn how to manage state in your React Native applications.',
  },
  {
    id: 4,
    title: 'Navigation & Routing',
    duration: '30 min',
    level: 'Intermediate',
    description: 'Implement navigation and routing in your React Native apps.',
  },
  {
    id: 5,
    title: 'API Integration',
    duration: '35 min',
    level: 'Advanced',
    description: 'Connect your app to external APIs and handle data fetching.',
  }
];

const TutorialsScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Image 
        source={{ uri: 'https://api.a0.dev/assets/image?text=react%20native%20tutorial%20video%20learning&aspect=16:9' }}
        style={styles.headerVideo}
      />
      
      <View style={styles.content}>
        <Text style={styles.heading}>Featured Tutorials</Text>
        
        {tutorials.map((tutorial) => (
          <TouchableOpacity key={tutorial.id} style={styles.tutorialCard}>
            <View style={styles.cardHeader}>
              <MaterialCommunityIcons name="play-circle" size={24} color="#4c669f" />
              <Text style={styles.title}>{tutorial.title}</Text>
            </View>
            
            <Text style={styles.description}>{tutorial.description}</Text>
            
            <View style={styles.cardFooter}>
              <View style={styles.footerItem}>
                <MaterialCommunityIcons name="clock-outline" size={16} color="#666" />
                <Text style={styles.footerText}>{tutorial.duration}</Text>
              </View>
              
              <View style={styles.footerItem}>
                <MaterialCommunityIcons name="signal" size={16} color="#666" />
                <Text style={styles.footerText}>{tutorial.level}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  headerVideo: {
    width: '100%',
    height: 200,
  },
  content: {
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  tutorialCard: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
    color: '#333',
    flex: 1,
  },
  description: {
    color: '#666',
    marginBottom: 15,
    lineHeight: 20,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 15,
  },
  footerItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  footerText: {
    marginLeft: 5,
    color: '#666',
  },
});

export default TutorialsScreen;