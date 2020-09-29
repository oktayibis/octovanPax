import styled from 'styled-components';
import {Distance} from '../constant';
export const Container = styled.View`
  padding: ${Distance.closer};
  margin: ${Distance.closer};
  align-items: ${(props) => (props.center ? 'center' : 'stretch')};
  border-radius: ${(props) => (props.radius ? '10px' : '0px')};
`;
