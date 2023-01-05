import { Box, Button, ButtonGroup, styled, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { removeFromCart } from '../../redux/actions/cartAction'

const Container = styled(Box)`
  display:flex;
  padding: 25px;
  justify-content:space-between;
  box-shadow: 0px 0px 5px #000000;
  background-color:#ffffff;

  
  `

const LeftContainer = styled(Box)`
  display:flex;
`

const Details = styled(Box)`
  padding:10px;
`

const RightContainer = styled(Box)`
    width:25%;
  `

const DeliveryFont = styled(Typography)`
  font-size:14px;
`
const ProductImg = styled('img')({
  width: '150px',
  height: '150px',
})

const Remove = styled(Button)`
  margin-left:25px;
  color:#000;
  font-weight:600;  
`

const StyledButton = styled(Button)`
  border-radius:50%;
`

const CartItem = ({ cartItems, index }) => {
  const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'
  const { description, detailUrl, price, id, quantity, tagline, title, url } = cartItems
  const date = new Date(new Date().getTime() + (7 * 24 * 60 * 60 * 1000));
  var [Productquantity, setProductQuantity] = useState(1)

  const Increment = () => {
    setProductQuantity(Productquantity += 1);
  }
  const Decrement = () => {
    if (Productquantity >= 2) {
      setProductQuantity(Productquantity -= 1);
    }

  }

  const dispatch = useDispatch()

  const removeItemFromCart = (id) => {
    dispatch(removeFromCart(id))

  }

  return (

    <Container>
      <Box component='left'>
        <LeftContainer>
          <Box> <ProductImg src={url} alt="productImg" /></Box>
          <Details component='span'>
            <Typography>{title.longTitle}</Typography>
            <Typography style={{ color: '#878787' }} >Seller:TBsmart <img src={fassured} alt='assuredImg' style={{ width: 50 }} /></Typography>
            <Typography>
              <Box component='span' style={{ fontSize: '18px', fontWeight: '600' }}>₹{(price.cost)*Productquantity} </Box>&nbsp;&nbsp;
              <Box component='span' style={{ color: '#878787', fontWeight: '600' }}><strike>₹{(price.mrp)*Productquantity}</strike> </Box>&nbsp;&nbsp;
              <Box component='span' style={{ color: '#26a541' }}>{price.discount} off </Box>
            </Typography>
          </Details>
        </LeftContainer>
        <ButtonGroup style={{ marginTop: '8px' }}>
          <StyledButton onClick={Decrement} >-</StyledButton>
          <Button disabled >{Productquantity}</Button>
          <StyledButton onClick={Increment}>+</StyledButton>
        </ButtonGroup>
        <Remove onClick={() => removeItemFromCart(id)}>REMOVE</Remove>

      </Box>



      <RightContainer>
        <DeliveryFont >Delivered By {date.toDateString()} | ₹ 40  </DeliveryFont>
      </RightContainer>
    </Container>
  )
}

export default CartItem