import React, { useState } from 'react'
import { AppBar, Toolbar, Box, styled, Typography, IconButton, Drawer, List, ListItem } from '@mui/material';
import { Menu } from '@mui/icons-material';
import Search from './Search';
import CustomButtons from './CustomButtons';
import { Link } from 'react-router-dom';

const StyledHeader = styled(AppBar)`
background: #2874f0;
height:55px

`
const Component = styled(Link)`
    margin-left:12%;
    line-height:0px;
    text-decoration:none;
    color:inherit;
`
const SubHeading = styled(Typography)`
    font-size:10px;
    font-style:italic
`
const PlusImage = styled('img')({
    width: "10px",
    height: '10px',
    marginLeft: '4px'
})

const CustomButtonsWrapper = styled(Box)(({ theme }) => ({
    margin: '0px 5% 0px auto',
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
        display: 'none',
    }
}))

const MenuButton = styled(IconButton)(({ theme }) => ({
    display: 'none',
    [theme.breakpoints.down('md')]: {
        display: 'block',
        color: 'inherit',

    }
}))

function Header() {
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
    const [drawer, setDrawer] = useState(false)

    const list =()=>(
        <Box onClick={handleClose}>
            <List>
                <ListItem button>
                    <CustomButtons/>
                </ListItem>
            </List>
        </Box>
    )

    const handleOpen = () => {
        setDrawer(true)
    }

    const handleClose = () => {
        setDrawer(false)
    }

    return (
        <StyledHeader>
            <Toolbar style={{ minHeight: "55px" }}>
                <MenuButton onClick={handleOpen}>
                    <Menu />
                </MenuButton>
                <Drawer open={drawer} onClose={handleClose}>
                    {list()}
                </Drawer>

                <Component to='/'>
                    <img src={logoURL} alt="logo" style={{ width: "75px" }} />
                    <Box style={{ display: 'flex' }}>
                        <SubHeading>Explore &nbsp;
                            <Box component="span" style={{ color: "#FFE500" }} >Plus</Box>
                        </SubHeading>
                        <PlusImage src={subURL} alt="sub-logo" />
                    </Box>
                </Component>
                <Search />
                <CustomButtonsWrapper>
                    <CustomButtons />
                </CustomButtonsWrapper>
            </Toolbar>
        </StyledHeader>

    )
}

export default Header