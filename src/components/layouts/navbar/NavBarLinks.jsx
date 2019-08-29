import React from "react";
import styled from "styled-components";

const NavBarLinks = () => {
    
  const Wrapper = styled.nav`
    background: #9DD9D2;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
  `;
  

  const ItemList = styled.ul`
    display: flex;
  `;

  const Item = styled.li`
    display: flex;
    padding: 5px 20px;
    :active,
    :hover {
        border-bottom: 2px solid white;
    }
  `;

  const Link = styled.a`
    font-weight: bold;
    font-size: 20px;
    color: black;
    display: inline-block;
    text-decoration: none;

  `;

  const Logo = styled.a`
    padding: 0 20px;
    font-weight: bold;
    font-size: 25px;
    color: black;
    display: inline-block;
    text-decoration: none;  
    `;

  return (
    <Wrapper>
      <Logo href="#">Flash App</Logo>
      <ItemList>
        <Item>
          <Link href="#">Login</Link>
        </Item>
        <Item>
          <Link href="#">Sign up</Link>
        </Item>
        <Item>
          <Link href="#">Pricing</Link>
        </Item>
      </ItemList>
    </Wrapper>
  );
};

export default NavBarLinks;
