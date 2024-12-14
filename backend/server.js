const express = require('express');
const dotenv = require('dotenv').config();
const connectDB=require('./connect/database.js');
const port = process.env.PORT || 5000;
connectDB()
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const {errorHandler}=require('.\\middleware\\errorMiddleware.js');
app.use('/api/tasks', require('./routes/taskRoutes'));
app.use('/api/users', require('./routes/userRoutes'));

app.use(errorHandler) ; 
app.listen(port, () => console.log(`Server listening on ${port}`));
