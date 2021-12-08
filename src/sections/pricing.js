import React, { useState } from 'react';
import { keyframes } from '@emotion/core';
import { Box, Container, Grid, Button, Text } from 'theme-ui';
import BlockTitle from 'components/block-title';
import PriceCard from 'components/cards/price-card';
import IlustrationFree from 'assets/IlustrationFree.svg';
import IlustrationStandard from 'assets/IlustrationFree.svg';
import IlustrationPremium from 'assets/IlustrationPremium.svg';

const PRICE_MONTHLY_DATA = [
  {
    recommended: null,
    title: 'Free Plan',
    icon: IlustrationFree,
    amount: 'Free',
    id:1,
    options: [
      {
        status: true,
        label: 'Unlimited Bandwitdth',
      },
      {
        status: true,
        label:
          'Encrypted Connection',
      },
      {
        status: true,
        label: 'No Traffic Logs        ',
      },
      {
        status: true,
        label: 'Works on All Devices        ',
      },
      
     
    ],
  },
  {
    recommended: null,
    title: 'Standard Plan',
    id:2,
    icon: IlustrationStandard,
    amount: '$ 9 / mo',
    options: [
      {
        status: true,
        label: 'Unlimited Bandwitdth',
      },
      {
        status: true,
        label:
          'Encrypted Connection',
      },
      {
        status: true,
        label: 'No Traffic Logs        ',
      },
      {
        status: true,
        label: 'Works on All Devices        ',
      },
      {
        status: true,
        label: 'Connect Anywhere        ',
      },
      
    ],
  },
  {
    recommended: null,
    title: 'Premium Plan',
    id:3,
    icon: IlustrationPremium,
    amount: '$ 12 / mo',
    options: [
      {
        status: true,
        label: 'Unlimited Bandwitdth',
      },
      {
        status: true,
        label:
          'Encrypted Connection',
      },
      {
        status: true,
        label: 'No Traffic Logs        ',
      },
      {
        status: true,
        label: 'Works on All Devices        ',
      },
      {
        status: true,
        label: 'Connect Anywhere        ',
      },
      {
        status: true,
        label: 'Get New Features        ',
      },
    ],
  },
];


const Pricing = () => {
  const [selected , setSelected] = useState(0)
  const onSelect = (a) =>{
    setSelected(a)
  }
  return (
    <Box as="section" id="pricing" sx={styles.pricing}>
      <Container>
        <Box sx={{width: "555px", margin:"0 auto"}}>
        <BlockTitle
          title="Choose your Plan"
          text="Let's choose the package that is best for you and explore it happily and cheerfully."
        />
        </Box>
        
        <Grid sx={styles.grid}>
          {PRICE_MONTHLY_DATA.map((price) => (
            <PriceCard data={price} key={price.id} selected={onSelect} isSelected={price.id == selected}/>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Pricing;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const fadeIn2 = keyframes`
  from {
    transform: translateY(50%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const styles = {
  pricing: {
    pt: ['200px', null, null, null, '200px', null, '240px'],
    pb: ['80px', null, null, null, '80px', '100px', '140px'],
  },
  btnWrap: {
    width: '302px',
    height: '60px',
    mt: ['-20px', null, null, '0px'],
    mb: ['40px', null, null, '60px'],
    backgroundColor: '#F7F8FB',
    borderRadius: '5px',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    p: '7px',
    mx: 'auto',
    button: {
      backgroundColor: 'rgba(0,0,0,0)',
      borderRadius: '5px',
      color: '#0F2137',
      letterSpacing: '-0.24px',
      fontSize: '16px',
      fontWeight: 500,
      position: 'relative',
      outline: 'none',
      fontFamily: 'DM Sans',
      // transition: 'all 100ms ease',
     
     
    },
  },
  grid: {
    width: '100%',
    maxWidth: '960px',
    mx: ['auto'],
    gridGap: '30px',
    

    gridTemplateColumns: ['1fr', null, null, '1fr 1fr 1fr'],
    '.priceCard': {
      '.priceHeader': {
        animation: `${fadeIn} 0.8s linear`,
      },
      'ul > li': {
        animation: `${fadeIn2} 0.7s linear`,
      },
      '.priceAmount': {
        animation: `${fadeIn} 0.9s linear`,
      },
      '.priceButton': {
        animation: `${fadeIn2} 0.7s linear`,
      },
    },
  },
};
