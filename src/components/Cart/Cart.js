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
import { useDispatch, useSelector } from 'react-redux';
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../../modules/cart/cartActions';
import useToggle from '../../hooks/useToggle';

export default function Header() {
  const [cartDrawer, setCartDrawer] = useToggle(false);
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const {cartItems } = cart;
  const totalPrice = () => {
    let allPrices = [];
    cartItems.map((prod) => allPrices.push(prod.price * prod.qty));
    let totalPrice = allPrices.reduce((n, k) => n + k);
    return totalPrice;
  };

  const removeItemFromCart = (item) => {
    dispatch({ type: CART_REMOVE_ITEM, payload: item });
  };



  const cartList = cartItems.map((prod) => (
    <div key={prod.id}>
      <ListItem>
        <ListItemAvatar>
          <Avatar alt="Img" src={prod.imgsrc} />
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
                qty :
              </Typography>
              {` ${prod.qty}`} <br></br>
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
          onClick={() => removeItemFromCart(prod)}
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
            onClick={setCartDrawer}
          >
            <Badge badgeContent={cartItems.length} color="secondary">
              <ShoppingCartIcon fontSize="large" />
            </Badge>
          </IconButton>
          <Drawer
            variant="temporary"
            anchor="right"
            open={cartDrawer}
            onClose={setCartDrawer}
          >
            <Typography component="h1" variant="h4">
              Shopping Cart
            </Typography>

            <Divider />
            <List>
              {cartList.length > 0 ? (
                cartList
              ) : (
                <Typography variant="h5" style={{ textAlign: 'center' }}>
                  No items in your shopping cart.
                </Typography>
              )}
            </List>
            <div>
              <Typography component="p" variant="h5">
                <span>Subtotal : $ </span>
                {cartItems.length && totalPrice()}
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
