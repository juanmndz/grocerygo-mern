import React, {useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import CatalogListItem from './CatalogListItem';
import { useDispatch, useSelector } from 'react-redux';
import { catalogListAsync } from '../../modules/catalog/catalogActions';


function CatalogList() {
  const dispatch = useDispatch();
  const catalogList = useSelector((state) => state.catalog);
  const { loading, catalog } = catalogList;

  useEffect(() => {
    dispatch(catalogListAsync());
  }, [dispatch]);
  const catalogListDisplay = catalog.map((prod) => (
    <Grid zeroMinWidth item xs={12} sm={6} md={4} lg={4} xl={3} key={prod.id}>
      <CatalogListItem
        id={prod.id}
        desc={prod.desc}
        imgsrc={prod.imgsrc}
        title={prod.title}
        price={prod.price}
        quantity={prod.quantity}
        key={prod.id}
      />
    </Grid>
  ));
  return (
    <>
  {!loading &&  <Box width="75%" mx="auto" style={{ marginTop: '20px' }}>
      <Grid container spacing={3}>
        {catalogListDisplay}
      </Grid>
    </Box>}
    </>
  );
}

export default CatalogList;
