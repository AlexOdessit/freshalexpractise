import React from 'react';
import styles from './PriceFilter.module.scss';
import classNames from 'classnames';

const PricingForm = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Pricing for</h2>
      <div className={styles.wrap}>
        <button className={styles.btn}>
          <span>Name</span>
          <i className={classNames('fa fa-angle-down', styles.selectIcon)}></i>
        </button>
        <select className={styles.select} name='contest_types'>
          <option>Name</option>
          <option>Logo</option>
          <option>Tagline</option>
          <option>Name and Logo</option>
          <option>Name and Tagline</option>
          <option>Name, Tagline and Logo</option>
          <option>Name, Logo and Business Cards</option>
          <option>Logo and Business Cards</option>
          <option>Logo, Business Cards and Stationery</option>
          <option>Logo and Tagline</option>
          <option>Business Cards</option>
          <option>Stationery</option>
          <option>Product Feedback and Research</option>
        </select>
      </div>
    </div>
  );
};

export default PricingForm;
