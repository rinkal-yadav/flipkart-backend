import express from "express";
import { userSignup, userLogin } from "../controller/user-controller.js";
import { getproducts, getproductById } from '../controller/product-controller.js'
import { addPaymentGateway, paytmResponse } from "../controller/payment-controller.js";

const router = express.Router();

router.post('/signup', userSignup)
router.post('/login', userLogin)

router.get('/products', getproducts)
router.get('/product/:id', getproductById)

router.post('/payment', addPaymentGateway)
router.post('/callback', paytmResponse)



export default router
