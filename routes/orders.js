// routes/orders.js
const express = require('express');
const router = express.Router();
const controller = require('../controllers/ordersController');

// GET /api/orders
router.get('/', controller.getAllOrders);

// GET /api/orders/:id
router.get('/:id', controller.getOrderById);

// POST /api/orders
router.post('/', controller.createOrder);

// PUT /api/orders/:id
router.put('/:id', controller.updateOrder);

// DELETE /api/orders/:id
router.delete('/:id', controller.deleteOrder);

module.exports = router;
