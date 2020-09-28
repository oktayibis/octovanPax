import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, ActivityIndicator} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';

import {
  getlistAction,
  updateListAction,
} from '../../AppState/passangerList/actions';
import PassangerCard from '../../components/PassangerCard';
import {Title} from '../../components/TextStyles';
import {Container} from '../../components/ThemeStyles';

const Index = () => {
  const [pageNo, setPageNo] = useState(0);
  const {passangerList, listFirstLoading, updateListLoading} = useSelector(
    (state) => state.passangerState,
  );
  const dispatch = useDispatch();

  const setList = React.useCallback(() => {
    dispatch(getlistAction());
  }, [dispatch]);

  useEffect(() => {
    setList();
  }, [setList]);

  const loadMore = React.useCallback(() => {
    setPageNo(pageNo + 1);
    dispatch(updateListAction(pageNo));
  }, [pageNo]);
  const renderItem = ({item}) => <PassangerCard item={item} />;

  const renderFooter = () =>
    updateListLoading ? (
      <View>
        <ActivityIndicator size="large" />
      </View>
    ) : null;
  return (
    <>
      <Title>Passangers List</Title>
      {listFirstLoading ? (
        <View>
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <Container>
          <FlatList
            data={passangerList}
            renderItem={renderItem}
            keyExtractor={(item) => item._id + Math.random()}
            onEndReached={loadMore}
            onEndReachedThreshold={0}
            ListFooterComponent={renderFooter}
          />
        </Container>
      )}
    </>
  );
};

export default Index;
