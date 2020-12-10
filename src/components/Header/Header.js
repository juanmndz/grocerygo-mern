import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {
  Avatar,
  Badge,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import RemoveIcon from '@material-ui/icons/Remove';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const cartProducts = [
  {
    id: '1',
    title: 'Tony',
    price: '2.24',
    quantity: 2,
    desc: 'tony tony',
    src: 'https://i-invdn-com.akamaized.net/trkd-images/LYNXMPEGB81TM_L.jpg',
  },
  {
    id: '2',
    title: 'Alex',
    price: '2.24',
    quantity: 2,
    desc: 'tony tony',
    src: 'https://i-invdn-com.akamaized.net/trkd-images/LYNXMPEGB81TM_L.jpg',
  },
];

export default function ButtonAppBar() {
  const classes = useStyles();
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
      <ListItem className={classes.ListItem}>
        <ListItemAvatar>
          <Avatar alt="Img" src={prod.src} />
        </ListItemAvatar>
        <ListItemText
          style={{ fontSize: '20px' }}
          className={classes.ListText}
          primary={prod.desc}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                Quantity :
              </Typography>
              {` ${prod.quantity}`} <br></br>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
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
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
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
            classes={{
              paper: classes.DrawerPaper,
            }}
          >
            <Typography component="h1" variant="h4">
              Shopping Cart
            </Typography>

            <Divider />
            <List className={classes.List}>
              {cartItems.length > 0 ? (
                cartItems
              ) : (
                <Typography variant="h5" style={{ textAlign: 'center' }}>
                  No items in your shopping cart.
                </Typography>
              )}
            </List>
            <div className={classes.Bottom}>
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
        </Toolbar>
      </AppBar>
    </div>
  );
}
