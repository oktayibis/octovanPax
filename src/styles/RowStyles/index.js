import styled from 'styled-components';
import {Distance, Colors, FontSizes} from '../../styles/constant';

export const RowContainer = styled.View`
  margin: ${Distance.closer};
  padding: ${Distance.regular};
  background-color: ${Colors.light};
  border-radius: 10px;
  justify-content: center;
`;

export const RowText = styled.Text`
  color: ${Colors.darkRed};
  font-size: ${FontSizes.regular};
`;

export const RowLabel = styled.Text`
  color: ${Colors.orange};
  font-size: ${FontSizes.regular};
`;
export const RowContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const RowEdit = styled.TouchableOpacity`
  background-color: ${Colors.orange};
  margin: ${Distance.regular};
  padding: ${Distance.closer};
  border-radius: 10px;
  width: 50%;
  align-self: center;
`;


export const RowEditLabel = styled.Text`
  text-align: center;
  color: ${Colors.light};
  font-weight: 600;
`;