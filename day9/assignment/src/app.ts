import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/userRoutes';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/users', userRoutes);

app.listen(3000, () => {
  console.log("server running successfully");
})