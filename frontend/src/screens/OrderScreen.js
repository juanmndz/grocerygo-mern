import React, { useState, useEffect } from 'react';
import {
  Box,
  CircularProgress,
  makeStyles,
  Paper,
  Typography,
} from '@material-ui/core';
import { useQuery } from 'react-query';
import { getOrders } from '../api';
import CurrencyFormat from 'react-currency-format';
import moment from 'moment-timezone';

// Fix SHopping cart for orders
const useStyles = makeStyles((theme) => ({
  imgContain: {
    width: '100px',
    height: '100px',
    objectFit: 'contain',
  },
}));
const OrderScreen = () => {
  const { data, isLoading, isError, status } = useQuery('orders', getOrders);

  const ListOrders = () => data.map((order) => <Order order={order} />);

  console.log(data, 'data');

  if (isLoading) return <CircularProgress />;
  return (
    <Box mt="5rem">
      <ListOrders />

      {isError && (
        <Box display="flex" justifyContent="center" alignItems="center">
          Error:{' '}
        </Box>
      )}
    </Box>
  );
};

const Order = ({ order }) => (
  <>
    <Box
      display="flex"
      m="1rem 1rem 0 1rem"
      p="1rem 1.2rem"
      border="1px #ddd solid"
      bgcolor="#f6f6f6"
    >
      <Box flex=".2" style={{ color: '#565959' }}>
        <Box component="span" display="block">
          ORDER PLACED:
        </Box>
        <Box component="span" display="block">
          {moment(order.createdAt).format('YYYY/MM/DD HH:mm')}
        </Box>
      </Box>
      <Box flex=".2" style={{ color: '#565959' }}>
        <Box component="span" display="block">
          Price:
        </Box>
        <Box component="span" display="block">
          <CurrencyFormat
            renderText={(value) => <span>{value}</span>}
            decimalScale={2}
            value={order.totalPrice}
            displayType={'text'}
            thousandSperator={true}
            prefix={'$'}
          />
        </Box>
      </Box>
      <Box flex=".4" style={{ color: '#565959' }}>
        <Box component="span" display="block">
          SHIP TO:
        </Box>
        <Box
          component="span"
          display="block"
        >{`${order.shippingAddress.address}`}</Box>
        <Box
          component="span"
          display="block"
        >{`${order.shippingAddress.city}, ${order.shippingAddress.state}`}</Box>
        <Box
          component="span"
          display="block"
        >{`${order.shippingAddress.postalCode}`}</Box>
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        flex=".2"
        style={{ color: '#565959' }}
      >
        <Box component="span" display="block" ml="auto">
          Order #:
        </Box>
        <Box>
          <Box component="span" display="block">{`${order._id}`}</Box>
        </Box>
      </Box>
    </Box>
    <Box
      display="flex"
      flexDirection="column"
      m="0 1rem"
      p="1rem 1.2rem"
      border="1px #ddd solid"
    >
      {order.orderItems.map((item) => (
        <OrderItem item={item} />
      ))}
    </Box>
  </>
);

const OrderItem = ({ item }) => {
  const classes = useStyles();

  return (
    <Box display="flex">
      <Box mr="1rem">
        <img className={classes.imgContain} src={item.image} />
      </Box>
      <Box display="flex" flexDirection="column">
        <Typography component="span" variant="body2" color="textPrimary">
          {`${item.name}`}
        </Typography>
        <Typography component="span" variant="body2" color="textPrimary">
          Price :{' '}
          <CurrencyFormat
            renderText={(value) => <span>{value}</span>}
            decimalScale={2}
            value={item.price}
            displayType={'text'}
            thousandSperator={true}
            prefix={'$'}
          />
        </Typography>
        <Typography component="span" variant="body2" color="textPrimary">
          {`Quantity: ${item.qty}`}
        </Typography>
      </Box>
    </Box>
  );
};

export default OrderScreen;
// border-radius: 4px;
// border: 1px #ddd solid;
