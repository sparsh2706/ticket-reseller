import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import Card from './components/Card';
import AppHeader from './components/AppHeader';

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
  {
    id: '3',
    image: 'https://via.placeholder.com/80',
    title: 'Concert 3',
    description: 'Description of Concert 3',
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
    </View>
  );
};

export default App;
