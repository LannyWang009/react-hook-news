import React from "react";
import useFormValidation from "./useFormValidation";
import validateLogin from './validateLogin';


const INITIAL_STATE = {
  // this is an object so that we can add different state later
  name: '',
  email: '',
  password: ''
}

function Login(props) {
  const {handleChange, 
          handleSubmit, 
          handleBlur,
          values,
          errors,
          isSubmitting
        } = useFormValidation(INITIAL_STATE, validateLogin)

  const [login, setLogin] = React.useState(true)

  return (
    <div>
      <h2 className='mv3'>
       {login ? "Login" : "Create an account"}
      </h2>
      <form onSubmit={handleSubmit}
      className='flex flex-column'>
        {!login && 
        <input 
          type='text' 
          onChange={handleChange}
          onBlur={handleBlur}
          name="name"
          value = {values.name}
          placeholder='Your Name' 
          autoComplete="off"
        />}
        <input 
          type="email" 
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
          name="email"
          placeholder="Your Email" 
          autoComplete='off'
          className={errors.email && "error-input"}
        />
        {errors.email && <p className="error-text">{errors.email}</p>}
        <input 
          name="password"
          type='password' 
          value={values.password}
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder="Choose a secure password" 
          className={errors.passord && "error-password"}
        />
        {errors.password && <p className="error-text">{errors.password }</p>}
        <div className='flex mt3'>
          <button 
            type='submit' 
            className='button pointer mr2'
            disabled={isSubmitting}
            style={{background:isSubmitting? "grey" : "orange"}}
          >
            Submit!
          </button>
          <button 
            type='button' 
            className='pointer button' 
            onClick={()=> setLogin(prevLogin => !prevLogin)}
          >
            {login? "Need to create an account? ": "Already have an account?" }
            
          </button>
        </div>
      </form>
    </div>
  )
}

export default Login;
