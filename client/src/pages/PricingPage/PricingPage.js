import React from 'react';
import Header from '../../components/Header/Header';
import PriceList from '../../components/PriceList/PriceList';
import PricingForm from '../../components/PricingFilter/PriceFilter';

const PricingPage = () => {
  return (
    <>
      <Header />
      <PricingForm />
      <PriceList />
    </>
  );
};

export default PricingPage;
