import { combineReducers } from 'redux';
import CountryReducer from './reducer_country';

const rootReducer = combineReducers({
  country: CountryReducer
});

export default rootReducer;
