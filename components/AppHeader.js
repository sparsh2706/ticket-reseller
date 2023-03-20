import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const AppHeader = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Ticket</Text>
      <TouchableOpacity>
        <MaterialIcons name="search" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    padding: 40,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default AppHeader;
