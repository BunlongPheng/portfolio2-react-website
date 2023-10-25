import React from 'react';

import LoginForm from '../../components/Loginform';

const Login = () => {
  const input = ['Email', 'Password'];

  return (
    <div>
      <LoginForm inputGroup={input} type="Sign In" />
    </div>
  );
};

export default Login;
