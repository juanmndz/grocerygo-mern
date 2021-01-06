import { Box, Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import CatalogHome from '../components/CatalogList/CatalogHome';
import { catalogListAsync } from '../modules/catalog/catalogActions';

export default function HomePage() {
  const dispatch = useDispatch();
  // const usersData = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(catalogListAsync());
  }, [dispatch]);
  return (
    <Box mt={10} mr={2} ml={2}>
      <Typography component="h1" variant="h4">
      Vegetables
      </Typography>
      <CatalogHome filter={'vegetables'} />

      <Typography component="h1" variant="h4">
        Fruits
      </Typography>
        <CatalogHome filter={'fruits'} />

      <Typography component="h1" variant="h4">
        Meat
      </Typography>
        <CatalogHome filter={'meat'} />
      <Typography component="h1" variant="h4">
        Dairy
      </Typography>
        <CatalogHome filter={'dairy'} />
      <Typography component="h1" variant="h4">
      Frozen
      </Typography>
        <CatalogHome filter={'frozen'} />
      <Typography component="h1" variant="h4">
      Pantry
      </Typography>
        <CatalogHome filter={'pantry'} />

    </Box>
  );
}
