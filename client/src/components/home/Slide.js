import { Box, Typography, styled, Button, Divider } from '@mui/material';
import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css';
import Countdown from 'react-countdown';
import { Link } from 'react-router-dom';



const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const Component = styled(Box)`
    margin-top:10px;
    background:#ffffff;
  `

const Deal = styled(Box)`
    padding: 15px 20px;
    display: flex;

`
const Timer = styled(Box)`
    display: flex;
    color : #7f7f7f;
    align-items: center;
`
const Image = styled('img')({
    marginRight: '15px',
    width: '25px',
});

const DealText = styled(Typography)`
    font-weight:600;
    font-size: 22px;
    line-height:32px;
    margin-right:35px;
`

const Text = styled(Typography)`
    font-size:13px;
    margin-top:5px;
`
const Slide = ({ products, title, timer, model }) => {
    // modal=1 for timer
    const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';
    const renderer = ({ hours, minutes, seconds }) => {
        return <Box variant='span'>{hours} : {minutes} : {seconds} Left</Box>;
    }

    return (
        <Component>
            <Deal>
                <DealText >{title}</DealText>

                {timer==true &&

                    <Timer>
                        <Image src={timerURL} alt='timer' />
                        <Countdown date={Date.now() + 5.04e+7} renderer={renderer} />
                    </Timer>
                }


                <Button style={{ marginLeft: 'auto', borderRadius: '2px', backgroundColor: '#2874f0', fontSize: '13px' }} variant="contained">View All</Button>
            </Deal>
            <Divider />

            <Carousel
                responsive={responsive}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                containerClass="carousel-container"
                swipeable={false}
                draggable={false}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={4000}
                keyBoardControl={true}


            >
                {
                    products.map(product => (
                        <Link to={`product/${product.id}`} style={{ textDecoration: 'none' }}>
                            <Box style={{ textAlign: 'center' }}>
                                <img src={product.url} alt='product' style={{ paddingTop: '25px', width: 'auto', height: '150px', marginRight: '15px' }} />
                                <Text style={{ fontWeight: 600, color: '#212121' }}>{product.title.shortTitle}</Text>
                                <Text style={{ color: 'green' }}>{product.discount}</Text>
                                <Text style={{ color: '#212121', opacity: '.6' }}>{product.tagline}</Text>


                            </Box>
                        </Link>
                    ))
                }

            </Carousel>
        </Component>
    )
}

export default Slide