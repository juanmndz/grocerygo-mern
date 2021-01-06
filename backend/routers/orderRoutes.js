import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Order from '../models/orderModel.js';
import Stripe from 'stripe'
import { isAuth } from '../utils.js';
const stripe = new Stripe('sk_test_51HdgOmBXsMDmZZcdkDscGgFvkT269F7zfqulQzLTm8zt1tOwaneYmvdCVLJ0ZXyoJbyqR6RXifM4YhsCjZpHKY5j00XoAcKnhg');

const orderRouter = express.Router();

orderRouter.post(
  '/payment',
  expressAsyncHandler(async (req, res) => {
    const total = req.body.total;
    console.log('Payment Request Recieved BOOM!!! for this amount >>> ', total)
    
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total * 100,
        currency: 'usd'
    })
    // console.log(paymentIntent, 'paymentIntent')
    res.status(201).send({
        clientSecret: paymentIntent.client_secret
    })
  })
)

orderRouter.post(
  '/create', isAuth,
  expressAsyncHandler(async (req, res) => {
    const {
      orderItems,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    } = req.body

    if (orderItems && orderItems.length === 0) {
      res.status(400)
      throw new Error('No order items')
      return
    } else {
    // console.log(req.body)
      const order = new Order({
        orderItems,
        user: req.user._id,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
      })
      console.log(order, 'order')

      const createdOrder = await order.save().then(() => {

    })
    .catch((error) => {
        //When there are errors We handle them here
        console.log(error);
        res.status(404)
        throw new Error('Order not found')
  
    });
      console.log(order, 'orderx')

      res.status(201).json({createdOrder})
    }
  })
)

orderRouter.get(
  '/orderId/:id',
  expressAsyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id).populate(
      'user',
      'name email'
    )
  
    if (order) {
      res.json(order)
    } else {
      res.status(404)
      throw new Error('Order not found')
    }
  })
);

orderRouter.get(
  '/myorders',
  expressAsyncHandler(async (req, res) => {
    const orders = await Order.find({ user: req.user._id })
    res.json(orders)
  })
)

orderRouter.get(
  '/all',
  expressAsyncHandler(async (req, res) => {
    const orders = await Order.find({})
    res.json(orders)
  })
)
    

orderRouter.get(
  '/seed',
  expressAsyncHandler(async (req, res) => {
    // await Order.remove({});
    console.log('fdsf')
    // const createdProducts = await Product.insertMany(data.products);
    res.send({  });
  })
);
export default orderRouter;
