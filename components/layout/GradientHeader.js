import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function Header({children}) {
  return (
    <LinearGradient
      start={{x: 0.0, y: 0.25}}
      end={{x: 0.2, y: 3.0}}
      colors={['#0568bd', '#02569e', '#00396d']}
      style={styles.gradient}>
      <SafeAreaView style={styles.container}>{children}</SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    marginHorizontal: 10,
  },
});
