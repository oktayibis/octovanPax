import styled from 'styled-components';
import {Distance, Colors, FontSizes} from '../../styles/constant';

export const CardContainer = styled.TouchableOpacity`
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

export const CardText = styled.Text`
  color: ${Colors.darkRed};
  font-size: ${FontSizes.regular};
`;

export const CardContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;