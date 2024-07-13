const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/database'); 
const userRouter = require('./Router/user');

const app = express();
const port = 3000;

dotenv.config();

const corsOptions = {
  origin: 'http://localhost:5173',
  credentials: true,
};

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors(corsOptions));


app.use('/', userRouter);

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
}).catch((error) => {
  console.error('Database connection failed:', error);
});


