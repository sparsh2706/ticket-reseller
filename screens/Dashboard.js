import React from 'react';
import { View, Text } from 'react-native';

import Ticket from '../components/Ticket';

const Dashboard = () => {
  // Fetch tickets from the backend and store them in a state
  // For now, we'll use a sample ticket list
  const tickets = [
    {
      id: 1,
      eventName: 'Sample Event 1',
      price: 100,
      quantity: 2,
    },
    // Add more tickets
  ];

  return (
    <View>
      <Text>Dashboard</Text>
      {tickets.map((ticket) => (
        <Ticket key={ticket.id} ticket={ticket} />
      ))}
    </View>
  );
};

export default Dashboard;
