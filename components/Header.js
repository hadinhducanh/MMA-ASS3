// components/CustomHeader.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Art Tools</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,                // Chiều cao của header
    backgroundColor: 'tomato', // Màu nền của header
    justifyContent: 'center',   // Căn giữa theo chiều dọc
    alignItems: 'center',       // Căn giữa theo chiều ngang
  },
  title: {
    color: '#fff',             // Màu chữ
    fontWeight: 'bold',        // Kiểu chữ
    fontSize: 20,              // Kích thước chữ
  },
});

export default Header;
