import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

import Card from '../components/Card';

const Dashboard = () => {
  // Fetch tickets from the backend and store them in a state
  // For now, we'll use a sample ticket list
  const sampleEvents = [
    {
      id: 1,
      eventImage: require('../assets/sampleEventImage.jpg'),
      minPrice: 50,
      maxPrice: 200,
      ticketQuantity: 5,
    },
    {
      id: 2,
      eventImage: require('../assets/sampleEventImage.jpg'),
      minPrice: 75,
      maxPrice: 150,
      ticketQuantity: 3,
    },
    {
      id: 3,
      eventImage: require('../assets/sampleEventImage.jpg'),
      minPrice: 100,
      maxPrice: 250,
      ticketQuantity: 10,
    },
  ];

  const handleCardPress = (eventId) => {
    console.log(`Card with event ID ${eventId} pressed`);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {sampleEvents.map((event) => (
        <Card
          key={event.id}
          eventImage={event.eventImage}
          minPrice={event.minPrice}
          maxPrice={event.maxPrice}
          ticketQuantity={event.ticketQuantity}
          onPress={() => handleCardPress(event.id)}
        />
      ))}
    </ScrollView>
  )
  
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});

export default Dashboard;
