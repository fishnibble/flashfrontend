import React, { Fragment } from 'react';
import NavBar from './components/layouts/navbar/NavBar'
import { createGlobalStyle } from 'styled-components';
import Register from './components/loginRegister/Register';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: "Roboto";
  }
`;

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <NavBar />
      <Register />
    </Fragment>
  );
}

export default App;
