import React from 'react';

import { Wrapper } from './items.styles';
import { CardItemType } from '../../App';
import Button from '@material-ui/core/Button';

type Props = {
  item: CardItemType,
  handleAddToCart: (clickedItem: CardItemType) => void
}

const Items: React.FC<Props> = ({ item, handleAddToCart }) => {
  return (
    <Wrapper>
      <img src={item.image} alt={item.title}/>
      <div className="">
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <h3>${item.price}</h3>
      </div>

      <Button onClick={() => handleAddToCart(item)}>Add in cart</Button>
    </Wrapper>
  );
}

export default Items;