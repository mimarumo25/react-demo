// Login.js
import React, { useContext, useState } from 'react';
import { RequestContext } from '../router/AppRouter';

const Login = () => {
  const [email, setEmail] = useState('');
  const { setAuth } = useContext(RequestContext);

  const handleLogin = () => {
    setAuth({
      isLoggedIn: true,
      user: email,
    });
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Correo electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleLogin}>Iniciar sesión</button>
    </div>
  );
};

export default Login;
