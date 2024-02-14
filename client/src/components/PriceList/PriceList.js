import React, { useReducer, useEffect } from 'react';
import { v4 as pkgID } from 'uuid';
import { initialState, reducer } from '../../reducers/pricingReducer';
import { setLoading, setError, setPackages } from '../../actions/actionCreator';
import { Link } from 'react-router-dom';
import styles from './PriceList.module.scss';

const fetchData = async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await fetch('/pricing.json');
    const data = await response.json();
    dispatch(setPackages(data.packages));
  } catch (err) {
    dispatch(setError('Failed to load packages'));
  } finally {
    dispatch(setLoading(false));
  }
};

const renderContent = (content) =>
  content.map((item) =>
    Array.isArray(item) ? (
      <ul key={pkgID()}>{renderContent(item)}</ul>
    ) : (
      <li className={styles.list} key={pkgID()}>
        {item}
      </li>
    )
  );

const renderParagraph = (content) => {
  const paragraphs = content[0].split('.');
  const nonempty = paragraphs.filter((paragraph) => paragraph.trim() !== '');
  return nonempty.map((paragraph) => (
    <p key={pkgID()} className={styles.paragraph}>
      {paragraph}
    </p>
  ));
};

const PriceList = () => {
  const [{ packages }, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetchData(dispatch);
  }, []);

  return (
    <div className={styles.container}>
      {packages.length > 0 ? (
        packages.map((pkg) => (
          <article key={pkgID()} className={styles.pkg}>
            <div className={styles.box} style={{ borderColor: pkg.color }}>
              <h2 className={styles.title}>{pkg.name} </h2>
              <p className={styles.desc}>{pkg.description}</p>
              <h3 className={styles.price} style={{ color: pkg.color }}>
                {pkg.price}
              </h3>
            </div>

            {pkg.name === 'Managed' ? (
              <ul className={styles.content}>
                <li className={styles.list}>{renderParagraph(pkg.content)}</li>
              </ul>
            ) : (
              <ul className={styles.content}>{renderContent(pkg.content)}</ul>
            )}

            <Link
              style={{ background: pkg.color, border: pkg.color }}
              className={styles.selectLink}
              to='#'
            >
              Start
            </Link>
          </article>
        ))
      ) : (
        <p>No packages available</p>
      )}
    </div>
  );
};

export default PriceList;
