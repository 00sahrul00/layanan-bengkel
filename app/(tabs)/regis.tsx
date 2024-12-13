import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';

export default function App() {
const router = useRouter();
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Image
         source={require('../../assets/logo/splash.png')}
          style={styles.icon}
        />
      </View>
      <Text style={styles.title}>Registrasi Untuk Akses</Text>
      <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#888" />
      <TextInput style={styles.input} placeholder="Nama Lengkap" placeholderTextColor="#888" />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#888"
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Re-Password"
        placeholderTextColor="#888"
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={() => router.push('/login')}>
        <Text style={styles.buttonText}>Registrasi</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  iconContainer: {
    marginBottom: 20,
  },
  icon: {
    width: 100,
    height: 100,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF8800',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#FF8800',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});