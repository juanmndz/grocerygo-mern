import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

function CatalogListItem(props) {
  const { imgsrc, qty, price, title } = props;
  return (
    <div>
      <Card>
        <CardActionArea>
          <img src={imgsrc} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography color="textSecondary" component="p">
              <span>Price:</span>$ {price}.00
            </Typography>
            <Typography color="textSecondary" component="p">
              <span>Available Quantity:</span>
              {qty}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button aria-label="reduce">
            <RemoveIcon fontSize="small" />
          </Button>
          <Typography component="span">{0}</Typography>
          <Button aria-label="increase">
            <AddIcon fontSize="small" />
          </Button>
          <Button
            size="medium"
            color="primary"
            variant="contained"
            id="addToCart"
          >
            Add To Cart
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default CatalogListItem;
