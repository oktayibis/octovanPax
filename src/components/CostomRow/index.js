import React from 'react';

// Styles
import {
  RowContainer,
  RowContent,
  RowEdit,
  RowEditLabel,
  RowLabel,
  RowText,
} from '../../styles/RowStyles';

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
