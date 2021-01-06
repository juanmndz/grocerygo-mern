import React, { useState, useEffect } from 'react';
import {
  Paper,
  Typography,
} from '@material-ui/core';
import useStyles from '../styles/paperStyles'

const Order = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.toolbar} />
      <main className={classes.layout}>
        <Paper>
          <Typography variant="h4">
            Order
          </Typography>
        
        </Paper>
      </main>
    </>
  );
};

export default Order;
