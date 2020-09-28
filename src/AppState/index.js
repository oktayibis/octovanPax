import {combineReducers} from 'redux';

import PassangerReducers from './passangerList/reducers';

export default combineReducers({
  passangerState: PassangerReducers,
});
