import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../data.js';
import User from '../models/userModel.js';
import {  isAdmin, isAuth } from '../utils.js';

const userRouter = express.Router();

userRouter.get(
  '/seed',
  expressAsyncHandler(async (req, res) => {
    const createdUsers = await User.insertMany(data.users);
    res.send({ createdUsers });
  })
);

userRouter.get(
    '/',
    isAuth,
    isAdmin,
    expressAsyncHandler(async (req, res) => {
      const users = await User.find({});
      res.send(users);
    })
  );

  

export default userRouter;
