import { Badge, Box, Button, styled, Typography } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React, { useContext, useState } from 'react'
import LoginDialog from '../login/LoginDialog';
import { DataContext } from '../../context/DataProvider';
import Profile from './Profile';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
const Wrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    ' & >div, &>button,&>p': {
        marginRight: '40px',
        fontSize: '14px',
    },
    [theme.breakpoints.down('md')]: {
        display: 'block',
    }

}))

const Container = styled(Link)(({ theme }) => ({
    textDecoration: 'none',
    color: 'inherit',
    display: 'flex',
    [theme.breakpoints.down('md')]: {
        display: 'block',
    }
}))
const LoginButton = styled(Button)`
    background:#FFFFFF;
    color:#2874f0;
    text-transform:none;
    padding:5px 40px;
    border-radius:2px;
    box-shadow:none;
    font-weight:600;
    height:32px;
`
function CustomButtons() {
    const [open, setOpen] = useState(false);
    const { account, setAccount } = useContext(DataContext)
    const { CartItems } = useSelector(state => state.cart)

    const openDialog = () => {
        setOpen(true)
    }
    return (
        <Wrapper>
            {
                account ? <Profile account={account} setAccount={setAccount} />
                    :
                    <LoginButton variant="contained" onClick={() => openDialog()}>Login</LoginButton>

            }
            <Typography style={{ marginTop: '3px', fontWeight: "600" }}> Become a Seller</Typography>
            <Typography style={{ marginTop: '3px', fontWeight: "600" }}>More</Typography>
            <Container to='/cart'>
                <Badge badgeContent={CartItems?.length} color='success'>
                    <ShoppingCartIcon />
                </Badge>
                <Typography style={{ fontWeight: "600",marginLeft:'10px' }}>Cart</Typography>
            </Container>
            <LoginDialog open={open} setOpen={setOpen} />
        </Wrapper>
    )
}

export default CustomButtons