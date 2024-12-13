import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';

const SplashScreen = () => {
  const router = useRouter();

  useEffect(() => {
    // Simulate loading time, then navigate to the home screen
    const timeout = setTimeout(() => {
      router.replace('/regis'); 
    }, 3000); // 3 seconds

    return () => clearTimeout(timeout); 
  }, [router]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/logo/splash.png')} 
        style={styles.logo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff', // Change background color if needed
  },
  logo: {
    width: 150, // Adjust logo size
    height: 150,
    resizeMode: 'contain',
    marginBottom: 20,
  },
});

export default SplashScreen;