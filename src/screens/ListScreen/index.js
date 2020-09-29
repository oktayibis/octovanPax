import React, {useState, useEffect} from 'react';
import {FlatList, ActivityIndicator} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  getlistAction,
  updateListAction,
} from '../../AppState/passangerList/actions';
import PassangerCard from '../../components/PassangerCard';
import {Title} from '../../styles/TextStyles';
import {Container} from '../../styles/ThemeStyles';

const Index = () => {
  const dispatch = useDispatch();
  const [pageNo, setPageNo] = useState(0);

  const {
    passangerList,
    listFirstLoading,
    updateListLoading,
    selectedPax,
  } = useSelector((state) => state.passangerState);

  useEffect(() => {
    setList();
  }, [setList, selectedPax]);

  // Fetching first data from API
  const setList = React.useCallback(() => {
    dispatch(getlistAction());
  }, [dispatch]);

  // Load more pax when scroll reaches to end of list
  const loadMore = React.useCallback(() => {
    setPageNo(pageNo + 1);
    dispatch(updateListAction(pageNo));
  }, []);

  // Render each row in Flatlist
  const renderItem = ({item}) => <PassangerCard item={item} />;

  // Render footer of Flatlist for handle promise with indicator
  const renderFooter = React.useCallback(() => {
    return updateListLoading ? (
      <Container>
        <ActivityIndicator />
      </Container>
    ) : null;
  }, [updateListLoading]);

  return (
    <>
      <Title>Passangers List</Title>
      {listFirstLoading ? (
        <Container>
          <ActivityIndicator />
        </Container>
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
