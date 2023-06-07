// import React, { useState } from 'react'
// import style from './Landing.module.css';
// import Validation from './Validation';

// const Landing = ({login}) => {

//   const [userData, setUserData] = useState({
//     username: " ",
//     password: " "
//   })
  
//   const [errors, setErrors] = useState({
//     username:'',
//     password:''
//   })

//   const handleInputChange = (event) => {
//     setUserData({
//       ...userData, 
//       [event.target.name]: event.target.value
//     })
//     setErrors(Validation({
//       ...userData,
//       [event.target.name]: event.target.value
//     }))
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     login(userData)
//   };

//   return (
//     <div className={style.container}>

//     <form onSubmit={handleSubmit}>
//       <label htmlFor='username'>Username:</label>
//       <input type="text" name='username' value={userData.username} onChange={handleInputChange} />
//       {errors.username && <p>{errors.username}</p>}

//       <label htmlFor="password">Password:</label>
//       <input type="text" name='password' value={userData.password} onChange={handleInputChange} />
//       {errors.password && <p>{errors.password}</p>}
//       <button>LOGIN</button>
//     </form>
//     </div>
//   )
// }

// export default Landing

import style from './Landing.module.css';
import { useEffect, useState } from 'react';
import validate from './Validation';

const Landing = ({login}) => {

  const [ userData, setUserData ] = useState({
    username: '',
    password: ''
  })

  const [errors, setErrors] = useState({
    username:'',
    password:''
  })

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value
    })
    setErrors(validate({
      ...userData,
      [event.target.name]: event.target.value
    }))
  } 

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData)
  }

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        alert('Usuario: prueba@gmail.com - Contraseña: hola123');
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <div className={style.container}>
      <div className={style.imageContainer}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg" alt="rick&morty" />
      </div>
      <div className={style.formContainer}>
        <h2>WELCOME</h2>
        <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username: </label>
        <input type="text" name="username" value={userData.username} onChange={handleChange} />
        {errors.username && <p>{errors.username}</p>}

        <label htmlFor="password">Password: </label>
        <input type="password" name="password" value={userData.password} onChange={handleChange} />

        <button>LOGIN</button>
        </form>
      </div>
    </div>
  )
}

export default Landing