import React from 'react';
import styled from 'styled-components';
import {useNavigation} from '@react-navigation/native';
import {Distance, Colors, FontSizes} from '../../styles/constant';
// Styles
const CardContainer = styled.TouchableOpacity`
  margin: ${Distance.closer};
  padding: ${Distance.regular};
  background-color: ${Colors.light};
  border-radius: 10px;
  justify-content: center;
  shadow-color: #ddd;
  shadow-offset: 1px 1px;
  shadow-opacity: 1;
  shadow-radius: 2px;
`;

const CardText = styled.Text`
  color: ${Colors.darkRed};
  font-size: ${FontSizes.regular};
`;

const CardContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

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
