import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import styles from './CatalogListItem.module.scss';
import clsx from 'clsx';

const stylesx = {
  checkoutButton: {
    color: '#FFF',
    backgroundColor: '#43B02A',
    width: '100%',
    height: '48px',
    fontWeight: '750',
    fontSize: '18px',
  },
}

function CatalogListItem(props) {
  const { imgsrc, qty, price, title, addItemCart, desc } = props;
  return (
    <div className={clsx(styles.catalogListItem, styles.flexOrder)    }>
        <img alt="product image" className={styles.productImg} src={imgsrc} />
      <div className={styles.productInfo}>
        <span className={styles.productPrice}>{`$${price}`}</span>
        <span>{`${title}`}</span>
      </div>
      <button
        size="medium"
        className={styles.productButton}
        variant="contained"
        >
        Add To Cart
      </button>
    </div>
  );
}

export default CatalogListItem;
