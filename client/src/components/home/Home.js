import { Box, styled } from '@mui/material'
import React, { useEffect } from 'react'
import Banner from './Banner'
import NavBar from './NavBar'
import Slide from './Slide'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../redux/actions/productActions'
import MidSlide from './MidSlide'
import MidSection from './MidSection'

const Component = styled(Box)`
    padding:10px;
    background:#f2f2f2;
`

function Home() {
    const { products } = useSelector(state => state.getProducts)
    console.log(products);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])
    return (
        <>
            <NavBar />
            <Component>
                <Banner />
                <MidSlide products={products} title="Deals of the Day" timer={true}/>
                <MidSection/>
                <Slide products={products} title="Discounts for You" />
                <Slide products={products} title="Suggesting Items" />
                <Slide products={products} title="Top Selection" />
                <Slide products={products} title="Recommended Items" />
                <Slide products={products} title="Trending offers" />
                <Slide products={products} title="Season's top picks" />
                <Slide products={products} title="Top Deals on Accessories" />

            </Component>
        </>
    )
}

export default Home