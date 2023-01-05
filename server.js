import Express from "express";
import Connection from "./database/db.js";
import dotenv from 'dotenv';
import DefaultData from "./default.js";
import Router from "./routes/route.js";
import cors from 'cors'
import bodyParser from "body-parser";

import { v4 as uuid } from 'uuid'

const app = Express();
dotenv.config();
app.use(cors());
app.use(bodyParser.json({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', Router);

const PORT = process.env.PORT || 8080;
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;
const URL= `mongodb+srv://${USERNAME}:${PASSWORD}@flipkart-db.ng7etow.mongodb.net/ecommerce?retryWrites=true&w=majority`


Connection(URL);

app.listen(PORT, console.log("server runs successfully"))

DefaultData();

export let paytmMerchantKey = process.env.PAYTM_MERCHANT_KEY;
export let paytmParams = {};
paytmParams['MID'] = process.env.PAYTM_MID;
paytmParams['WEBSITE'] = process.env.PAYTM_WEBSITE;
paytmParams['CHANNEL_ID'] = process.env.PAYTM_CHANNEL;
paytmParams['INDUSTRY_TYPE_ID'] = process.env.PATYM_INDUSTRY_TYPE_ID;
paytmParams['CUST_ID'] = process.env.PAYTM_CUST_ID;
paytmParams['ORDER_ID'] = uuid();
paytmParams['TXN_AMOUNT'] = '100'
paytmParams['CALLBACK_URL'] = 'callback';
paytmParams['EMAIL'] = 'rinkal95@gamil.com'
paytmParams['MOBILE'] = '9090887766'