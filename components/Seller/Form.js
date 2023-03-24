import React, { useState } from 'react';
import { View, TextInput, Button, Image, StyleSheet } from 'react-native';

const EventTicketForm = () => {
    const [eventLink, setEventLink] = useState('');
    const [eventName, setEventName] = useState('');
    const [ticketPrice, setTicketPrice] = useState('');
    const [numTickets, setNumTickets] = useState('');
    const [numItemizedTickets, setNumItemizedTickets] = useState('');
    const [ticketImage, setTicketImage] = useState(null);

    const handleEventLinkChange = (value) => {
        setEventLink(value);
        // Code to extract image from link and set ticketImage
        // Code to extract name from link and set eventName
    }

    const handleTicketImageUpload = (image) => {
        setTicketImage(value);
    }

    const handleSubmit = () => {
        // Code to submit Form Data to the backend
    }

    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder="Event Link"
                value={eventLink}
                onChangeText={handleEventLinkChange}
            />
            {ticketImage && <Image style={styles.image} source={{ url: ticketImage }} />}
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
                placeholder="Number of Tickets"
                value={numTickets}
                onChangeText={setNumTickets}
                keyboardType="numeric"
            />
            <TextInput
                style={styles.input}
                placeholder="Number of Itemized Tickets"
                value={numItemizedTickets}
                onChangeText={setNumItemizedTickets}
                keyboardType="numeric"
            />

            <Button title="Upload Ticket Image" onPress={() => {/* Code to read Images in PDF/JPG */}}/>
            <Button title="Submit" onPress={handleSubmit} />
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 10,
        padding: 5
    },
    image: {
        width: '100%',
        height: 200,
        resizeMode: 'contain',
        marginVertical: 10
    },
});

export default EventTicketForm;