import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Admin',
      email: 'admin@example.com',
      password: bcrypt.hashSync('1234', 8),
      status: 'admin'
    },
    {
      name: 'John',
      email: 'user@example.com',
      password: bcrypt.hashSync('1234', 8),
      status: 'member',
    },
  ],
  products: [
    {
      name: 'Potato',
      tags: ['vegetables'],
      image: '/images/p1.jpg',
      price: 120,
      stock: 10,
      desc: 'high quality product',
    },
  ],
};
export default data;