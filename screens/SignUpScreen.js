import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useAuth } from '../context/AuthContext';

const SignUpScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();

  const handleSignUp = () => {
    if (email && password) { 
      const userData = { email, password };
      login(userData);
    } else {
      console.log('Please enter email and password');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Enter your email here!"
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Enter your password here!"
        secureTextEntry
      />
      <Button title="Sign Up" onPress={handleSignUp} color="#FFA500" /> {/* Màu cam cho nút Sign Up */}
      
      <Text style={styles.orText}>Or sign up with</Text>

      <View style={styles.socialButtons}>
        <Button title="Google" onPress={() => console.log("Sign up with Google")} color="#DB4437" />
        <Button title="Facebook" onPress={() => console.log("Sign up with Facebook")} color="#4267B2" />
      </View>

      <TouchableOpacity onPress={() => console.log("Navigate to Forgot Password")}>
        <Text style={styles.forgotText}>Forgot password?</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => console.log("Navigate to Sign In")}>
        <Text style={styles.signUpText}>Not yet a member? Sign In</Text>
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
  },
  title: { 
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    padding: 8,
    width: '80%',
    borderRadius: 4,
  },
  orText: {
    marginVertical: 12,
    color: 'gray',
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    marginVertical: 12,
  },
  forgotText: {
    color: '#FFA500',
    marginTop: 12,
  },
  signUpText: {
    color: 'gray',
    marginTop: 12,
  },
});

export default SignUpScreen;