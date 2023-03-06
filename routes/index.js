const express = require('express')
const mainController = require('../controllers/mainController')
const router = express.Router()

router.get('/', mainController.home);
router.get('/producto/:productoId', mainController.producto);
router.get('/productcart', mainController.cart);
router.get('/productList', mainController.producList);
router.get("/create",mainController.create)

module.exports = router;