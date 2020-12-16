import { Box, Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import CatalogList from '../components/CatalogList/CatalogList';

export default function HomePage() {
  const dispatch = useDispatch();
  // const usersData = useSelector((state) => state.users);

  useEffect(() => {

  }, [dispatch]);
  return (
    <Box mt={10} mr={2} ml={2}>
      <Typography component="h1" variant="h4">
        Dairyll
      </Typography>
      <CatalogList />
      <Typography component="h1" variant="h4">
        Candy
      </Typography>

      <CatalogList />
    </Box>
  );
}
