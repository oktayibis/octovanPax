import styled from 'styled-components';
import {FontSizes, Colors, Distance} from '../constant';

// Custom Text Styles

export const Title = styled.Text`
  font-size: ${FontSizes.large};
  font-weight: 600;
  padding: ${Distance.closer};
  text-align: center;
  background-color: ${Colors.orange};
  color: ${Colors.light};
`;

export const SubTitle = styled.Text`
  font-size: ${FontSizes.medium};
  font-weight: 500;
  text-align: center;
  background-color: ${Colors.purple};
  padding: ${Distance.closer};
  color: ${Colors.light};
`;
