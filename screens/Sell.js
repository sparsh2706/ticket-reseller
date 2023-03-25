import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';

const Sell = () => {
  const [eventLink, setEventLink] = useState('');
  const [eventName, setEventName] = useState('');
  const [ticketPrice, setTicketPrice] = useState('');
  const [ticketQuantity, setTicketQuantity] = useState('');

  const handleSubmit = () => {
    // Save ticket details to the backend
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Text style={styles.title}>Sell Tickets</Text>
        <TextInput
          style={styles.input}
          placeholder="Event Link"
          value={eventLink}
          onChangeText={setEventLink}
        />
        <TextInput
          style={styles.input}
          placeholder="Event Name"
          value={eventName}
          onChangeText={setEventName}
        />
        <TextInput
          style={styles.input}
          placeholder="Ticket Price"
          value={ticketPrice}
          onChangeText={setTicketPrice}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Ticket Quantity"
          value={ticketQuantity}
          onChangeText={setTicketQuantity}
          keyboardType="numeric"
        />
        <Button title="Submit" onPress={handleSubmit} />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 16,
    marginBottom: 15,
  },
});

export default Sell;
