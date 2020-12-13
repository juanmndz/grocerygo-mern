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
    <Box margin={10}>
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
