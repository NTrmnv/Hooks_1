  
import { createStore } from 'redux';

import reducer from './reducers/redusers';

const store = createStore(reducer);

export default store;