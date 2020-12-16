import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import CatalogListItem from './CatalogListItem';
import { useDispatch, useSelector } from 'react-redux';
import { catalogListAsync } from '../../modules/catalog/catalogActions';
import { CART_ADD_ITEM } from '../../modules/cart/cartActions';
import useToggle from '../../hooks/useToggle';
import { IconButton, Snackbar } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

function CatalogList() {
  const dispatch = useDispatch();
  const catalogList = useSelector((state) => state.catalog);
  const { loading, catalog } = catalogList;
  const [openSnack, toggleOpenSnack] = useToggle(false);

  const handleAddItemToCart = (item) => {
    dispatch({ type: CART_ADD_ITEM, payload: item });
    toggleOpenSnack();
  };

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
        addItemCart={() => handleAddItemToCart(prod)}
      />
    </Grid>
  ));
  return (
    <>
      {!loading && (
        <Box width="75%" mx="auto" style={{ marginTop: '20px' }}>
          <Grid container spacing={3}>
            {catalogListDisplay}
          </Grid>
        </Box>
      )}
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        open={openSnack}
        autoHideDuration={3000}
        message={<span id="message-id">Added To Cart!</span>}
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
        action={[
          <IconButton
            onClick={toggleOpenSnack}
            color="inherit"
            key="close"
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>,
        ]}
        onClose={toggleOpenSnack}
      />
    </>
  );
}

export default CatalogList;
