import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  border: 1px solid lightblue;
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;


  button { border-radius: 0 0 20px 20px }

  img {
    max-height: 250px;
    object-fit: cover;
    border-radius: 20px 20px 0 0;
  }

  div {
    font-family: Arial, Helvetica, sans-serif;
    height: 100%;
    padding: 1rem;
  }

`;
