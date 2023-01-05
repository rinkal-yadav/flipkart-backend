import { Grid, Typography, Box, styled, Button } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from './CartItem'
import EmptyCart from './EmptyCart'
import TotalBal from './TotalBal'

const Container = styled(Grid)`
    padding:35px 135px;
`

const CartHead = styled(Box)`
    display : flex;
    justify-content:space-between;
    align-items : center;
    margin:0 10px;
`

const LeftContainer =styled(Grid)`
box-shadow: -1px -1px 5px #000000;
`

const ButtonWrapper =styled(Box)`
    box-shadow: -1px -1px 5px #000000;
    background-color:#fff;
    padding:16px 22px;
`

const StyledButton = styled(Button)`
    margin-left:auto;
    display:flex;
    background-color: #fb641b;
    width: 200px;
    height: 40px;
    color: #fff;
    font-weight: 600;
    border-radius:2px;

`

const Cart = () => {
    const { CartItems } = useSelector(state => state.cart)

    return (
        <>
            {
                CartItems.length >= 1 ?
                    <Container container>
                        <LeftContainer item lg={9} md={9} sm={12} xs={12}>
                            <CartHead>
                                <Typography style={{borderRight : '2px solid #878787',paddingRight:'20px'}}>My Cart ({CartItems.length}) </Typography>
                                <Typography> From Saved Addresses</Typography>
                                <Button> Enter Delivery Pincode</Button>
                            </CartHead>
                            {CartItems.map((item, index) => (

                                <CartItem cartItems={item} index={index} />

                            ))}
                            <ButtonWrapper>
                                <StyledButton>Place Order</StyledButton>
                            </ButtonWrapper>
                        </LeftContainer>

                        <Grid item lg={3} md={3} sm={12} xs={12}>
                            <TotalBal CartItems={CartItems} />
                        </Grid>

                    </Container>
                    : <EmptyCart/>
            }
        </>
    )
}

export default Cart