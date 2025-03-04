import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useAuth } from '../context/AuthContext';

const ProfileScreen = () => {
  const { user, logout } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.name}>Hung Nguyen</Text>
      <Text style={styles.role}>Mobile developer</Text>
      <Text style={styles.description}>
        I have above 5 years of experience in native mobile apps development, now i am learning React Native
      </Text>
      <TouchableOpacity style={styles.signOutButton} onPress={logout}>
        <Text style={styles.signOutText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#ccc',
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#666',
    marginBottom: 5,
  },
  role: {
    paddingTop: 20,
    fontSize: 18,
    color: '#1E90FF', 
    marginBottom: 15,
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 30,
    paddingHorizontal: 20,
  },
  signOutButton: {
    backgroundColor: '#FFA500', 
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25, 
    elevation: 2, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  signOutText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;