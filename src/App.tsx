import React, { useState } from 'react';
import { useQuery } from 'react-query';

import { Wrapper, StyledButton } from './App.styles'
import Grid from '@material-ui/core/Grid';
import Items from './components/Items/items';
import Badge from '@material-ui/core/Badge';
import Drawer from '@material-ui/core/Drawer';
import LinearProgress from '@material-ui/core/LinearProgress';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

export type CardItemType = {
  id: number, title: string, image: string, price: number,
  amount: number, category: string, description: string,
}

const getProducts = async (): Promise<CardItemType[]> =>
  await (await fetch('https://fakestoreapi.com/products')).json();


function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as CardItemType[]);


  const { data, isLoading, error } = useQuery<CardItemType[]>(
    'products', getProducts
  )

  console.log(data)

  const getTotalItems = (items: CardItemType[]) => 
    items.reduce((ack: number, item) => ack + item.amount, 0);

  const handleAddToCart = (clickedItem: CardItemType) => null;
  // const handleRemoveFromCard = () => null;

  if (isLoading) return <LinearProgress />;
  if (error) return <div>Something went wrong ...</div>

  return (
    <Wrapper>
      <Drawer anchor='right' open={cartOpen} onClick={() => setCartOpen(false)}>
        Cart goes here
      </Drawer>

      <StyledButton onClick={() => setCartOpen(true)}>
        <Badge badgeContent={getTotalItems(cartItems)} color="error">
          <AddShoppingCartIcon />
        </Badge>
      </StyledButton>

      <Grid container spacing={3}>
        {data?.map(item => (
          <Grid item key={item.id} xs={12} sm={4}>
            <Items item={item} handleAddToCart={handleAddToCart} />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
}

export default App;
