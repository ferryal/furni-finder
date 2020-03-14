// import React, { useReducer } from 'react';
import { FURNITURE } from './../actions/actionTypes';

const initialState = {
    furnitures: {
        furniture_styles: [],
        products: []
    }
}
// export const [state, dispatch] = useReducer(reducer, initialState, init);
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FURNITURE.FETCH_SUCCESS:
        console.log('Masuk sini');
        console.log(action.payload);
      return {
        ...state,
        furnitures: action.payload.data
      };
    default:
      return state;
  }
};