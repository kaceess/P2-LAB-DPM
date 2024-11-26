import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CombinedLayout = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Teks di Tengah Layar</Text>
      <View style={styles.boxesContainer}>
        <View style={styles.box1}></View>
        <View style={styles.box2}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#d3d3d3', 
  },
  text: {
    fontSize: 24, // Ukuran teks
    color: 'blue', // Warna teks biru
    fontWeight: 'bold', // Teks tebal
    marginBottom: 30, // Ruang antara teks dan kotak
  },
  boxesContainer: {
    flexDirection: 'row', // Tata letak horizontal untuk kotak
    justifyContent: 'space-evenly', // Jarak lebih besar antara kotak
    alignItems: 'center', // Posisikan kotak di tengah secara vertikal
    width: '100%', // Lebar container kotak (lebih besar agar jarak makin jauh)
  },
  box1: {
    width: 100, // Lebar kotak pertama
    height: 100, // Tinggi kotak pertama
    backgroundColor: 'pink', // Warna kotak pertama
  },
  box2: {
    width: 100, // Lebar kotak kedua
    height: 100, // Tinggi kotak kedua
    backgroundColor: 'blue', // Warna kotak kedua
  },
});

export default CombinedLayout;