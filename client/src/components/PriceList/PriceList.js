import React from 'react';
import { useReducer, useEffect } from 'react';
import { v4 as pkgID } from 'uuid';
import { initialState, reducer } from '../../reducers/pricingReducer';
import { setLoading, setError, setPackages } from '../../actions/actionCreator';
import classNames from 'classnames';
import styles from './PriceList.module.scss';

const PriceList = () => {
  const [{ packages }, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      dispatch(setLoading(true));
      try {
        const response = await fetch('/pricing.json');
        const data = await response.json();
        dispatch(setPackages(data.packages));
        dispatch(setLoading(false));
      } catch (err) {
        dispatch(setError('Failed to fetch packages'));
      }
    };

    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      {packages.length > 0 &&
        packages.map((pkg) => (
          <article key={pkgID()} className={styles.pkg}>
            <h2>{pkg.name}</h2>
            <p>{pkg.description}</p>
            <h3>{pkg.price}</h3>
            <ul>
              {pkg.content.map((item) => (
                <li key={pkgID()} className=''>
                  {Array.isArray(item) ? (
                    <ul>
                      {item.map((subItem) => (
                        <li className={styles.subItem} key={pkgID()}>
                          {subItem}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    item
                  )}
                </li>
              ))}
            </ul>
            <button>Start</button>
          </article>
        ))}
      {packages.length === 0 && <p>No packages available</p>}
    </div>
  );
};

export default PriceList;
