import React from 'react';
import {useNavigation} from '@react-navigation/native';

// Styles
import {CardContainer, CardContent, CardText} from '../../styles/Card';

export default ({item}) => {
  const navigation = useNavigation();

  return (
    <CardContainer
      onPress={() => navigation.navigate('DetailScreen', {paxId: item._id})}>
      <CardContent>
        <CardText>{item.name}</CardText>
        <CardText>{'>'}</CardText>
      </CardContent>
    </CardContainer>
  );
};
