import {createStore} from 'redux';

// Basit bir initial state
const initialState = {
  // buraya başlangıç state'i eklenebilir
};

// Basit bir reducer
function reducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

// Store oluştur
const store = createStore(reducer);

export {store};
