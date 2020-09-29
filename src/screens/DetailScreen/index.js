import React, {useEffect, useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  getPassangerById,
  updatePaxNameAction,
} from '../../AppState/passangerList/actions';
import {Image, ActivityIndicator, Alert} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {Container} from '../../styles/ThemeStyles';
import {Title, SubTitle} from '../../styles/TextStyles';
import CostomRow from '../../components/CostomRow';

const Index = () => {
  const route = useRoute();
  const dispatch = useDispatch();
  const {paxId} = route.params;
  const {selectedPax, selectedPaxLoading, selectedPaxError} = useSelector(
    (state) => state.passangerState,
  );

  // get passanger details from API
  const setPassangerById = useCallback(() => {
    dispatch(getPassangerById(paxId));
  }, [dispatch, paxId]);

  useEffect(() => {
    setPassangerById();
  }, [paxId, setPassangerById]);

  // Handle edit name
  const handleChangeName = useCallback(() => {
    Alert.prompt(
      'Change Name',
      'Write new name',
      [
        {
          text: 'Cancel',
        },
        {
          text: 'Change',
          onPress: async (text) =>
            await dispatch(updatePaxNameAction(paxId, text)),
        },
      ],
      'plain-text',
      selectedPax.name,
    );
  }, []);

  return (
    <>
      <Title>Passanger Details</Title>
      {selectedPaxLoading ? (
        <ActivityIndicator />
      ) : (
        <Container>
          <CostomRow
            label="Passanger Name"
            edit
            editLabel="Change Name"
            value={selectedPax.name}
            onPress={handleChangeName}
          />
          <CostomRow label="Trips" value={selectedPax.trips} />

          <SubTitle>Airline Info </SubTitle>
          <CostomRow label="Name" value={selectedPax.airline.name} />
          <Container center>
            <Image
              style={{height: 200, width: 200}}
              source={{uri: selectedPax.airline.logo}}
              resizeMode="contain"
            />
          </Container>
        </Container>
      )}
      {selectedPaxError && Alert.alert(selectedPaxError)}
    </>
  );
};

export default Index;
