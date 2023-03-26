import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const Card = ({ eventImage, minPrice, maxPrice, ticketQuantity, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.cardContainer}>
      <Image source={eventImage} style={styles.eventImage} />
      <View style={styles.ticketInfo}>
        <Text style={styles.ticketQuantity}>{ticketQuantity} Tickets</Text>
        <Text style={styles.ticketPrice}>
          Rs.{minPrice} - Rs.{maxPrice}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    marginBottom: 15,
  },
  eventImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  ticketInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  ticketQuantity: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  ticketPrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Card;
