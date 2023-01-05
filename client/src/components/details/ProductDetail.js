import React from 'react'
import { Box, Typography, styled, Table, TableBody, TableCell, TableRow } from '@mui/material'
import { LocalOffer as Badge } from '@mui/icons-material';

const SmallText = styled(Box)`
    font-size:14px;
    vertical-align:baseline;
    &>p{
        font-size:14px;
        margin-top:10px;
    }
`

const StyleBadge = styled(Badge)`
    margin-right:10px;
    color: #26a541;
    font-size: 15px;
`
const RowText = styled(TableRow)`
font-size:14px;
vertical-align:baseline;
    &>td{
        font-size:14px;
        margin-top:10px;
        border:none;
    }
`


const ProductDetail = ({ product }) => {
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
    const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
    const date = new Date(new Date().getTime() + (7 * 24 * 60 * 60 * 1000));
    console.log(date);
    return (
        <>
            <Typography> {product.title.longTitle} </Typography>
            <Typography style={{ marginTop: '5px', color: '#878787', fontSize: '14px' }}>
                8 Rating & 1 Reviews
                <Box component='span'><img src={fassured} alt='assured_image' style={{ width: '77px', marginLeft: '20px' }} /></Box>
            </Typography>
            <Typography>
                <Box component='span' style={{ fontSize: '30px', fontWeight: '500' }}>₹{product.price.cost} </Box>&nbsp;&nbsp;
                <Box component='span' style={{ color: '#878787', fontWeight: '600' }}><strike>₹{product.price.mrp}</strike> </Box>&nbsp;&nbsp;
                <Box component='span' style={{ color: '#26a541' }}>{product.price.discount} off </Box>
            </Typography>
            <Typography>Available Offers </Typography>
            <SmallText>
                <Typography><StyleBadge />Special PriceGet extra 32% off (price inclusive of discount)T&C</Typography>
                <Typography><StyleBadge />Bank Offer10% off on SBI Credit Card, up to ₹750. On orders of ₹1500 and aboveT&C</Typography>
                <Typography><StyleBadge />Partner OfferSign up for Flipkart Pay Later and get Flipkart Gift Card worth ₹150* Know More</Typography>
            </SmallText>
            <Table>
                <TableBody>
                    <RowText>
                        <TableCell style={{ color: '#878787' }}>Delivery</TableCell>
                        <TableCell style={{ fontWeight: '600' }}>Delivered By {date.toDateString()} | ₹ 40  </TableCell>
                    </RowText>
                    <RowText>
                        <TableCell style={{ color: '#878787' }}>Warrranty</TableCell>
                        <TableCell>No Warrranty</TableCell>
                    </RowText>
                    <RowText>
                        <TableCell style={{ color: '#878787' }}>Seller</TableCell>
                        <TableCell>
                            <Box component='span' style={{ color: '#2874f0' }}>SuperComNet </Box>
                            <Typography>GST invoice available</Typography>
                            <Typography>View more sellers starting from ₹{product.price.cost}</Typography>
                        </TableCell>
                    </RowText>
                    <RowText>
                        <TableCell colSpan={2}>
                            <img src={adURL} alt="superCoin" style={{ width: '390px' }} />
                        </TableCell>
                    </RowText>
                    <RowText>
                        <TableCell style={{ color: '#878787' }}>Description</TableCell>
                        <TableCell>{product.description}</TableCell>
                    </RowText>
                </TableBody>
            </Table>
        </>
    )
}

export default ProductDetail