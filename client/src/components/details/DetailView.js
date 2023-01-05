import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProductDetails } from '../../redux/actions/productActions'
import { Box,styled, Grid } from '@mui/material'
import ActionItems from './ActionItems';
import ProductDetail from './ProductDetail';

const Component = styled(Box)`
`
const Container = styled(Grid)`
  display:flex;
 `


const RightContainer = styled(Grid)`
    margin-top:50px;
`

const DetailView = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { loading, product } = useSelector(state => state.getProductDetails)

  useEffect(() => {
    if (product && id !== product.id)
      dispatch(getProductDetails(id))
  }, [dispatch, id, loading, product])

  // console.log(product);

  return (
    <Component>
      {
        product && Object.keys(product).length &&
        <Container container>
          <Grid item lg={4} md={4} sm={8} xs={12}>
            <ActionItems product={product} />
          </Grid>
          <RightContainer item lg={8} md={8} sm={8} xs={12}>            
            <ProductDetail product={product}/>
          </RightContainer>
        </Container>
      }


    </Component>
  )
}

export default DetailView