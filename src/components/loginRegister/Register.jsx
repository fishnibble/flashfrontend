import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 15%;
`;

const Logo = styled.div`

`;

const LoginItem = styled.div`
  width: 30%;
`;

const LoginForm = styled.form`
    display: flex
    flex-direction: column;
    
`;

const FormInput = styled.input`
padding: 15px 32px;
  margin: 10px 0;
`;

const FormButton = styled.input`
  margin-top: 10px;
  text-decoration: none;
  border: none;
  padding: 15px 32px;
  font-weight: bold;
  background: #392F5A;
  color: white;
  font-size: 20px;
`;

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
  }

  emailHandler = event => {
    console.log(this.state.email);
    this.setState({ email: event.target.value });
  };

  passHandler = event => {
    console.log(this.state.password);
    this.setState({ password: event.target.value });
  };

  render() {
    return (
        <Container>
            <Logo></Logo>
            <LoginItem>
                <LoginForm>
                    <FormInput type="text" placeholder="Email" required />
                    <FormInput type="password" placeholder="Password" required />
                    <FormInput type="Password" placeholder="Retype Password" required />
                    <FormButton type="submit" value="Log in" />
                </LoginForm>
            </LoginItem>
        </Container>

    );
  }
}

export default Register;
