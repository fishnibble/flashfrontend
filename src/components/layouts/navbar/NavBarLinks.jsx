import React from "react";
import styled from "styled-components";

const NavBarLinks = () => {
  const Wrapper = styled.nav`
    background: #7f7b82;
    font-family: "Roboto";
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
  `;

  const ItemList = styled.ul`
    display: flex;
  `;

  const Item = styled.li`
    display: flex;
    padding: 20px;
  `;

  const Link = styled.a`
    font-weight: bold;
    color: #e5d0cc;
    display: inline-block;
  `;

  const Logo = styled.a`
    padding: 0 20px;
    font-weight: bold;
    color: #e5d0cc;
    display: inline-block;
  `;

  return (
    <Wrapper>
      <Logo>Test</Logo>
      <ItemList>
        <Item>
          <Link>Login</Link>
        </Item>
        <Item>
          <Link>Sign up</Link>
        </Item>
        <Item>
          <Link>Pricing</Link>
        </Item>
      </ItemList>
    </Wrapper>
  );
};

export default NavBarLinks;
