import React, { useState } from 'react';
import styles from './CatalogListItem.module.scss';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import useToggle from '../../hooks/useToggle';
import { makeStyles } from '@material-ui/core/styles';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
  },
  dropdown: {
    position: 'absolute',
    top: 28,
    right: 0,
    left: 0,
    zIndex: 1,
    border: '1px solid',
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
  },
}));


function CatalogListItem(props) {
  const { imgsrc, price, title, addItemCart, desc, id } = props;

  const cartItems = useSelector((state) => state.cart.cartItems);
  const itemInCart = cartItems.find((cartItem) => cartItem.id === id);
  const [buttonHighlight, setButtonHighlight] = useState(useToggle(false));
  const handleClick = () => {
    setButtonHighlight((prev) => !prev);
  };

  const handleClickAway = () => {
    setButtonHighlight(false);
  };


  return (
    <div className={clsx(styles.catalogListItem, styles.flexOrder)}>
      <img alt="product image" className={styles.productImg} src={imgsrc} />
      <div className={styles.productInfo}>
        <span className={styles.productPrice}>{`$${price}`}</span>
        <span className={styles.productTitle}>{`${title}`}</span>
        <span className={styles.productDesc}>{`${desc}`}</span>
      </div>
      {itemInCart ? (
            <ClickAwayListener
            mouseEvent="onMouseDown"
            touchEvent="onTouchStart"
            onClickAway={handleClickAway}
          >
        <div className={styles.productButtonArea} style={{position: 'relative'}}>
          <button
            onClick={handleClick}
            className={clsx(styles.productButton)}
          >
            {itemInCart.qty}
          </button>
          {buttonHighlight ? (
            <div className={styles.productButtonsAbsolute}>
            <button
              onClick={addItemCart}
            >
              +
            </button>
            {itemInCart.qty}
            <button
              onClick={addItemCart}
            >
              -
            </button>
          </div>
        ) : null}

        </div>
        </ClickAwayListener>
      ) : (
            <div className={styles.productButtonArea}>
            <button
              onClick={addItemCart}
              className={styles.productButtonFlex100}
            >
              Add To Cart
            </button>
          </div>
      )}
    </div>
  );
}

export default CatalogListItem;
