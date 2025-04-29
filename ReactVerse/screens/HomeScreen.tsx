import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <LinearGradient
        colors={['#4c669f', '#3b5998', '#192f6a']}
        style={styles.headerGradient}
      >
        <Text style={styles.welcomeText}>React Native Academy</Text>
        <Text style={styles.subText}>Start Your Mobile Development Journey</Text>
      </LinearGradient>

      <View style={styles.content}>
        <Image 
          source={{ uri: 'https://api.a0.dev/assets/image?text=react%20native%20development%20illustration&aspect=16:9' }}
          style={styles.heroImage}
        />

        <View style={styles.featuresContainer}>
          <TouchableOpacity 
            style={styles.featureCard}
            onPress={() => navigation.navigate('Learning')}
          >
            <MaterialCommunityIcons name="book-open-variant" size={40} color="#4c669f" />
            <Text style={styles.featureTitle}>Interactive Lessons</Text>
            <Text style={styles.featureDescription}>Learn React Native step by step</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.featureCard}
            onPress={() => navigation.navigate('Community')}
          >
            <MaterialCommunityIcons name="account-group" size={40} color="#4c669f" />
            <Text style={styles.featureTitle}>Community Projects</Text>
            <Text style={styles.featureDescription}>Share and learn from others</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.featureCard}
            onPress={() => navigation.navigate('Profile')}
          >
            <MaterialCommunityIcons name="account-circle" size={40} color="#4c669f" />
            <Text style={styles.featureTitle}>Track Progress</Text>
            <Text style={styles.featureDescription}>Monitor your learning journey</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  headerGradient: {
    padding: 30,
    paddingTop: 60,
  },
  welcomeText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  subText: {
    fontSize: 18,
    color: 'rgba(255,255,255,0.8)',
    textAlign: 'center',
    marginTop: 10,
  },
  content: {
    padding: 20,
  },
  heroImage: {
    width: '100%',
    height: 200,
    borderRadius: 15,
    marginVertical: 20,
  },
  featuresContainer: {
    gap: 15,
  },
  featureCard: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#333',
  },
  featureDescription: {
    color: '#666',
    marginTop: 5,
    textAlign: 'center',
  },
});