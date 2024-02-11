import React from 'react';
import { useReducer, useEffect } from 'react';
import { initialState, reducer } from '../../reducers/pricingReducer';
import { loading, error, setPackages } from '../';

const PriceList = () => {
  const [{ packages, loading, error }, dispatch] = useReducer(
    initialState,
    reducer
  );

  useEffect({
    const response  = await fetch('../public/pricing.json')

  }
  
  []);
  return <div></div>;
};

export default PriceList;
