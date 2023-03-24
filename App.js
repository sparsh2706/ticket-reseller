import { StatusBar } from 'expo-status-bar';
import { FlatList, View } from 'react-native';

import Card from './components/Card';
import AppHeader from './components/AppHeader';
import EventTicketForm from './components/Seller/Form';

const data = [
  {
    id: '1',
    image: 'https://via.placeholder.com/80',
    title: 'Concert 1',
    description: 'Description of Concert 1',
  },
  {
    id: '2',
    image: 'https://via.placeholder.com/80',
    title: 'Concert 2',
    description: 'Description of Concert 2',
  },
];

const App = () => {
  const renderItem = ({item}) => (
    <Card image={item.image} title={item.title} description={item.description} />
  );

  return (
    <View>
      <AppHeader />
      <FlatList data={data} renderItem={renderItem} keyExtractor={(item) => item.id} />
      <EventTicketForm />
    </View>
  );
};

export default App;
