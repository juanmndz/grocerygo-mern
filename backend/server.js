import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import morgan from 'morgan';
import userRoutes from './routers/userRoutes.js'
import orderRoutes from './routers/orderRoutes.js'
import productRoutes from './routers/productRoutes.js'
import {notFound, errorHandler} from './middleware/errorMiddleware.js'

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/eccomerce', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});


if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
  }
  
app.use('/products', productRoutes)
app.use('/users', userRoutes)
app.use('/order', orderRoutes)


app.get('/', (req, res) => {
  res.send('Server is ready');
});



app.use(notFound)
app.use(errorHandler)


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
  )});
