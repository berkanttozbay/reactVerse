import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const LearningScreen = ({ navigation }) => {  const sections = [
    {
      title: 'Tutorials',
      icon: 'video',
      description: 'Step-by-step video tutorials',
      route: 'TutorialsScreen'
    },
    {
      title: 'Quizzes',
      icon: 'help-circle',
      description: 'Test your knowledge',
      route: 'Quizzes'
    },
    {
      title: 'Lessons',
      icon: 'book-open-page-variant',
      description: 'Structured learning path',
      route: 'Lessons'
    }
  ];

  return (
    <ScrollView style={styles.container}>
      <Image 
        source={{ uri: 'https://api.a0.dev/assets/image?text=coding%20education%20modern%20minimal&aspect=16:9' }}
        style={styles.headerImage}
      />
      
      <View style={styles.content}>
        <Text style={styles.heading}>Learning Center</Text>
        
        <View style={styles.sectionsContainer}>
          {sections.map((section, index) => (
            <TouchableOpacity
              key={index}
              style={styles.sectionCard}
              onPress={() => navigation.navigate(section.route)}
            >
              <MaterialCommunityIcons name={section.icon} size={40} color="#4c669f" />
              <Text style={styles.sectionTitle}>{section.title}</Text>
              <Text style={styles.sectionDescription}>{section.description}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  headerImage: {
    width: '100%',
    height: 200,
  },
  content: {
    padding: 20,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  sectionsContainer: {
    gap: 15,
  },
  sectionCard: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 15,
    color: '#333',
  },
  sectionDescription: {
    color: '#666',
    marginLeft: 15,
    flex: 1,
  },
});

export default LearningScreen;