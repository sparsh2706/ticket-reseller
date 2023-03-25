import React from 'react';
import { View, Text } from 'react-native';

const Ticket = ({ ticket }) => {
  return (
    <View>
      <Text>{ticket.eventName}</Text>
      <Text>Price: {ticket.price}</Text>
      <Text>Quantity: {ticket.quantity}</Text>
    </View>
  );
};

export default Ticket;
