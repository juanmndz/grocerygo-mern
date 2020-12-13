import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import {
    Avatar,
  Badge,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import RemoveIcon from '@material-ui/icons/Remove';


const cartProducts = [
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

export default function Header() {
  const [cartDrawer, setCartDrawer] = useState(false);

  const totalPrice = () => {
    let allPrices = [];
    cartProducts.map((prod) => allPrices.push(prod.price * prod.quantity));
    let totalPrice = allPrices.reduce((n, k) => n + k);
    return totalPrice;
  };

  const deleteItem = (id, amount) => {
    return;
  };

  const cartItems = cartProducts.map((prod) => (
    <div key={prod.id}>
      <ListItem>
        <ListItemAvatar>
          <Avatar alt="Img" src={prod.src} />
        </ListItemAvatar>
        <ListItemText
          style={{ fontSize: '20px' }}
          primary={prod.desc}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                color="textPrimary"
              >
                Quantity :
              </Typography>
              {` ${prod.quantity}`} <br></br>
              <Typography
                component="span"
                variant="body2"
                color="textPrimary"
              >
                Price :
              </Typography>
              {` ${prod.price}`}.00
            </React.Fragment>
          }
        ></ListItemText>
        <Button
          aria-label="reduce"
          onClick={() => deleteItem(prod.id, prod.quantity)}
        >
          <RemoveIcon style={{ color: 'red' }} fontSize="small" />
        </Button>
      </ListItem>
      <Divider variant="fullWidth" component="li" />
    </div>
  ));

  return ( 
  <React.Fragment>
          <IconButton
            aria-label="cart"
            variant="outlined"
            color="inherit"
            onClick={() => setCartDrawer(true)}
          >
            <Badge badgeContent={cartProducts.length} color="secondary">
              <ShoppingCartIcon fontSize="large" />
            </Badge>
          </IconButton>
          <Drawer
            variant="temporary"
            anchor="right"
            open={cartDrawer}
            onClose={() => setCartDrawer(false)}
          >
            <Typography component="h1" variant="h4">
              Shopping Cart
            </Typography>

            <Divider />
            <List>
              {cartItems.length > 0 ? (
                cartItems
              ) : (
                <Typography variant="h5" style={{ textAlign: 'center' }}>
                  No items in your shopping cart.
                </Typography>
              )}
            </List>
            <div>
              <Typography component="p" variant="h5">
                <span>Subtotal : $ </span>
                {cartProducts.length && totalPrice()}
                .00
              </Typography>
              <Button
                variant="outlined"
                size="medium"
                // onClick={checkout}
              >
                Checkout
              </Button>
            </div>
          </Drawer>

    </React.Fragment>
  );
}
