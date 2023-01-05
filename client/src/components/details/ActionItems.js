import { Box, Button, styled } from '@mui/material'
import React, { useState } from 'react'
import { FlashOn as Flash, ShoppingCart as Cart } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actions/cartAction';

import { payUsingPaytm } from '../../service/api';
import { post } from '../../utils/paytm'


const LeftContainer = styled(Box)`
  minWidth: 40%;
  padding: 40px 0px 0px 80px;
 `
const Image = styled('img')({
  width: '100%',
  padding: '15px'
})

const ButtonStyle = styled(Button)`
    width:46%;
    height:50px;
  `


const ActionItems = ({ product }) => {
  const { id } = product
  const [quantity, setQuantity] = useState(1)
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const addItemToCart = async () => {
    await dispatch(addToCart(id, quantity))

    await navigate('/cart')
  }
  const buyNow = async () => {
    let response = await payUsingPaytm({ amount: 500, email: "rinkal95@gmail.com" });
    let information = {
      action: "https://securegw-stage.paytm.in/order/process",
      params: response
    }
    post(information)
  }

  return (
    <LeftContainer>
      <Box style={{ padding: '15px 20px', border: '1px solid #f0f0f0f0', width: '90%', }}><Image src={product.detailUrl} alt='detail_Image' /> </Box>
      <ButtonStyle variant="contained" onClick={() => addItemToCart()} style={{ background: '#ff9f00', marginRight: '20px' }} ><Cart /> ADD TO CART </ButtonStyle>
      <ButtonStyle variant="contained" onClick={() => buyNow()} style={{ background: '#fb641b' }}><Flash /> BUY NOW </ButtonStyle>
    </LeftContainer>
  )
}

export default ActionItems