import React, { useState } from 'react';
import styles from './CatalogListItem.module.scss';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import useToggle from '../../hooks/useToggle';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';



function CatalogListItem(props) {
  const { image, price, name, addItemCart, removeItemCart, desc, id } = props;
  
  const cartItems = useSelector((state) => state.cart.cartItems);
  const itemInCart = cartItems.find((cartItem) => cartItem._id === id);
  const [buttonHighlight, setButtonHighlight] = useState(useToggle(false));
  const handleClick = () => {
    setButtonHighlight((prev) => !prev);
  };

  const handleClickAway = () => {
    setButtonHighlight(false);
  };

  const addItemCartWUi = () => {
    handleClick()
    addItemCart()
  }


  return (
    <div className={clsx(styles.catalogListItem, styles.flexOrder)}>
      <img alt="product image" className={styles.productImg} src={image} />
      <div className={styles.productInfo}>
        <span className={styles.productPrice}>{`$${price}`}</span>
        <span className={styles.productTitle}>{`${name}`}</span>
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
              className={styles.buttonPlus}
            >
              +
            </button>
            <div className={styles.textQty}>
            {itemInCart.qty}
            </div>
            <button
              onClick={removeItemCart}
              className={styles.buttonPlus}
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
              onClick={addItemCartWUi}
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
