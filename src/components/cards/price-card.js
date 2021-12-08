import React from 'react';
import { Box, Image, Text, Heading, Button } from 'theme-ui';
import { Link } from 'components/link';

import priceCheck from 'assets/price-check.svg';
import priceCross from 'assets/price-cross.svg';
import priceArrow from 'assets/price-arrow.svg';

const PriceCard = ({ data: { title, icon, amount, options, recommended, id } , key, selected, isSelected}) => {



  return (
    <Box
      className={`${
        recommended === null ? 'priceCard ' : 'priceCard recommended'
      }`}
      sx={styles.priceCard}
    >
      <Box sx={styles.priceHeader}>
        <Box className="priceHeader">
        
          <Image src={icon} alt={title} />
          <Heading as="h3">{title}</Heading>
        </Box>
      </Box>
      <Box as="ul">
        {options.map((option, index) => (
          <Box
            as="li"
            className={`${option.status === true ? '' : 'closed'}`}
            key={index}
          >
            {option.status === true ? (
              <Image src={priceCheck} alt="" />
            ) : (
              <Image src={priceCross} alt="" />
            )}
            {option.label}
          </Box>
        ))}
      </Box>
      <Box sx={styles.buttonWrap}>
        <Box className="priceAmount">
        
          <Link path="#" sx={styles.heading}>
            {amount}
          </Link>
        </Box>
        <Button type="submit" sx={isSelected  ? styles.buttonSelected : styles.button} onClick={()=>{selected(id)}}>
              Select
            </Button>
      </Box>
    </Box>
  );
};

export default PriceCard;

const styles = {
  priceCard: {
    position: "relative",
    px: ['20px', null, null, null, '20px'],
    border: '1px solid #E0E2E4',
    borderRadius: '10px',
    backgroundColor: '#ffffff',
    alignItems:"stretch",
    // display:"grid",
    height:"130%",
    ul: {
      p: 0,
      mt: ['30px', null, null, null, '50px'],
      listStyle: 'none',
      li: {
        display: 'flex',
        alignItems: 'flex-start',
        color: '#343D48',
        fontSize: '16px',
        lineHeight: '26px',
        width: '100%',
        maxWidth: ['100%', null, null, null, '90%'],
        '+li': {
          mt: ['10px', null, null, null, '20px'],
        },
        '&.closed': {
          color: 'rgba(52,61,72,.6)',
        },
        img: {
          flexShrink: 0,
          position: 'relative',
          top: '5px',
          mr: '15px',
        },
      },
    },
  },
  button : {
    background: "#FFFFFF",
    borderRadius: "50px",
    fontWeight: "500",
    border: "2px solid #F53838",

    fontSize: ["18px"],
    color: "black",
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
  buttonSelected : {
    background: "#F53838",
    borderRadius: "50px",
    fontWeight: "500",
    border: "2px solid #F53838",

    fontSize: ["18px"],
    color: "black",
    letterSpacing: "-0.5px",
    outline: "none",
    padding: ["0px 20.75px"],
    minHeight: ["50px", null, null, "60px"],
    width: ["auto", null, null, "250px"],
    mt: ["20px", null, null, "0"],
    mb: ["20px", null, null, "0"],
    mx: ["auto", null, null, "0"],
    "&:hover": {
      backgroundColor: "#F53810",
      opacity: "0.8",
    },
  },
  priceHeader: {
    pt: ['40px', null, null, null, '60px'],
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: ['column', null, 'row'],
    '.priceAmount': {
      textAlign: 'right',
    },
    '.priceHeader': {
      mb: ['20px', null, '0'],
      h3: {
        lineHeight: 1,
        color: '#0F2137',
        fontSize: '22px',
        fontWeight: 700,
        letterSpacing: '-0.55px',
        mt: '35px',
        textAlign:"center"
      },
    },
  },
  recommended: {
    display: 'inline-block',
    backgroundColor: 'primary',
    borderRadius: '3px',
    lineHeight: 1,
    color: '#ffffff',
    fontSize: '14px',
    fontWeight: 700,
    letterSpacing: '-0.14px',
    padding: '5px 8px',
    position: 'absolute',
    top: ['-15px', null, null, null],
    left: '0px',
  },
  buttonWrap: {
    position: "absolute",
   bottom: 30,
    borderBottomLeftRadius: '10px',
    borderBottomRightRadius: '10px',
    py: '5px',
    // mt: '60px',
    // display: 'flex',
    // justifyContent: 'space-between',
    textAlign: 'center',
    // backgroundColor: '#F8F8FA',
    mx: ['-20px', null, null, null, '-40px'],
    px: ['20px', null, null, null, '40px'],
    img: {
      display: 'block',
    },
    '.priceAmount': {
      p: {
        lineHeight: 1,
        fontSize: '16px',
        color: '#343D48',
        mb: '10px',
      },
    },
  },
  heading: {
    color: 'primary',
    fontSize: '26px',
    fontWeight: 700,
    lineHeight: 1,
  },
};
