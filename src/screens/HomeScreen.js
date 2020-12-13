import { Box, Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ProductList from '../components/ProductList/ProductList';

export default function HomePage() {
  const dispatch = useDispatch();
  // const usersData = useSelector((state) => state.users);

  useEffect(() => {

  }, [dispatch]);
  return (
    <Box margin={10}>
      <Typography component="h1" variant="h4">
        Dairy
      </Typography>
      <ProductList />
      <Typography component="h1" variant="h4">
        Candy
      </Typography>

      <ProductList />
    </Box>
  );
}
