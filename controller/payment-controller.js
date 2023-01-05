

import { paytmParams, paytmMerchantKey } from '../server.js'
import paytmchecksum from '../paytm/PaytmChecksum.js'
import formidable from 'formidable';

export const addPaymentGateway = async (resquest, response) => {
    try {
        let paytmCheckSum = await paytmchecksum.generateSignature(JSON.stringyfy(paytmParams), paytmMerchantKey)
        let params = {
            ...paytmParams, 'CHECKSUMHASH': paytmCheckSum
        }

        response.status(200).json(params)

    } catch (error) {
        response.status(500).json({ error: error.message })

    }
}

export const paytmResponse = (request, response) => {
    const form = new formidable.IncomingForm();
    let paytmCheckSum =request.body.CHECKSUMHASH;
    delete request.body.CHECKSUMHASH;

    let isVerifySignature = paytmchecksum.verifySignature(request.body,paytmMerchantKey,paytmCheckSum)

    if (isVerifySignature){

    }
    else{
        console.log('Checksum Mismatched');
    }

}