import React from 'react';
import hero from '../images/illustration-hero.svg';
const SummaryCard = () => {
  return (
    <>
      <img className='summary-card__hero' src={hero} alt='' />
      <div className='summary-card__info'>
        <p className='summary-card__title'>Order Summary</p>
        <p className='summary-card__description'>
          You can now listen to millions of songs, audiobooks, and podcasts on
          any device anywhere you like!
        </p>
      </div>
    </>
  );
};

export default SummaryCard;
