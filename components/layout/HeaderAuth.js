import React from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';

export default function Header({title}) {
  return (
    <View style={{backgroundColor: 'transparent'}}>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>{title}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  title: {
    fontFamily: 'Karla-Medium',
    fontSize: Platform.OS === 'ios' ? 20 : 17,
    color: '#fff',
    letterSpacing: 1,
  },
});
