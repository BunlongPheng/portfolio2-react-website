import React from 'react';
import LoginForm from '../../components/Loginform';

const Login = () => {
  const input = ['Verification Code', 'Name', 'Email', 'Password'];

  return (
    <div>
      <LoginForm inputGroup={input} type="Create" />
    </div>
  );
};

export default Login;
