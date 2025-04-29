import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const ProfileScreen = () => {
  const progress = {
    tutorials: 60,
    quizzes: 45,
    lessons: 75
  };

  return (
    <ScrollView style={styles.container}>
      <LinearGradient
        colors={['#4c669f', '#3b5998', '#192f6a']}
        style={styles.header}
      >
        <View style={styles.profileInfo}>
          <Image 
            source={{ uri: 'https://api.a0.dev/assets/image?text=professional%20profile%20picture&aspect=1:1' }}
            style={styles.profileImage}
          />
          <Text style={styles.name}>Alex Johnson</Text>
          <Text style={styles.title}>React Native Developer</Text>
        </View>
      </LinearGradient>

      <View style={styles.content}>
        <View style={styles.statsCard}>
          <Text style={styles.statsTitle}>Learning Progress</Text>
          
          <View style={styles.progressSection}>
            <Text style={styles.progressTitle}>Tutorials</Text>
            <View style={styles.progressBar}>
              <View style={[styles.progressFill, { width: `${progress.tutorials}%` }]} />
            </View>
            <Text style={styles.progressText}>{progress.tutorials}%</Text>
          </View>

          <View style={styles.progressSection}>
            <Text style={styles.progressTitle}>Quizzes</Text>
            <View style={styles.progressBar}>
              <View style={[styles.progressFill, { width: `${progress.quizzes}%` }]} />
            </View>
            <Text style={styles.progressText}>{progress.quizzes}%</Text>
          </View>

          <View style={styles.progressSection}>
            <Text style={styles.progressTitle}>Lessons</Text>
            <View style={styles.progressBar}>
              <View style={[styles.progressFill, { width: `${progress.lessons}%` }]} />
            </View>
            <Text style={styles.progressText}>{progress.lessons}%</Text>
          </View>
        </View>

        <View style={styles.achievementsCard}>
          <Text style={styles.achievementsTitle}>Achievements</Text>
          
          <View style={styles.achievementRow}>
            <MaterialCommunityIcons name="star-circle" size={30} color="#FFD700" />
            <Text style={styles.achievementText}>Completed First Tutorial</Text>
          </View>
          
          <View style={styles.achievementRow}>
            <MaterialCommunityIcons name="trophy" size={30} color="#FFD700" />
            <Text style={styles.achievementText}>Quiz Master (Score: 90%+)</Text>
          </View>
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
  header: {
    padding: 30,
    paddingTop: 60,
  },
  profileInfo: {
    alignItems: 'center',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  title: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.8)',
  },
  content: {
    padding: 20,
  },
  statsCard: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  statsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  progressSection: {
    marginBottom: 15,
  },
  progressTitle: {
    fontSize: 16,
    marginBottom: 5,
    color: '#666',
  },
  progressBar: {
    height: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#4c669f',
  },
  progressText: {
    marginTop: 5,
    color: '#666',
    textAlign: 'right',
  },
  achievementsCard: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  achievementsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  achievementRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  achievementText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#666',
  },
});

export default ProfileScreen;