import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import ProductListItem from './ProductListItem';

const products = [
  {
    id: '1',
    title: 'Potato',
    price: '2.24',
    quantity: 2,
    desc: 'Potato',
    src: 'https://www.alimentarium.org/en/system/files/thumbnails/image/AL027-01_pomme_de_terre_0.jpg',
  },
  {
    id: '2',
    title: 'Potato',
    price: '2.24',
    quantity: 2,
    desc: 'Potato',
    src: 'https://www.alimentarium.org/en/system/files/thumbnails/image/AL027-01_pomme_de_terre_0.jpg',
  },
];
function ProductList() {
  const productList = products.map((prod) => (
    <Grid zeroMinWidth item xs={12} sm={6} md={4} lg={4} xl={3} key={prod.id}>
      <ProductListItem
        id={prod.id}
        desc={prod.desc}
        src={prod.src}
        price={prod.price}
        quantity={prod.quantity}
        key={prod.id}
      />
    </Grid>
  ));
  return (
    <Box width="75%" mx="auto" style={{ marginTop: '20px' }}>
      <Grid container spacing={3}>
        {productList}
      </Grid>
    </Box>
  );
}

export default ProductList;
