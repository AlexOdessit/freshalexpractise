import React from 'react';
import { useReducer, useEffect } from 'react';
import { initialState, reducer } from '../../reducers/pricingReducer';
import { loading, error, setPackages } from '../../actions/actionCreator';

const PriceList = () => {
  const [{ packages, loading, error }, dispatch] = useReducer(
    initialState,
    reducer
  );

  useEffect({
    const fetchData = async () => {
      dispatch(loading(true))
      const response  = await fetch('../public/pricing.json')
      console.log(response.json)
    }
    
   fetchData();   
},[])
  return <div></div>;
};

export default PriceList;
