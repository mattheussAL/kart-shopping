import styled from 'styled-components';

export const Wrapper = styled.div`
  font-family: Arial, Helvetica, sans-serif;

  padding: 20px;
  border-bottom: 1px solid lightblue;

  display: flex;  
  justify-content: space-between;

  div { flex: 1 }

  .information, .buttons{
    display: flex;
    justify-content: space-between;
  }

  img {
    max-width: 80px;
    object-fit: cover;
    margin-left: 40px;
  }

`;
