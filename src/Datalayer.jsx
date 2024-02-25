import React, { createContext, useContext, useReducer } from 'react';

export const Market = createContext();

export const Stall = ({ initialState, reducer, children }) => (
  <Market.Provider value={useReducer(reducer, initialState)}>
    {children}
  </Market.Provider>
);

export const useMarketValue= () =>useContext(Market)