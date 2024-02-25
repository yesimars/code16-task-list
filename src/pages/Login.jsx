import React from 'react'

function Login({handleLogin}) {
  return (
    <>
    <h4>Yönetici Girişi</h4>
    <button 
    onClick={handleLogin}
    className='btn btn-primary'>Giriş Yap</button>
    </>
  )
}

export default Login