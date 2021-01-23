import React, {useState} from 'react';
import { useQuery } from 'react-query';

import Drawer from '@material-ui/core/Drawer';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import Badge from '@material-ui/core/Badge';

import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

import { Wrapper } from './App.styles'

export type CardItemType = {
  id: number, title: string, image: string, price: number,
  amount: number, category: string, description: string,
}

const getProducts = async (): Promise<CardItemType[]> => 
  await (await fetch('https://fakestoreapi.com/products')).json();


function App() {
  const {data, isLoading, error} = useQuery<CardItemType[]>(
    'products',
    getProducts
  )

  console.log(data)
  return (
    <div className="app">Hello Wold</div>
  );
}

export default App;
