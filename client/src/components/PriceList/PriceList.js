import React from 'react';
import { useReducer, useEffect } from 'react';
import { initialState, reducer } from '../../reducers/pricingReducer';
import { setLoading, setError, setPackages } from '../../actions/actionCreator';

const PriceList = () => {
  const [{ loading, error, packages }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(() => {
    const fetchData = async () => {
      dispatch(setLoading(true));

      try {
        const response = await fetch('../public/pricing.json');
        const data = await response.json();
        console.log(data);
        dispatch(setPackages(data));
      } catch (err) {
        dispatch(setError('Failed to fetch packages'));
      }
    };

    fetchData();
  }, []);

  return <div>Loading...</div>;
};

export default PriceList;
