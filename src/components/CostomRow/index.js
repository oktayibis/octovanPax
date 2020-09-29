import React from 'react';
import styled from 'styled-components';
import {Distance, Colors, FontSizes} from '../../styles/constant';

// Styles
const RowContainer = styled.View`
  margin: ${Distance.closer};
  padding: ${Distance.regular};
  background-color: ${Colors.light};
  border-radius: 10px;
  justify-content: center;
`;

const RowText = styled.Text`
  color: ${Colors.darkRed};
  font-size: ${FontSizes.regular};
`;

const RowLabel = styled.Text`
  color: ${Colors.orange};
  font-size: ${FontSizes.regular};
`;
const RowContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const RowEdit = styled.TouchableOpacity`
  background-color: ${Colors.orange};
  margin: ${Distance.regular};
  padding: ${Distance.closer};
  border-radius: 10px;
  width: 50%;
  align-self: center;
`;

const RowEditLabel = styled.Text`
  text-align: center;
  color: ${Colors.light};
  font-weight: 600;
`;

export default (props) => {
  return (
    <RowContainer>
      <RowContent>
        <RowLabel>{props.label}:</RowLabel>
        <RowText>{props.value}</RowText>
      </RowContent>
      {props.edit && (
        <RowEdit onPress={props.onPress}>
          <RowEditLabel>{props.editLabel}</RowEditLabel>
        </RowEdit>
      )}
    </RowContainer>
  );
};
