import style from './Landing.module.css';
import { useState } from 'react';
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

  return (
    <div className={style.container}>
      <div className={style.imageContainer}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Rick_and_Morty.svg" alt="rick&morty" />
      </div>
      <div className={style.formContainer}>
        <h2>WELCOME</h2>
        <form onSubmit={handleSubmit}>
          <p>Usuario: prueba@gmail.com  Contraseña: hola123</p>
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