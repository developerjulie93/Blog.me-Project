import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import palette from '../../lib/styles/palette';
import Button from '../common/Button';

const AuthFormBlock = styled.div`
  h3 {
    margin: 0;
    color: ${palette.gray[8]};
    margin-bottom: 1.5rem;
  }
`;

const StyledInput = styled.input`
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid ${palette.gray[5]};
  padding-bottom: 0.5rem;
  margin-bottom: 0.75rem;
  outline: none;
  width: 100%;
  &:focus {
    color: $oc-teal-7;
    border-bottom: 1px solid ${palette.gray[7]};
  }
  & + & {
    margin-top: 1rem;
  }
`;


const Footer = styled.div`
  margin-top: 2rem;
  text-align: right;
  a {
    color: ${palette.gray[6]};
    text-decoration: none;
    &:hover {
      color: ${palette.gray[9]};
    }
  }
`;


const textMap = {
  login: 'Login',
  register: 'Register'
};

const ErrorMessage = styled.div`
  color: red;
  text-align: center;
  font-size: 0.875rem;
  margin-top: 1rem;
`;

const AuthForm=({type, form, onChange, onSubmit})=>{
    const text = textMap[type];
    return(
        <AuthFormBlock>
            <h3>{text}</h3>
            <form onSubmit={onSubmit}>
                <StyledInput 
                    autoComplete="username" 
                    name="username" 
                    placeholder="Id"
                    onChange={onChange}
                    value={form.username} />
                <StyledInput
                    autoComplete="new-password"
                    name="password"
                    placeholder="Password" 
                    type="password" 
                    onChange={onChange}
                    value={form.password} />
                {type === 'register' && (
                    <StyledInput
                        autoComplete="new-password"
                        name="passwordConfirm"
                        placeholder="Confirm Password"
                        type="password"
                        onChange={onChange}
                        value={form.passwordConfirm} />
                )}
                <ErrorMessage>Error!!</ErrorMessage>
                <Button cyan fullWidth>{text}</Button>
            </form>
            <Footer>
                {type === 'login' ?(
                    <Link to="/register">Register</Link>
                ): (
                    <Link to="/login">Login</Link>
                )}
            </Footer>
        </AuthFormBlock>
    );
};

export default AuthForm;