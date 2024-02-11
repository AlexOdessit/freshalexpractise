import React from 'react';
import { useReducer, useEffect } from 'react';
import { initialState, reducer } from '../../reducers/pricingReducer';
import { setLoading, setError, setPackages } from '../../actions/actionCreator';
import styles from './PriceList.module.scss';

const PriceList = () => {
  const [{ packages, loading, error }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(() => {
    const fetchData = async () => {
      dispatch(setLoading(true));

      try {
        const response = await fetch('/pricing.json');
        const data = await response.json();
        dispatch(setPackages(data));
        dispatch(setLoading(false));
      } catch (err) {
        dispatch(setError('Failed to fetch packages'));
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      {loading ? 'Loading...' : JSON.stringify(packages)}
    </div>
  );
};

export default PriceList;
