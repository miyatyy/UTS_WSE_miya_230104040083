const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const ordersRoutes = require('./routes/orders');

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.get('/api/info', (req, res) => {
  res.status(200).json({
    status: "success",
    data: {
      project: "UTS_WSE_miya_230104040083",
      resource: "orders",
      author: "Nama Kamu - NIM 230104040083"
    }
  });
});

app.use('/api/orders', ordersRoutes);

module.exports = app;
