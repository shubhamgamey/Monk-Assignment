import React from 'react';
import { Box, Container, Image, Heading, Button } from 'theme-ui';
import { keyframes } from '@emotion/core';
import logoImage from 'assets/bannerImage.svg';
import bannerImage from 'assets/banner-mockup.png';
import { Grid } from '@theme-ui/components';

const Banner = () => {
  return (
    <Box as="section" id="banner" sx={styles.banner}>
      <Container sx={styles.container}>
       
        <Grid sx={styles.grid}>
          <Box>
        <Heading as="h2">Want anything to be easy with <strong>LaslesVPN.</strong></Heading>
        <Heading as="h3">Provide a network for all your needs with ease and fun using LaslesVPN discover interesting features from us.</Heading>
        <Button type="submit" sx={styles.button}>
              Get Started
            </Button>
        </Box>
         <Image sx={styles.logo} src={logoImage} alt="logo image" />
        </Grid>
      </Container>
    </Box>
  );
};

export default Banner;


const styles = {
  banner: {
    overflow: 'hidden',
    backgroundColor: '#F9FBFD',
    textAlign: 'left',
    pt: ['110px', null, null, null, '130px'],
    h2: {
      fontSize: ['28px', null, null, '32px', '38px', '50px', '64px'],
      lineHeight: 1.25,
      color: '#02073E',
      fontWeight: "500",
      width: '100%',
      maxWidth: ['100%', null, null, '55%', '500px', '640px', '851px'],
      mx: 'auto',
      mt: '30px',
      mb: ['40px', null, null, '25px'],
    },
    h3: {
      fontSize: ['28px', null, null, '32px', '38px', '16px', '64px'],
      lineHeight: 1.25,
      color: '#02073E',
      fontWeight: "500",
      width: '100%',
      maxWidth: ['100%', null, null, '55%', '500px', '640px', '851px'],
      mx: 'auto',
      mt: '10px',
      mb: ['40px', null, null, '65px'],
    },
  },
  button : {
    background: "#F53838",
    borderRadius: "10px",
    fontWeight: "500",
    fontSize: ["18px"],
    color: "#FFFFFF",
    letterSpacing: "-0.5px",
    outline: "none",
    padding: ["0px 30.75px"],
    minHeight: ["50px", null, null, "60px"],
    width: ["auto", null, null, "250px"],
    mt: ["20px", null, null, "0"],
    mb: ["20px", null, null, "0"],
    mx: ["auto", null, null, "0"],
    "&:hover": {
      backgroundColor: "#fff",
      opacity: "0.8",
    },
  },
  grid:{
  // mx: ['auto'],
  gridGap: '30px',
  gridTemplateColumns: ['1fr', null, null, '1fr 1fr'],
  },
  logo: {
    display: 'block',
    // borderRadius: '50%',
    mx: 'auto',
    // boxShadow: '0px 15px 35px rgba(65, 104, 139, 0.12)',
  },
  bannerImage: {
    display: 'block',
    mx: 'auto',
    position: 'relative',
    maxWidth: ['100%', null, null, '80%', null, '100%'],
  },
  container: {
    position: 'relative',
    '.bannerIcon': {
      position: 'absolute',
      display: ['none', null, null, null, 'block'],
    },
  },
  
};
