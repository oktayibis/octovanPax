import React from 'react';
import {View, Text} from 'react-native';
import {useRoute} from '@react-navigation/native';

const Index = () => {
  const route = useRoute();
  const {paxId} = route.params;
  console.log(route);
  return (
    <View>
      <Text>..... {paxId}</Text>
    </View>
  );
};

export default Index;
