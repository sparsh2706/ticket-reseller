import React from 'react';
import { View, Text, Button } from 'react-native';

const Profile = () => {
  // Fetch user data from the backend and store it in a state
  // For now, we'll use sample data
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    tickets: [
      {
        id: 1,
        eventName: 'Sample Event 1',
        price: 100,
        quantity: 2,
      },
      // Add more user tickets
    ],
  };

  const handleEditAccount = () => {
    // Edit account details
  };

  return (
    <View>
      <Text>Profile</Text>
      <Text>Name: {user.name}</Text>
      <Text>Email: {user.email}</Text>
      <Text>My Tickets:</Text>
      {user.tickets.map((ticket) => (
        <Text key={ticket.id}>{ticket.eventName}</Text>
      ))}
      <Button title="Edit Account" onPress={handleEditAccount} />
    </View>
  );
};

export default Profile;
