import CameraSwitcher from './components/CameraSwitcher';

function App() {
  return (
    <div>
      <h1>Prueba de Cámara</h1>
      <CameraSwitcher />
    </div>
  );
}

export default App;

/*import React from 'react'
import { GoogleLogin, googleLogout, useGoogleLogin } from '@react-oauth/google'

export default function App() {
  const loginSuccess = (credentialResponse) => {
    console.log('Login Success:', credentialResponse)
    alert('Token JWT:\n' + credentialResponse.credential)
  }

  const loginError = () => {
    console.log('Login Failed')
    alert('Error al iniciar sesión')
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Login con Google - Demo</h1>
      <GoogleLogin
        onSuccess={loginSuccess}
        onError={loginError}
        useOneTap
      />
    </div>
  )
}*/

