import React from 'react';
import styled from 'styled-components';
import {useNavigation} from '@react-navigation/native';

// Styles
const CardContainer = styled.TouchableOpacity`
  margin: 8px;
  padding: 16px;
  background-color: #eeecda;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;

const CardText = styled.Text`
  color: #b83b5e;
  font-size: 20px;
`;

export default ({item}) => {
  const navigation = useNavigation();

  return (
    <CardContainer
      onPress={() => navigation.navigate('DetailScreen', {paxId: item._id})}>
      <CardText>{item.name}</CardText>
    </CardContainer>
  );
};
